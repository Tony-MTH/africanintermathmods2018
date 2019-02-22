
var image_template, intmod_template;

function showTemplate(template, data){
	var html    = template(data);
	$('#chapterlist').html(html);
}
function showTemplate1(template, data){
	var html    = template(data);
	$('#hiddenImages').html(html);
}
//Knowus page starts here
$(document).ready(function(){
	var source   = $("#knowus-template").html();
	knowus_template = Handlebars.compile(source);

	showTemplate(knowus_template, itemList);

	$(".chapter-thumbnail").click(function(){
		$("#mainViewer").html(
			$(this).html());
	});
	$("#chapter0").click();
});
//Knowus page ends here

//Index page begins here
$(document).ready(function(){
	var source   = $("#intmod-template").html();
	intmod_template = Handlebars.compile(source);

	var source   = $("#image-template").html();
	image_template = Handlebars.compile(source);
	
	showTemplate(intmod_template, itemList);
	showTemplate1(image_template, itemList);

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
	$(".chapter-thumbnail").click(function(){
		$("#mainViewer").html(
			$(this).html());
	});
	$("#chapter0").click();
});
//Index page ends here