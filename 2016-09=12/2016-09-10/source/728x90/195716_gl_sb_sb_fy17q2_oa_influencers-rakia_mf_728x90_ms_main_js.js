function init(){
   document.getElementById('banner').className = 'is-visible';
   console.log('Banner Initialized');
}

var totalDuration = 15;
var totalLoop = 1;
var currentLoop = 1;
var _banner = document.getElementById('banner');
var _bannerHtml = _banner.innerHTML;
var loop;

var loopControll = function(){
  loop = setInterval(function(){
  
    if(currentLoop < totalLoop){
      changeHtml();
    }else {
      clearInterval(loop);
    }
    
  },totalDuration*1000);
};

var changeHtml = function(){
  if(currentLoop < totalLoop){
    _banner.innerHTML = _bannerHtml;

    
    currentLoop++;
    console.log('loop');
  }
};

window.onload = function(){
  init();
  loopControll();
};
