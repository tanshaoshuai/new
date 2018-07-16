<template>
  <div class="container">
  	<!--头部-->
  	  <div class="myClassGit">
  	  	<div class='return'>返回</div>
  	  	<h3 class='mytitle'>课程收益详情</h3>
  	  	<div class='myhelp'>帮助</div>
  	  </div>
	  <!--课程收益详情栏-->
    <div class="classTotalPrice">
      <div class='mytotal'>
        <span>收益：</span>
        <span>{{totalmon}}</span>
      </div>
      <div class='bepay fontsize'>
        <span>待结算收益：</span>
        <span>{{bepay}}</span>
      </div>
    </div>

	  <div class="classdetail">
	  	<div>
	  		<h1>课程详情</h1>
	  		<span></span>
	  	</div>
      	
	  	<div class='classNumTotal'>
	  		<div class='price'>
	          <p>{{applynum}}</p>
	          <span class='fontsize'>报名人数</span>
	        </div>
	        <div class='total'>
	          <p>{{appprice}}</p>
	          <span class='fontsize'>课程报名费（元）</span>
	        </div>
		 </div>

      	<div class='classNumTotal'>
	  		<div class='price'>
          <p>{{bewatchtime}}</p>
          <span class='fontsize'>直播时长</span>
        </div>
        <div class='total'>
          <p>{{watchtime}}</p>
          <span class='fontsize'>观看时长</span>
        </div>
	  	</div>
      <div>

      </div>
	  </div>
	
   <div class="classdetail">
	   	<div>
	   		<h1>分销详情</h1>
	   		<span></span>
	   	</div>
      
	  	<div class='classNumTotal'>
	  		<div class='price'>
          <p>{{sharenum}}</p>
          <span class='fontsize'>参与分销人数</span>
        </div>
        <div class='total'>
          <p>{{applysharenum}}</p>
          <span class='fontsize'>分销报名人数</span>
        </div>
	  	</div>

      	<div class='classNumTotal'>
	  		<div class='price'>
          <p>{{sharepay}}</p>
          <span  class='fontsize'>分销支出</span>
        </div>
        <div class='total'>
          <p>{{shareget}}</p>
          <span  class='fontsize'>分销总收益</span>
        </div>
	  	</div>
      <div>

      </div>
	  </div>

     <div class="classdetail">
     	<div>
     		 <h1>邀请卡详情</h1>
     		<span></span>
     	</div>
     
	  	<div class='classNumTotal'>
	  		<div class='price'>
          <p>{{totalget}}</p>
          <span  class='fontsize'>总收益</span>
        </div>
        <div class='total'>
          <p>{{totalapplynum}}</p>
          <span  class='fontsize'>总报名人数</span>
        </div>
	  	</div>

      	<div class='classNumTotal'>
	  		<div class='price'>
          <p>{{total}}</p>
          <span  class='fontsize'>生成总量</span>
        </div>
        
	  	</div>
      <div>

      </div>
	  </div>
    
  </div>
</template>

<script>

  export default {
    data() {
      return {
        bepay:0,
        totalmon:0,
        applynum:0,
        appprice:0,
        bewatchtime:0,
        watchtime:0,
        sharenum:0,
        applysharenum:0,
        sharepay:0,
        shareget:0,
        totalget:0,
        totalapplynum:0,
        total:0
      }
    },
    methods: {
      loginOut() {
        
      },

    },
    mounted() {
      // 页面加载时拉取数据
    }
  }
</script>
<style>
	.classTotalPrice{
		width:100%;
		height: 35px;
		padding-top: 15px;
		background:#fff;
		margin-top: 3px;
	}
	.mytotal{
		float:left;
		width:50%;
		line-height:24px;
		font-size: 17px;
	}
	.fontsize{
		font-size: 14px;
		color: #AEB2C6;
		line-height: 18px;
	}
	.bepay{
		float:left;
		width:50%;
	}
	.classdetail{
		width: 100%;
		height: 200px;
		margin-top: 10px;
		padding-top: 10px;
		background: #fff;
		padding:10px
	}
	.classdetail>div{
		width:100%;
	}
	.classdetail>div>h1{
		text-align: left;
		height: 30px;
	}
	.classNumTotal{
		width:100%;
		height: 62px;
		text-align: center;
		border-bottom: 1px solid #f2f2f2;
		border-top: 1px solid #f2f2f2;
		padding-top: 10px;	
	}
	.price{
		float:left;
		width:50%;
		height: 72px;
	}
	.total{
		width:50%;
		float:left;
		height: 72px;
	}
	.price p{
		
	}
</style>
