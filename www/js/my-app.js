// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});

myApp.onPageInit('ride', function (page) {
    // Do something here for "about" page
    myApp.alert("test");
    map = new google.maps.Map(document.getElementById('map'), {
    	center: {lat: 2.9772081, lng: 101.7960628},
    	zoom: 18
    });
})