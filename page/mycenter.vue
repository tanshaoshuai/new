<template>
  <div class="container">
  	<!--头部-->
  	  <div class="myClassGit">
  	  	<div class='return'>返回</div>
  	  	<h3 class='mytitle'>课程收益</h3>
  	  	<div class='myhelp'>帮助</div>
  	  </div>
	  <!--收益拦-->
	  <div class="myClassTotal">
	  	<div class='totalData'>
	  		<span class='detail fontsize'>课程总收益（元）</span><br />
	  	<h1>{{myClassData}}</h1>
	  	</div>
	  	
	  	<div class='totalData'>
	  		<div class='bottomData'>
	  			<h3>{{myBePay}}</h3>
	  			<span class='fontsize'>待结算金额</span>
	  		</div>
	  		<div class='bottomData'>
	  			<h3>{{myUse}}</h3>
	  			<span class='fontsize'>可提现金额</span>
	  		</div>
	  	</div>
	  </div>
	  <!--我的课程-->
	<div class='myClass'>
		<div class='myClassTi'>我的课程</div>
		<div class='classDetail'>
			<div class='classImg'>
				<img src="" alt="" />
			</div>
			<div class='classCon'>
				<h1></h1>
				<div>
					<span></span>
					<span></span>
				</div>
			</div>
			<div class='classMore'>
				
			</div>
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
	.fontsize{
		font-size: 13px;
		color: #AEB2C6;
		line-height: 18px;
	}
	.myClassTotal{
		margin-top: 3px;
		width:100%;
		height:170px;
		background: #fff;
	}
	.totalData{
		padding-top: 19px;
		width:80%;
		height:65px;
		text-align: center;
		margin:0 auto;
	}
	.detail{ 
		
	}
	.bottomData{
		float:left;
		width: 50%;
		text-align: center;
	}
	.bottomData h3{
		font-size: 17px;
	}
	.myClass{
		padding-top: 10px;
		padding-left: 10px;
		margin-top: 10px;
		width:100%;
		height:449px;
		background: #fff;
		text-align: left;
	}
	.myClass .myClassTi{
		height: 30px;
		width: 97%;
		font-size: 17px;
		line-height: 24px;
		border-bottom: 2px solid #F2F2F2;
	}
	.myClass .classDetail{
		width: 98%;
		height: 100px;
		border-bottom: 3px solid #F2F2F2;
	}
	.classImg{
		width: 30%;
		height: 100%;
		float:left;
	}
	.classImg img{
		margin-top: 15px;
		width: 114px;
		height: 64px;
	}
	.classCon{
		width: 58%;
		height: 100%;
		float:left;
	}
	.classMore{
		width: 10%;
		height: 100%;
		float:left;
	}
	
	
</style>
