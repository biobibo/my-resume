<template>
  <div class="music">
    <audio src="" ref="myAudio"></audio>
    <div class="music-pic"></div>
    <div class="music-message">
      <p class="music-name">我是歌名</p>
      <p class="musicer">我是歌手</p>
    </div>

    <div class="music-control">
      <div class="control play-pause" title="暂停/播放" @click="change" ref="control">
      </div>
      <div class="next" title="下一首" ref="next" @click="next">
        <img src="../../static/icon/next_icon.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
//  import music from '../assets/js/music'
  export default{
    data(){
      return{}
    },
    created(){
      this.getChannel();
      this.autoNext()
    },
    methods:{
      //暂停播放控制
      change(){
        let myAudio=this.$refs.myAudio;
        if (myAudio.paused){
          myAudio.play();
          $('.control').removeClass('pause-play').addClass('play-pause')
        }else{
          myAudio.pause();
          $('.control').removeClass('play-pause').addClass('pause-play')
        }
      },
      //获取随机频道
      getChannel(){
        let getIt=this.getMusic();
        $.ajax({
          url:'http://api.jirengu.com/fm/getChannels.php',
          dataType:'json',
          type:'get',
          success:function (res) {
            getIt()
          }
        })
      },
      //获取歌曲
      getMusic:function(){
        $.ajax({
          url:'http://api.jirengu.com/fm/getSong.php',
          dataType:'json',
          type:'get',
          success:function (res) {
            let resource=res.song[0];
            let url=resource.url;
            let pic=resource.picture;
            let title=resource.title;
            let author=resource.artist;

            $('audio').attr('src',url);
            $('.music-name').text(title);
            $('.musicer').text(author);
            $('.music-pic').css({
              'background':'url('+ pic + ')',
              'background-size':'cover',
              'background-position':'center',
              'background-repeat':'no-repeat'
            });
            this.$refs.myAudio.play();
          }
        })
      },
      //下一首
      next(){
        this.getChannel()
      },
      //自动播放下一首
      autoNext(){
       if (this.$refs.myAudio.currentTime === this.$refs.myAudio.duration){
         this.getChannel()
       }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .music{
    width:100%;
    height:5rem;
    background: saddlebrown;
    margin-top: 2rem;
    position: relative;
    .music-pic{
      width:4rem;
      height:4rem;
      /*background-color: #94c965;*/
      position: absolute;
      top:0.5rem;
      left:.5rem;
    }
    .music-message{
      width:4rem;
      height:4rem;
      position: absolute;
      top:0.5rem;
      left:4.8rem;
      .music-name{
        font-size: 1rem;
        color: #ffffff;
      }
      .musicer{
        font-size: 0.875rem;
        margin-top: 0.5rem;
        color: #aeaeae;
        overflow: hidden;
      }
    }
    .music-control{
      width:5.5rem;
      height:4rem;
      position: absolute;
      top:0.5rem;
      right:0;
      .next{
        position: absolute;
        top:0.5rem;
        right:0.5rem;
        border-radius: 50%;
        background: #272928;
        width:3rem;
        height:3rem;
        cursor: pointer;
        img{
          width:2rem;
          height:2rem;
          display: inline-block;
          margin:0.5rem;
        }
      }
  }
  }
  .pause-play{
    display: inline-block;
    background: url("../../static/icon/pause_icon.png") center center no-repeat;
    width:2rem;
    height:2rem;
    padding-top:2rem;
    cursor: pointer;
    z-index: 1000;
  }
  .play-pause{
    display: inline-block;
    background: url("../../static/icon/play_icon.png") center center no-repeat;
    width:2rem;
    height:2rem;
    padding-top:2rem;
    cursor: pointer;
    z-index: 1000;
  }


</style>
