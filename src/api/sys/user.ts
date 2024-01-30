import { defHttp } from '@/utils/http/axios';
import {
  LoginParams,
  LoginResultModel,
  GetUserInfoModel,
  SaveUser,
  UserPageDto,
} from './model/userModel';

enum Api {
  Login = '/login',
  Logout = '/logout',
  GetUserInfo = '/getUserInfo',
}

const restfulApi = '/user';

// 登录
export function loginApi(params: LoginParams) {
  return defHttp.post<LoginResultModel>(
    {
      url: Api.Login,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}

// 查询所有用户
export function getAccountList(params?: UserPageDto) {
  return defHttp.get({ url: restfulApi, params });
}

// 查询用户信息
export function getUserDetail() {
  return defHttp.get<GetUserInfoModel>({ url: Api.GetUserInfo }, { errorMessageMode: 'none' });
}

// 查询用户名下权限编码
export function getPermCode() {
  return defHttp.get({ url: Api.GetUserInfo });
}

// 登出
export function doLogout() {
  return defHttp.get({ url: Api.Logout });
}

// 添加用户
export function saveUser(data: SaveUser) {
  return defHttp.post({ url: restfulApi, data });
}

// 查询用户
export function findOneUser(id: string) {
  return defHttp.get<GetUserInfoModel>({ url: restfulApi + `/${id}` });
}

// 更新用户
export function updateUser(data: SaveUser) {
  return defHttp.put({ url: restfulApi, data });
}

// 删除用户
export function delUser(params: { id: string }) {
  return defHttp.delete({ url: restfulApi + `/${params.id}` });
}
