import nock from "nock";
import { APIClient } from "../APIClient";
import { MarketAPI } from "./MarketAPI";

describe("MarketAPI", () => {
  describe("searchMarkets", () => {
    it("returns all markets matching the search term", async () => {
      nock(APIClient.URL_DEMO)
        .get(MarketAPI.URL.MARKETS)
        .query({ searchTerm: "PFE" })
        .reply(
          200,
          JSON.stringify({
            markets: [
              {
                bid: null,
                delayTime: 0,
                epic: "SE.D.PFE.CASH.IP",
                expiry: "-",
                high: 40.49,
                instrumentName: "Pfizer Inc (All Sessions)",
                instrumentType: "SHARES",
                low: 38.24,
                marketStatus: "EDITS_ONLY",
                netChange: 0.18,
                offer: null,
                percentageChange: 0.45,
                scalingFactor: 100,
                streamingPricesAvailable: false,
                updateTime: "22:59:58",
                updateTimeUTC: "21:59:58"
              },
              {
                bid: null,
                delayTime: 0,
                epic: "SI.D.PFNXUS.CASH.IP",
                expiry: "-",
                high: null,
                instrumentName: "Pfenex Inc",
                instrumentType: "SHARES",
                low: null,
                marketStatus: "CLOSED",
                netChange: 0,
                offer: null,
                percentageChange: 0,
                scalingFactor: 100,
                streamingPricesAvailable: false,
                updateTime: "15:30:00",
                updateTimeUTC: "14:30:00"
              },
              {
                bid: null,
                delayTime: 0,
                epic: "ED.D.PFVGY.CASH.IP",
                expiry: "-",
                high: 157,
                instrumentName: "Pfeiffer Vacuum Technology AG",
                instrumentType: "SHARES",
                low: 152.4,
                marketStatus: "EDITS_ONLY",
                netChange: 2.6,
                offer: null,
                percentageChange: 1.69,
                scalingFactor: 100,
                streamingPricesAvailable: false,
                updateTime: "17:30:00",
                updateTimeUTC: "16:30:00"
              }
            ]
          })
        );

      const marketSearch = await global.client.rest.market.searchMarkets("PFE");
      expect(marketSearch.markets.length).toBe(3);
      expect(marketSearch.markets[0].epic).toBe("SE.D.PFE.CASH.IP");
      expect(marketSearch.markets[2].updateTimeUTC).toBe("16:30:00");
    });
  });

  describe("getMarketCategories", () => {
    it("returns all top-level nodes (market categories) in the market navigation hierarchy", async () => {
      nock(APIClient.URL_DEMO)
        .get(MarketAPI.URL.MARKETNAVIGATION)
        .query(true)
        .reply(
          200,
          JSON.stringify({
              nodes: [
                { id: "118179919", name: "Shares - NZX (New Zealand)" },
                { id: "88877247", name: "Shares - Euronext Dublin (Ireland)" },
                { id: "404243", name: "IPOs" },
                { id: "186563295", name: "Weekend Markets" }
              ],
              markets: null
            }
          )
        );

      const marketCategories = await global.client.rest.market.getMarketCategories();
      const marketNodes = marketCategories.nodes!;
      expect(marketNodes.length).toBe(4);
      expect(marketNodes[marketNodes.length - 1].name).toBe("Weekend Markets");
    });

    it("returns all sub-nodes of the given node in the market navigation hierarchy", async () => {
      const nodeId = '138425500';

      nock(APIClient.URL_DEMO)
        .get(`${MarketAPI.URL.MARKETNAVIGATION}/${nodeId}`)
        .reply(
          200,
          JSON.stringify({
            "nodes": null,
            "markets": [{
              "delayTime": 0,
              "epic": "EZ.D.WEWGREY.Month2.IP",
              "netChange": 0.0,
              "lotSize": 10,
              "expiry": "DEC-20",
              "instrumentType": "SHARES",
              "instrumentName": "WeWork IPO Market Cap ($Bn)",
              "high": 15.0,
              "low": 14.0,
              "percentageChange": 0.0,
              "updateTime": "-3600000",
              "updateTimeUTC": "00:00:00",
              "bid": null,
              "offer": null,
              "otcTradeable": true,
              "streamingPricesAvailable": true,
              "marketStatus": "TRADEABLE",
              "scalingFactor": 1
            }]
          })
        );

      const marketCategories = await global.client.rest.market.getMarketCategories(nodeId);
      expect(marketCategories.nodes).toBeNull();
      expect(marketCategories.markets![0].marketStatus).toBe("TRADEABLE");
    });
  });
});
