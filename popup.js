
function inc_login_button() {
    var user_id = document.querySelector('#email_input').value;
    var user_pwd = document.querySelector('#password_input').value;
    localStorage.setItem('email', user_id);
    // var param = { emailId: user_id.trim(), password: encryString(user_pwd.trim()) };

    var loginurl = 'https://api.increasingly.co/Login'
    var param = '{  "emailId": "'+user_id.trim()+'",  "password": "'+user_pwd.trim()+'"}'
    var xhr = new XMLHttpRequest();
    xhr.open('POST', loginurl, true);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function () { }
    xhr.onerror = function () {
        $('.error_check').removeClass('hide');
        $('.increasingly-form-signin').removeClass('hide');
        $('.increasingly-form-signout').addClass('hide');
    };
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            if(xhr.responseText != ""){
                var data = JSON.parse(this.responseText)
                if (data.Status == 'Success') {
                    var new_url_host = null;
                    localStorage.setItem('apikey', data.ApiKey);
                    var new_url = new URL(client_url);
                    new_url_host = new_url.host;
                    localStorage.setItem('login', 'true');
                    localStorage.setItem('client_id', data.ClientId);
                    localStorage.setItem('client_region', data.Region.toUpperCase());
                    localStorage.setItem('domain', data.Domain);
                    if(new_url_host == "www.denbyusa.com" ||  new_url_host == "www.denbypottery.com"){
                        if(data.Domain == "www.denbyusa.com"){
                            new_url_host = "www.denbyusa.com";
                        }else if (data.Domain == "www.denbypottery.com"){
                            new_url_host = "www.denbypottery.com"
                        }
                        if(data.Domain == "www.increasingly.com"){
                            new_url_host = "www.increasingly.com"
                        }
                    }else{
                        if(data.Domain == "www.increasingly.com"){
                            new_url_host = "www.increasingly.com"
                        }
                    }
                    var site_match = data.Domain.split('.')[1].replace('-','');
                    if (new_url_host == data.Domain || new_url_host.indexOf(site_match) >= 0) {
                        var email = localStorage.getItem('email');
                        localStorage.setItem('logout', '1');
                        $('.error_email').addClass('hide');
                        chrome.tabs.query({active: true, currentWindow: true}).then(([tab]) => {
                            chrome.scripting.executeScript({
                                target: {tabId: tab.id},
                                files: ['jQuery.js'],
                            })
                            var updateTextTo = localStorage.getItem('email');
                            chrome.storage.local.set({
                                updateTextTo: updateTextTo
                            })
                            var updateTextToAPI = localStorage.getItem('apikey');
                            chrome.storage.local.set({
                                updateTextToAPI: updateTextToAPI
                            })
                            chrome.storage.local.set({
                                updatelogout: 'Login'
                            })
                            var updateTextToregion = localStorage.getItem('client_region');
                            chrome.storage.local.set({
                                updateTextToregion: updateTextToregion
                            })
                            
                            chrome.scripting.executeScript({
                                target: {tabId: tab.id},
                                files: ['core.js'],
                            })
                        })
                        
                        $('.error_check').addClass('hide');
                        $('.error_stat').addClass('hide');
                        $('.increasingly-form-signin').addClass('hide');
                        $('.increasingly-form-signout').removeClass('hide')
                        $('.container').removeClass('hide');
                        session();
                        getClientId();
                    } else {
                        $('.error_email').addClass('hide');
                        $('.error_stat').removeClass('hide');
                    }
                } else {
                    $('#bundle_api_status').text(data.Status);
                    $('.error_email').removeClass('hide');
                    $('.container').addClass('hide');
                }
            }
        }else if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 400) {
            var data = JSON.parse(this.responseText)
            $('#bundle_api_status').text(data.message);
            var sprt=false
            if(data != undefined){
                if(data.message != undefined){
                    if(data.message.indexOf ('Increasingly Support') >= 0){
                        sprt = true
                    }
                }
            }
            if(sprt == true){
                $('.error_check').removeClass('hide');
                $('.container').addClass('hide');
            }else{
                $('.error_email').removeClass('hide');
                $('.container').addClass('hide');
            }
        }
    }
    xhr.withCredentials = true;
    xhr.send(param);
}

var input = document.getElementById('email_input');
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        inc_login_button();
    }
});

