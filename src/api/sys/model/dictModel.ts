export interface DictValListVo {
  children: DictValListVo[];
  dictId: string;
  dictKey: string;
  dictVal: string;
  id: string;
  orderNo: number;
  parentId: string;
  remark: string;
}

export interface SaveDictValDto {
  dictId: string;
  dictKey: string;
  dictVal: string;
  orderNo: number;
  parentId: string;
  remark: string;
}

export interface UpdateDictValDto {
  id: string;
  dictId: string;
  dictKey: string;
  dictVal: string;
  orderNo: number;
  parentId: string;
  remark: string;
}

export interface DictValInfoVo {
  id: string;
  dictId: string;
  dictKey: string;
  dictVal: string;
  orderNo: number;
  parentId: string;
  remark: string;
}

export interface DictPageDto {
  dictName: string;
}

export interface DictValPageDto {
  dictId: string;
  dictKey: string;
}

export interface DictListVo {
  children: DictValListVo[];
  dictName: string;
  dictType: string;
  id: string;
  remark: string;
  status: number;
}

export interface SaveDictDto {
  dictName: string;
  dictType: string;
  remark: string;
}

export interface UpdateDictDto {
  id: string;
  dictName: string;
  dictType: string;
  remark: string;
}

export interface DictInfoVo {
  id: string;
  dictName: string;
  dictType: string;
  remark: string;
  status: number;
}
