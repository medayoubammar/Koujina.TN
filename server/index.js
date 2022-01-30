
// Your web app's Firebase configuration

// Change you firebase config here
const firebaseConfig = {
    apiKey: "AIzaSyCX9wMF5t0H-T_6y1_LRYe3OqDQOggw7ro",
    authDomain: "gomycodefirebase.firebaseapp.com",
    databaseURL: "https://gomycodefirebase.firebaseio.com",
    projectId: "gomycodefirebase",
    storageBucket: "gomycodefirebase.appspot.com",
    messagingSenderId: "670386039764",
    appId: "1:670386039764:web:8f48ebba79083758b44441",
    measurementId: "G-SF4MN2S4H4"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Reference recipes collection
var recipesRef = firebase.database().ref('recipes');


// transform data into json and work on it
function getJson() {
    recipesRef.on('value', gotData, errData);
}

// gotData will display data from Database

function gotData(data) {
    // get data value from DB
    var recipes = data.val();
    // work with data as an array
    var keys = Object.keys(recipes);
    for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        var recName = recipes[k].recName;
        var recDesc = recipes[k].recDesc;
        var recTown = recipes[k].recTown;
        var recPhotoUrl = recipes[k].recPhotoUrl;
// create one element for display one recipe in front-end
        var e = document.createElement("div");
        e.innerHTML =
            '<div class="card mb-3 food">' +
            '<img class="card-img-top" style="max-width: 400px; align-self: center;" src="' + recPhotoUrl + '" alt="">' +
            '<div class="card-body">' +
            '<h5 class="card-title text-center">' + recName + '</h5>' +
            '<p class="card-text">' + recDesc + '</p>' +
            ' <p class="card-text"><small class="text-light">' + recTown + ' </small></p>' +
            '</div >' +
            '</div >';
// append a recipe into the html body
        document.getElementById("search-results").appendChild(e);
    }
}

// function utile for show error 
function errData(err) {
    console.log(err);
}

getJson();