var input = document.getElementById('password_input');
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        inc_login_button();
    }
});

var btn = document.getElementById('sign_in_button');
btn.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        inc_login_button();
    }
});

$('#sign_in_button').on('click', function() {
    inc_login_button();
});

$('.contact_support').on('click', function() {
    chrome.tabs.update({ url: 'mailto:hello@increasingly.com' })
});

$('#inc_more, #inc_more1, #inc_more2, #inc_more3, #inc_more4').on('click', function() {
    var apikey = localStorage.getItem('apikey')
    var eml = localStorage.getItem('email')
    var clientregion = localStorage.getItem('client_region')
    var url = "http://www.increasingly.co/Increasingly_chrome/increasingly_chrome_adv.html";
    chrome.tabs.create({ url: url+"?&a&="+btoa(apikey) + "&b&="+btoa(eml) + "&" + clientregion });
})



var validateEmail = function(elementValue) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(elementValue);
}


$('#email_input').keyup(function() {
    var value = $(this).val();
    var valid = validateEmail(value);
    if (!valid) {
        $(this).css('color', 'red');
    } else {
        $(this).css('color', '#000');
        $('.error_email').addClass('hide');
        document.getElementById("sign_in_button").addEventListener('click', inc_login_button);
    }
});

$(document).ready(function() {
    $('#email_input').val(localStorage.getItem('email'));
    session();
    success();
    getClientId();
});

$('#email_input').on('keyup', function() {
    var input = $('#email_input').val();
    localStorage.setItem('email', input);
});


function getClientId() {
    var data = {
        "apiKey": localStorage.getItem('apikey'),
        "userId": localStorage.getItem('email')
    }
    var url = 'https://api.increasingly.co/GetIncreasinglyStatus'
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function () { }
    xhr.onerror = function () {
        $('.bundle_design').html('<h2><span style="color:#e84949">Sorry, could not process your request please contact Increasingly support.</span></h2>');
        $('.bundle_disable').addClass('hide');
    };
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            if(xhr.responseText != ""){
                var data = JSON.parse(this.responseText)
                if (data.Status == 'disabled') {
                    $('.slider').addClass('remove_input');
                    $('.slider').addClass('remove_input_button');
                    $('#bundle_check').html('<h2><span style="color:#000">Bundles are currently <span style="color:#e84949;">disabled</span>.</span></h2>');
                    $('#increasingly_bundle').text('Enable bundles');
                    $('#increasingly_bundle').append('<i class="fa fa-dropbox" aria-hidden="true"></i>');
                } else {
                    $('.slider').removeClass('remove_input');
                    $('.slider').removeClass('remove_input_button');
                    $('.slider').addClass('add_input');
                    $('.slider').addClass('add_input_button');
                    $('#bundle_check').html('<h2><span style="color:#000">Bundles are currently <span style="color:#e84949;">enabled</span>.</span></h2>');
                    $('#increasingly_bundle').text('Disable bundles');
                    $('#increasingly_bundle').append('<i class="fa fa-dropbox" aria-hidden="true"></i>');
                }
            }
        }
    }
    xhr.withCredentials = true;
    xhr.send(JSON.stringify(data));
}



function success() {
    var val = localStorage.getItem('login');
    if (val == 'true') {
        $('.container').removeClass('hide');
        $('.increasingly-form-signin').addClass('hide');
        $('.increasingly-form-signout').removeClass('hide');
        chrome.tabs.query({active: true, currentWindow: true}).then(([tab]) => {
            chrome.scripting.executeScript({
                target: {tabId: tab.id},
                files: ['jQuery.js'],
            })
            var updateTextTo = localStorage.getItem('email');
            chrome.storage.local.set({
                updateTextTo: updateTextTo
            })
            var updateTextToAPI = localStorage.getItem('apikey');
            chrome.storage.local.set({
                updateTextToAPI: updateTextToAPI
            })
            var updateTextToregion = localStorage.getItem('client_region');
            chrome.storage.local.set({
                updateTextToregion: updateTextToregion
            })
            chrome.scripting.executeScript({
                target: {tabId: tab.id},
                files: ['core.js'],
            })
        })
    } else {
        $('.increasingly-form-signin').removeClass('hide');
        $('.increasingly-form-signout').addClass('hide');
        if (document.querySelector('.btn-disable') != null) {
            chrome.tabs.query({active: true, currentWindow: true}).then(([tab]) => {
                chrome.scripting.executeScript(tab.id, { "code": "jQuery('.bundle-disable').remove();" });
            })
        }

    }
}

