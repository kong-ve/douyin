var container = document.getElementById('slip');
var pages;
var slip;
var moveIsTrue = false;
var userData = [{
    uid: new Date().getTime() + 1,
    imageUrl: '../image/suipai/suipai1.png',
    videoUrl: 'http://7z2dc9.com1.z0.glb.clouddn.com/apicloud/abb9595e74647defe21d748e12f7a7c9.mp4',
}, {
    uid: new Date().getTime() + 2,
    imageUrl: 'http://7z2dc9.com1.z0.glb.clouddn.com/apicloud/1a73dd6a90a52b2aad1aafefbf977e4c.png',
    videoUrl: 'http://7z2dc9.com1.z0.glb.clouddn.com/apicloud/00b2141bff87cfaa75498f66214aeb9e.mp4',
}, {
    uid: new Date().getTime() + 3,
    imageUrl: 'http://7z2dc9.com1.z0.glb.clouddn.com/apicloud/ec65083dbdc6bb18a6318591ac6c15a5.png',
    videoUrl: 'http://7z2dc9.com1.z0.glb.clouddn.com/apicloud/9d9906ba474152307d7edca6bd72fbe2.mp4',
}, {
    uid: new Date().getTime() + 4,
    imageUrl: 'http://7z2dc9.com1.z0.glb.clouddn.com/apicloud/51fc1ddde9790c96a6986b74342a15e3.png',
    videoUrl: 'http://7z2dc9.com1.z0.glb.clouddn.com/apicloud/dc811d2c4d88b409063c7ea2065fe6a0.mp4',
}, {
    uid: new Date().getTime() + 5,
    imageUrl: 'http://7z2dc9.com1.z0.glb.clouddn.com/apicloud/51fc1ddde9790c96a6986b74342a15e3.png',
    videoUrl: '../res/src/test.mp4',
}];
var page = 0;
userData.map(function(v, i) {
    var el = document.createElement('div');
    var el_child = document.createElement('video');
    var fix_message = document.createElement('div');
    var fix_message_in = document.createElement('li');
    var fix_message_alink = document.createElement('div');
    var fix_message_repick = document.createElement('div');
    el.className = 'swipe-box';
    el_child.src = v.videoUrl;
    el_child.id = v.uid;
    el_child.poster = v.imageUrl;
    el_child.autoplay = false;
    el_child.loop = true;
    el_child.type='video/mp4';
    // el_child.setAttribute('onclick','showPlay(this)');
    el_child.muted  = true;
    el_child.setAttribute('playsinline', 'true');
    el_child.setAttribute('webkit-playsinline', 'true');
    el_child.setAttribute('x5-video-player-type',"h5")
     el_child.setAttribute('x5-video-player-fullscreen',"portraint")
     el_child.setAttribute('webkit-playsinline',"true")
     el_child.setAttribute('playsinline',"true" )
     el_child.setAttribute('raw-controls',"true")
      el_child.setAttribute('x-webkit-airplay',"true")
       el_child.setAttribute('x5-video-orientation',"portraint")
    el_child.className = 'video_max';
    fix_message.id = "fixmessage_info";
    fix_message_in.className = "username";
    el_child.codecs="avc1.42E01E, mp4a.40.2"
    // fix_message.style.top = 15 + (i * 35) + 'em';
    fix_message_in.innerHTML = '<div style="background:url(' + v.imageUrl + ') 40% 45%" class="userimg"></div><span class="alink_s"><span class="alink_s_action">+</span></span>'
    fix_message_alink.className = "link";
    fix_message_alink.innerHTML = "<span class='icon iconfont icon-fenxiang11 in_ac'></span>"
    // fix_message_alink.setAttribute('onclick','onenShare()')
    // var img = document.createElement('img');
    // img.id = 'imgs';
    // img.className = 'img_max';
    fix_message.appendChild(fix_message_in)
    fix_message.appendChild(fix_message_alink)
    fix_message.appendChild(fix_message_repick)
    // el.appendChild(img);
    el.appendChild(el_child);
    var i_el = document.createElement('i');
    i_el.className = 'play-video hide-video icon iconfont icon-play';
    el.appendChild(fix_message);
    el.appendChild(i_el);
    // el_child.onclick='this.paused = !this.paused';
    // el_child.onclick='showC(this)';
    // el.onclick='showC(this)';
    container.querySelector('.swipe').appendChild(el);
})
pages = document.querySelectorAll('.swipe-box');
// console.log(JSON.stringify(pages[0].querySelector('#fixmessage_info').getElementsByTagName('div').length))



