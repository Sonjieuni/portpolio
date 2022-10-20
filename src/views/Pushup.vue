<template>
<div>
     <v-btn class="back" background-color="primary" elevation="2" large text a href="/portpolio/#page3">BACK</v-btn>  
  <div class="test-wrap">
    <br>
    <div class="title">
    <p><strong>푸쉬업 카운터</strong></p>
    </div>

    <v-layout class="container" >      
        <v-flex class="flex">
          <img src="image/pushup/pushupimg.png" class="image">
        </v-flex>
        <br>
        <v-flex class="flex">
        <img src="image/pushup/pushupimg2.png" class="image">
        </v-flex>
    </v-layout>
        <div class="text1">
        <strong>푸쉬업 카운터 모델링 작품</strong>
        <div class="text2">
        <strong>Tinkercade로 모의 구현한 푸쉬업 카운터</strong></div>
        </div>

  </div>
  <div class="content"><strong> &nbsp; ⦁시스템 기능 및 동작
<p></p>
- 초음파 센서를 이용, 푸쉬업 거리를 측정<p></p>
- 측정된 푸쉬업 개수와 칼로리를 전시하기 위해 LCD를 이용<p></p>
- 올바른 자세 거리 측정을 위해 거리마다 다른 색의 3색 LED를 이용</strong>
  </div>
</div>
</template>

<script>
export default {}

</script>

<style>
.back{
  background-color: yellowgreen;
  position: fixed;
}
.title {
    font-size: 60px;
    text-align: center;
}
.container {
    flex-direction: row;
    text-align: center;

}
.image {
    width: 600px;
    height: 400px;
    margin: 0 auto;
    margin-right: auto;
}
.flex {
    font-size: 20px;
}
.content {
    font-size: 18px;
    text-align: center;
}
.text1 {
    text-align: left;
    padding-left: 300px;
    padding-top: 20px;
}
.text2 {
    text-align: right;
    padding-right: 200px;
}

</style>