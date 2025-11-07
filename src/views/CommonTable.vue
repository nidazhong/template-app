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
      <!--&lt;!&ndash;5+7+6+6 每个col占据4&ndash;&gt;-->
      <!--<el-row :gutter="10" >-->
      <!--  <el-col :span="5" >-->
      <!--    <el-form-item label="关键字">-->
      <!--      <el-input placeholder="请输入关键字" />-->
      <!--    </el-form-item>-->
      <!--  </el-col>-->
      <!--  <el-col :span="7" >-->
      <!--    <el-form-item label="操作时间">-->
      <!--      <el-date-picker-->
      <!--          start-placeholder="开始日期"-->
      <!--          end-placeholder="结束日期"-->
      <!--          type="daterange"-->
      <!--          range-separator="至"-->
      <!--      />-->
      <!--    </el-form-item>-->
      <!--  </el-col>-->
      <!--  &lt;!&ndash;:push=6 表示向右边移动6个栅栏&ndash;&gt;-->
      <!--  <el-col :span="6" class="btn-col" :push="6">-->
      <!--    <div class="btn-wrapper">-->
      <!--      <el-button type="primary" @click="">-->
      <!--        <el-icon><Search /></el-icon>-->
      <!--        搜索-->
      <!--      </el-button>-->
      <!--      <el-button @click="">-->
      <!--        <el-icon><Refresh /></el-icon>-->
      <!--        重置-->
      <!--      </el-button>-->
      <!--    </div>-->
      <!--  </el-col>-->
      <!--</el-row>-->
    </el-form>
  </div>
  <div class="table-wrapper">

  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>

  @search-wrapper-height:55px; // 可随意变动（有最低高度后，此高度不生效），table区域自适应



  .search-wrapper {
    min-height: 55px; // 最低高度
    height: @search-wrapper-height;
    border: 1px solid #EBEEF5;
    //display: flex; // flex会破坏栅格


    // 处理el-row的居中问题
    // el-form 和 el-row 必须要有高度！否则无法垂直居中 !!!
    .el-form {
      height: 100%;
      .el-row{
        //margin: -10px 0 -10px 0;
        height: 100%;
        align-items: center; // 内元素垂直居中
        .el-col{
          height: 30px;
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
