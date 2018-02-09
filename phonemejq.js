/* This code was inspired by Daniel Shiffman and his creative coding tutorials. Especially the one about RITA.js: https://www.youtube.com/watch?v=lIPEvh8HbGQ

RITA.js library: Howe, D. C. (2015). RiTa [Computer software]. Retrieved from http://rednoise.org/rita

Also of help was the array animation coding tutorial by Adam Khoury: https://www.youtube.com/watch?v=-MifpF7p1P0
*/

// declaring variables that will be referenced later
var dropzone;
var textfield;
var blutton;
var clearout;
var Head1;
var Head2;
var Head3;
var Head4;
var Head5;
var Head6;
var butt;
var bgcolor;
var cbgc;
var wss_i=0;
var gz1="2";
var word1=[""];
var wss_elem;
var animationspeed=400;

/*
0 = pig
1 = man
2 = frog
3 = mouth
4 = trump
00 = user inputted
*/

//p5 setup function which runs on page load: Maybe okay to phase it out for jquery

function setup() {
	textfield = select("#userinputyo");
	textfield.changed(processRITA);
	textfield.changed(phonemepics);
	textfield.changed(playit);
}

// Uses the RITA js library to parse everything into arrays

function processRITA() {
//grab user input and set it to a variable
	var usertext = textfield.value();

	//set phonemes from user input to its own variable
	var y = RiTa.getPhonemes(usertext);

	//set an RIString to its own variable. Need to Look this up...
	var rs = new RiString(usertext);

	//split the phonemes by spaces within the getPhonemes array. Use https://regexr.com/ to test
	var phonetic = y.split(/(\W+|"")/);

	//split phonemes by whitespace characters within the getPhonemes array
	var animation = y.split(/(\s|"")/);

//adds a ^ carat and a space to the beginning of the animation array
	var phoneticss= animation.unshift('^',' ');

//
	var words = rs.words();

	//set the firstword to the array beginning at the spliced-in space
	var firstword = animation.slice(0,animation.indexOf(' '));

	//don't recall what tokenize does...
	var d = RiTa.tokenize(usertext);

	var j = RiTa.getPhonemes(d);

	var outputted = document.getElementById("outputarea");
	outputted.innerHTML = y;

	var ouputarea0 = document.getElementById("outputarea0");
	ouputarea0.innerHTML = (RiTa.getPhonemes(usertext));

	var ouputarea3 = document.getElementById("outputarea3");
	ouputarea3.innerHTML = animation;

	var wordhover = document.getElementById("wordhover0");
	wordhover.innerHTML = (words);

	//runs playit funtion (defined below)
	playit();
}

// linked to the red X button, this clears out the arrays (and by extension the phoneme faces, phonetic breakdown, and animation box) as well as the user textbox

function clearit(){
	document.getElementById("outputarea").innerHTML = ("");
	document.getElementById("outputarea2").innerHTML = ("");
	document.getElementById("outputarea3").innerHTML = ("");
	word1=[""];
	textfield.value("");

}

//this function uses regex to find and replace phoneme words with pictures

function phonemepics() {
	var facesbtn = document.getElementById("wordhover0").innerHTML;
	var facehover = facesbtn.replace(/(,)/g, '<br/><br/>');
	document.getElementById("wordhover0").innerHTML = facehover;
	var str = document.getElementById("outputarea").innerHTML;
	var str2 = str.replace(/(\s)/g, '<span class="im"> | </span>');
	document.getElementById("outputarea").innerHTML = str2;
	faces();
}

function animateityo() {
	var phoneme2 = str.replace(/aa|ah|ao|eh|hh|ih|k|uh/g, '~<img src="./imgz1/' + gz1 + '/1.png" class="img">').replace(/aw|ow|oy|uw|w/g, '~<img src="./imgz1/' + gz1 + '/3.png" class="img">').replace(/ae|ay|ey|iy/g, '~<img src="./imgz1/' + gz1 + '/2.png" class="img">').replace(/b|m(?!age|g)|p(?!ng)/g, '~<img src="./imgz1/' + gz1 + '/4.png" class="img">').replace(/dh|l(?!ass)|th/g, '~<img src="./imgz1/' + gz1 + '/5.png" class="img">').replace(/f|v/g, '~<img src="./imgz1/' + gz1 + '/6.png" class="img">').replace(/d|g(?!"|z|\ss)|n(?!g)|ng(?!")|s(?!r|s|=)|t|z(?!z|1)/g, '~<img src="./imgz1/' + gz1 + '/7.png" class="img">').replace(/ch|er|jh|r|sh|y|zh/g, '~<img src="./imgz1/' + gz1 + '/8.png" class="img">').replace(/\s(?!cla|src)/g, '~<br/>').replace(/-/g, '~<span class="im">&#8226;</span>');

	var butt = phoneme2.split(/~/g);

	}
function newText(){
	var s = textfield.value();
	var words = s.split(/\W+/);

}
//sets the background behind the animation to bluescreen blue
function colorblue() {
	$("#easel").css("background-color", "#448AFF");
}
//sets the background behind the animation to greenscreen green --DEFAULT
function colorgreen() {
	$("#easel").css("background-color", "#CCFF90");
}
//sets the background behind the animation to black
function colorblack() {
	$("#easel").css("background-color", "#000000");
}
//sets the background behind the animation to white
function colorwhite() {
	$("#easel").css("background-color", "#fff");
}

