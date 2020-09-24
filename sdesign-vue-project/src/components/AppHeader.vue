<template>
    <div>
      <header class="App-header">
        <div class="Tab-wrapper">
          <nav id="menuToggle">
            <input type="checkbox" />
            
            <!-- 햄버거 메뉴 버튼을 만드는 스펜태그 가운데 스펜은
            보이지 않게 한다. -->
            <span></span>
            {/* 가운데스펜 없는척 */}
            <span id="hiddenSpan"></span>
            <span></span>
            
            <!-- 버튼이 체크되면 나타나는 메뉴박스 -->
            <ul id="menu">
              <a href="#"><li>Pricing</li></a>
              <a href="#"><li>FAQ</li></a>
              <a href="#"><li>SFXHD</li></a>
              <a href="#"><li>Sign in</li></a>
              <a href="#"><li>Join</li></a>
            </ul>
          </nav>
          <a href="/">
            <img class="App-logo" src="https://i.ibb.co/FVRcqBh/s-Design-Logo.png" alt="s-Design-Logo" />
          </a>
          <div id="searchToggle">
            <input type="checkbox" class="search-bnt" />
            <BsSearch class="Tab-icon-BeSearch" />
            <div id="search">
              <span>
                <img src="https://i.ibb.co/5LmPhyS/serch-Icon.png" alt="serch-Icon" />
              </span>
              <input type="text" placeholder="Search for sound effects" />
            </div>
          </div>
        </div>
        <div class="search-input">
          <img class="search-icon" src="https://i.ibb.co/5LmPhyS/serch-Icon.png" alt="serch-Icon" />
          <input type="text" placeholder="Search for sound effects" />
        </div>
          <ul class="App-menu">
            <a href="/" target="blank" class="header-menu"><li>Pricing</li></a>
            <a href="/" target="blank" class="header-menu"><li>FAQ</li></a>
            <a href="/" target="blank" class="header-menu"><li>SFXHD</li></a>
            <a href="/" target="blank" class="header-menu"><li>Sign in/Join</li></a>
          </ul>
      </header>
    </div>
</template>

<script>
export default {

}
</script>

<style>
  /* 
  // 헤더 박스 스타일
  .App-header {
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
    z-index: 2;
  } */

  .App-menu {
    display: flex;
    margin-right: 150px;
  }
  .header-menu {
    color: #313131;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    margin-left: 50px;
    list-style: none;
  }
  
  .App-logo {
    width: 110px;
    margin: 0 30px 0 147px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .search-input {
    width: 743px;
    height: 43px;
    border-radius: 5px;
    background-color: #f3f3f3;
    position: relative;
    display: flex;
    transition: width 0.5s cubic-bezier(0.4,0.2,0.05,2.0);
  }
  .search-icon {
    position: absolute;
    left: 19px;
    top: 13px;
  }
  
  .search-input input {
    border: none;
    background-color: #f3f3f3;
    font-size: 17px;
    width: 670px;
    align-items: center;
    margin-left: 45px;
  }
  
  .search-input > input:focus {
    outline: none;
  }

  .Tab-icon-BeSearch {
    all: unset;
    display: none;
    cursor: pointer;
    color: #313131;
  }

  /* media Quary */
   
@media (max-width: 1600px){
  .App-header {width: 100%;}
  .search-input {
    width: 40%;
   transition: width 0.5s cubic-bezier(0.4,0.2,0.05,2.0);

  }
}
@media (max-width: 1500px){
  .search-input {width: 41%;}
  .App-logo {margin-left: 50px;}
  .App-menu {margin-right: 50px;}
}
@media (max-width: 1250px){
  .App-logo {margin-left: 30px;}
  .search-input {width: 38%;}
  .App-menu {margin-right: 30px; padding: 0;}
}
/* 태블릿 */
@media (max-width: 1020px) {
  /* .App-header {width: 100%; display: flex; justify-content: center;} */
  .Tab-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
   margin: 0 30px 0 30px;
   transition: margin 0.5s cubic-bezier(0.4,0.2,0.05,2.0);
  }
  .search-input {display: none;}
  .Tab-icon-BeSearch, .Tab-app-menu {
    display: flex;
    justify-content: center;
    margin: 5px;
  }
  .App-menu {display: none;}
  #menuToggle {display: block !important;}
  #searchToggle {display: block !important;}
}
@media (max-width: 750px){
}
/* 모바일 */
@media (max-width: 440px){
  .App-header {width: 100%;}
}
</style>