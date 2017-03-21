let myAudio= $('audio')[0];
//暂停/播放控制
$('.control').click(function () {
    if (myAudio.paused){
      playM()
    }else {
      pauseM()
    }
});
//切换到下一首
$('.next').click(function () {
  getChannel()
});

//播放
function playM() {
  try {
    myAudio.play();
    $('.control').removeClass('pause-play').addClass('play-pause')
  }catch(e) {
    console.log(e)
  }
}
//暂停
function pauseM() {
  try {
    myAudio.pause();
    $('.control').removeClass('play-pause').addClass('pause-play')
  }catch (e){
    console.log(e)
  }

}

// 豆瓣FM随机频道音乐(多谢饥人谷老师整理的API)
// 获取随机频道
function getChannel() {
  $.ajax({
    url:'http://api.jirengu.com/fm/getChannels.php',
    dataType:'json',
    Method:'get',
    success:function (response) {
      let channels=response.channels;
      let num=Math.floor(Math.random()*channels.length);
      let channelName=channels[num].name;
      getMusic()
    }
  });
}
//获取歌曲
function getMusic() {
  $.ajax({
    url:'http://api.jirengu.com/fm/getSong.php',
    dataType:'json',
    Method:'get',
    success:function (res) {
      let resource=res.song[0];
      let url=resource.url;//歌曲路径
      let pic=resource.picture;//歌曲图片
      let title=resource.title;//歌曲名
      let author=resource.artist;//歌手

    $('audio').attr('src',url);
    $('.music-pic').css({
      'background':'url('+pic+')',
      'background-repeat':'no-repeat',
      'background-position':'center',
      'background-size':'cover'
    });
    $('.music-name').text(title);
    $('.musicer').text(author);
    playM();
    }
  })
}

//自动播放下一首
function autoNext() {
  if (myAudio.currentTime === myAudio.duration){
    getChannel()
  }
}
// setInterval(autoNext,500);

//页面载入自动播放
$(document).ready(getChannel());
