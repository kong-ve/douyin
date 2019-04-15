function openCamera() {
    api.getPicture({
        sourceType: 'camera',
        encodingType: 'jpg',
        mediaValue: 'pic',
        destinationType: 'url',
        allowEdit: true,
        quality: 50,
        targetWidth: 100,
        targetHeight: 100,
        saveToPhotoAlbum: false
    }, function(ret, err) {
        if (ret) {
            alert(JSON.stringify(ret));
        } else {
            alert(JSON.stringify(err));
        }
    });
}

function randomSwitchBtn(obj, url, index) {
    // $api.text($api.byId('aui-header'), name);
    var frames = api.frames();
    for (var i = 0; i < frames.length; i++) {
        api.closeFrame({
            name: frames[i].name,
        })
    }
    var footer = 　$api.byId('footer')
    var body_h = api.winHeight;
    var footer_h = $api.offset(footer).h;
    var footerAct = $api.dom(footer, '.aui-bar-tab-item.aui-active');
    $api.removeCls(footerAct, 'aui-active');
    $api.addCls(obj, 'aui-active');
    api.openFrame({
        name: index,
        url: url,
        rect: {
            x: 0,
            y: 0,
            w: 'auto',
            h: body_h - footer_h
        },
        pageParam: {
            // top: headerPos.h,
            footer: body_h - footer_h
        },
        bounces: true,
        bgColor: 'rgba(0,0,0,0)',
        vScrollBarEnabled: true,
        hScrollBarEnabled: true
    });
    setTimeout(function() {
        var frames = api.frames();
        console.log(JSON.stringify(frames))
            // for (var i = 0; i < frames.length; i++) {
            // console.log(window.childNode)
        api.sendFrameToBack({
            from: index
        });
        // }
    }, 1000)
}
