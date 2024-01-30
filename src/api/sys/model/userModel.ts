import { RoleInfoVo } from './RoleModel';

export interface LoginParams {
  username: string;
  password: string;
}

export interface LoginResultModel {
  token: string;
}

/**
 * @description: Get user information return value
 */
export interface GetUserInfoModel {
  roles: RoleInfoVo[];
  // 用户id
  userId: string | number;
  // 用户名
  username: string;
  // 真实名字
  nickName: string;
  // 头像
  avatar: string;
  // 介绍
  desc?: string;
}

export interface SaveUser {
  username: string;
  password: string;
  nickName: string;
}

export interface UpdateUser {
  id: string;
  nickName: string;
}

export interface UserPageDto {
  username: string;
  nickName: string;
  status: number;
  email: string;
  deptId: string;
}
