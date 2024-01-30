import { BasicColumn, FormSchema } from '@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';

const statusList = [
  {
    lable: '正常',
    value: 0,
  },
  {
    lable: '审核',
    value: 1,
  },
  {
    lable: '下架',
    value: 2,
  },
  {
    lable: '卖出',
    value: 3,
  },
];

export const columns: BasicColumn[] = [
  {
    title: '字典名称',
    dataIndex: 'dictName',
    width: 120,
    align: 'left',
  },
  {
    title: '字典类型',
    dataIndex: 'dictType',
    width: 120,
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 80,
    customRender: ({ record }) => {
      const status = record.status;
      return h(Tag, () => statusList.find((item) => item.value === status)?.lable);
    },
  },
  {
    title: '备注',
    dataIndex: 'remark',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'dictName',
    label: '字典名称',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'id',
    label: '字典id',
    component: 'Input',
    show: false,
  },
  {
    field: 'dictName',
    label: '字典名称',
    component: 'Input',
    required: true,
  },
  {
    field: 'dictType',
    label: '字典类型',
    component: 'Input',
    required: true,
  },
  {
    field: 'remark',
    label: '描述',
    component: 'InputTextArea',
    required: true,
  },
];