$('#increasingly_bundle').on('click', function() {
    if ($('#increasingly_bundle').text() == "Disable bundles") {
        $('.increasingly-form-signout').addClass('hide');
        $('.disable').removeClass('hide');
        $('.enable').addClass('hide');
    } else {
        //$('.increasingly-form-signout').removeClass('hide');
        $('.increasingly-form-signout').addClass('hide');
        $('.enable').removeClass('hide');
        $('.disable').addClass('hide');
    }
});

$('#submit_enable_no').on('click', function() {
    $('.increasingly-form-signout').removeClass('hide');
    $('.disable').addClass('hide');
    $('.enable').addClass('hide');
    $('.slider').addClass('remove_input');
    $('.slider').addClass('remove_input_button');
});



$('#submit_disable_no').on('click', function() {
    $('.increasingly-form-signout').removeClass('hide');
    $('.disable').addClass('hide');
    $('.enable').addClass('hide');
    $('.slider').addClass('add_input');
    $('.slider').addClass('add_input_button');
});

var submit_disable_no = document.getElementById('submit_disable_no');
submit_disable_no.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        $('.increasingly-form-signout').removeClass('hide');
        $('.disable').addClass('hide');
        $('.enable').addClass('hide');
        $('.slider').addClass('add_input');
        $('.slider').addClass('add_input_button');
    }
});


$('#submit_enable_yes').on('click', function() {
    if (flag_bundle) {
        onoff();
        $('#bundle_check').html('<h2><span style="color:#000">Bundles are currently <span style="color:#e84949;">enabled</span>.</span></h2>');
        $('.confirmation_msg').removeClass('hide');
        $('.disable').addClass('hide');
        $('.enable').addClass('hide');
        $('#increasingly_bundle').text('Disable bundles');
        $('#increasingly_bundle').append('<i class="fa fa-dropbox" aria-hidden="true"></i>');
    }

});

var submit_enable_yes = document.getElementById('submit_enable_yes');
submit_enable_yes.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        if (flag_bundle) {
            onoff();
            $('#bundle_check').html('<h2><span style="color:#000">Bundles are currently <span style="color:#e84949;">enabled</span>.</span></h2>');
            $('.confirmation_msg').removeClass('hide');
            $('.disable').addClass('hide');
            $('.enable').addClass('hide');
            $('#increasingly_bundle').text('Disable bundles');
            $('#increasingly_bundle').append('<i class="fa fa-dropbox" aria-hidden="true"></i>');
        }
    }
});

$('#confirmed').on('click', function() {
    $('.confirmation_msg').addClass('hide');
    $('.increasingly-form-signout').removeClass('hide');
});

var confirmed = document.getElementById('confirmed');
confirmed.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        $('.confirmation_msg').addClass('hide');
        $('.increasingly-form-signout').removeClass('hide');
    }
});

$('#submit_disable_yes').on('click', function() {
    if (flag_bundle) {
        onoff();
        $('#bundle_check').html('<h2><span style="color:#000">Bundles are currently <span style="color:#e84949;">disabled</span>.</span></h2>');
        $('.non_confirmation_msg').removeClass('hide');
        $('.disable').addClass('hide');
        $('.enable').addClass('hide');
        $('#increasingly_bundle').text('Enable bundles');
        $('#increasingly_bundle').append('<i class="fa fa-dropbox" aria-hidden="true"></i>');
    }
});

var submit_disable_yes = document.getElementById('submit_disable_yes');
submit_disable_yes.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        if (flag_bundle) {
            onoff();
            $('#bundle_check').html('<h2><span style="color:#000">Bundles are currently <span style="color:#e84949;">disabled</span>.</span></h2>');
            $('.non_confirmation_msg').removeClass('hide');
            $('.disable').addClass('hide');
            $('.enable').addClass('hide');
            $('#increasingly_bundle').text('Enable bundles');
            $('#increasingly_bundle').append('<i class="fa fa-dropbox" aria-hidden="true"></i>');
        }
    }
});

