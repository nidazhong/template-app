<template>
  <div class="table-area">
    <!-- 使用 SimpleBar 包裹 el-table -->
    <div class="simplebar-container" data-simplebar>
      <el-table
          stripe
          :data="tableData"
      >
        <el-table-column fixed prop="date" label="Date" width="150" />
        <el-table-column prop="name" label="Name" width="120" />
        <el-table-column prop="state" label="State" width="120" />
        <el-table-column prop="city" label="City" width="320" />
        <el-table-column prop="address" label="Address" width="600" />
        <el-table-column prop="zip" label="Zip" />
      </el-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';
import SimpleBar from 'simplebar';

// 假设表格数据
const tableData = ref([
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036'
  },
  ...Array.from({ length: 200 }, (_, index) => ({
    date: `2016-05-${String(index + 1).padStart(2, '0')}`,
    name: `User${index + 1}`,
    state: 'California',
    city: 'Los Angeles',
    address: `No. ${index + 1}, Grove St, Los Angeles`,
    zip: 'CA 90036'
  }))
]);

onMounted(() => {
  // 初始化 SimpleBar
  nextTick(() => {
    const element = document.querySelector('.simplebar-container');
    if (element) {
      new SimpleBar(element as HTMLElement);
    }
  });
});
</script>

<style scoped>
/*.simplebar-container {*/
/*  max-height: 400px; !* 设置容器的最大高度 *!*/
/*  height: 400px;     !* 确保容器有明确的高度 *!*/
/*}*/

.el-table {
  /* 确保表格能触发滚动 */
  height: 100%;
}
</style>
