import { defHttp } from '@/utils/http/axios';

import {
  DictInfoVo,
  DictListVo,
  DictPageDto,
  DictValInfoVo,
  DictValListVo,
  DictValPageDto,
  SaveDictDto,
  SaveDictValDto,
  UpdateDictDto,
  UpdateDictValDto,
} from './model/dictModel';

const restfulApi = '/dict';

// 字典类型列表
export function findAllDict(params?: DictPageDto) {
  return defHttp.get<DictListVo>({ url: restfulApi, params });
}

// 添加字典类型
export function saveDict(data: SaveDictDto) {
  return defHttp.post<void>({ url: restfulApi, data });
}

// 更新字典类型
export function updateDict(data: UpdateDictDto) {
  return defHttp.put<void>({ url: restfulApi, data });
}

// 删除字典类型
export function delDict(params: { id: number }) {
  return defHttp.delete<void>({ url: restfulApi + `/${params.id}` });
}

// 根据字典类型ID查询字典类型信息
export function findOneDict(params: { id: number }) {
  return defHttp.get<DictInfoVo>({ url: restfulApi + `/${params.id}` });
}

// 字典列表
export function findAllDictVal(params?: DictValPageDto) {
  return defHttp.get<DictValListVo>({ url: restfulApi + '/dictval', params });
}

// 添加字典
export function saveDictVal(data: SaveDictValDto) {
  return defHttp.post<SaveDictValDto>({ url: restfulApi + '/dictval', data });
}

// 更新字典
export function updateDictVal(data: UpdateDictValDto) {
  return defHttp.put<void>({ url: restfulApi + '/dictval', data });
}

// 删除字典
export function delDictVal(params: { id: number }) {
  return defHttp.delete<void>({ url: restfulApi + `/dictval/${params.id}` });
}

// 根据字典ID查询字典信息
export function findOneDictVal(params: { id: number }) {
  return defHttp.get<DictValInfoVo>({ url: restfulApi + `/dictval/${params.id}` });
}

// 查询所有字典类型及其子项
export function dictValAll() {
  return defHttp.get<DictListVo>({ url: restfulApi + `/dictval/all` });
}