$('#not_confirmed').on('click', function() {
    $('.non_confirmation_msg').addClass('hide');
    $('.increasingly-form-signout').removeClass('hide');
});

var not_confirmed = document.getElementById('not_confirmed');
not_confirmed.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        $('.non_confirmation_msg').addClass('hide');
        $('.increasingly-form-signout').removeClass('hide');
    }
});

var flag_bundle = true;

function onoff() {
    var bundle_operation;
    if ($('#increasingly_bundle').text() == "Disable bundles") {
        bundle_operation = 'false';
    } else {
        bundle_operation = 'true';
    }
    var data = {
        'switch': bundle_operation,
        "apiKey": localStorage.getItem('apikey'),
        "userId": localStorage.getItem('email')
    }
    var url = 'https://api.increasingly.co/SetIncreasinglyStatus'

    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function () { }
    xhr.onerror = function () {
        $('.error_check_bundle').removeClass('hide');
        flag_bundle = false;
    };
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            if(xhr.responseText != ""){
                $('.error_check_bundle').addClass('hide');
                flag_bundle = true;
            }
        }
    }
    xhr.withCredentials = true;
    xhr.send(JSON.stringify(data));

}

$('#sign_out_button').on('click', function() {
    logout_inc();
})

function logout_inc() {
    localStorage.setItem('login', '');
    localStorage.setItem('logout', '0');
    document.querySelector('#password_input').value = '';
    $('.container').addClass('hide');
    $('.increasingly-form-signin').removeClass('hide');
    $('.increasingly-form-signout').addClass('hide');
    $('.disable').addClass('hide');
    $('.enable').addClass('hide');
    $('.non_confirmation_msg').addClass('hide');
    $('.confirmation_msg').addClass('hide');
    if(localStorage.getItem('login') == ''){
        var updatelogout = localStorage.getItem('login');
        if(updatelogout == ''){
            updatelogout = 'logout'
        }
        chrome.tabs.query({active: true, currentWindow: true}).then(([tab]) => {
            chrome.storage.local.set({
                updatelogout: updatelogout
            })
            chrome.scripting.executeScript({
                target: {tabId: tab.id},
                files: ['core.js'],
            })
        })
    }
}

function session() {
    var SessionTime = 14400000;
    var tickDuration = 1000;
    var myInterval = setInterval(function() {
        SessionTime = SessionTime - tickDuration
    }, 1000);
    setTimeout(SessionExpireEvent, SessionTime);

    function SessionExpireEvent() {
        clearInterval(myInterval);
        console.log("Session expired");
        localStorage.setItem('login', '');
    }

}

$('.close').on('click', function() {
    window.close();
});

function addChars(str) {
    var Len = str.length;
    var first_9 = str.substring(0, 9);
    var ExceptFst_9 = str.substring(9, Len);
    var repl_9 = first_9 + (str[Len - 9]) + (str[0] + ExceptFst_9) + "="; //add 4th & 5th, Last char
    return repl_9;
    asas
}

function twoRandomNos(R) {
    var Random1 = Math.floor((Math.random() * 10000) + 1);

    var Random2 = Math.floor((Math.random() * 10000) + 1);
    if (R == 1) {
        return Random1 + "_";
    } else if (R == 2) {
        return "_" + Random2;
    }
}

function encryString(str) {
    var encF = window.btoa(twoRandomNos(1) + str + twoRandomNos(2));
    return addChars(encF);
}

function decodeString(str) {
    str = str.toString();
    var decodeStr = atob(str.slice(0, 9) + str.slice(11, str.length - 1)); // 4827_Increasingly_0920
    var remove1 = decodeStr.slice(0, decodeStr.lastIndexOf("_")); //4827_Increasingly;
    var Final = remove1.slice(remove1.indexOf("_") + 1); //Increasingly

    return Final;
}

var logout = document.getElementById('sign_out_button');
logout.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        logout_inc();
    }
});

var submit_enable_n = document.getElementById('submit_enable_no');
submit_enable_n.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        $('.increasingly-form-signout').removeClass('hide');
        $('.disable').addClass('hide');
        $('.enable').addClass('hide');
        $('.slider').addClass('remove_input');
        $('.slider').addClass('remove_input_button');
    }
});

