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
      <div class='bepay'>
        <span>待结算收益：</span>
        <span>{{bepay}}</span>
      </div>
    </div>

	  <div class="classdetail">
      <h1>课程详情</h1>
	  	<div class='classNumTotal'>
	  		<div class='price'>
          <p>{{}}</p>
          <span>报名人数</span>
        </div>
        <div class='total'>
          <p>{{}}</p>
          <span>课程报名费（元）</span>
        </div>
	  	</div>

      	<div class='classNumTotal'>
	  		<div class='price'>
          <p>{{}}</p>
          <span>直播时长</span>
        </div>
        <div class='total'>
          <p>{{}}</p>
          <span>观看时长</span>
        </div>
	  	</div>
      <div>

      </div>
	  </div>
	
   <div class="classdetail">
      <h1>分销详情</h1>
	  	<div class='classNumTotal'>
	  		<div class='price'>
          <p>{{}}</p>
          <span>参与分销人数</span>
        </div>
        <div class='total'>
          <p>{{}}</p>
          <span>分销报名人数</span>
        </div>
	  	</div>

      	<div class='classNumTotal'>
	  		<div class='price'>
          <p>{{}}</p>
          <span>分销支出</span>
        </div>
        <div class='total'>
          <p>{{}}</p>
          <span>分销总收益</span>
        </div>
	  	</div>
      <div>

      </div>
	  </div>

     <div class="classdetail">
      <h1>邀请卡详情</h1>
	  	<div class='classNumTotal'>
	  		<div class='price'>
          <p>{{}}</p>
          <span>总收益</span>
        </div>
        <div class='total'>
          <p>{{}}</p>
          <span>总报名人数</span>
        </div>
	  	</div>

      	<div class='classNumTotal'>
	  		<div class='price'>
          <p>{{}}</p>
          <span>生成总量</span>
        </div>
        
	  	</div>
      <div>

      </div>
	  </div>
    
  </div>
</template>
<style>
	.userbill{
		width:100%
	}
</style>
<script>

  export default {
    data() {
      return {
        bepay:0,
        totalmon:0
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

