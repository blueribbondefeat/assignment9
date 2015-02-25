// $(document).ready(
// 	function(){
// 		alert("ready");
// 	}
// );


$(document).ready(function(e){

	

	// console.log($('#item1_button'));
	// console.log($('#item1 h3'));

	//notes when an attribute is clicked  by user
	$('#item1_button').click(function(e){
		alert("clicked");
	});



	//notes when an attribute is hovered over by user
	$('#item2_button').hover(function(e){
		alert("item2 has a hoverer");
	});

	//	something is wrong with this js 
	// $('#item3_button').click(function(e){
	// 	$("#item3 p")e.currentTarget();
	// });
	//


	//hide an attribute ... once
	$('#item4_button').click(function(e){
		$("#item4 p").hide();
	});

	//toggle allows you to change an attribute back and forth
	$('#item5_button').click(function(e){
		$("#item5 p").toggle();
	});

	//change text in an attribute 
	$('#item6_button').click(function(e){
		$("#item6 p").text($("#item6 p").text() + " New Text");

	});

	//change css of an attribute 
	$('#item7_button').click(function(e){
		$("#item7 p").css({
			color:"green",
			padding:"30px",
			});
	});

	//change to a new attribute ... once
	$('#item8_button').click(function(e){
		$("#item8 img").attr( {
			src: "imgs/image2.png"
		});
	});

	//change properties of an attribute 
	$('#item9_button').click(function(e){
		$("#item9 img").animate({
			height:"50%",
		});
	});
});