$(document).ready(function() {
	
	$("#start_btn").click(countdown);
	$("#pause_btn").click(cdpause);
	$("#reset_btn").click(cdreset);
	$("#bid_btn").click(bid);
	
	
	
	
	
});

var timeout;
var count = 30;
var bid_count = 0;
var tickAudio = new Audio('includes/beep.mp3');	
var bidAudio = new Audio('includes/Click.mp3')

var winAudioArr = [
	new Audio('includes/ball.mp3'),
	new Audio('includes/good.mp3'),
	new Audio('includes/king.mp3'),
	new Audio('includes/steel.mp3'),
	new Audio('includes/suck.mp3'),
	new Audio('includes/cow.mp3'),
	new Audio('includes/yippie.mp3'),
	new Audio('includes/million.mp3'),
]


//var winAudio = new Audio('includes/million.mp3');
var winAudio = winAudioArr[Math.floor(Math.random() * winAudioArr.length)];

function cddisplay() {
    $("#time").html(count);
}
function biddisplay(){
	$("#current_bid").val(bid_count);
}

function countdown() {
    // starts countdown
    cddisplay();
    if (count === 0) {
    	winAudio.play();
    	$(".current-bid-wrap").addClass("winner");
    	$("#bid-title").html("Winning Bid");
        // time is up
    } else {
    	if ((count < 4 && count > 0) || count % 10 == 0){
	        tickAudio.play();
	        $("#time").addClass("red");
        }
        else{
	        $("#time").removeClass("red");
        }
        count--;
        timeout = setTimeout(countdown, 1000);
        
    }
}


function cdpause() {
    // pauses countdown
    clearTimeout(timeout);
}




function cdreset() {
    // resets countdown
    winAudio = winAudioArr[Math.floor(Math.random() * winAudioArr.length)];
    cdpause();
    count=30;
    bid_count=0;
    $("#time").removeClass("red");
    $(".current-bid-wrap").removeClass("winner");
    $("#bid-title").html("Current Bid");
    cddisplay();
    biddisplay();
}	

function bid(){
	temp_bid = $("#current_bid").val();
	if(count > 5){
		bid_count = temp_bid;
		bid_count++;
		bidAudio.play();
		biddisplay();
	}
	else{
		count = 5;
		bid_count = temp_bid;
		bid_count++;
		bidAudio.play();
		biddisplay();
		cddisplay();	
	}	
}
	
	
	
