<template>
    <section>
    <el-row>
      <el-col :span="21" :offset="3" class="content-view">
        <!--表格-->
        <el-table
          border
          style="width: 100%">
          <el-table-column type="selection">
          </el-table-column>
          <el-table-column
            label="项目名称"
            width="200">
          </el-table-column>
          <el-table-column
            label="项目成员"
            >
          </el-table-column>
          <el-table-column
            label="指导老师"
            width="180">
          </el-table-column>
          <el-table-column label="操作">
            <template >
              <el-button type="primary" size="small" >管理</el-button>
              <el-button type="danger" size="small" >删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="block">
          <el-pagination
            layout="prev, pager, next, jumper"
            :total="1000">
          </el-pagination>
        </div>
      </el-col>
    </el-row>
     <el-dialog  size="tiny">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="项目名称">
          <el-input v-model="form.projectName">123</el-input>
        </el-form-item>
        <el-form-item label="项目成员">
          <el-input v-model="form.projectMember" style="width: 100%;">312124</el-input>
        </el-form-item>
        <el-form-item label="指导老师">
          <el-date-picker v-model="form.projectTeacher" >12412414</el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">修改</el-button>
          <el-button type="danger">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </section>
</template>

<script>
export default {
  data() {
    return {
      form:{
        projectName:'111',
        projectMember:'123,12312,123',
        projectTeacher:'hasdd'
      },
      tableData:[]
    }
  }
}
</script>

<style>
.el-pagination {
    text-align: center;
    margin-top: 30px;
  }
  .el-message-box__btns .cancel {
    float: right;
    margin-left: 10px;
  }
 
</style>