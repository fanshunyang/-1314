<template>
  <div>
    <el-card class="box-card">
  <div class="fgaiefts">
         <div class="sici">账号</div>
     </div>
  <el-form ref="form" :model="form" >
  <el-form-item :label-width="formLabelWidth" >
    <el-input v-model="form.a_account" class="fdsg" placeholder="请输入账号"></el-input>
  </el-form-item>
</el-form>

 <div class="fgaiefts">
         <div class="sici">姓名</div>
     </div>
  <el-form ref="form" :model="form1" >
  <el-form-item :label-width="formLabelWidth" >
    <el-input v-model="form1.a_name" class="fdsg" placeholder="请输入姓名"></el-input>
  </el-form-item>
</el-form>

 <div class="fgaiefts">
         <div class="sici">密码</div>
     </div>
   <el-form ref="form" :model="form2" >
  <el-form-item :label-width="formLabelWidth" >
    <el-input v-model="form2.a_password" class="fdsg" placeholder="请输入密码"></el-input>
  </el-form-item>
</el-form>

      <div class="fgaiefts">
         <div class="sici">昵称</div>
       </div>
  <el-form ref="form" :model="form3" >
  <el-form-item :label-width="formLabelWidth" >
    <el-input v-model="form3.a_nick" class="fdsg" placeholder="请输入昵称"></el-input>
  </el-form-item>
</el-form>



 <div class="fgaiefts">
     <div class="sici">角色</div>
     </div>
  <el-form ref="form" :model="form4" >
  <el-form-item :label-width="formLabelWidth" >
    <template>
       <el-select v-model="sletevalues" placeholder="请选择" class="sleltsilist">
       
      <el-option
      v-for="(item,index) in options" :key="index"
      :label="item.label"
      :value="item.value"> 
    </el-option>
    </el-select>
    </template>
  </el-form-item>
</el-form>




      <div class="fgaiefts">
      <div class="sici">状态</div>
     </div>
   <el-form ref="form" :model="formy" class="cdrr" >
  <el-form-item :label-width="formLabelWidth" >
    <div class="fsdgsdge">
     <template>
     <el-switch class="dsfsdf"
  v-model="formy.a_status"
  active-color="#13ce66"
  inactive-color="#ff4949">
</el-switch>
   </template>
  </div>
  </el-form-item>
   </el-form>


<template>
    <el-button type="success" class="onefds">保存</el-button>
  <el-button plain class="chigtylist">重置</el-button>
  </template>


</el-card>
  </div>
</template>

<script>
import {add} from '../../api/index'
export default {
 data () {
   return {
     formy:{
       a_status:false
     },
     formf:{},
     formt:{},
     form : {
     a_account:'admi13233211'
     },
      form1 : {
      a_name:'zhuwen1b44o0133'
     },
      form2 : {
      a_password:'qwe1r1223334'
     },
      form3 : {
        a_nick:'1333@163.com'
     },
     form4:{},
   
     formLabelWidth:'130px',
     sletevalues :'超级管理',

       options: [{
          value: '选项1',
          label: '超级管理'
        }, {
          value: '选项2',
          label: '优化'
        }, {
          value: '选项3',
          label: '客户'
        }, {
          value: '选项4',
          label: '销售'
        }, {
          value: '选项5',
          label: '渠道'
        }],
      
        adm_id:1,
        a_role:3333444444
        
   }
 },
 mounted () {
   this.getrlist()
 },
 methods : {
 async getrlist () {
   const token = localStorage.getItem('token')
   this.axios.defaults.headers.common['token'] = token
  //  const res = await this.axios.post(`/admin/addAdmin`,{
  //    token:token,
  //      adm_id:this.adm_id
  //  },{
   
  //  })
  //  console.log(res);
    const res = await add ({
      token:token,
    },{
       token:token,
      a_status:this.formy.a_status,
      adm_id:this.adm_id,
       a_name:this.form1.a_name,
       a_nick:this.form3.a_nick,
       a_password:this.form2.a_password,
       a_account:this.form.a_account,
       a_role:this.a_role
    })
    console.log(res);
  }
 }
}
</script>

<style scoped>
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
.chigtylist {
  margin-left: 31px;
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
.sleltsilist {
  width: 100%;
}
.sleltsilist >>> .el-input__inner {
  
   height: 38px;
   border-radius: 0;
  margin-bottom: 10px;

}

</style>