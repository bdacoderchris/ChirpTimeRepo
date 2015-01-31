// Master Array
var people = [];

// Chirps Array
var chirps = [];
// Person Constructor
function Person(name, handle, city, url) {
    this.name = name;
    this.handle = handle;
    this.city = city;
    this.url = url;
    this.chirps = [];
};

// Chirps Constructor
function Chirp(chirp, timeStamp, handle) {
    this.chirp = chirp;
    this.timeStamp = timeStamp;
    this.handle = handle;
};

/* ID Names - Inputs
 * Post yor chirp = chirps-input
 * Post Button = post-button
 * Friends Area = friend-render
 * Friends Delete = 
 * Button My Chirps = myChirps-button
 * Chirp Display DIV = chirp-display
 * Edit Pencil =
 */

//Function Edit Profile
function editProfile() {

};

//Function Post Your Chirps
function postChirps() {

};





///////////////////////////////////////////////////////////////////////

//XMLHttpRequest shorten function
//var xhr = function (verb, url, data, callback, extra) {
//    console.log("hitn the XHR");

//URL Maker
var urlMaker = function (base) {
    var url = "https://" + base + ".firebaseio.com/"
    for (var i = 1; i < arguments.length; i++) {
        url += arguments[i] + "/"
    }
    return url + ".json";
}

var retrieveFriends = function () {
    //var url = urlMaker();
    var request = new XMLHttpRequest();
    request.open('GET', 'https://chirptime.firebaseio.com/friends/.json', true);
    request.send();
    request.onload = function () {
        if (this.status >= 200 && this.status < 400) {
            var data = JSON.parse(request.response);
            console.log('GET was successful');
            people = [];
            for (var i in data) {
                data[i].id = i;
                people.push(data[i]);
            }
            displayPerson();
        } else {
            console.log("Error" + request.response);
        }
    }
}
//retrieveFriends();
var pollingChirps = function (callback) {
    var timer = setInterval(callback, 2000);
}

var retrieveChirps = function () {
    var request = new XMLHttpRequest();
    request.open('GET', 'https://chirptime.firebaseio.com/chirps/.json', true);
    request.send();
    request.onload = function () {
        if (this.status >= 200 && this.status < 400) {
            var data = JSON.parse(request.response);
            console.log('GET was succesful');
            chirps = [];
            for (var i in data) {
                data[i].id = i;
                chirps.push(data[i]);
            }
            displayChirps();
        } else {
            console.log("Error" + request.response);
        }
    }
}
//retrieveChirps();
//retrieveChirps();

//Render Content to Screen(Friends)//
displayPerson = function () {

    $("#friend-render").empty();
    
    for (var i in people) {

        var tempObj = people[i];
        var newPerson = new Person(tempObj.name, tempObj.username, tempObj.city, tempObj.url);

        newPerson.__proto__ = { id: i };
        people.push(newPerson);

        $("#friend-render").append("<p class='text-center'>" + tempObj.name + "</p>");
        $("#friend-render").append("<p class='text-center'>" + tempObj.username + "</p>");;
        $("#friend-render").append("<p class='text-center'>" + tempObj.city + "</p>");
        $("#friend-render").append("<a href='#'><i class='glyphicon glyphicon-trash' onclick=' " + i + "'></i></a><hr>")
    }
};

//Render Content to Screen(Chirps)//
displayChirps = function () {

    $("#chirp-display").empty();
    chirps.reverse();
    for (var i in chirps) {

        var tempTwt = chirps[i];
        var newChirp = new Chirp(tempTwt.chirps, tempTwt.date, tempTwt.username);

        newChirp.__proto__ = { id: i };

        chirps.push(newChirp);

        $("#chirp-display").append("<p><strong><h4>" + tempTwt.username + "</h4></strong></p>")
        $("#chirp-display").append("<p><em><h4 class='chirpP'>" + tempTwt.chirps + "</h4></em></p>")
        $("#chirp-display").append("<p><h6>" + tempTwt.date + "</h6></p><hr>")
    }
}

/* ID Names - Inputs
 * Post yor chirp = chirps-input
 * Post Button = post-button
 * Friends Area = friend-render
 * Friends Delete = 
 * Button My Chirps = myChirps-button
 * Chirp Display DIV = chirp-display
 * Edit Pencil =
 */






































//var chaseChirps = urlMaker(baseUrl, "chase", chirps);

//function getFromFb() {
//    xhr("GET", urlMaker(baseUrl), null, fbData)

//};
//function fbData(callData) {
//    console.log(callData);
//};


//getFromFb(fbData);

//function postToFb(data) {
//    xhr("POST", urlMaker(baseUrl, chirps), data);
//}

//$("#submitForm").submit(function (event) {
//    event.preventDefault();

//    console.log("fff");
//    var chirpSubmit = $("#textBox").val();

//    var chirper = new Chirp("helo world", "123");

//    var tempChirp = ctHolder.chirpTimeArray.push(chirper);

//    postToFb(chirper);

//    console.log("it works");

//})

//$("#clicker").click(function () {
//    event.preventDefault();

//    console.log("fff");
//    var chirpSubmit = $("#textBox").val();

//    var chirper = new Chirp("he!!!!!lo world", "123");

//    var tempChirp = ctHolder.chirpTimeArray.push(chirper);

//    postToFb(chirper);

//    console.log("it works");

//});

////Global Object
//var ctHolder = {};

////Global Variable
//ctHolder.chirpTimeArray = [];

////Person object Constructor 
//function ChirpObj(name, userName, city) {
//    this.name = name;
//    this.userName = userName;
//    this.city = city;
//}

//function Chirp(chirp, date) {
//    this.chirp = chirp;
//    this.date = new Date();
//}

//var request = new XMLHttpRequest();
//request.open(verb, url, true);
//request.onload = function () {
//    if (this.status >= 200 && this.status < 400) {
//        if (callback && typeof (callback) === "function")
//            callback(JSON.parse(this.response));
//    } else {
//        console.log("Error " + this.status + ":" + this.response);
//    }
//};
//request.onerror = function () {
//    console.log("Communication error");
//};
//if (data) {
//    request.send(JSON.stringify(data));
//} else {
//    request.send();
//}
//}

////Base URL
//var baseUrl = "chirptime";

//var chirps = "chirps";

//var user;

