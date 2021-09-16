function setCookie(key, value, exdays) {
    if (exdays != null) {
        var d = new Date();
        d.setTime(d.getTime()+(exdays*24*60*60*1000));
        var expires = "expires="+d.toGMTString();
        document.cookie = key + "=" + value + "; " + expires;
    } else {
        document.cookie = key + "=" + value + "; ";
    }
}

function getCookie(key) {
    var key = key + "=";
    var cookieArray = document.cookie.split(';');
    for(var i=0; i<cookieArray.length; i++) 
    {
        var cookie = cookieArray[i].trim();
        if (cookie.indexOf(key) == 0) return cookie.substring(key.length, cookie.length);
    }
    return "";
}

function checkCookie(key) {
    if (getCookie(key) != "") return true;
    else return false;
}

function delCookie(key) {
    document.cookie = key + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT"; 
}