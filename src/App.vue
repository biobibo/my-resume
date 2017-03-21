<template>
  <div id="app">
    <div class="container">
      <div class="static">
        <div class="photo-name">
          <div class="space"></div>
          <div class="photo"></div>
          <h3 class="name">雷 淞</h3>
        </div>
        <div class="show-lists">
          <ul class="lists">
              <li class="list" id="list1" @mouseenter="show1" @mouseleave="hide1">
                <span>个 人</span>
                <div class="side-right" v-show="showStatus1">
                  <base-info></base-info>
                </div>
              </li>
            <li class="list" @mouseenter="show2" @mouseleave="hide2">
              <span>作 品</span>
              <div class="side-right" v-show="showStatus2">
                <production></production>
              </div>
            </li>
            <li class="list" @mouseenter="show3" @mouseleave="hide3">
              <span>技 能</span>
              <div class="side-right" v-show="showStatus3">
                <skill></skill>
              </div>
            </li>
            <li class="list" @mouseenter="show4" @mouseleave="hide4">
              <span>联 系</span>
              <div class="side-right" v-show="showStatus4">
                <contact></contact>
              </div>
            </li>
          </ul>
        </div>
        <music></music>
        <div class="contact-lists">
          <ul class="icon-lists">
            <li class="con-icon"><a href="https://github.com/biobibo" class="icon" target="_blank"></a></li>
            <li class="con-icon"><a href="" class="icon" target="_blank"></a></li>
            <li class="con-icon"><a href="" class="icon" target="_blank"></a></li>
            <li class="con-icon"><a href="" class="icon" target="_blank"></a></li>
          </ul>
          <p class="git-copyright">
            <span>Open source:
              <a href="https://github.com/biobibo" target="_blank">GitHub</a>
            </span>
            <br/>
             &nbsp;&nbsp;&nbsp;© copyright tmfpls,2017
          </p>
        </div>
      </div>
      <div class="animation-right" style="float: right;">
        <animation></animation>
      </div>
    </div>
  </div>
</template>

<script>
import BaseInfo from './components/BaseInfo.vue'
import Contact from './components/Contact.vue'
import  Production from './components/Production.vue'
import Skill from './components/Skill.vue'
import Animation from './components/Animation.vue'
import Music from './components/Music.vue'
export default {
  name: 'app',
  components: {
    'base-info':BaseInfo,
    'contact':Contact,
    'production':Production,
    'skill':Skill,
    'animation':Animation,
    'music':Music
  },
  data(){
    return {
      showStatus1: true,
      showStatus2: false,
      showStatus3: false,
      showStatus4: false,
    }
  },
  methods: {
    show1(){ this.showStatus1 = true},
    hide1(){ this.showStatus1 = false},

    show2(){ this.showStatus2 = true},
    hide2(){ this.showStatus2 = false},

    show3(){ this.showStatus3 = true},
    hide3(){ this.showStatus3 = false},

    show4(){ this.showStatus4 = true},
    hide4(){ this.showStatus4 = false}
  }
}
</script>

<style lang="scss" type="text/scss" scoped>
  @import "assets/css/base.css";

  #app{
    width:100%;
    height:100%;
  }

  .container{
    width:100%;
    height:100%;
    .static{
      width:15.625rem;
      height:100%;
      background-color: #272928;
      position: relative;
      float:left;
      .photo-name{
        width:100%;
        height:auto;
        .space{
          width:100%;
          height:1.875rem;
        }
        .photo{
          background: url("../static/img/head.png") 15% 15%/100% no-repeat;
          border-radius:50%;
          width:7.8125rem;
          height: 7.8125rem;
          margin: 0 auto;
          padding-top:1.875rem;
        }
        .name{
          font-size:2.5rem;
          text-align: center;
          line-height:1.875rem;
          margin-top: 1.875rem;
          color: #94c965;
          /*-webkit-text-stroke: 0.0625rem transparent;*/
          /*-webkit-text-fill-color: #659bff;*/
          /*-webkit-background-clip:text;*/
          /*background:linear-gradient(to right,#ff6700 20%,#659bff 50%,#94c965);*/

        }
      }
      .show-lists{
        width:100%;
        height:auto;
        .lists{
          width:100%;
          margin:0 auto;
          /*padding-top:1.5rem;*/
          .list{
            width:100%;
            font-size: 1.125rem;
            text-align: center;
            line-height: 1.5rem;
            color: #ffffff;
            margin-top: 1.5rem;
            cursor: pointer;
            transition:all 0.1s ease;
            span{
              display: block;
              width:100%;
              height:100%;
            }
            &:hover span {
               color: #ff6700;
               font-size: 1.5rem;
             }
            .side-right{
              width:70.625rem;
              height:41.25rem;
              position: absolute;
              top:1rem;
              left:15.625rem;
              background-color: #94c965;
              box-shadow: 0 0.0625rem 0.3125rem #ccc;
              z-index:10000;
            }
          }
        }
      }
      .contact-lists{
        width:100%;
        height:7.5rem;
        .icon-lists{
          width:12rem;
          height:2.8125rem;
          margin:2rem auto 0 auto;
          .con-icon{
            float: left;
            width:2.8125rem;
            height:2.8125rem;
            transition:all 0.2s ease;
            &:nth-child(1){
              background:url("../static/icon/github.png") center center/85%  no-repeat;
              opacity:0.6;
            }
            &:nth-child(2){
               background:url("../static/icon/mail.png") center center/90%  no-repeat;
               opacity:0.6;
             }
            &:nth-child(3){
               background:url("../static/icon/QQ.png") center center/140%  no-repeat;
               opacity:0.6;
             }
            &:nth-child(4){
               background:url("../static/icon/weixin.png") center center/150%  no-repeat;
               opacity:0.6;
             }
             &:hover{
                opacity:1;
              }
            .icon{
              width:2.8125rem;
              height:2.8125rem;
              display: block;
            }
          }
        }
      }
      .git-copyright{
        font-size: 0.875rem;
        color: #cccccc;
        text-align: center;
        width:100%;
        height:auto;
        margin-top: 2rem;
        span{
          display: inline-block;
          margin-bottom: 0.5rem;
          a{
            color: #ffffff;
            outline: solid #ffffff 0.0625rem;
            font-weight: 100;
            opacity:0.6;
            &:hover{
               color: #ff6700;
               opacity:1;
             }
          }
        }
      }
    }
    .animation-right{
      float: right;
      width:calc(100% - 15.625rem);
      height:100%;
    }
  }

</style>
