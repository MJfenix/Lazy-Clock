var timer;
var currentTime = new Date();
var hours = currentTime.getHours();
var tt = 'AM';
var minutes = currentTime.getMinutes();
var seconds = currentTime.getSeconds();

// var hours = 11;
// var minutes = 59;
// var seconds = 55;

var hClock = document.getElementById("hours");
var mClock = document.getElementById("mins");
var sClock = document.getElementById("secs");

function checkMeridian() {
	if(currentTime.getHours() >= 12){
		tt = 'PM';
	}
	else{
		tt = 'AM';
	}
}

function changeTime(h,m,s) {
	// add a zero in front of numbers<10
	m=checkTime(m);
	s=checkTime(s);
	document.getElementById('txt').innerHTML=h+":"+m+":"+s+":"+tt;
}

function checkTime(i) {
	if (i<10) {
		i="0" + i;
	}
	return i;
}

function changeHourFormat() {
	if(hours > 12){
		hours -= 12;
	}
}

function calcTime() {
	if(seconds == 60){
		seconds = 0;
		minutes += 1;

		if(minutes == 60){
			minutes =0;
			hours += 1;
			console.log('h', hours);
			if(hours == 12){
				checkMeridian();
			}
			if(hours > 12){
				hours = 1;
			}
		}
	}
	
	calcHours(hours, hClock);
	calcMins(minutes, mClock);
	calcSecs(seconds, sClock);
	changeTime(hours, minutes, seconds);

	seconds += 1;
}

setTimeout(function(){
	changeHourFormat();
	checkMeridian();
	calcHours(hours, hClock);
	calcMins(minutes, mClock);
	calcSecs(seconds, sClock);
},0);

setInterval("calcTime()", 1000);

function calcHours(h, clock) {
	var d = (360 - (h * 30));
	setD(d, clock);
}

function calcMins(m, clock) {
	var d = (360 - (m * 6));
	
	setD(d, clock);
}

function calcSecs(s, clock) {
	var d = (360 - (s * 6) - 6) + 5;
	setD(d, clock);
}

function setD(d, clock){
	clock.style.webkitTransform = "rotate(" + d + "deg)";
	clock.style.MozTransform =  "rotate(" + d + "deg)";
}

// code for rotating numbers
/*$("document").ready(function() {
	//arrange blocks in a circle
	var block = $("#rotator div").get(),
		increase = Math.PI * 2 / block.length,
		x = 0,
		y = 0,
		angle = 0;

	for (var i = 0; i < block.length; i++) {
		var elem = block[i];
		x = 140 * Math.cos(angle) + 150;
		y = 140 * Math.sin(angle) + 150;
		elem.style.position = 'absolute';
		elem.style.left = x + 'px';
		elem.style.top = y + 'px';
		var rot = 90 + (i * (360 / block.length));
		angle += increase;
	}

});*/