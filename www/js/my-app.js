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

myApp.onPageInit('index', function (page) {
	$$('.link').removeClass('active');
	$$('#aHome').addClass('active');
})

myApp.onPageInit('ride', function (page) {
	$$('.link').removeClass('active');
	$$('#aRide').addClass('active');
    map = new google.maps.Map(document.getElementById('map'), {
    	center: {lat: 2.9772081, lng: 101.7960628},
    	zoom: 18
    });
})

myApp.onPageInit('list', function (page) {
	$$('.link').removeClass('active');
	$$('#aList').addClass('active');
})

myApp.onPageInit('setting', function (page) {
	$$('.link').removeClass('active');
	$$('#aSetting').addClass('active');
})

myApp.onPageInit('info', function (page) {
	$$('.link').removeClass('active');
})

function viewCamera(){
	myApp.alert('test');
	CameraPreview.startCamera({x: 50, y: 50, width: 300, height: 300, toBack: false, previewDrag: true, tapPhoto: true});
	myApp.alert('test2');
}