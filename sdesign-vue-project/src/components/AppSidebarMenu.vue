<template>
  <div id="menu-toggle-wrapper">
    <nav class="menu-toggle-button">
      <input type="checkbox">
      <!-- 
        햄버거 메뉴 버튼을 만드는 스펜태그 가운데 스펜은
        보이지 않게 한다. 
      -->
      <span></span>
      <!-- 가운데 스펜은 없는척 -->
      <span id="hidden-span"></span>
      <span></span>

      <!-- Menu that opens when the button is checked -->
      <ul id="munu-lists">
        <router-link type="li" to="#">
          <!-- <a>{{ item }}</a> -->
        </router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      item: [
        {list: 'a'},
        {list: 'b'},
      ]
    }
  }
}
</script>

<style>

</style>
