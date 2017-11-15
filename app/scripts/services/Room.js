(function() {
    function Room($firebaseArray) {
        var Room = {};
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);  //Array of rooms

        Room.all = rooms;

        return Room; // Returns array of rooms
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
