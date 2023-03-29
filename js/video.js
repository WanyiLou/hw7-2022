var video = document.querySelector("video");
var slider = document.querySelector("#slider");
var output = document.querySelector("#volume");

video.autoplay = false;
video.loop = false;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	if (!video.autoplay) {
		console.log("Auto play is set to false");
	}
	if (!video.loop) {
		console.log("Loop is set to false");
	}
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");	
	video.play();
	output.innerHTML = slider.value + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");	
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down Video");	
	video.playbackRate *= 0.9;
	console.log("Speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Slow down Video");	
	video.playbackRate /= 0.9;
	console.log("Speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");	
	video.currentTime += 10;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	}
	console.log("Video current time is " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		console.log("Unmute");
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}
	else {
		console.log("Mute");
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
});

slider.addEventListener("change", function() {
	output.innerHTML = this.value + "%";
	video.volume = this.value * 0.01;
	console.log("The current value is " + video.volume);
	//console.log('<span id = "volume">'+ output.innerHTML +'</span>');
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.className = "video oldSchool";
});

document.querySelector("#orig").addEventListener("click", function() {
	video.className = "video";
});

