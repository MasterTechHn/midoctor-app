import { Exception } from './exception';

export interface Agenda {
  id?: string
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
  place: {
    name: string,
    address: string,
    phone?: number
  },
  exceptions: Exception[]
}