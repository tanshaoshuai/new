t'r<template>
  <div class="container">
  	<!--头部-->
  	  <div class="myClassGit">
  	  	<div class='return'>返回</div>
  	  	<h3 class='mytitle'>手播客</h3>
  	  	<div class='myhelp'>帮助</div>
  	  </div>

    <div class='sharedetail'>
     
      <div class='shareHead'>
         <img src="" alt="">
      </div>
      <div class="sharedetail">
        <span class='sharename'>{{sharename}}</span><br>
        <span>成交数量：</span><span>{{sharesuc}}</span>
        <span>成交数量：</span><span>{{shareget}}</span>

      </div>
      <div class='longtime'>
       

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
	  	
