function hideLinkedInFeed() {
    var lifiElems=document.getElementsByClassName("feed-base-update");
    if(lifiElems.length > 0) {
        for(var i=0; i<lifiElems.length; i++) { lifiElems[i].innerHTML='<div style="height:500px;" />'; };
    }
    var feed=document.getElementsByClassName("feed-follows-module");
    if(feed.length > 0) {
        feed[0].innerHTML='';
    }
    var ads=document.getElementsByClassName("ad-banner-container");
    if(ads.length > 0) {
        for(var i=0; i<ads.length; i++) { ads[i].innerHTML = ''; }
    }
    window.setTimeout(hideLifiElems, 500);
}

hideLinkedInFeed();
