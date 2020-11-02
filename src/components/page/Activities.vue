<template>
  <div>
   <el-card class="box-card">
  <el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item><a href="/">投放中心</a></el-breadcrumb-item>
  <el-breadcrumb-item>新增活动</el-breadcrumb-item>
</el-breadcrumb>
   
      <button :class="{'festy':item.id===crrid}" ref="fges" v-for="(item,index) in lit" :key="index" >{{item.name}}</button>

  


<!-- 新增活动 -->

 <div class="fsdggds" v-show="fdsi">
       <p class="laber">基本信息</p>
        <!-- 表单 -->

 <div class="cent">
   <el-form ref="form" :model="form12" label-width="80px">
  <el-form-item label="客户ID">
    <el-input v-model="form12.name" class="inputs"></el-input>
  </el-form-item>
</el-form>
  </div>


 <div class="cent">
   <el-form ref="form" :model="form13" label-width="80px">
  <el-form-item label="监测链接">
    <el-input v-model="form13.name" class="inputs" ></el-input>
  </el-form-item>
</el-form>
  </div>



    <div class="cent">
   <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="活动名称">
    <el-input v-model="form.name" class="inputs"></el-input>
  </el-form-item>
</el-form>
  </div>


<!-- 计数器 -->

<span class="querrts">每日投放预算</span>
<el-input-number v-model="num" label="描述文字" class="el-input-number"></el-input-number>

<!-- 单选框 -->


 <div class="dxquerds">
     <span class="querrtsrt">整体投放预算</span>
   <div class="fdsfleft">
     <el-radio v-model="radio4" label="9">不限</el-radio>
  <el-radio v-model="radio4" label="10">自定义</el-radio>
   </div>
 </div>

<!-- 计数器 -->

<span class="querrtsy">周期内总曝光数上限</span>
<el-input-number v-model="num1" label="描述文字" class="el-input-number"></el-input-number>

<!-- 计数器 -->

<div class="qielet">
    <span class="querrtsytt">周期内总点击数上限</span>
<el-input-number v-model="num2" label="描述文字" class="el-input-number"></el-input-number>
</div>


<!-- 时间 -->

 <div class="centxys">
     <el-form ref="form" :model="form1" label-width="80px">
  <el-form-item label="投放周期">
    <el-input v-model="form1.name" class="inputs"></el-input>
  </el-form-item>
</el-form>
 </div>

</div>


<!-- 新增计划 -->

 <div class="fsdggds" v-show="fdsit">

   <p class="laber">基本信息</p>
        <!-- 表单 -->

 <div class="cent">
   <el-form ref="form" :model="form14" label-width="80px">
  <el-form-item label="客户ID">
    <el-input v-model="form14.name" class="inputs"></el-input>
  </el-form-item>
</el-form>
  </div>


 <div class="cent">
   <el-form ref="form" :model="form15" label-width="80px">
  <el-form-item label="监测链接">
    <el-input v-model="form15.name" class="inputs" ></el-input>
  </el-form-item>
</el-form>
  </div>


    <div class="cent">
   <el-form ref="form" :model="form2" label-width="80px">
  <el-form-item label="计划名称">
    <el-input v-model="form2.name" class="inputs"></el-input>
  </el-form-item>
</el-form>
  </div>




<!-- <span class="querrts">每日投放预算</span>
<el-input-number v-model="num" label="描述文字" class="el-input-number"></el-input-number> -->

<!-- 单选框 -->


 <div class="dxquerds">
     <span class="querrtsrt">计划类型</span>
   <div class="fdsfleft">
     <el-radio v-model="radio6" label="5">pc</el-radio>
   <el-radio v-model="radio6" label="6">移动</el-radio>
   </div>
 </div>

<!-- 单选框 -->

 <div class="dxquerds">
     <span class="querrtsrt">广告类型</span>
   <div class="fdsfleft">
     <el-radio v-model="radio" label="1">静态广告</el-radio>
    <el-radio v-model="radio" label="2">动态广告</el-radio>
    <el-radio v-model="radio" label="3">视频广告</el-radio>
    <el-radio v-model="radio" label="4">信息流广告</el-radio>
   </div>
 </div>

<!-- 多选框 -->

<div class="qielet">
 <span class="querrtsrt">广告平台</span>
  
<div class="tred">
    <tr>
   <td><el-checkbox v-model="checked">baidu</el-checkbox></td>
