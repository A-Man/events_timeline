$(document).ready(function(e){
 var i = 0;
 // create object
     imageObj = new Image();
	 imageObj1=new Image();
	 imageObj2=new Image();
	 imageObj3=new Image();
	 imageObj4=new Image();
	 // set image list
     images = new Array();
     images[0]="event1.jpg";
     images[1]="event2.jpg";
	 images[2]="event3.jpg";
	  images[3]="event4.jpg";
	   images[4]="event5.jpg";
	// start preloading
          imageObj.src=images[0];
		  imageObj1.src=images[1];
		  imageObj2.src=images[2];
		  imageObj3.src=images[3];
		  imageObj4.src=images[4];
		  
$('#cd-timeline').find('a').on('click',function(e){
e.preventDefault();
$('#cd-timeline').hide();
//$('#cd-timeline').css("visibility","hidden");
var desc=$('#hiddendiv');
var timeline=$('#cd-timeline');
switch($(this).attr('id'))
{
case 'div1':
desc.load('events.php?id=1&isAjax=true');
break;
case 'div2':
desc.load('events.php?id=2&isAjax=true');
break;
case 'div3':
desc.load('events.php?id=3&isAjax=true');
break;
case 'div4':
desc.load('events.php?id=4&isAjax=true');
break;
case 'div5':
desc.load('events.php?id=5&isAjax=true');
break;
}
desc.css("visibility","visible");
});

// var coords = new Array();
// coords["ANUSHTHAN"] = [12,12];
// // <div class="x" data="ANUSHTHAN"></div>
// $(".x").on("hover", function() {
//   var data = $(this).attr("data");
//   y(coords[data]);
// });

$('#div1').hover(function(){
$('#first').css('background-image','url(event1.jpg)');
//$('#cd-timeline').css('opacity','0.4');
},
function()
{
$('#first').css('background-image','url(css/dj.jpg)');
//$('#cd-timeline').css('opacity','0.85');
});

$('#div2').hover(function(){
$('#first').css('background-image','url(event1.jpg)');
//$('#cd-timeline').css('opacity','0.4');
},
function()
{
$('#first').css('background-image','url(css/dj.jpg)');
//$('#cd-timeline').css('opacity','0.85');
});



});