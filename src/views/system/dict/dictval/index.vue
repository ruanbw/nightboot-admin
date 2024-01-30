<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="goBack"> 返回 </a-button>
        <a-button type="primary" @click="handleCreate"> 新增键值 </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'clarity:note-edit-line',
                onClick: handleEdit.bind(null, record),
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record),
                },
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <DictValModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts" setup>
  import { BasicTable, useTable, TableAction } from '@/components/Table';
  import { findDictValAll, delDictVal } from '@/api/sys/dict';
  import { useModal } from '@/components/Modal';
  import DictValModal from './DictValModal.vue';
  import { useRoute } from 'vue-router';
  import { useGo } from '@/hooks/web/usePage';
  import { columns, searchFormSchema } from './dictval.data';
  import { ref } from 'vue';

  defineOptions({ name: 'DictValManagement' });
  const route = useRoute();
  const go = useGo();
  // 此处可以得到用户ID
  const dictId = ref(route.params?.id);

  const [registerModal, { openModal }] = useModal();
  const [registerTable, { getDataSource, reload }] = useTable({
    title: '字典列表',
    api: findDictValAll,
    columns,
    formConfig: {
      labelWidth: 120,
      schemas: searchFormSchema,
    },
    beforeFetch,
    striped: false,
    useSearchForm: true,
    showTableSetting: true,
    bordered: true,
    showIndexColumn: false,
    canResize: false,
    actionColumn: {
      width: 80,
      title: '操作',
      dataIndex: 'action',
      // slots: { customRender: 'action' },
      fixed: undefined,
    },
  });

  function handleCreate() {
    openModal(true, {
      dictId,
      list: getDataSource(),
      isUpdate: false,
    });
  }

  function handleEdit(record: Recordable) {
    openModal(true, {
      list: getDataSource(),
      record,
      isUpdate: true,
    });
  }

  function handleDelete(record: Recordable) {
    const { id } = record;
    delDictVal({ id }).then((_) => {
      reload();
    });
  }

  function handleSuccess() {
    reload();
  }

  function beforeFetch(data) {
    return { ...data, dictId: dictId.value };
  }

  function goBack() {
    go('/system/dict/index');
  }
</script>