<td><el-checkbox v-model="checked1">goole</el-checkbox></td>
 <td><el-checkbox v-model="checked2">tanx</el-checkbox></td>
 <td><el-checkbox v-model="checked3">乐视</el-checkbox></td>
</tr>

 


   <tr >
 <td>  <el-checkbox v-model="checked4">优酷</el-checkbox></td>
 <td><el-checkbox v-model="checked5">好耶-宽通</el-checkbox></td>
 <td><el-checkbox v-model="checked6">搜狐汇聚</el-checkbox></td>
 <td><el-checkbox v-model="checked7">智能投选媒体</el-checkbox></td>
</tr>

 


    <tr >
 <td>  <el-checkbox v-model="checked8">爱奇艺</el-checkbox></td>
<td> <el-checkbox v-model="checked9">秒针-灵集</el-checkbox></td>
 <td><el-checkbox v-model="checked10">聚告</el-checkbox></td>
<td> <el-checkbox v-model="checked11">芒果TV</el-checkbox></td>
</tr>



   <tr>
   <td><el-checkbox v-model="checked12">Acelink</el-checkbox></td>
<td> <el-checkbox v-model="checked13">投佳佳</el-checkbox></td>
<td> <el-checkbox v-model="checked14">捷云</el-checkbox></td>
 <td><el-checkbox v-model="checked15">暴风abx</el-checkbox></td>
</tr>


</div>

</div>


<!-- 时间 -->

 <div class="centxys">
     <el-form ref="form" :model="form3" label-width="80px">
  <el-form-item label="投放周期">
    <el-input v-model="form3.name" class="inputs"></el-input>
  </el-form-item>
</el-form>
 </div>

<!-- 投放时段 -->
<div class="dxquerds">
     <span class="querrtsrt">投放时段</span>
   <div class="fdsfleft">
     <el-radio v-model="radio8" label="7">不限</el-radio>
    <el-radio v-model="radio8" label="8">自定义</el-radio>
   </div>
 </div>


<!-- 计数器 -->

    <p class="labers">预算及投放数量策略</p>
<span class="querrts">每日投放预算</span>
<el-input-number v-model="numtrhee" label="描述文字" class="el-input-number"></el-input-number>

<div class="reotop">
  <span class="querrts">计划总体投放预算</span>
<el-input-number v-model="numfour" label="描述文字" class="el-input-number"></el-input-number>
</div>

<!-- 表单 -->

<div class="bdtop">
   <div class="cent">
   <el-form ref="form" :model="form4" label-width="80px">
  <el-form-item class="el-cc" label="周期内总曝光数上限">
    <el-input v-model="form4.name" class="inputs"></el-input>
  </el-form-item>
</el-form>
  </div>

   <div class="cent">
   <el-form ref="form" :model="form5" label-width="80px">
  <el-form-item class="el-cc" label="周期内点击数上限">
    <el-input v-model="form5.name" class="inputs"></el-input>
  </el-form-item>
</el-form>
  </div>

   <div class="cent">
   <el-form ref="form" :model="form6" label-width="80px">
  <el-form-item  class="el-cc" label="每日总曝光次数上限">
    <el-input v-model="form6.name" class="inputs"></el-input>
  </el-form-item>
</el-form>
  </div>

   <div class="cent">
   <el-form ref="form" :model="form7" label-width="80px">
  <el-form-item class="el-cc" label="每日总点击次数上限">
    <el-input v-model="form7.name" class="inputs"></el-input>
  </el-form-item>
</el-form>
  </div>


</div>



 <p class="laberst">出价优化策略</p>


<!-- 单选框 -->


 <div class="dxquerds">
     <span class="querrtsrt">出价方式</span>
   <div class="fdsfleft">
     <el-radio v-model="radio9" label="1">cpm</el-radio>
    <el-radio v-model="radio9" label="2">cpc</el-radio>
    <el-radio v-model="radio9" label="3">cpuv</el-radio>
  


   </div>
 </div>


 <div class="dxquerds">
   
   <div class="fdsfleft">
       <el-radio v-model="radio10" label="1" ref="gdcj" @change="fixed">固定出价</el-radio>
     <el-radio v-model="radio10" label="2"  @change="fixed">按点击率浮动出价</el-radio>
    <el-radio v-model="radio10" label="3"  @change="fixed">按到达率浮动出价</el-radio>
   </div>
 </div>


<span class="cpm">
  cpm
</span>

<p class="pst">固定出价 ， 以固定的价格参与竞价</p>
<p class="pst">按点击率浮动出价   以高点击率为目标， 并控制千次展示均价不超过最高cpm</p>
<p class="pst">按到达率浮动出价   以高到达率为目标， 并控制千次展示均价不超过最高cpm</p>


