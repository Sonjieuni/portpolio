<template>
    <div class="header">
        <v-layout align-center>
            <div class="logo">손지은의 포트폴리오</div>
            <v-spacer></v-spacer>
            <div class="nav">
            <a href="#page1" v-smooth-scroll class="scroll">HOME&nbsp;&nbsp;&nbsp;</a>
            <a href="#page2" v-smooth-scroll class="scroll">&nbsp;ABOUT&nbsp;&nbsp;&nbsp;</a>
            <a href="#page3" v-smooth-scroll class="scroll">&nbsp;PROJECT&nbsp;&nbsp;&nbsp;</a>
            <a href="#page4" v-smooth-scroll class="scroll">&nbsp;CONTACT&nbsp;&nbsp;&nbsp;</a>
            </div>
        </v-layout>
    </div>
</template>

<script>

export default {

}
</script>

<style scoped>
    .header {
        padding:20px;
        position: sticky;
        top: 0px; 
        background-color: white;
        box-shadow: 0 6px 6px #eee;
    }
    .header .scroll {
        transition-delay: 3s;
        text-decoration : none;
        font-size: 17px;
        color: black;
    }
    .header .logo {
        font-size:20px;
        font-weight:bold;
    }
</style>

