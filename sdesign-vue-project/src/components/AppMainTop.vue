<template>
	<div id="main-top-wrapper">
		<div class="Home-mainImg"></div>
		<div class="Home-mainContents">

		<div class="mainText">
			<h1>완벽한 사운드를 찾아보세요.</h1>
			<p>
				매주 업데이트되는 280,000 개 이상의 음향효과 라이브러리를 무제한
				다운로드하세요.
			</p>
			<button class="mbtn">음향효과 듣기</button>
		</div>
        </div>
		<!-- <div class="mainText">
			<h1>완벽한 사운드를 찾아보세요.</h1>
			<p>
				매주 업데이트되는 280,000 개 이상의 음향효과 라이브러리를 무제한
				다운로드하세요.
			</p>
			<button class="mbtn">음향효과 듣기</button>
		</div> -->
	</div>
</template>

<script>
export default {};
</script>

<style>

#main-top-wrapper {
    position: relative;
    top: 65px;
    width: 100%;
    height: 480px;
}

.Home-mainImg {
    position: relative;
    width: 100%;
    height: 480px;
    background-image: url(../assets/mainTopImg.png);
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: center;
}

.Home-mainContents {
    position: absolute;
    top: 0;
    width: 50%;
    height: 480px;
    background-color: rgba(0, 0, 0, 0.5);
    }

.mainText {
    position: relative;
    top: -480px;
    padding: 75px 50px;
    width: 1220px;
    display: flex;
    flex-flow: column;
    margin: 0 auto;
}
.mainText h1 {
  text-align: left;
  width: 350px;
  font-family: Helvetica;
  font-size: 52px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #fefefe;
  text-align: left;
}
.mainText p {
    width: 554px;
    height: 36px;
    margin-bottom: 30px;
    font-family: Helvetica;
    font-size: 16px;
    font-weight: bold;
    text-align: left;
    color: #ffffff;
    /* transition: width 0.5s cubic-bezier(0.8,0.2,0.1,1.6); */
}
/* .mainText button {
    all: unset;
    width: 167px;
    height: 59px;
    border-radius: 3px;
    border: solid 1px #ffffff;
    color: #fff;
    cursor: pointer;
    overflow: hidden;
    position: relative;
} */

.mbtn {
    /* all: unset; */
    width: 167px;
    height: 59px;
    border-radius: 3px;
    border: solid 1px #fff;
    background: none;
    color: #fff;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
}
.mbtn::after {
    background-color: #fff;
    content: "";
    height: 170px;
    width: 40px;
    left: -80px;
    top: -70px;   
    opacity: .3;
    position: absolute;
    transform: rotate(40deg);
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    -webkit-transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
}
.mbtn:hover::after {
    left: 130%;
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
   
    -webkit-transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
}

 /* Remark-Remark-Remark-Remark-Remark-Remark-Remark-Remark-Remark-Remark-Remark-Remark-Remark- */

  @media (max-width: 1600px){
    .mainText {width: 1200px;}
  }
  @media (max-width: 1500px){
    .mainText {width: 1000px;}
    .mainText p {width: 310px;}
  }
  @media (max-width: 1250px){
    .mainText {width: 890px; }
  }
  /* 태블릿 */
  @media (max-width: 1020px){
    .Home-mainContents { display: none; }
    .mainText {width: 650px; }
    .Home-mainImg {
        background-image: url(../assets/1020px.png);
        width: 100%;
    }
  }
  @media (max-width: 750px){
    .mainText { width: 470px; }
  }
  @media (max-width: 599px){
    .mainText { width: 400px; }
  }

  /* 모바일 */
  @media (max-width: 470px){
    .Home-mainImg {
        width: 100%;
        height: 286px;
    }
    .Home-mainContents { 
        display: block; 
        position: relative; 
        width: 100%;
        height: 269px;
    }
    .mainText { 
        top: 0px; 
        width: 305px;
        padding: 0;
        margin: 0 auto;
    }
    .mainText h1 {
        font-size: 40px;
        width: 269px;
        margin: 15px 0 4px 0;
    }
    .mbtn {
        width: 305px;
        height: 51px;
    }
  }


</style>