<span class="cpm">
  cpc
</span>
<p class="pst">控制点击均价在最高cpc附近，若在较长时间（一般大于三小时），cpc均值远高于设置的最高cpc，则说
  

</p>
<p class="pst">明最高cpc设置过低，无法到达要求，系统将逐渐减少竞价；反之若cpc均价远低于设置的最高cpc，则说明最  高cpc设置过高</p>
<span class="cpm">
  cpuv
</span>
<p class="pst">控制点均价在最高cpuv附近，若在较长时间内（一般大于三小时）cpuv均价值远高于设置的最高</p>
<p class="pst">cpuv，则说明最高cpuv设置过低，无法到达要求，系统将组件减少竞价；反之若cpuv均价值远低于设置的最高</p>
<p class="pst">cpuv，则说明最高设置过高；该选项要先安装访客统计代码才会生效</p>
<span class="cpm">
*
</span>
<p class="pst">为保证点击效果，建议每日投放预算200元以上</p>

<span class="cpm">
*
</span>
<p class="pst">为保证到达效果，建议每日投放预算200元以上</p>



<!-- 计数器 -->

<div class="fdsll">
  <span class="querrts">固定出价</span>
<el-input-number v-model="numfive" :disabled="bole" label="描述文字" class="el-input-number"></el-input-number>
</div>

<!-- 单选框 -->

 <div class="dxquerds">
     <span class="querrtsrt">广告类型</span>
   
   <div class="fdsfleft">
     <el-radio v-model="radio11" label="1">均匀消耗</el-radio>
    <el-radio v-model="radio11" label="2">尽快消耗</el-radio>
   </div>
 </div>


<!-- 频率控制表单 -->

<p class="laberstp">频率控制</p>


  <div class="cent">
   <el-form ref="form" :model="form11" label-width="80px">
  <el-form-item class="el-cc" label="每个受众每小时投放频次">
    <el-input v-model="form11.name" class="inputs"></el-input>
  </el-form-item>
</el-form>
  </div>


  <div class="cent">
   <el-form ref="form" :model="form8" label-width="80px">
  <el-form-item class="el-cc" label="每个受众每日投放频次">
    <el-input v-model="form8.name" class="inputs"></el-input>
  </el-form-item>
</el-form>
  </div>


  <div class="cent">
   <el-form ref="form" :model="form9" label-width="80px">
  <el-form-item class="el-cc" label="每个受众每周投放频次">
    <el-input v-model="form9.name" class="inputs"></el-input>
  </el-form-item>
</el-form>
  </div>


  <div class="cent">
   <el-form ref="form" :model="form10" label-width="80px">
  <el-form-item class="el-cc" label="每个受众每月周投放频次">
    <el-input v-model="form10.name" class="inputs"></el-input>
  </el-form-item>
</el-form>
  </div>


<!-- 地域定向的单选框 -->

<p class="laberstpps">地域定向</p>

 <div class="dxquerds">
   <div class="fdsfleft">
     <el-radio v-model="radio12" label="1">不限</el-radio>
    <el-radio v-model="radio12" label="2">国内地区</el-radio>
   </div>
 </div>

<!-- 人群定向单选框 -->

<p class="laberstppsty">人群定向</p>


<div class="dxquerdspy">
     <span class="querrtsrt">防作弊过滤等级</span>
   
   <div class="fdsfleft">
     <el-radio v-model="radio13" label="1">没有策略</el-radio>
    <el-radio v-model="radio13" label="2">宽松策略</el-radio>
    <el-radio v-model="radio13" label="3">普通策略</el-radio>
    <el-radio v-model="radio13" label="4">严格策略</el-radio>

   </div>
 </div>


<div class="dxquerdspy">
     <span class="querrtsrt">人群</span>
   
   <div class="fdsfleft">
     <el-radio v-model="radio14" label="1">全网智能优化</el-radio>
    <el-radio v-model="radio14" label="2">重定向人群</el-radio>
    <el-radio v-model="radio14" label="3">兴趣人群</el-radio>
    <el-radio v-model="radio14" label="4">人群包</el-radio>
    <el-radio v-model="radio14" label="5">行业人群</el-radio>
    <el-radio v-model="radio14" label="6">adx人群</el-radio>
   </div>
 </div>




<!-- 定向媒体单选框 -->

<p class="laberstppstyp">定向媒体</p>




