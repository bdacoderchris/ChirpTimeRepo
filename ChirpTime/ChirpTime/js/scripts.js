//Global Object
var ctHolder = {};

//Global Variable
ctHolder.chirpTimeArray = [];

//Person object Constructor 
function ChirpObj(name, userName, city, chirps, friend) {
    this.name = name;
    this.userName = userName;
    this.city = city;
    this.chirps = chirps;
    this.friend = friend;
}


//XMLHttpRequest shorten function
var fbXhr = function (verb, url, data, callback, extra) {
    var request = new XMLHttpRequest(); 
    request.open(verb, url, true); 
    request.onload = function () { 
        if (this.status >= 200 && this.status < 400) {
            if (callback && typeof (callback) === "function")
                callback(JSON.parse(this.response), data, this.status);
        } else {
            console.log("Error " + this.status + ":" + this.response);
        }
    };
    request.onerror = function () { 
        console.log("Communication error");
    };
    if (data) { 
        request.send(JSON.stringify(data));
    } else {
        request.send();
    }
}

//Base URL
var baseUrl = "chirptime";

//URL Maker
var urlMaker = function(base){
    var url = "https://" + base + ".firebaseio.com/"
    for (var i = 1; i < arguments.length; i++) {
        url += arguments[i] + "/"
    }
    return url + ".json";
}