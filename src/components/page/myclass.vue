t'r<template>
  <div class="container">
  	<!--头部-->
  	  <div class="myClassGit">
  	  	<div class='return'>返回</div>
  	  	<h3 class='mytitle'>报名学员</h3>
  	  	<div class='myhelp'>帮助</div>
  	  </div>
	  <!--学院信息栏-->
	  <div class="stuMess">
      <div class='stuHead'>
         <img src="" alt="">
      </div>
      <div class="stumessdetail">
        <span class='stuname'>{{stuname}}</span>
        <span class='stumethod'>{{stumethod}}</span><br>
        <span>{{stuaddtime}}</span>

      </div>
      <div class='ispay'>
        <p>{{ispay}}</p>
        <span>实付:</span><span>{{bemoney}}</span>

      </div>
	   

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
	  	
