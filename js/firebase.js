$( document ).ready(function() {
	var firebaseRoot = "https://webtutorials.firebaseio.com/",
		usersRef = new Firebase(firebaseRoot + 'users');

	usersRef.on('value', function(snap) {
		console.log(snap.val());
	})
});