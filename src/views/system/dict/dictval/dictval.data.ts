import { BasicColumn, FormSchema } from '@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '键',
    dataIndex: 'dictKey',
    width: 120,
    align: 'left',
  },
  {
    title: '值',
    dataIndex: 'dictVal',
    width: 120,
  },
  {
    title: '排序',
    dataIndex: 'orderNo',
    width: 180,
  },
  {
    title: '备注',
    dataIndex: 'remark',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'dictKey',
    label: '键名',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'id',
    label: '字典类型id',
    component: 'Input',
    show: false,
  },
  {
    field: 'parentId',
    label: '上级',
    component: 'Select',
    componentProps: {
      fieldNames: {
        label: 'dictKey',
        value: 'id',
      },
    },
  },
  {
    field: 'dictId',
    label: '字典id',
    component: 'Input',
    required: true,
    show: false,
  },
  {
    field: 'dictKey',
    label: '键',
    component: 'Input',
    required: true,
  },
  {
    field: 'dictVal',
    label: '值',
    component: 'Input',
    required: true,
  },
  {
    field: 'orderNo',
    label: '排序',
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'remark',
    label: '描述',
    component: 'InputTextArea',
  },
];
