export interface RolePageDto {
  roleName: string;
  status: number;
}

export interface RoleList {
  createBy: string;
  createTime: string;
  id: string;
  orderNo: number;
  remark: string;
  roleName: string;
  roleValue: string;
  status: number;
  updateBy: string;
  updateTime: string;
}

export interface SaveRoleDto {
  orderNo: number;
  remark: string;
  roleName: string;
  roleValue: string;
}

export interface UpdateRoleDto {
  id: string;
  roleName: string;
  roleValue: string;
  orderNo: number;
  remark: string;
}

export interface RoleInfoVo {
  id: string;
  roleName: string;
  roleValue: string;
  orderNo: number;
  remark: string;
}
