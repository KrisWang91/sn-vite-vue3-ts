import request from '@/utils/request.ts'

export interface Info {
  body: any
  header: any
}

interface loginInfo {
  name: string
  pwd: string
}
export async function getToken(params: loginInfo): Promise<Info> {
  return request({
    url: '/api/getToken',
    method: 'post',
    data: params,
  })
}
