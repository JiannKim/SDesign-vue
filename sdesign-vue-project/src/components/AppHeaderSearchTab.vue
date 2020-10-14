<template>
  <!-- 검색 토글 -->
  <div id="side-tab-search-wrapper">
    <input type="checkbox" class="tab-search-button" />
    <font-awesome-icon :icon="['fas', 'search']" class="tab-icon" />
    <div id="search">
      <span>
        <img src="https://i.ibb.co/5LmPhyS/serch-Icon.png" alt="serch-Icon" />
      </span>
      <input type="text" placeholder="Search for sound effects" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeaderSearchTab'
}
</script>

<style>

  /* Tab 검색 영역 */
  .tab-icon{
    all: unset;
    position: absolute;
    top: -20px;
    right: 0;
    display: none;
    cursor: pointer;
    color: #313131;
  }

  #side-tab-search-wrapper {
    /* ??? */
    display: none;
    position: relative;
    width: 100%;
    margin: 0 30px;

    z-index: 1;

    /* -webkit-user-select: none; */
    user-select: none;
  }

  .tab-search-button {
    display: block;
    width: 40px;
    height: 40px;
    position: absolute;
    top: -24px;
    right: 0px;
    
    cursor: pointer;
    
    opacity: 0; /* hide checkbox */
    z-index: 2; /* 돋보기 앞에 배치 */
    
    -webkit-touch-callout: none;
    border: 10px solid red;
  }

  /* 토글 인풋변환 */
  .tab-search-button:checked ~ #search {
    /* opacity: 1; */
    transform-origin: 0% 0%;
    height: auto;
    padding: 15px 0px 15px 0px;
    transform: translate(0,-1%);
    background: cdcdcd;

    transition: padding 0.5s cubic-bezier(0.4,0.2,0.05,2.0);
  }
    
  /* 화면 오른쪽 상단에 배치 */
  #search {
    position: fixed;
    width: 100%;
    height: 0;
    top:73px;
    left: 0;
    overflow: hidden;
    background: rgba(32, 32, 32, 0.95);
    list-style-type: none;
    -webkit-font-smoothing: antialiased;

    transform-origin: 0% 0%;
    transform: translate(0%, -2%);

    transition: padding 0.3s cubic-bezier(0.05,0.7,0.5,1.0); 
  }
  #search input {
    width: 90%;
    height: 45px;
    border: none;
    border-radius: 3px;
    font-size: 18px;
    outline: none;
    padding: 7px 10px 7px 40px;
    box-sizing: border-box;
    background-color: #f3f3f3;
  }
  #search input:focus {
    box-shadow: 0 0 0 3px #A550A6 inset;
  }

  #search span {
    position: relative;
  }
  #search img {
    position: absolute;
    padding-left: 12px;
    top: 41%;
  }
 /* Remark-Remark-Remark-Remark-Remark-Remark-Remark-Remark-Remark-Remark-Remark-Remark-Remark- */

  /* media Quary */
  /* 태블릿 */
  @media (max-width: 1020px) {
    #side-tab-search-wrapper { display:  block;}
   
    .tab-icon {
      display: flex;
      justify-content: center;
      margin: 5px;
    }
  }
  @media (max-width: 750px){
  }
  @media (max-width: 599px){
  }

  /* 모바일 */
  @media (max-width: 440px){
    /* .app-header-wrapper {width: 100%;} */
  }
</style>