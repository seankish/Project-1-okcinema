$(document).ready(function () {
    // yt api - AIzaSyCLN2DhNTCJwMEQcOVCWWj2QXmWKliRjp0
    var firebaseConfig = {
        apiKey: "AIzaSyDcsfZp9XKyfe06zFsNabyAQfzaSC5XHQs",
        authDomain: "okcinema.firebaseapp.com",
        databaseURL: "https://okcinema.firebaseio.com",
        projectId: "okcinema",
        storageBucket: "okcinema.appspot.com",
        messagingSenderId: "949998857835",
        appId: "1:949998857835:web:d236e17a3acdc4a9"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    function startYoutube() {
        // 2. Initialize the JavaScript client library.
        gapi.client.init({
            'apiKey': 'AIzaSyDcsfZp9XKyfe06zFsNabyAQfzaSC5XHQs',
            // Your API key will be automatically added to the Discovery Document URLs.
            'discoveryDocs': ['https://people.googleapis.com/$discovery/rest'],
            // clientId and scope are optional if auth is not required.
            'clientId': '949998857835-fuv47qfpajtitlijo74cassrg1e2inm5.apps.googleusercontent.com',
            'scope': 'profile',
        }).then(function () {
            // 3. Initialize and make the API request.
            return gapi.client.people.people.get({
                'resourceName': 'people/me',
                'requestMask.includeField': 'person.names'
            });
        }).then(function (response) {
            console.log(response.result);
        }, function (reason) {
            console.log('Error: ' + reason.result.error.message);
        });
    };
    // 1. Load the JavaScript client library.
    gapi.load('client', startYoutube);




    function searchByKeyword() {
        var results = YouTube.Search.list('id,snippet', { q: 'dogs', maxResults: 5 });

        for (var i in results.items) {
            var item = results.items[i];
            console.log('[%s] Title: %s', item.id.videoId, item.snippet.title);
        }
    }
    // searchByKeyword();

})