//Animation function
function wssNext()
{
 wss_i++;
 wss_elem.style.opacity=0;
 if(wss_i>(word1.length-1 ))
 {
  wss_i=0;
 }
 setTimeout('wssSlide()', 0);
}

//second part of animation function linking it to the speed buttons
function wssSlide()
{
 wss_elem.innerHTML=word1[wss_i];
 wss_elem.style.opacity=1;
 setTimeout('wssNext()', animationspeed);
}


function playit(){
//replaces the outputarea0 (animation with the pictures from the folder. Defaults to whatever the "gz" variable is set to.)
var striii = document.getElementById("outputarea0").innerHTML;

var phonemic2 = striii.replace(/aa|ah|ao|eh|hh|ih|k|uh/g, '<img src="./imgz1/' +gz1 + '/1.png" class="img2">~').replace(/ae|ay|ey|iy/g, '<img src="./imgz1/' + gz1 + '/2.png" class="img2">~').replace(/aw|ow|oy|uw|w/g, '<img src="./imgz1/' + gz1 + '/3.png" class="img2">~').replace(/ch|er|jh|r(?!c)|sh|y|zh/g, '<img src="./imgz1/' + gz1 + '/8.png" class="img2">~').replace(/b|m(?!age|g)|p(?!ng)/g, '<img src="./imgz1/' + gz1 + '/4.png" class="img2">~').replace(/f|v/g, '<img src="./imgz1/' + gz1 + '/6.png" class="img2">~').replace(/dh|l(?!ass)|th/g, '<img src="./imgz1/' + gz1 + '/5.png" class="img2">~').replace(/d|g(?!"|z|2|\ss)|n(?!g)|ng(?!")|s(?!r|s|=)|t|z(?!z|1)/g, '<img src="./imgz1/' +gz1 + '/7.png" class="img2">~').replace(/\s(?!cla|src)/g, '<img src="./imgz1/' +gz1 + '/0.png" class="img2">~').replace(/-/g, '');

word1 = phonemic2.split('~') ;
//this creates an array split by the ~ so that it only contains image file.

word1.pop();
//this takes out the very last array element which was a space for some reason

word1.push('<img src="./imgz1/' + gz1 + '/0.png" class="img2">');
word1.push('<img src="./imgz1/' + gz1 + '/0.png" class="img2">');
word1.push('<img src="./imgz1/' + gz1 + '/0.png" class="img2">');

//this adds 3 resting faces to the end of the animation
}

//This is the function intended to create a button with the breakdown of all of the phonemes, which shows the words when you click it (that part doesn't work yet).

function faces() {

	var strr = document.getElementById("outputarea3").innerHTML;
	var booboo = textfield.value();
	var r = RiTa.tokenize(booboo);

var phoneme = strr.replace(/aa|ah|ao|eh|er|hh|ih|k|r|uh/g, '<img src="./imgz1/' + gz1 + '/1.png" class="img">').replace(/aw|ow|oy|uw|w/g, '<img src="./imgz1/' + gz1 + '/3.png" class="img">').replace(/ae|ay|ey|iy/g, '<img src="./imgz1/' + gz1 + '/2.png" class="img">').replace(/b|m(?!age|g)|p(?!ng)/g, '<img src="./imgz1/' + gz1 + '/4.png" class="img">').replace(/dh|l(?!ass)|th/g, '<img src="./imgz1/' + gz1 + '/5.png" class="img">').replace(/ch|jh|sh|y|zh/g, '<img src="./imgz1/' + gz1 + '/8.png" class="img">').replace(/f|v/g, '<img src="./imgz1/' + gz1 + '/6.png" class="img">').replace(/d|g(?!"|z|\ss)|n(?!g)|ng(?!")|s(?!r|s|=)|t|z(?!z|1)/g, '<img src="./imgz1/' + gz1 + '/7.png" class="img">').replace(/-/g, '<wbr><span class="im">&#8226;</span><wbr>').replace('^', '<span>^').replace(/\s(?!cla|src)/g, '</span><br/><span class="ui-bar ui-bar-a ui-corner-all">').replace(/(,)/g, '').replace('<span>^</span><br/>','');
document.getElementById("outputarea2").innerHTML = phoneme;

}

//Slow and fast buttons which need to be replaced by a slider

function slowit() {
	animationspeed=animationspeed+20;
}
function fastit() {
	animationspeed=animationspeed-20;
}

//buttons which choose which face to display
//the gz variable was picked because it does not get replaced by the replace function in the phoneme function
function pig() {
	gz1="0";
	$(".biggreen0").show();
	$(".biggreen1").hide();
	$(".biggreen2").hide();
	$(".biggreen3").hide();
}
function man() {
	gz1="1";
	$(".biggreen1").show();
	$(".biggreen0").hide();
	$(".biggreen2").hide();
	$(".biggreen3").hide();
}
function frog() {
	gz1="2";
	$(".biggreen2").show();
	$(".biggreen0").hide();
	$(".biggreen1").hide();
	$(".biggreen3").hide();
}
function mouth() {
	gz1="4";
	$(".biggreen3").show();
	$(".biggreen0").hide();
	$(".biggreen1").hide();
	$(".biggreen2").hide();
}
function trump() {
	gz1="4";
	$(".biggreen3").show();
	$(".biggreen0").hide();
	$(".biggreen1").hide();
	$(".biggreen2").hide();
}
