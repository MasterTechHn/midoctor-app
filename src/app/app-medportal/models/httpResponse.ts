export interface HttpResponse {
  success: boolean,
  count: number,
  data: any[]
}

export interface HttpResponseError {
  success: boolean,
  message: string,
  request: {
    type: string,
    catch: string
  }
}
