export interface Appoitnment {
  _id?: string,
  state: string,
  day: string,
  startTime: string,
  endTime: string,
  date: string,
  description: string,
  diagnostic?: string,
  user?: string,
  agenda?: string,
  doctor?: string
}