<div class="dxquerdspy">
     <span class="querrtsrtpy">媒体域名走向</span>
   <div class="fdsfleft">
     <el-radio v-model="radio15" label="1">不限</el-radio>
    <el-radio v-model="radio15" label="2">自定义</el-radio>
   </div>
   <p style="margin-left: 80px; color: #666; font-size:12px;   font-weight: 700; ">最多只能添加5000个域名，多个域名请用分号隔开</p>
 </div>

<div class="dxquerdspy">
     <span class="querrtsrtpy">媒体页面URL定向</span>
   <div class="fdsfleft">
     <el-radio v-model="radio16" label="1">不限</el-radio>
    <el-radio v-model="radio16" label="2">自定义</el-radio>
   </div>
 </div>
<div class="dxquerdspy">
     <span class="querrtsrtpy">广告类型定向</span>
   <div class="fdsfleft">
     <el-radio v-model="radio17" label="1">不限</el-radio>
    <el-radio v-model="radio17" label="2">自定义</el-radio>
   </div>
   <p style="margin-left: 80px; color: #666; font-size:12px;   font-weight: 700; ">最多只能添加5000个广告位，多个广告位请用分号隔开</p>
 </div>
<div class="dxquerdspy">
     <span class="querrtsrtpy">广告位定向</span>
   <div class="fdsfleft">
     <el-radio v-model="radio18" label="1">不限</el-radio>
    <el-radio v-model="radio18" label="2">自定义</el-radio>
   </div>
 </div>
<div class="dxquerdspy">
     <span class="querrtsrtpy">指定媒体类型</span>
   <div class="fdsfleft">
     <el-radio v-model="radio19" label="1">不限</el-radio>
    <el-radio v-model="radio19" label="2">自定义</el-radio>
   </div>
 </div>
<div class="dxquerdspy">
     <span class="querrtsrtpy">媒体关键词</span>
   <div class="fdsfleft">
     <el-radio v-model="radio20" label="1">不限</el-radio>
    <el-radio v-model="radio20" label="2">自定义</el-radio>
   </div>
 </div>
<div class="dxquerdspy">
     <span class="querrtsrtpy">Adx页面分类定向</span>
   <div class="fdsfleft">
     <el-radio v-model="radio21" label="1">不限</el-radio>
    <el-radio v-model="radio21" label="2">自定义</el-radio>
   </div>
 </div>
<div class="dxquerdspy">
     <span class="querrtsrtpy">Adx页面关键词定向</span>
   <div class="fdsfleft">
     <el-radio v-model="radio22" label="1">不限</el-radio>
    <el-radio v-model="radio22" label="2">自定义</el-radio>
   </div>
 </div>
<div class="dxquerdspy">
     <span class="querrtsrtpy">Adx视频频道定向</span>
   <div class="fdsfleft">
     <el-radio v-model="radio23" label="1">不限</el-radio>
    <el-radio v-model="radio23" label="2">自定义</el-radio>
   </div>
   <p style="margin-left: 80px; color:#666; font-size:12px;   font-weight: 700; ">只对优酷土豆、爱奇艺、搜狐视频适用</p>
 </div>
<div class="dxquerdspy">
     <span class="querrtsrtpy">广告QQ定向走向</span>
   <div class="fdsfleft">
     <el-radio v-model="radio24" label="1">不限</el-radio>
    <el-radio v-model="radio24" label="2">自定义</el-radio>
   </div>
 </div>
  <p style="margin-left: 290px; margin-top: 30px; color: #666; font-size:12px;   font-weight: 700; ">只在指定qq展示广告，该qq需要向广点通申请boss功能，最多十个，多个ip请用分号隔开</p>


<!-- 定向设备单选框 -->

<p class="laberstppsty">定向设备</p>


<div class="dxquerdspy">
     <span class="querrtsrtyul">终端类型</span>
   
   <div class="fdsfleft">
     <el-radio v-model="radio25" label="1">不限</el-radio>
    <el-radio v-model="radio25" label="2">自定义</el-radio>
   </div>
 </div>

<div class="dxquerdspy">
     <span class="querrtsrtyul">浏览器类型</span>
   
   <div class="fdsfleft">
     <el-radio v-model="radio26" label="1">不限</el-radio>
    <el-radio v-model="radio26" label="2">自定义</el-radio>
   </div>
 </div>

 <div class="dxquerdspy">
     <span class="querrtsrtyul">ip组</span>
   
   <div class="fdsfleft">
     <el-radio v-model="radio27" label="1">不限</el-radio>
    <el-radio v-model="radio27" label="2">自定义</el-radio>
   </div>
 </div>
  <p style="margin-left: 235px; margin-top: 26px; clor:#666; font-size:13px; font-weight: 700;  ">最多只能添加10000个ip组，多个ip请用分号隔开</p>

