//XMLHttpRequest shorten function
var xhr = function (verb, url, data, callback, extra) {
    console.log("hitn the XHR");
//Render Content to Screen(Friends)//
displayPerson = function () {

    $("#friend-render").empty();

    for (var i in o) {
       
        var tempObj = dataToParse[i];
        var newPerson = new Person (tempObj.name, tempObj.handle, tempObj.city, tempObj.url);

        newPerson.__proto__ = { id: i };
        people.push(newPerson);

        $("#friend-render").append("<p class='text-center'>" + tempObj.name + "</p>");
        $("#friend-render").append("<p class='text-center'>" + tempObj.handle + "</p>");;
        $("#friend-render").append("<p class='text-center'>" + tempObj.city + "</p>");
        $("#friend-render").append("<hr/>");
        $("#friend-render").append("<a href='#'><i class='glyphicon-trash' onclick=' "+ i +"'></i></a>")    
    }
};

//Render Content to Screen(Chirps)//
displaychirp = function () {

    $("#").empty();

    for (var i in o) {
        
        var tempTwt = dataToParse[i];
        var newchirp = new Chirp(tempTwt.chirp, tempTwt.timeStamp);

        newchirp.__proto__ = { id: i };
        chirp.push(newchirp);

        $("#chirp-display").append("<p><br>"+ handle + "</br></p>")
        $("#chirp-display").append("<p>"+ chirp + "</p>")
        $("#chirp-display").append("<hr/>")
        $("#chirp-display").append("<p>"+ timeStamp + "</p>")
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

////URL Maker
//var urlMaker = function (base) {
//    var url = "https://" + base + ".firebaseio.com/"
//    for (var i = 1; i < arguments.length; i++) {
//        url += arguments[i] + "/"
//    }
//    return url + ".json";
//}}