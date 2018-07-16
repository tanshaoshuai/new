t'r<template>
  <div class="container">
  	<!--头部-->
  	  <div class="myClassGit">
  	  	<div class='return'>返回</div>
  	  	<h3 class='mytitle'>邀请卡</h3>
  	  	<div class='myhelp'>帮助</div>
  	  </div>
	  <!--卡详情-->
	  <div class="cardMess">
        <div>
          <h1>{{cardtitle}}</h1>
          <span></span>
        </div>
        <div>优惠折扣</div>
        <div>7.5折</div>
        <div>
       		 <p>
       		 	<span>生成数量：100</span>
       		 	<span>剩余数量：30</span>
       		 	<span>失效时间:2017.09.09</span>
       		 </p>	
        </div>
        <div></div>
	  </div>

  </div>
</template>

<script>

  export default {
    data() {
      return {
        		myClassData:0,
        		myBePay:0,
        		myUse:0,
        		classTable:[],
      }
    },
    created:function(){
    this. classTotalmoney();
    this. getClass();
  },
    methods: {
      classTotalmoney:function(){
	      var that=this
	      this.$https.get('/api/account/streams/income/statistics').then(function(resp){
	         that.myClassData=resp.data.data.subsMoney
	         that.myBePay=resp.data.data.unSettleMoney
	      }).catch(function(err){
	        console.log(err);
	      })
    },
    getClass:function(){
    		 var that=this
	      this.$https.get('/api/account/income/streams').then(function(resp){
	         console.log(resp.data)
	      }).catch(function(err){
	        console.log(err);
	      })
    }

    }
   
  }
</script>

<style>
	
</style>
	  	