</div>

<!-- 选择素材 -->

 <div class="fsdggds" v-show="fdsitys">
   <el-table class="elta-tab"
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="缩略图"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="优化策略">
      </el-table-column>
       <el-table-column
        prop="address"
        label="素材介绍">
      </el-table-column>
    </el-table>

</div>

<!-- 右下角四个按钮 -->

<div class="fdsfsdpty">
  <li :class="{'btnt':item.id===crrid} " ref="ondes" v-for="(item,index) in lits" :key="index" @click="switchover(item.id)">{{item.name}}</li>
  <button class="submit" ref="submits">完成</button>
</div>

  


</el-card>
</div>
</template>

<script>
export default {
    data () {
        return {
         
          lit:[{
            id:1,
            name:'1. 新增活动'
          },{
            id:2,
            name:'2. 新增计划'
          },{
            id:3,
            name:'3. 选择素材'
          }],
           lits:[{
            id:1,
            name:'第一步'
          },{
            id:2,
            name:'第二步'
          },{
            id:3,
            name:'第三步'
          }],
        
             //表单1
            form : {

            },
            //表单2
            form1 : {
                
            },
            //表单4
            form2 : {
                
            },
            //表单4
            form3 : {
                
            },
            //表单5
            form4 : {
                
            },
            //表单6
            form5 : {
                
            },
            //表单7
            form6 : {
                
            },
            //表单8
            form7 : {
                
            },
            //表单9
            form8 : {
                
            },
            //表单10
            form9 : {
                
            },
            //表单11
            form10 : {
                
            },
            //表单12
            form11 : {
                
            },
            //表单13
            form12 : {
                
            },
            //表单14
            form13 : {
                
            },
            //表单15
            form14 : {
                
            },
            //表单16
            form15 : {
                
            },
            //计数器1
            num:1,

            //计数器2
            num1:1,

            //计数器3
            num2:1,
            //计数器4
            numtrhee:1,
            //计数器4
            numfour:1,
              //计数器5
            numfive:1,


            //单选框

            radio6:'',
            radio: '',
            radio4:'',   
            radio8:'',
            radio9:'',
            radio10:'',
            radio11:'',
            radio12:'',
            radio13:'',
            radio14:'',
            radio15: '',
            radio16: '',
            radio17: '',
            radio18: '',
            radio19: '',
            radio20: '',
            radio21: '',
            radio22: '',
            radio23: '',
            radio24: '',
            radio25: '',
            radio26: '',
            radio27: '',

           
            //多选框
            checked:false,
            checked1:false,
            checked2:false,
            checked3:false,
            checked4:false,
            checked5:false,
            checked6:false,
            checked7:false,
            checked8:false,
            checked9:false,
            checked10:false,
            checked11:false,
            checked12:false,
            checked13:false,
            checked14:false,
            checked15:false,

           tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },],

          fdsi:true,
          fdsit:false,
          fdsitys:false,
          bole:false,
          crrid:1,
        }
    },
    methods : {
      // 固定出价
    fixed (vale) {
      if (vale!=='1') {
        this.bole = true
      } else {
        this.bole = false
      }
    },
     switchover (id) {
      this.crrid = id
      // this.fdsit = false 
      // this.$refs.fges.style.backgroundColor = 'blue'
      // this.$refs.ondes.style.backgroundColor = 'green'
      // this.$refs.fgesd.style.backgroundColor = ''
      // this.$refs.ondest.style.backgroundColor = ''
      // this.$refs.fgesy.style.backgroundColor = ''
      // this.$refs.ondesy.style.backgroundColor = ''
      // this.$refs.ondesi.style.backgroundColor = ''
      // this.fdsitys = false
      if (id===2) {
        this.fdsit = true
        this.fdsi = false
        this.fdsitys = false
        this.$refs.submits.style.backgroundColor = ''
      } else if(id===3) {
       this.fdsitys = true
       this.fdsit = false
       this.fdsi = false
       this.$refs.submits.style.backgroundColor = 'green'
      }else {
       this.fdsitys = false
       this.fdsi = true
       this.fdsit = false
       this.$refs.submits.style.backgroundColor = ''
      }
      // this.fdsi = true
     },
   }
}
</script>

