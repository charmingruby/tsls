import { Response } from '@/helpers/response'
import { APIGatewayProxyEventV2 } from 'aws-lambda'

export async function handler(_event: APIGatewayProxyEventV2) {
  const res = {
    message: 'Hello',
  }

  return Response.okResponse('Endpoint hit', res)
}
