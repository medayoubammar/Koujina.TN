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
// Get a reference to the database service
var database = firebase.database();
//Listening on the form
document.getElementById('add-food-form').addEventListener('submit', sendRecipe);

function sendRecipe(e) {
    e.preventDefault();
    var recName = document.getElementById('food-name').value;
    var cin = document.getElementById('user-cin').value;
    var recDesc = document.getElementById('food-desc').value;
    var recTown = document.getElementById('food-location').value;
    var recPhotoUrl = document.getElementById('food-pic').value;
   // console.log(recName,cin,recDesc,recTown,recPhotoUrl);
    document.getElementById('add-food-form').reset();
    writeRecipesToFB(recName, recDesc, cin, recTown, recPhotoUrl);
    window.alert('Submission Done!');
}
var recipeRef = database.ref('recipes/');

function writeRecipesToFB(recName, recDesc, cin, recTown, recPhotoUrl) {
    // Generate a reference to a new location and add some data using push()
    
    var newRecipeRef = recipeRef.push();
    newRecipeRef.set({
        recName: recName,
        recDesc: recDesc,
        cin: cin,
        recTown: recTown,
        recPhotoUrl: recPhotoUrl

    });
   // console.log(newRecipeRef.key);
}