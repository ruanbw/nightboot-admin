<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts" setup>
  import { ref, computed, unref } from 'vue';
  import { BasicModal, useModalInner } from '@/components/Modal';
  import { BasicForm, useForm } from '@/components/Form';
  import { formSchema } from './goods.data';
  import { findOne, save, update } from '@/api/goods/goods';

  defineOptions({ name: 'GoodsModal' });

  const emit = defineEmits(['success', 'register']);

  const isUpdate = ref(true);
  const rowId = ref('');

  const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
    labelWidth: 100,
    baseColProps: { span: 24 },
    schemas: formSchema,
    showActionButtonGroup: false,
  });

  const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
    resetFields();
    setModalProps({ confirmLoading: false });
    isUpdate.value = !!data?.isUpdate;

    if (unref(isUpdate)) {
      const goods = await findOne(data.record.id);
      rowId.value = goods.id;
      setFieldsValue({
        ...goods,
      });
    }
  });

  const getTitle = computed(() => (!unref(isUpdate) ? '新增物品' : '编辑物品'));

  async function handleSubmit() {
    try {
      const values = await validate();
      setModalProps({ confirmLoading: true });
      const fn = isUpdate.value ? update : save;
      fn(values).then((_) => {
        closeModal();
        emit('success', { isUpdate: unref(isUpdate), values: { ...values, id: rowId.value } });
      });
    } finally {
      setModalProps({ confirmLoading: false });
    }
  }
</script>
