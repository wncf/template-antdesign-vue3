<template>
  <a-card style="height: 100%">
    <div class="example">
      <a-input />
    </div>
    <div class="example">
      <a-tabs>
        <a-tab-pane key="1" tab="Tab 1">Content of Tab Pane 1</a-tab-pane>
        <a-tab-pane key="2" tab="Tab 2">Content of Tab Pane 2</a-tab-pane>
        <a-tab-pane key="3" tab="Tab 3">Content of Tab Pane 3</a-tab-pane>
      </a-tabs>
    </div>
    <div class="example">
      <a-input-search allow-clear />
    </div>
    <div class="example">
      <a-textarea allow-clear />
    </div>
    <div class="example">
      <a-select style="width: 100px" placeholder="select value" :options="[{ value: 'demo' }]" />
    </div>
    <div class="example">
      <a-datePicker />
    </div>
    <div class="example">
      <a-range-picker />
    </div>
    <div class="example">
      <a-button>Button</a-button>
    </div>
    <div class="example">
      <a-card title="Card">
        <a-table :columns="columns" :data-source="dataSource" />
      </a-card>
    </div>
  </a-card>
</template>
<script setup>
const columns = [
  { title: "Name", dataIndex: "name" },
  { title: "Age", dataIndex: "age" },
];
const dataSource = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
  },
];
</script>
