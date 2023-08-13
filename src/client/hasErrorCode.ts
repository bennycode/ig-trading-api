import {AxiosError} from 'axios';

export function hasErrorCode(error: AxiosError<unknown, unknown>): error is AxiosError<{errorCode: string}, unknown> {
  const data = error.response?.data;
  if (data && typeof data === 'object' && 'errorCode' in data) {
    return true;
  }
  return false;
}
