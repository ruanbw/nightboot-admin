import { defHttp } from '@/utils/http/axios';
import {
  MenuInfoVo,
  MenuPageDto,
  SaveMenuDto,
  UpdateMenuDto,
  getMenuListVo,
} from './model/menuModel';

const restfulApi = '/menu';

// 查询用户所属菜单列表
export const getMenuList = () => {
  return defHttp.get<getMenuListVo>({ url: restfulApi + '/getMenuList' });
};

// 查询菜单列表
export const findAllMenu = (params?: MenuPageDto) => {
  return defHttp.get<getMenuListVo>({ url: restfulApi, params });
};

// 查询菜单信息
export const findOneMenu = (params: { id: string }) => {
  return defHttp.get<MenuInfoVo>({ url: `${restfulApi}/${params.id}` });
};

// 添加菜单
export const saveMenu = (params: SaveMenuDto) => {
  return defHttp.post<void>({ url: restfulApi, params });
};

// 添加菜单
export const updateMenu = (params: UpdateMenuDto) => {
  return defHttp.put<void>({ url: restfulApi, params });
};

// 删除菜单
export const delMenu = (params: { id: string }) => {
  return defHttp.delete<void>({ url: `${restfulApi}/${params.id}` });
};
