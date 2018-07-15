<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body{
  padding: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  outline: 0;
  background: #F4F4F4;
  margin: 0 auto;
  color: #333;
}
@media only screen and (min-width: 640px) {
  html {
    font-size: 32px;
    background: #fff; }

  body {
    width: 375px;
    margin: 0 auto; }
 }

*{
		margin: 0;
		padding: 0;
		font-size: 16px;
		font-family: 'PingFangSC';
	}
	
	.container{
		width: 100%;
		height:600px;
	}
	.myClassGit{
		width: 100%;
		height: 50px;
		line-height: 50px;
		background: #FAFAFF;
	}
	.return{
		float: left;
		width: 33%;
		height: 50px;
	}
	.mytitle{
		float:left;
		width: 33%;
		height: 50px;
		font-size: 17px;
	}
	.myhelp{
		float:left;
		width: 33%;
		height: 50px;
	}
</style>
