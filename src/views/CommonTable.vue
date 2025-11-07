<template>
  <div class="search-wrapper">
    <el-form label-width="70px" >
      <!--5+7+6+6 每个col占据4-->
      <el-row :gutter="10" >
        <el-col :span="5" >
          <el-form-item label="关键字">
            <el-input placeholder="请输入关键字" />
          </el-form-item>
        </el-col>
        <el-col :span="7" >
          <el-form-item label="操作时间">
            <el-date-picker
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                type="daterange"
                range-separator="至"
            />
          </el-form-item>
        </el-col>
        <!--:push=6 表示向右边移动6个栅栏-->
        <el-col :span="6" class="btn-col" :push="6">
          <div class="btn-wrapper">
            <el-button type="primary" @click="">
              <el-icon><Search /></el-icon>
              搜索
            </el-button>
            <el-button @click="">
              <el-icon><Refresh /></el-icon>
              重置
            </el-button>
          </div>
        </el-col>
      </el-row>
    </el-form>
  </div>
  <div class="table-wrapper">

  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>


  // 如果row多行 不够高度 仅改这里就行
  @search-wrapper-height:55px; // 可随意变动（有最低高度后，此高度不生效），table区域自适应

  .search-wrapper {
    height: @search-wrapper-height;
    border: 1px solid #EBEEF5;
    display: flex;
    align-items: center;


    // 处理el-row的居中问题
    .el-form {
      flex: 1;
      .el-row{
        padding: 5px 0 5px 0;
        .el-col{
          .el-form-item {
            margin: 0;
          }
        }
      }

      // 搜索按钮的列
      .btn-col {
        display: flex;
        justify-content: flex-end;
        align-items: center;

        .btn-wrapper {
          padding-right: 10px;
        }
      }
    }


  }

  .table-wrapper {
    /* 父级元素的高-search-wrapper（55+2） - 自身（10+2）- 底部稍微多余点空间 */
    height: calc(100% - (@search-wrapper-height + 2px) - 12px - 5px);
    margin-top: 10px;
    border: 1px solid #EBEEF5;
  }

</style>