document.getElementById(userData[0].uid).play();


document.getElementById(userData[0].uid).muted = false;
// document.getElementById(userData[this.page].uid).play();
// setTimeout(function(){pages[0].querySelector('.img_max').style.display = 'none'},2000);
// setTimeout(function(){document.getElementById(userData[0].uid).pause()},40);
// setTimeout(function(){document.getElementById(userData[0].uid).play()},60);
slip = Slip(container, 'y').webapp(pages);
var link_list = document.querySelectorAll('.link');
console.log(JSON.stringify(link_list));
for(var i = 0;i<link_list.length;i++){
  if(checkPC()){
     link_list[i].addEventListener('click', onenShare);
    }else{
      link_list[i].addEventListener('touchend',onenShare );
    }
  }

var cocoVideo;
var params = {
    mode: 'all',
    min_time: '1',
    max_time: '15',
    img_num: '1'
};
function checkPC() {
var userAgentInfo=navigator.userAgent;
var Agents =new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod");
var flag=true;
for(var v=0;v<Agents.length;v++) {
 if(userAgentInfo.indexOf(Agents[v])>0) {
   flag=false;
   break;
 }
}
return flag;
}
apiready = function() {
        api.parseTapmode();
        var header = $api.byId('aui-header');
        $api.fixStatusBar(header);
        // slip._onTouchEnd();

        // cocoVideo = api.require('cocoVideo');
        // cocoVideo.config(params, function(ret) {
        //     if (ret.status == 'error') {
        //         alert(ret.msg);
        //     }
        // });
        slip.start(function(event) {
                // console.log('start');
                // console.log(JSON.stringify(this));
                page = this.page;
                // 事件对象
                moveIsTrue = false;
                // 当前坐标值
                // console.log(JSON.stringify(userData[this.page]));
                // if (!document.getElementById(userData[this.page].uid).paused)
                // document.getElementById(userData[this.page].uid).pause();
            })
            .move(function(event) {
                // console.log('move');
                moveIsTrue = true;
                // console.log(JSON.stringify(this));
            })
            .end(function() {

                // console.log(JSON.stringify(this));

                if (this.finger == null) {
                    if (document.getElementById(userData[this.page].uid).paused) {
                        document.getElementById(userData[this.page].uid).play();
                        // document.getElementById(userData[this.page].uid).pause();
                        // document.getElementById(userData[this.page].uid).play();
                        document.getElementById(userData[this.page].uid).muted = false;
                        $api.removeCls(pages[this.page].querySelector('.play-video'), 'show-video');
                        $api.addCls(pages[this.page].querySelector('.play-video'), 'hide-video');
                    } else {
                        document.getElementById(userData[this.page].uid).pause();
                        console.log(JSON.stringify($api.hasCls(pages[this.page].querySelector('.play-video'), 'hide-video')));
                        $api.removeCls(pages[this.page].querySelector('.play-video'), 'hide-video');
                        $api.addCls(pages[this.page].querySelector('.play-video'), 'show-video');
                        console.log(JSON.stringify($api.hasCls(pages[this.page].querySelector('.play-video'), 'hide-video')));
                    }
                    return false;
                } else {
                    document.getElementById(userData[page].uid).pause();
                    page = this.page;
                    document.getElementById(userData[this.page].uid).pause();
                    document.getElementById(userData[this.page].uid).muted = false;
                    // document.getElementById(userData[this.page].uid).pause();
                    document.getElementById(userData[this.page].uid).play();

                }

                // console.log('end');
                // console.log(JSON.stringify(this.page));
                // if (document.getElementById(userData[this.page].uid).paused) {
                //     document.getElementById(userData[this.page].uid).play();
                // }else{
                //   document.getElementById(userData[this.page].uid).pause();
                // }
                // 滑动方向
                // console.log(this.orient);
            });
        // api.addEventListener({
        //     name: 'tap'
        // }, function(ret, err) {
        //     // console.log(JSON.stringify(document.getElementById(userData[page].uid)))
        //
        //     if (document.getElementById(userData[page].uid).paused) {
        //         document.getElementById(userData[page].uid).controls = false;
        //         document.getElementById(userData[page].uid).play();
        //         //  document.getElementById('showPlay').style.display = 'none';
        //     } else {
        //       console.error(JSON.stringify(!document.getElementById(userData[page].uid).paused));
        //         document.getElementById(userData[page].uid).controls = true;
        //         document.getElementById(userData[page].uid).pause();
        //         //  document.getElementById('showPlay').style.display = 'block';
        //
        //     }
        // });
    }
    // document.querySelector('.swipe-box').addEventListener('click',function(e){
    //   console.log(JSON.stringify(e),JSON.stringify(this.children[0]));
    //
    // })

