export interface DeptList {
  id: number;
  deptName: string;
  parentId: number;
  orderOn: number;
  status: number;
  remark: string;
  createTime: Date;
  updateTime: Date;
  children: DeptList[];
}

export interface SaveDept {
  deptName: string;
  parentId: number;
  orderOn: number;
  status: number;
  remark: string;
}

export interface UpdateDept {
  id: number;
  deptName: string;
  orderOn: number;
  status: number;
  remark: string;
}

export interface DeptInfo {
  deptName: string;
  id: string;
  orderNo: number;
  parentId: string;
  remark: string;
  status: number;
}
