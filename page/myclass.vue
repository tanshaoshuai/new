t'r<template>
  <div class="container">
  	<!--头部-->
  	  <div class="myClassGit">
  	  	<div class='return'>返回</div>
  	  	<h3 class='mytitle'>报名学员</h3>
  	  	<div class='myhelp'>帮助</div>
  	  </div>
	  <!--学院信息栏-->
	   <div  class="stuMess">
	     <div class='nk'v-for = "item in stuarr">
	     	<div class='stuHead' :class="{'qs':item.qs}">
	         <!--<img :src='item.img'alt="">-->
	         <img src='../../assets/1.png'alt="">
	      </div>
	      <div class="stumessdetail">
	        <span class='stuname'>{{item.name}}</span>
	        <span class='stumethod' :class="{'display':item.display}">{{item.stumethod}}</span><br>
	        <p class='applytime'>{{item.stuaddtime}} <span :class="{'display':item.display}">分销：{{item.sharepers}}</span><span :class="{'display':item.display}">佣金：{{item.commission}}</span></p>
	
	      </div>
	      <div class='ispay'>
	        <p :class="{'issurepay':item.ispay}">{{item.ispay}}</p>
	        <span class='mywite'>实付:</span><span class='moneycolor'>{{item.bemoney}}</span>
	        <span  class='acpay':class="{'display':item.qs}">{{item.acpay}}</span>
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
        		stuarr:[
        		{
        			name:'张三',
        			img:'../../assets/logo.png',
        			stumethod:'7.5',
        			stuaddtime:'2017-07-03',
        			ispay:'待结算',
        			bemoney:0,
        			sharepers:0,
        			commission:0,
        			display:true,
        			qs:true,
        			acpay:500,
        			ispay:true
        		},
        			{
        			name:'张三',
        			img:'../../assets/logo.png',
        			stumethod:'分销',
        			stuaddtime:'2017-07-03',
        			ispay:'待结算',
        			bemoney:0,
        			acpay:450,
        			sharepers:'20%',
        			commission:200,
        			display:true,
        			qs:true,
        			ispay:true
        		}
        		
        		]
      }
    },
    created:function(){
    this. getstu()
  },
    methods: {
      getstu:function(){
//	      var that=this
//	      this.$https.get('/api/').then(function(resp){
//	         that.myClassData=resp.data.data.subsMoney
//	         that.myBePay=resp.data.data.unSettleMoney
//	      }).catch(function(err){
//	        console.log(err);
//	      })
		this.stuarr.forEach(item =>{
            if(typeof(item.stuaddtime)=='string'){
              var data = new Date(item.stuaddtime)
              var year=data.getFullYear();
              var month=data.getMonth()+1;
              var day1=data.getDate();
              if(month<10){
              	month='0'+month
              	
              }
               if(day1<10){
              	day1='0'+day1
              }
              var newday=year+"."+month+"."+day1
            
            }
          item.stuaddtime=newday;
        
           
            if(item.stumethod==''){
            		 item.bemoney=item.acpay
            }else if(item.stumethod=='分销'){
            	console.log(item.acpay)
            	 item.bemoney=item.acpay
            	 console.log(item.bemoney)
            	 item.display=false;
            }else{
            	console.log(item.acpay)
            	 item.bemoney=parseInt(item.acpay)*7.5/10
            	 item.qs=false;
            	 item.bemoney='¥'+item.bemoney
             item.acpay='¥'+item.acpay
            }
        })
	      
    }

    }
   
  }
</script>

<style>
	.stuMess{
		padding-top: 10px;
		width:100% ;
		background: #fff;
	}
	.nk{
		padding-top: 10px;
		margin-left:10px ;
		width:97% ;
		height:70px;
		background: #fff;
		border-bottom: 1px solid #F2F2F2;
	}
	.stuHead{
		float:left;
		width: 18%;
		height: 60px;
	}
	.stuHead::after{
		content:'券';
		font-size: 8px;
		color:white;
		width: 13px;
		height: 14px;
		display: block;
		position: relative;
		top: -20px;
		left:45px;
		background:rgba(245,166,35,1);
		border-radius:2px 2px 0px 0px;
	}
	.stuHead.qs::after{
		display: none;
	}
	.stuHead img{
		width: 50px;
		height: 50px;
		border:1px solid rgba(242,243,247,1);
		border-radius: 50%;
	}
	.stumessdetail{
		padding-top: 10px;  
		height: 50px;
		float:left;
		text-align: left;
	}
	.stuname{
		line-height: 24px;
		font-size: 17px;
		float: left;
	}
	.stumethod{
		margin-left: 10px;
		margin-top: 3px;
		float:left;
		display:block;
		width: 40px;
		text-align: center;
		height: 16px;
		background: rgba(20,200,100,1);
		border-radius: 8px;
		font-size: 11px;
	}
	.applytime{
		clear: both;
		font-size: 12px;
		text-align: left;
	}
	.applytime>span{
		font-size: 12px;
		margin-left: 18px;
	}
	
	.ispay{
		padding-right: 10px;
		padding-top: 10px;
		height: 50px;
		float:right;
		text-align: right;
	}
	.ispay>p{
		color:#F5A623;
		font-size: 15px;
	}
	.mywite{
		width:36px;
		height:17px;
		font-size:12px;
		font-family:PingFangSC-Regular;
		color:rgba(100,107,142,1);
		line-height:17px;
	}
	.moneycolor{
		height:20px;
		font-size:11px;
		font-family:PingFangSC-Regular;
		color:rgba(246,45,69,1);
		line-height:16px;
		color: red;
	}
	.display{
		display: none;
	}
	.acpay{
		height:17px;
		font-size:12px;
		font-family:PingFangSC-Regular;
		color:rgba(100,107,142,1);
		line-height:17px;
		text-decoration:line-through;
	}
	.issurepay{
		visibility:hidden
	}
</style>	  	
