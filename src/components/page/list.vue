<template>
  <div>
    <el-card class="box-card">
      <el-button type="success" @click="add">添加</el-button>
       <el-dialog title="添加" :visible.sync="dialogFormVisibleAble">
     <el-form :model="form">
    <el-form-item label="账号" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
     <el-form-item label="姓名" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
     <el-form-item label="密码" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
     <el-form-item label="昵称" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
     <el-form-item label="角色" :label-width="formLabelWidth">
     <el-select v-model="valueitem" placeholder="请选择"  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
    </el-form-item>
     <el-form-item label="是否显示" :label-width="formLabelWidth">
       <div class="fsdgsdge">
     <template>
     <el-switch class="dsfsdf"
  v-model="valuestyfds"
  active-color="#13ce66"
  inactive-color="#ff4949">
</el-switch>
   </template>
  </div>
    </el-form-item>
     <el-form-item label="超级管理" :label-width="formLabelWidth">
      <div class="fsdgsdge">
     <template>
     <el-switch class="dsfsdf"
      v-model="valuesty"
       active-color="#13ce66"
      inactive-color="#ff4949">
    </el-switch>
   </template>
  </div>
    </el-form-item>
     <el-form-item label="状态" :label-width="formLabelWidth">
      <div class="fsdgsdge">
     <template>
     <el-switch class="dsfsdf"
      v-model="valuestyod"
       active-color="#13ce66"
      inactive-color="#ff4949">
    </el-switch>
   </template>
  </div>
    </el-form-item>
    
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisibleAble = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisibleAble = false">确 定</el-button>
  </div>
</el-dialog>
       <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        type='index'
        prop="naems"
        label="ID"
        width="65">
      </el-table-column>
      <el-table-column
        prop="a_name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="	账号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="昵称">
      </el-table-column>
      <el-table-column
        prop="address"
        label="角色">
      </el-table-column>
      <el-table-column
    
        label="创建时间">
        <template slot-scope="slot">
            {{slot.row.a_add_time |addtime}}
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="更新时间">
      </el-table-column>
      
      <el-table-column
        prop="address"
        label="状态">
         <template slot-scope="slot" >
        <el-switch
        v-model="slot.row.a_status"
        active-color="#13ce66"
        inactive-color="#ff4949">
      </el-switch>
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="操作">
       
        <div class="fate">
           <div class="fd"  @click="look">
            <a class="el-icon-view " title="查看"  >
             
            </a>
         </div>
          <div class="fd" @click="datestorng">
            <a class="el-icon-s-tools" title="重置密码"></a>
          </div>
         <div class="fd" @click="compile">
            <a class="el-icon-edit" title="编辑"></a>
         </div>
         <div class="fd" @click="deletse">
            <a class="el-icon-delete" title="删除"></a>
         </div>
        </div>  
      </el-table-column>
    </el-table>
    <!-- 查看 -->
       <el-dialog title="查看" :visible.sync="dialogTableVisibleLook">
         <el-table :data="gridData" border :show-header="false" class="dsfsd" >
         <el-table-column  prop="name"   width="120"></el-table-column>
         <el-table-column  prop="name"   width="607.5"></el-table-column>
         </el-table>
         </el-dialog>

          <el-dialog title="编辑" :visible.sync="dialogTableVisibleLookscop">

      <div class="fgaiefts">
         <div class="sici">666</div>
     </div>

         <el-form ref="form" :model="form" >
  <el-form-item :label-width="formLabelWidth" >
    <p class="psert"></p>
  </el-form-item>
</el-form>
      

         <!-- <el-table :data="gridDatalist" border :show-header="false" class="dsfsd" >
         <el-table-column property="ss"  width="120"></el-table-column>
         <el-table-column property="fsd"  width="607.5"></el-table-column>
         </el-table> -->

         <!-- 三个表单 -->
           <!-- <el-table :data="gridDatalistpro" border :show-header="false" class="dsfsd" >
           <el-table-column property="ss"  width="120">55555555</el-table-column>
            <el-table-column property="fsd"  width="607.5">
              <input type="text" class="inopit">
            </el-table-column>
        </el-table> -->

      <div class="fgaiefts">
         <div class="sici">666</div>
     </div>
         <el-form ref="form" :model="form" >
  <el-form-item :label-width="formLabelWidth" >
    <el-input v-model="form.name" class="fdsg"></el-input>
  </el-form-item>
</el-form>
     <div class="fgaiefts">
         <div class="sici">666</div>
     </div>
         <el-form ref="form" :model="form" >
  <el-form-item :label-width="formLabelWidth" >
    <el-input v-model="form.name" class="fdsg"></el-input>
  </el-form-item>
</el-form>
      <div class="fgaiefts">
     <div class="sici">666</div>
     </div>
         <el-form ref="form" :model="form" >
  <el-form-item :label-width="formLabelWidth" >
    <template>
       <el-select v-model="sletevalues" placeholder="请选择" class="sleltsilist">
      <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
    </el-select>
    </template>
  </el-form-item>
</el-form>
    <div class="fgaiefts">
     <div class="sici">666</div>
     </div>
         <el-form ref="form" :model="form" >
  <el-form-item :label-width="formLabelWidth" >
   <div class="fsdgsdge">
     <template>
     <el-switch class="dsfsdf"
  v-model="valuestyer"
  active-color="#13ce66"
  inactive-color="#ff4949">
