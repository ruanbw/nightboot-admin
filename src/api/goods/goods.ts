import { defHttp } from '@/utils/http/axios';

const restfulApi = '/goods';

export function findAll(params?: any) {
  return defHttp.get<void>({ url: restfulApi, params });
}

export function findOne(id: string) {
  return defHttp.get<void>({ url: restfulApi + `/${id}` });
}

export function save(data: any) {
  return defHttp.post<void>({ url: restfulApi, data });
}

export function update(data: any) {
  return defHttp.put<void>({ url: restfulApi, data });
}

export function del(id: string) {
  return defHttp.delete<void>({ url: restfulApi + `/${id}` });
}
