import { BasicColumn, FormSchema } from '@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '用户名',
    dataIndex: 'username',
    width: 120,
  },
  {
    title: '昵称',
    dataIndex: 'nickName',
    width: 120,
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    width: 120,
  },

  {
    title: '所属部门',
    dataIndex: 'deptName',
  },
  {
    title: '备注',
    dataIndex: 'remark',
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'username',
    label: '用户名',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'nickName',
    label: '昵称',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'email',
    label: '邮箱',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'status',
    label: '状态',
    component: 'Select',
    colProps: { span: 8 },
    componentProps: {
      options: [
        { label: '启用', value: 0 },
        { label: '禁用', value: 1 },
      ],
    },
  },
];

export const accountFormSchema: FormSchema[] = [
  {
    field: 'id',
    label: '用户ID',
    component: 'Input',
    show: false,
  },
  {
    field: 'username',
    label: '用户名',
    component: 'Input',
    required: true,
    rules: [
      {
        required: true,
        message: '请输入用户名',
        trigger: 'blur',
      },
    ],
  },
  {
    field: 'password',
    label: '密码',
    component: 'InputPassword',
    required: true,
    rules: [
      {
        required: true,
        message: '请输入密码',
        trigger: 'blur',
      },
    ],
  },
  {
    field: 'nickName',
    label: '昵称',
    component: 'Input',
    required: true,
    rules: [
      {
        required: true,
        message: '请输入昵称',
        trigger: 'blur',
      },
    ],
  },
  {
    field: 'roleIds',
    label: '角色',
    component: 'Select',
    required: true,
    show: true,
    rules: [
      {
        required: true,
        message: '请选择角色',
        trigger: 'blur',
      },
    ],
    componentProps: {
      mode: 'multiple',
    },
  },
  {
    field: 'email',
    label: '邮箱',
    component: 'Input',
    required: true,
    rules: [
      {
        type: 'email',
        required: true,
        message: '请输入邮箱',
        trigger: 'blur',
      },
    ],
  },
  {
    field: 'deptId',
    label: '部门',
    component: 'TreeSelect',
    componentProps: {
      fieldNames: {
        label: 'deptName',
        key: 'id',
        value: 'id',
      },
      getPopupContainer: () => document.body,
    },
    required: true,
    rules: [
      {
        required: true,
        message: '请选择部门',
        trigger: 'blur',
      },
    ],
  },
  {
    field: 'remark',
    label: '备注',
    component: 'Input',
  },
];