function onenShare(){
  var share_d = document.getElementById('share_d');
  var share = document.getElementById('share');
  if(share_d.style.display == 'none'){
    share_d.style.display = 'block';
    share.style.display = 'block';
  }else{
    share_d.style.display="none";
    share.style.display = 'none';
  }
}
function switchLoading(obj, url, text) {
    var frames = api.frames();
    var header = $api.byId('aui-header');
    var param = api.pageParam;
    var headerPos = $api.offset(header);
    var body_h = api.frameHeight;
    var footer_h = param.height;
    var headerAct = $api.dom(header, '.aui-active');
    console.log(JSON.stringify(headerAct.length))
    $api.removeCls(headerAct, 'aui-active');
    $api.addCls(obj, 'aui-active');
    for (var i = 0; i < frames.length; i++) {
        if (frames[i].name == text) {
            api.bringFrameToFront({
                from: text
            });
            return;
        }
    }
    api.openFrame({
        name: text,
        url: url,
        rect: {
            x: 0,
            y: 0,
            w: 'auto',
            h: body_h
        },
        pageParam: {
            top: headerPos.h,
            height: body_h - headerPos.h - footer_h,
            name: text,
            parentsname: api.pageParam.name
        },
        bounces: false,
        bgColor: 'rgba(0,0,0,0)',
        vScrollBarEnabled: true,
        hScrollBarEnabled: true
    });
    setTimeout(function() {
        var frames = api.frames();
        console.log(JSON.stringify(frames))
            // for (var i = 0; i < frames.length; i++) {
        api.bringFrameToFront({
            from: text
        });
        // api.setFrameAttr({
        //     // from: text,
        //     name:api.pageParam.name,
        //     hidden:true
        // });
        console.log(JSON.stringify(param.name))
            // }
    }, 1000)
}

function openCamera() {
    var param = {
        resolutionMode: 2,
        ratioMode: 1,
        recordMode: 3,
        beautyStatus: true,
        beautyLevel: 80,
        isCameraBack: false,
        isNeedClip: true,
        minDuration: 2,
        maxDuration: 30,
        videoQuality: 2,
        gop: 5,
        frameRate: 25
    };
    var demo = api.require('quPaiModule');
    demo.record(param, function(ret, err) {
        console.log(JSON.stringify(ret))
        if (ret) {
            api.openWin({
                name: 'addmyinfo',
                url: './addMyimageInfo_win.html',
                pageParam: {
                    img: ret.thumbnailPath,
                    video: ret.videoPath
                }
            });

            ret.videoPath;
            ret.image_path;
        }
        if (err) {
            alert(err.msg);
        }
    });
  }