var bundle_dis = document.getElementById('increasingly_bundle')
bundle_dis.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        if ($('#increasingly_bundle').text() == "Disable bundles") {
            $('.increasingly-form-signout').addClass('hide');
            $('.disable').removeClass('hide');
            $('.enable').addClass('hide');
        } else {
            //$('.increasingly-form-signout').removeClass('hide');
            $('.increasingly-form-signout').addClass('hide');
            $('.enable').removeClass('hide');
            $('.disable').addClass('hide');
        }
    }
});

chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
    client_url = tabs[0].url;
    var check_url = tabs[0].url.split('?')[0];
    if(check_url == "http://www.increasingly.co/Increasingly_chrome/increasingly_chrome_adv.html") {
        window.close();
    }

    var new_url = new URL(client_url);
    var new_url_host = new_url.host;
    if(new_url_host == "www.denbyusa.com" ||  new_url_host == "www.denbypottery.com"){
        if(localStorage.getItem('domain') == "www.denbyusa.com"){
            new_url_host = "www.denbyusa.com";
        }else if (localStorage.getItem('domain') == "www.denbypottery.com"){
            new_url_host = "www.denbypottery.com"
        }
        if(localStorage.getItem('domain') == "www.increasingly.com"){
            new_url_host = "www.increasingly.com"
        }
    }else{
        if(localStorage.getItem('domain') == "www.increasingly.com"){
            new_url_host = "www.increasingly.com"
        }
    }
    //for (a = 0; a < mattress_details.Clients.length; a++) {
    var emailids = localStorage.getItem('email');
    if (localStorage.getItem('login') != "") {
        //console.log(localStorage.getItem('login'))
        var site_match = "";
        if(localStorage.getItem('domain') != undefined){
            site_match = localStorage.getItem('domain').split('.')[1].replace('-','')
        }
        if (new_url_host != localStorage.getItem('domain') && new_url_host.indexOf(site_match) == -1) {
            localStorage.setItem('login', '');
            document.querySelector('#password_input').value = '';
            $('.container').addClass('hide');
            $('.increasingly-form-signin').removeClass('hide');
            $('.increasingly-form-signout').addClass('hide');
            $('.disable').addClass('hide');
            $('.enable').addClass('hide');
            $('.non_confirmation_msg').addClass('hide');
            $('.confirmation_msg').addClass('hide');
        }
    } else if (localStorage.getItem('login') == "" && localStorage.getItem('email') != undefined && localStorage.getItem('client_id') != null && localStorage.getItem('logout') == "1") {

        var cl_id = localStorage.getItem('email');
        //if (emailids == mattress_details.Clients[a].client_email) {
        //console.log(emailids)
        var site_match = localStorage.getItem('domain').split('.')[1].replace('-','')
        if (new_url_host == localStorage.getItem('domain') || new_url_host.indexOf(site_match) >= 0) {
            $('.error_email').addClass('hide');
            chrome.tabs.query({active: true, currentWindow: true}).then(([tab]) => {
                chrome.scripting.executeScript({
                    target: {tabId: tab.id},
                    files: ['jQuery.js'],
                })
                var updateTextTo = localStorage.getItem('email');
                chrome.storage.local.set({
                    updateTextTo: updateTextTo
                })
                var updateTextToAPI = localStorage.getItem('apikey');
                chrome.storage.local.set({
                    updateTextToAPI: updateTextToAPI
                })
                var updateTextToregion = localStorage.getItem('client_region');
                chrome.storage.local.set({
                    updateTextToregion: updateTextToregion
                })
                chrome.scripting.executeScript({
                    target: {tabId: tab.id},
                    files: ['core.js'],
                })
            })
            var clntregion=localStorage.getItem('client_region')
            var domaincl=localStorage.getItem('domain')
            $('.error_check').addClass('hide');
            localStorage.setItem('login', 'true');
            localStorage.setItem('client_id', localStorage.getItem('client_id'));
            localStorage.setItem('client_region', clntregion);
            localStorage.setItem('domain', domaincl);
            document.querySelector('#inc_more').setAttribute('client_region',clntregion)
            $('.increasingly-form-signin').addClass('hide');
            $('.increasingly-form-signout').removeClass('hide')
            $('.container').removeClass('hide');
            //chrome.tabs.create({ "url": "bundle.html" });
            session();
            getClientId();
        }
        //}
    }
    //}
});

