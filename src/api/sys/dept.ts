import { defHttp } from '@/utils/http/axios';

import { DeptInfo, DeptList, SaveDept, UpdateDept } from './model/deptModel';

const restfulApi = '/dept';

// 部门列表
export function findAllDept(params?: any) {
  return defHttp.get<DeptList>({ url: restfulApi, params });
}

// 添加部门
export function saveDept(data: SaveDept) {
  return defHttp.post<void>({ url: restfulApi, data });
}

// 更新部门
export function updateDept(data: UpdateDept) {
  return defHttp.put<void>({ url: restfulApi, data });
}

// 删除部门
export function delDept(params: { id: number }) {
  return defHttp.delete<void>({ url: restfulApi + `/${params.id}` });
}

// 根据部门ID查询部门信息
export function findOneDept(params: { id: number }) {
  return defHttp.get<DeptInfo>({ url: restfulApi + `/${params.id}` });
}
