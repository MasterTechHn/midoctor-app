import { Exception } from './exception';

export interface Agenda {
  _id?: string
  alias: string,
  price: number,
  doctor: string,
  intervalTime: number,
  m: number[],
  t: number[],
  w: number[],
  r: number[],
  f: number[],
  s: number[],
  u: number[],
  consultingRoomValidate: boolean,
  consultingRoom: {
    name: string,
    address: string,
    phone?: number
  },
  exceptions: Exception[]
}

export interface AgendaHttpResponse {
  success: boolean,
  count: number,
  data: Agenda[]
}

export interface HttpResponseError {
  success: boolean,
  message: string,
  request: {
    type: string,
    catch: string
  }
}