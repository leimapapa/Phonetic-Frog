var wss_i=0;
var animationspeed=200;
var word1=[""];
var wss_elem;
var gz1="0";
/*
0 = pig
1 = man
2 = frog
3 = mouth
00 = user inputted
*/

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

function wssSlide()
{
 wss_elem.innerHTML=word1[wss_i];
 wss_elem.style.opacity=1;
 setTimeout('wssNext()', animationspeed);
}
//g(?!"|z|2|\ss)
function playit(){
var striii = document.getElementById("outputarea0").innerHTML;
var phonemic2 = striii.replace(/aa|ah|ao|eh|hh|ih|k|uh/g, '<img src="./imgz1/' +gz1 + '/1.png" class="img2">~').replace(/ae|ay|ey|iy/g, '<img src="./imgz1/' + gz1 + '/2.png" class="img2">~').replace(/aw|ow|oy|uw|w/g, '<img src="./imgz1/' + gz1 + '/3.png" class="img2">~').replace(/ch|er|jh|r(?!c)|sh|y|zh/g, '<img src="./imgz1/' + gz1 + '/8.png" class="img2">~').replace(/b|m(?!age|g)|p(?!ng)/g, '<img src="./imgz1/' + gz1 + '/4.png" class="img2">~').replace(/f|v/g, '<img src="./imgz1/' + gz1 + '/6.png" class="img2">~').replace(/dh|l(?!ass)|th/g, '<img src="./imgz1/' + gz1 + '/5.png" class="img2">~').replace(/d|g(?!"|z|2|\ss)|n(?!g)|ng(?!")|s(?!r|s|=)|t|z(?!z|1)/g, '<img src="./imgz1/' +gz1 + '/7.png" class="img2">~').replace(/\s(?!cla|src)/g, '<img src="./imgz1/' +gz1 + '/0.png" class="img2">~').replace(/-/g, '');

word1 = phonemic2.split('~'); 
//this creates an array split by the ~ so that it only contains image file.

console.log(word1);
}
function slowit() {
	animationspeed=animationspeed+10;
}
function fastit() {
	animationspeed=animationspeed-10;
}
function pig() {
	gz1="0";
	$(".biggreen0").toggle();
	$(".biggreen1").hide();
	$(".biggreen2").hide();
	$(".biggreen3").hide();
}
function man() {
	gz1="1";
	$(".biggreen1").toggle();
	$(".biggreen0").hide();
	$(".biggreen2").hide();
	$(".biggreen3").hide();
}
function frog() {
	gz1="2";
	$(".biggreen2").toggle();
	$(".biggreen0").hide();
	$(".biggreen1").hide();
	$(".biggreen3").hide();
}
function mouth() {
	gz1="3";
	$(".biggreen3").toggle();
	$(".biggreen0").hide();
	$(".biggreen1").hide();
	$(".biggreen2").hide();
}

