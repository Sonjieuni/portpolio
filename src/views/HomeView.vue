<template>
  <div id="page1">
    <swiper :options="swiperOption" class="swiper">
      <swiper-slide data-aos="fade-in" data-aos-duration="1000" class="slide" style="background-image:url(image/top3.jpg);">
        <v-layout data-aos="fade-up" data-aos-duration="1000" fill-height align-center justify-center>
          <div class="slog">"손지은"을 소개합니다</div>
        </v-layout></swiper-slide>

      <swiper-slide class="slide" style="background-image:url(image/top2.jpg);">
        <v-layout fill-height align-center justify-center>
          <div class="slog">"손지은"의 포트폴리오</div>
        </v-layout></swiper-slide>
    </swiper>

    <article class="section" id="page2">
      <span></span>
      <div class="header">ABOUT</div>
      <v-layout fill-height align-center justify-center>
        <div class="cont1">
          <div class="photo">
          <img src="image/sonjieun.jpg" alt="jieun" contain height="360px" width="300px" class="photo">
          </div>
          <div class="profile">
          <h3>"PROFILE"</h3>
          <br>
          <p>손지은</p>
          <p>2000.11.01</p>
          <p>010-4164-1045</p>
          <p>MBTI : ESFJ</p>
          </div>
          <div class="License">
            <h3>License</h3>
            <ul>
              <li>
                <p></p>
                <span>2021.10 <p></p></span>
                <span>운전면허 2종 보통</span>
                </li>
              <li>
                <p></p>
                <span>2021.08 <p></p></span>
                <span>정보처리산업기사</span>
              </li>
              <li>
                <p></p>
                <span>2021.12 <p></p></span>
                <span>네트워크관리사 2급</span>
              </li>
            </ul>
            <p></p>
            <h3>Experience</h3>
            <ul>
              <li>
                <p></p>
                <span>2019.02 <p></p></span>
                <span>세현고등학교 졸업</span>
                </li>
              <li>
                <p></p>
                <span>2022.02 <p></p></span>
                <span>명지전문대학교 정보통신공학과 졸업</span>
              </li>
              <li>
                <p></p>
                <span>2022.03 <p></p></span>
                <span>명지전문대학교 정보통신공학과 전공심화 재학</span>
                <br><span>(4년제 학사학위 취득중)</span>
              </li>
            </ul>
          </div>
        </div>
      </v-layout>
    </article>

    <div class="section" id="page3">
      <div class="header">PROJECT LIST</div>
        <v-layout class="wrap" align-center justify-center>
        <v-flex xs3 class="pa-2" data-aos="fade-left" data-aos-delay="200">
          <v-responsive :aspect-ratio="1/1">
          <img src="image/deep.jpg" class="image" @click="deep">
          <div class="text" @click="deep">
            <p><strong>딥러닝</strong></p>
            <p><strong>얼굴인식 출석체크</strong></p>
          </div>
          </v-responsive>
        </v-flex>
 
        <v-flex xs3 class="pa-2" data-aos="fade-down" data-aos-delay="200">
          <v-responsive :aspect-ratio="1/1">
            <img src="image/pushup.jpg" class="image" @click="pushup">
            <div class="text" @click="pushup">
            <p><strong>푸쉬업 카운터</strong></p>
          </div>
          </v-responsive>
        </v-flex>
      
        <v-flex xs3 class="pa-2" data-aos="fade-up" data-aos-delay="200">
          <v-responsive :aspect-ratio="1/1">
            <img src="image/order.png" class="image" @click="kiosk">
            <div class="text" @click="kiosk">
            <p><strong>간편 주문 + 신속 결제</strong></p>
            <p><strong>모바일 키오스크 앱</strong></p>
          </div>
          </v-responsive>
        </v-flex>
        <v-flex xs3 class="pa-2" data-aos="fade-right" data-aos-delay="200">
          <v-responsive :aspect-ratio="1/1">
            <img src="image/VIVO.png" class="image" @click="platform">
            <div class="text" @click="platform">
            <p><strong>"VIVO"</strong></p>
            <p><strong>비대면 화상 플랫폼</strong></p>
          </div>
          </v-responsive>
        </v-flex>
      </v-layout>
    </div>
    
    <div class="section2" id="page4" style="background-image:url(image/top1.jpg);">
      <div class="header" style="color: white">CONTACT</div>
      <p></p>
      <div class="content">
        <span><strong>" THANK YOU "</strong></span>
      </div>
        <div class="content2">
          <span>PHONE : 010-4164-1045</span>
          <p></p>
          <span>E-MAIL : jeson1101@naver.com</span>
        </div>
      </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import AOS from "aos"
import "aos/dist/aos.css";

  export default {
    name: 'Home',
    data() {
      return {
        swiperOption:{
          loop:true,
          autoplay:{
            delay:1000
          }
        }
      }
    },
    mounted(){
      AOS.init()
    },
    components:{
      Swiper,
      SwiperSlide
    },
    methods: {
      deep: function() {
        this.$router.push("/deep");
        },
        pushup: function() {
        this.$router.push("/pushup");
        }, 
        platform: function() {
          this.$router.push("/platform");
        },
        kiosk: function() {
          this.$router.push("/kiosk");
        }
    }

  }
</script>
<style scoped lang="less">

  .swiper{
    height:100vh;
    .slide{
      background-size:cover;
      background-position: center center;
      .slog{
        font-size:65px;
        font-weight:bold;
        color: white;
      }
    }
  }
  .section{
    width:1190px;
    margin: 0 auto;
    padding-top: 60px;
    padding-bottom: 40px;
    min-height:100vh;
  }
  .section2 {
    width:fill;
    margin: 0 auto;
    padding-top: 60px;
    padding-bottom: 40px;
    min-height:100vh;
  }
  .header{
      text-align: center;
      font-size: 40px;
      font-weight: bold;
    }
  .image{
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 20%;
      margin: auto;
      background-color:gray;
      position: absolute;
      opacity: 0.7;
    }
  .text{
      text-align: center;
      position: absolute;
      left: 50%;
      top: 50%;
      font-size: 23px;
      color: black;
      transform: translate(-50%, -50%);
      width: 220px;
    }
  .cont1{
    display: flex;
    justify-content: space-evenly;
    width:100%; 
    height:100vh;
    align-items: stretch; 
    }
  .article{
    display: flex;
    height:100vh;
    }
  .profile{
    margin-top: auto;
    margin-bottom:auto;
  }
  .License{
    margin-top: auto;
    margin-bottom:auto;
  }
  .photo{
    margin-top: auto;
    margin-bottom:auto;
    border-radius: 20%;
  }
  .wrap{
    position: relative;
    align-content: center;
    margin: 0;
    min-height:50vh;
  }
  .content {
    text-align: center;
    font-size: 40px;
    padding: 10%;
    color: pink;
  }
  .content2 {
    text-align: center;
    font-size: 25px;
    color: white;
  }

</style>