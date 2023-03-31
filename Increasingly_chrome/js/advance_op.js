
var dataUser = window.location.href.split('?')[1]
var api_key = atob(dataUser.split('&b&')[0].split('&a&=')[1])
var userid = atob(dataUser.split('&b&=')[1])
$('#feed_refresh').on('click', function() {
    feedupdate();
})

$(document).ready(function() {
    data = {
        "apiKey": api_key,
        "userId": userid
    }
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://api.increasingly.co/CheckFeedUpdateProgress', true);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function () { }
    xhr.onerror = function () {
        $('.feed-refresh .feed-icon .la-check').addClass('hide');
        $('.feed-refresh .feed-icon .la-refresh').addClass('hide');
        $('.feed-refresh .feed-icon .la-frown-o').removeClass('hide');
        $('.feed-refresh .feed_error').removeClass('hide');
        $('#feed_refresh').removeClass('feed_disable_btn');
        $('.feed_process').addClass('hide');
    };
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            if(xhr.responseText != ""){
                var data = JSON.parse(this.responseText)
                if (data.Status == "Feed Update is in progress") {
                    $('#feed_refresh').addClass('feed_disable_btn');
                    $('.feed_process').removeClass('hide');
                } else if (data.Status == "Feed Update process is idle") {
                    $('.feed-refresh .feed-icon .la-refresh').removeClass('hide');
                    $('.feed-refresh .feed-icon .la-frown-o').addClass('hide');
                    $('.feed-refresh .feed_error').addClass('hide');
                    $('#feed_refresh').removeClass('feed_disable_btn');
                    $('.feed_process').addClass('hide');
                } else {
                    $('.feed-refresh .feed-icon .la-check').addClass('hide');
                    $('.feed-refresh .feed-icon .la-refresh').addClass('hide');
                    $('.feed-refresh .feed-icon .la-frown-o').removeClass('hide');
                    $('.feed-refresh .feed_error').removeClass('hide');
                    $('#feed_refresh').removeClass('feed_disable_btn');
                    $('.feed_process').addClass('hide');
                }
            }
        }
    }
    xhr.withCredentials = true;
    xhr.send(JSON.stringify(data));
})

function feedupdate() {
    var apikey = window.location.href;
    var apikey_val = apikey.split('=')[1];
    data = {
        "apiKey": api_key,
        "userId": userid
    }
    // if (document.documentElement.lang == "ja" && window.location.host == "www.laroche-posay.jp"  ||document.documentElement.lang == "en" && window.location.host == "www.jomercer.com.au" || document.documentElement.lang == "ja"){
    //     urls = 'https://jpapi.increasingly.co/Updatefeed'
    // } else {
    //     urls = 'https://api.increasingly.co/Updatefeed'
    // }
    var url = 'https://api.increasingly.co/Updatefeed'
    $('#feed_refresh').addClass('feed_disable_btn');
    $('.refresh_process').removeClass('hide');
    $('.modal').modal();

    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function () { }
    xhr.onerror = function () {
        $('.feed-refresh .feed-icon .la-check').addClass('hide');
        $('.feed-refresh .feed-icon .la-refresh').addClass('hide');
        $('.feed-refresh .feed-icon .la-frown-o').removeClass('hide');
        $('.feed-refresh .feed_error').removeClass('hide');
        $('#feed_refresh').removeClass('feed_disable_btn');
        $('.refresh_process').addClass('hide');
    };
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            if(xhr.responseText != ""){
                $('.feed-refresh .feed-icon .la-check').removeClass('hide');
                $('.feed-refresh .feed-icon .la-refresh').addClass('hide');
                $('.feed-refresh .feed-icon .la-frown-o').addClass('hide');
                $('.feed-refresh .feed_error').addClass('hide');
                $('#feed_refresh').removeClass('feed_disable_btn');
                $('.refresh_process').addClass('hide');
            }
        }
    }
    xhr.withCredentials = true;
    xhr.send(JSON.stringify(data));
}

$('#logout_btn').on('click', function() {
    close();
})

$('.close_modal').on('click', function() {
    $('.modal').modal('close');
})
