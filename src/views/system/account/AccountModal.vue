<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts" setup>
  import { ref, computed, unref } from 'vue';
  import { BasicModal, useModalInner } from '@/components/Modal';
  import { BasicForm, useForm } from '@/components/Form';
  import { accountFormSchema } from './account.data';
  import { findAllDept } from '@/api/sys/dept';
  import { getRoleList } from '@/api/sys/role';
  import { saveUser, updateUser, findOneUser } from '@/api/sys/user';
  import { SaveUser, UpdateUser } from '@/api/sys/model/userModel';

  defineOptions({ name: 'AccountModal' });

  const emit = defineEmits(['success', 'register']);

  const isUpdate = ref(true);

  const [registerForm, { setFieldsValue, updateSchema, resetFields, validate }] = useForm({
    labelWidth: 100,
    baseColProps: { span: 24 },
    schemas: accountFormSchema,
    showActionButtonGroup: false,
    actionColOptions: {
      span: 23,
    },
  });

  const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
    resetFields();
    setModalProps({ confirmLoading: false });
    isUpdate.value = !!data?.isUpdate;

    if (unref(isUpdate)) {
      const user = await findOneUser(data.record.id);
      const roleIds = user.roles.map((role) => role.id);
      setFieldsValue({
        ...user,
        roleIds,
      });
    }

    const treeData = await findAllDept();

    const roleData = (await getRoleList({ pageNum: 1, pageSize: 999 } as any)) as any;

    updateSchema([
      {
        field: 'password',
        show: !unref(isUpdate),
      },
      {
        field: 'username',
        show: !unref(isUpdate),
      },
      {
        field: 'deptId',
        componentProps: { treeData },
      },
      {
        field: 'roleIds',
        componentProps: {
          options: roleData.records,
          fieldNames: { label: 'roleName', value: 'id' },
        },
      },
    ]);
  });

  const getTitle = computed(() => (!unref(isUpdate) ? '新增账号' : '编辑账号'));

  async function handleSubmit() {
    try {
      const values = await validate<SaveUser & UpdateUser>();
      setModalProps({ confirmLoading: true });
      const fn = isUpdate.value ? updateUser : saveUser;
      fn(values).then((_) => {
        closeModal();
        emit('success');
      });
    } finally {
      setModalProps({ confirmLoading: false });
    }
  }
</script>
