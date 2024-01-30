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
    title: '所属用户',
    dataIndex: 'username',
    width: 120,
    align: 'left',
  },
  {
    title: '物品名称',
    dataIndex: 'title',
    width: 120,
  },
  {
    title: '价格',
    dataIndex: 'price',
    width: 50,
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
    title: '创建时间',
    dataIndex: 'createTime',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'username',
    label: '所属用户',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'title',
    label: '物品名称',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'status',
    label: '物品状态',
    component: 'Select',
    colProps: { span: 8 },
    componentProps: {
      options: [...statusList],
    },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'id',
    label: '商品id',
    component: 'Input',
    show: false,
  },
  {
    field: 'userId',
    label: '所属用户',
    component: 'Select',
    required: true,
    ifShow: false,
  },
  {
    field: 'title',
    label: '物品名称',
    component: 'Input',
    required: true,
  },
  {
    field: 'price',
    label: '价格',
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'remark',
    label: '描述',
    component: 'InputTextArea',
    required: true,
  },
];
