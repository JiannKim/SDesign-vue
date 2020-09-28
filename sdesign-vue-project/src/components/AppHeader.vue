<template>
  <header id="app-header-wrapper">
    
    <a class="app-header-logo-link" href="/">
        <img class="app-header-logo" src="https://i.ibb.co/pWfncYT/s-Design-Logo-01.png" alt="s-Design-Logo" />
    </a>
    <div class="app-header-search-box">
      <img class="header-search-icon" src="https://i.ibb.co/5LmPhyS/serch-Icon.png" alt="serch-Icon" />
      <input type="text" placeholder="Search for sound effects" />
    </div>
    <ul class="app-header-menu-lists">
      <a href="/" target="blank" class="header-menu-list"><li>Pricing</li></a>
      <a href="/" target="blank" class="header-menu-list"><li>FAQ</li></a>
      <a href="/" target="blank" class="header-menu-list"><li>SFXHD</li></a>
      <a href="/" target="blank" class="header-menu-list"><li>Sign in/Join</li></a>
    </ul>
    <div id="header-wrapper">
        <AppSidebarTabMenu />
        <AppHeaderSearchTab />
    </div>
  </header>
</template>

<script>
import AppSidebarTabMenu from './AppSidebarTabMenu.vue'
import AppHeaderSearchTab from './AppHeaderSearchTab.vue'

export default {
  components: {
    AppSidebarTabMenu,
    AppHeaderSearchTab
  }
}
</script>

<style>
  * {
    transition: all 0.3s cubic-bezier(.38, .88, .38, .88);      
  }

  /* 헤더 박스 스타일 */
  #app-header-wrapper {
    background-color: #fff;
    min-height: 60px;
    width: 100%;
    height: 73px;
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.15);
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 2rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
  }
  /* ul-li */
  .app-header-menu-lists {
    display: flex;
    margin-right: 150px;
    width: 440px;
  }
  .header-menu-list {
    color: #313131;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    margin-left: 50px;
    list-style: none;
  }
  /* header logo */
  .app-header-logo {
    width: 50px;
    margin: 0 30px 0 147px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .app-header-search-box {
    width: 743px;
    height: 43px;
    border-radius: 3px;
    background-color: #f3f3f3;
    position: relative;
    display: flex;
    transition: width 0.5s cubic-bezier(0.4,0.2,0.05,2.0);
  }
  .header-search-icon {
    position: absolute;
    left: 19px;
    top: 13px;
  }
  
  .app-header-search-box input {
    border: none;
    background-color: #f3f3f3;
    font-size: 17px;
    /* width: 670px; */
    width: 100%;
    align-items: center;
    margin-left: 45px;
    margin: 0 5px 0 45px;
    outline: none;
  }
  

 /* Remark-Remark-Remark-Remark-Remark-Remark-Remark-Remark-Remark-Remark-Remark-Remark-Remark- *


  /* media Quary */   
  @media (max-width: 1600px){
    .app-header-wrapper {width: 100%;}
    .app-header-search-box {
      width: 40%;
    transition: width 0.5s cubic-bezier(0.4,0.2,0.05,2.0);

    }
  }
  @media (max-width: 1500px){
    .app-header-search-box {width: 41%;}
    .app-header-logo {margin-left: 50px;}
    .app-header-menu-lists {margin-right: 50px;}
  }
  @media (max-width: 1250px){
    .app-header-logo { margin-left: 30px; }
    .app-header-search-box { width: 38%; }
    .app-header-menu-lists { 
      margin-right: 30px; 
      padding: 0;
      }
  }
  /* 태블릿 */
  @media (max-width: 1020px) {
    #app-header-wrapper {
      width: 100%; 
      display: flex; 
      justify-content: center;
      /* border: 1px solid red; */
      }
    #header-wrapper {
      width: 100%;
      position: absolute;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 30px 0 30px;
      transition: margin 0.5s cubic-bezier(0.4,0.2,0.05,2.0);
      /* border: 1px solid red; */
      }
    .app-header-logo-link {
      z-index: 1;
      }
    .app-header-search-box { display: none; }
    .app-header-menu-lists { display: none; }
  }
  @media (max-width: 750px){
  }
  @media (max-width: 599px){
  }

  /* 모바일 */
  @media (max-width: 440px){
    .app-header-wrapper {width: 100%;}
  }
</style>