<style scoped>
   .btnt {
     background-color: green;
   }
    button {
        width: 230px;
        height: 54px;
        background: rgb(238, 238, 238);
        margin-top: 15px;
        margin-right: 10px;
        border: none;
        outline:0;
        text-align: center;
        color: #fff;
    }
    .festy {
      color: #ffffff;
      background-color: #409EFF;
    }
    .p1 {
      color: #666;
      background-color:#409EFF;
    }
    .laber {
        margin-top: 50px;
        margin-left: 3px;
        font-size: 18px;
        color: #666;
        font-weight: 700;
    
        margin-bottom:20px
    }
    .labers {
        margin-top: 50px;
        margin-left: 3px;
        font-size: 18px;
        color: #666;
        font-weight: 700;
    
        margin-bottom:20px
    }
    .laberst {
       margin-top: 50px;
        margin-left: 3px;
        font-size: 18px;
        color: #666;
        font-weight: 700;
        margin-bottom:20px
    }
    .laberstp {
       margin-top: 50px;
       margin-left: 3px;
       font-size: 18px;
       color: #666;
       font-weight: 700;
       margin-bottom:20px
    }
    .laberstpps {
       margin-left: 3px;
       font-size: 18px;
       color: #666;
       font-weight: 700;
       margin-bottom:20px
    }
    .laberstppsty {
      margin-top: 50px;
       margin-left: 3px;
       font-size: 18px;
       color: #666;
       font-weight: 700;
       margin-bottom:20px
    }
    .laberstppstyp {
      margin-top: 52px;
        margin-left: 3px;
       font-size: 18px;
       color: #666;
       font-weight: 700;
       margin-bottom:20px
    }
    .inputs {
        width: 55%;
    }
    
    /* .hegns {
        border-bottom: 1px solid #cccccc;
    } */
     .cent {
       margin-left: 100px;
       margin-bottom: 30px;
    }
    .querrts {
        font-size: 16px;
       margin-left: 100px;
       display: inline-block;
       margin-top: 11px;
    }
    .el-input-number {
        margin-left: 35px;
       
    }
    .dxquerds {
       margin-top: 40px;
       margin-left: 100px;
       display: flex;
    }
    .dxquerdspy {
       margin-top: 40px;
       margin-left: 100px;
       display: flex;
    }
    .querrtsrt {
        display: inline-block;
        margin-left: 5px;
        margin-bottom: 3px;
    }
    .querrtsrtpy {
        display: inline-block;
        margin-left: 5px;
        margin-bottom: 3px;
        width: 140px;
    }
    .querrtsrtyul {
        display: inline-block;
        margin-left: 5px;
        margin-bottom: 3px;
        width:82px;
    }
    .fdsfleft {
     margin-left: 45px;
    }
    .querrtsy {
       font-size: 14px;
       margin-left: 100px;
       display: inline-block;
       margin-top: 51px;
    }
    .qielet {
        font-size: 14px;
        margin-left: 100px;
        margin-top: 40px;
    }
    .centxys {
       margin-left: 100px;
       margin-top: 30px;
    }
    .fdsfsdpty {
     float: right;
    }
    li {
      display: inline-block;
      width: 60px;
      height: 30px;
      background: rgb(238, 238, 238);
      margin-top: 15px;
      margin-right: 10px;
      border: none;
      outline:0;
      text-align: center;
      color: #fff;
      line-height: 30px;
    }
    li:hover {
      cursor:pointer;
    }
      .submit {
      width: 60px;
      height: 30px;
      background: rgb(238, 238, 238);
      margin-top: 15px;
      margin-right: 10px;
      border: none;
      outline:0;
      text-align: center;
      color: #fff;
      line-height: 30px;
    }
    .submit:hover {
      cursor: pointer;
    }
    .tred {
      margin: 25px 130px;
    }
    .tred tr {
     height: 40px;
    }
   .tred >>> .el-checkbox {
      margin-right: 60px;
    }
    .treds {
    
    margin-bottom: 20px;
    }
   .reotop {
     margin-top: 50px;
   }
   .bdtop {
     margin-top: 45px;
   }
  .el-cc>>> .el-form-item__label {
     width: 166px !important;
   }
   .cpm {
     display: inline-block;
     margin-left: 150px;
     margin-top: 29px;
   }
   .pst {
     font-size: 13px;
     color: #666;
      margin-left: 150px;
      margin-top: 29px;
    
   }
   .fdsll {
     margin-top:40px;
   }
   .elta-tab {
     margin-top: 18px;
   }
</style>