</el-switch>
   </template>
  </div>
  </el-form-item>
</el-form>
      <div class="fgaiefts">
      <div class="sici">666</div>
     </div>
     <el-form ref="form" :model="form" >
  <el-form-item :label-width="formLabelWidth" >
  <div class="fsdgsdge">
     <template>
     <el-switch class="dsfsdf"
  v-model="valuestysp"
  active-color="#13ce66"
  inactive-color="#ff4949">
</el-switch>
   </template>
  </div>
  </el-form-item>
</el-form>
      <div class="fgaiefts">
      <div class="sici">666</div>
     </div>
         <el-form ref="form" :model="form" class="cdrr" >
  <el-form-item :label-width="formLabelWidth" >
    <div class="fsdgsdge">
     <template>
     <el-switch class="dsfsdf"
      v-model="valuesty"
       active-color="#13ce66"
      inactive-color="#ff4949">
    </el-switch>
   </template>
  </div>
  </el-form-item>
   </el-form>
  <template>
    <el-button type="success" class="onefds">保存</el-button>
  <el-button plain>取消</el-button>
  </template>
 </el-dialog>
 </el-card>
  </div>
</template>

<script>
import {getlist} from '../../api/index'
export default {
  naem:'List',
  data () {
    return {
      
      zh:'账号',
      formLabelWidth:'130px',
      dialogFormVisibleAble:false,
      dialogTableVisibleLookscop:false,
      form : {
        name:''
      },
      value: false,
      value1: false,
      value2: true,
       tableData:[],
           options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        valueitem:"",
        gridData : [ 
          
          ],
          dialogTableVisibleLook:false,
          gridDatalist:[{
            ss:'dsfsd',
            fsd:'打他土地上热舞'
          }],
          gridDatalistpro:[{
            fdsg:'1333',
           
          }],
          valuesty:false,
          valuestysp:false,
          valuestyer:false,
          sletevalues:'',
          valuestyfds:false,
          valuesty:false,
          valuestyod:false,
         
    }
  },
  mounted () {
    this.huerlist()
  },
  methods : {   
   async huerlist () {
          const token = localStorage.getItem('token')
          this.axios.defaults.headers.common['token'] = token
           const res = await getlist({
             token:token
           },
           {
             token:token,
             adm_id:1
           })
           if (res.code==='200') {
             this.tableData = res.msg
           }
           console.log( this.tableData);
     },
    // open () {
    //    this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
    //       confirmButtonText: '确定',
    //       cancelButtonText: '取消',
    //       type: 'warning'
    //     }).then(() => {
    //       this.$message({
    //         type: 'success',
    //         message: '删除成功!'
    //       });
    //     }).catch(() => {
    //       this.$message({
    //         type: 'info',
    //         message: '已取消删除'          
    //       });          
    //     });             
    // }
    add () {
      this.dialogFormVisibleAble = true
    },
    //查看
  async look () {
     
     this.dialogTableVisibleLook = true

        const token = localStorage.getItem('token')
          this.axios.defaults.headers.common['token'] = token
           const res = await getlist({
             token:token
           },
           {
             token:token,
             adm_id:1
           })
           if (res.code==='200') {
             this.gridData = res.msg
           }
           console.log( this.gridData);
   },
   datestorng () {
         this.$confirm('确认要重置密码吗？', '信息', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '重置成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'          
          });          
        });      
     },
     //编辑
     compile () {
       this.dialogTableVisibleLookscop = true

       
     },
     deletse () {
         this.$confirm('确认要删除吗', '信息', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'          
          });          
        });      
     }
  }
}
</script>
<style  scoped>
 .box-card {
   height: 100%;
 }
  .el-button {
    width: 80px;
  }
 .el-table {
   margin-top: 20px;
 }
 .el-message-box {
   width: 800px ;
 }
 .el-select  {
   width: 100%;
 }
.fate {
display: flex

}
.fd {
  margin-right: 6px;
}
::-webkit-scrollbar {
width: 1px;
height: 1px;
}
/* // 滚动条的滑块 */
::-webkit-scrollbar-thumb {
background-color: #a1a3a9;
border-radius: 0px;
}
.fgaiefts {
  float: left;
  /* margin-top: 11px; */
  margin-left: 18px;

}
.sici {
  width: 111px;
  height: 36px;
  text-align: center;
  line-height: 35px;
  background-color: #fff;
  border: 1px solid #cccccc;
   border-right: none;
}

.fdsg >>>.el-input__inner{
 
  border-radius: 0;
  height: 38px;
/* margin-bottom: 15px; */
float: right;
}
/* .el-form-item--small >>>.el-form-item {
  margin-top: 100px;
} */
.psert {
 height: 36px;
 border: 1px solid #cccccc;
 margin-bottom: 10px;
}
.onefds {
  margin-left: 18px;
}
.dsfsdf {
  /* border: 1px solid #cccccc; */
  height: 36px;
  margin-bottom: 10px;
  padding-left: 10px;
}
.fsdgsdge {
  width: 100%;
  border: 1px solid #cccccc;
  height: 36px;
  margin-bottom: 10px;

}
.sleltsilist >>> .el-input__inner {
   height: 38px;
   border-radius: 0;
  margin-bottom: 10px;

}
.fsdgsdge {
  width: 100%;
  border: 1px solid #cccccc;
  height: 36px;
  margin-bottom: 10px;

}
</style>
