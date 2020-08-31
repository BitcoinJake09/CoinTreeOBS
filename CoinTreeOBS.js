//created by bitcoinjake09 on 8/30/2020
//thanks https://github.com/kgiszewski/Live-Stream-Web-Plugins/tree/master/News/Bitcoin for using as a base reference to start from :D
var app = (function () {

	var start = function() {
		getLastDono();

		setInterval(getLastDono, 10000);
	}

	var getLastDono = function () {
    var donoBox = document.getElementById("2");
    donoBox.focus();
    donoBox.scrollIntoView();
	}

	return {
		start: start
	}
})();

app.start();
