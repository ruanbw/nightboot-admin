<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts" setup>
  import { ref, computed, unref } from 'vue';
  import { BasicModal, useModalInner } from '@/components/Modal';
  import { BasicForm, useForm } from '@/components/Form';
  import { formSchema } from './dictval.data';
  import { findOneDictVal, saveDictVal, updateDictVal } from '@/api/sys/dict';
  import { SaveDictValDto, UpdateDictValDto } from '@/api/sys/model/dictModel';

  defineOptions({ name: 'DictValModal' });

  const emit = defineEmits(['success', 'register']);

  const isUpdate = ref(true);
  const rowId = ref('');

  const [registerForm, { updateSchema, resetFields, setFieldsValue, validate }] = useForm({
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
      const goods = await findOneDictVal({ id: data.record.id });
      setFieldsValue({
        ...goods,
      });
    } else {
      setFieldsValue({
        dictId: data.dictId,
      });
    }

    updateSchema({
      field: 'parentId',
      componentProps: {
        options: data.list,
      },
    });
  });

  const getTitle = computed(() => (!unref(isUpdate) ? '新增字典' : '编辑字典'));

  async function handleSubmit() {
    try {
      const values = await validate<SaveDictValDto & UpdateDictValDto>();
      setModalProps({ confirmLoading: true });
      const fn = isUpdate.value ? updateDictVal : saveDictVal;

      fn(values).then((_) => {
        closeModal();
        emit('success', { isUpdate: unref(isUpdate), values: { ...values, id: rowId.value } });
      });
    } finally {
      setModalProps({ confirmLoading: false });
    }
  }
</script>
