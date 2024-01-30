import { defHttp } from '@/utils/http/axios';

import { RoleInfoVo, RoleList, RolePageDto, SaveRoleDto, UpdateRoleDto } from './model/RoleModel';

const restfulApi = '/role';
const restfulApisetRoleStatus = '/role/setRoleStatus';

// 部门列表
export function getRoleList(params?: RolePageDto) {
  return defHttp.get<RoleList>({ url: restfulApi, params });
}

// 添加部门
export function saveRole(data: SaveRoleDto) {
  return defHttp.post<void>({ url: restfulApi, data });
}

// 更新部门
export function updateRole(data: UpdateRoleDto) {
  return defHttp.put<void>({ url: restfulApi, data });
}

// 删除部门
export function delRole(params: { id: number }) {
  return defHttp.delete<void>({ url: restfulApi + `/${params.id}` });
}

// 修改角色状态
export function setRoleStatus(data: { id: string; status: number }) {
  return defHttp.put<void>({ url: restfulApisetRoleStatus, data });
}

// 根据id查询角色信息
export function findOneRole(id: string) {
  return defHttp.get<RoleInfoVo>({ url: restfulApi + `/${id}` });
}
