export type getMenuListVo = MenuListVo[];

export interface MenuPageDto {
  menuName: string;
  status: number;
}

export interface SaveMenuDto {
  component: string;
  currentActiveMenu: string;
  hidden: number;
  hideBreadcrumb: number;
  hideChildrenInMenu: number;
  hideMenu: number;
  icon: string;
  isExt: number;
  isShow: number;
  keepAlive: number;
  menuName: string;
  meta: Meta;
  orderNo: number;
  parentId: string;
  path: string;
  permission: string;
  redirect: string;
  remark: string;
  status: number;
  title: string;
  type: number;
}

export interface UpdateMenuDto {
  component: string;
  currentActiveMenu: string;
  hidden: number;
  hideBreadcrumb: number;
  hideChildrenInMenu: number;
  hideMenu: number;
  icon: string;
  id: string;
  isExt: number;
  isShow: number;
  keepAlive: number;
  menuName: string;
  meta: Meta;
  orderNo: number;
  parentId: string;
  path: string;
  permission: string;
  redirect: string;
  remark: string;
  status: number;
  title: string;
  type: number;
}

export interface MenuInfoVo {
  component: string;
  currentActiveMenu: string;
  hidden: number;
  hideBreadcrumb: number;
  hideChildrenInMenu: number;
  hideMenu: number;
  icon: string;
  id: string;
  isExt: number;
  isShow: number;
  keepAlive: number;
  menuName: string;
  meta: Meta;
  orderNo: number;
  parentId: string;
  path: string;
  permission: string;
  redirect: string;
  remark: string;
  status: number;
  title: string;
  type: number;
}

export interface Meta {
  affix: number;
  carryParam: number;
  currentActiveMenu: string;
  dynamicLevel: number;
  frameSrc: string;
  hideBreadcrumb: number;
  hideChildrenInMenu: number;
  hideMenu: number;
  hidePathForChildren: number;
  hideTab: number;
  icon: string;
  ignoreAuth: number;
  ignoreKeepAlive: number;
  ignoreRoute: number;
  orderNo: number;
  realPath: string;
  roles: any[];
  title: string;
  transitionName: string;
}

export interface MenuListVo {
  children: MenuListVo[];
  component: string;
  currentActiveMenu: string;
  hidden: number;
  hideBreadcrumb: number;
  hideChildrenInMenu: number;
  hideMenu: number;
  icon: string;
  id: string;
  isExt: number;
  isShow: number;
  keepAlive: number;
  menuName: string;
  meta: Meta;
  orderNo: number;
  parentId: string;
  path: string;
  permission: string;
  redirect: string;
  remark: string;
  status: number;
  title: string;
  type: number;
}
