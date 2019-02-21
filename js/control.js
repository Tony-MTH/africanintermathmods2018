
// whether the slideshow is paused or not

// whether the slideshow is paused or not
var paused = false;

// when you click on a thumbnail
// it sets the src of the big image
// to be the same as the image
// you clicked on
$(".crop-img").click(function(){
	$("#bigImage").attr('src', 
		$(this).attr('src'));
});

// the counter variable that keeps
// track of which image you are showing
var counter = 1;
// virtually click on the current
// image to load it into the big image
$("#image"+counter).click();

/*$("#forward").click(function (){
	counter = counter + 1;
	if(counter > 6){
		counter = 1;
	}
	$("#image"+counter).click();
});
$("#backward").click(function (){
	counter = counter - 1;
	if(counter < 1){
		counter = 6;
	}
	$("#image"+counter).click();
});*/

$("#bigImage").click(function (event){
	if(event.offsetX < $(this).width()*0.3){
		counter = counter - 1;
		if(counter < 1){
			counter =  3;
		}
		$("#image"+counter).click();
	}
	else if(event.offsetX > $(this).width()*0.7){
		counter = counter + 1;
		if(counter > 3){
			counter = 1;
		}
		$("#image"+counter).click();
	}else{
		paused = !paused;
	}	
});
setInterval(function (){
	if(!paused){
		counter = counter + 1;
	if(counter > 3){
		counter = 1;
	}
	$("#image"+counter).click();
	};
}, 2000);


///
// The javascript code for the Mathmods/Intermaths description
var count = 0;
$(".chapter-thumbnail").click(function(){
	$("#mainViewer").html(
		$(this).html());
	var id = $(this).attr("id");
	count = parseInt(id.slice(-1));
});
$("#chapter"+count).click();
$("#mainViewer").click(function (event){

	if(event.offsetX
		< $(this).width()*0.3){
		count = count - 1;
	} else {
		count = count + 1;
	}
	if(count < 0){
		count =  0;
	}
	if(count >=
		$(".chapter-thumbnail").length){
		count =
	$(".chapter-thumbnail").length-1;
	}
	$("#chapter"+count).click();
});
