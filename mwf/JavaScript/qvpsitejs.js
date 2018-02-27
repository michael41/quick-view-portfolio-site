


$(document).ready(function() {


//So that there's a blue screen before the whole page loads (so it won't show stuff it should show, etc.) : 
	window.onload = function() { 
	// this will be run when the whole page is loaded
		$('#the_body').removeAttr("style");
    };

var bigslidesnotshowing; 
var rotation; 
var rotation_interval;

//variable you need so that when the 'more' button is clicked, the height will be adjusted accordingly
var more_button_for_greater_height; 


function rotationFunction(){

				//$('.test').html("rotationFunction invoked");


				var r = 1;
						/*
						//Slide out : 	
						setTimeout(function(){$(".rotating_banner_images img").hide("slide", { direction: "left" }, 500);}, 500);
						
						
						setTimeout(function(){$(".rotating_banner_images img").attr("src", "mwf/Images/banner/pm" + ind + ".png");}, 1000);
																			
						//Slide in : 		
						setTimeout(function(){$(".rotating_banner_images img").show("slide", { direction: "right" }, 500);}, 1000);
						*/
				
					
					rotation_interval =	setInterval(function(){ 
						 
						 
								//alert ("r is " + r); 
								if (rotation == true)
								{
								rotation = false
								$("#" + r).hide("slide", { direction: "left" }, 250,
									function(){
									$("#" + r).show("slide", { direction: "right" }, 250);
									rotation = true;
									});
								}
							
																						
						r++;						
					
						
						if (r >= 6) {
									r = 1; 
									
									setTimeout(function(){
						
									$("#1").show();							
							
									}, 500);
									
									
									
									
								}
						
						
						}, 2000);
					
				
				

	
}

function myStopFunction() {
     clearInterval(rotation_interval);
	 $('#1').show(); $('#2').hide(); $('#3').hide(); $('#4').hide(); $('#5').hide(); $('#6').hide();
	 //$('.test').html("myStopFunction invoked");
}

var rotation2; 
var rotation_interval2;
var more_button_is_clicked;

function rotationFunction2(){

				//$('.test2').html("rotationFunction2 invoked");


				var r2 = 1;
								
					rotation_interval2 =	setInterval(function(){ 
						 
						 
								//alert ("r is " + r); 
								if (rotation2 == true)
								{
								rotation2 = false
								$(".slides_small_" + r2).hide("slide", { direction: "left" }, 250,
									function(){
									$(".slides_small_" + r2).show("slide", { direction: "right" }, 250);
									rotation2 = true;
									});
								}
							
																						
						r2++;						
					
						
						if (r2 >= 6) {
									r2 = 1; 
									
									setTimeout(function(){
						
									$(".slides_small_1").show();							
							
									}, 500);
									
									
									
									
								}
						
						
						}, 2000);
					
				
				

	
}

function myStopFunction2() {
     clearInterval(rotation_interval2);
	 $('.slides_small_1').show(); $('.slides_small_2').hide(); $('.slides_small_3').hide(); $('.slides_small_4').hide(); $('.slides_small_5').hide(); 
	 //$('.test2').html("myStopFunction2 invoked");
}



//--------------------------------CV BUTTONS, ETC.-------------------------------------\\

//Hide the content first : 
$('.ykaboutmike').hide(); $('.ykpicmatchcontent').hide();  $('.ykezyenglishcontent').hide();  $('.ykmorecontent').hide(); 
$('.banner_images_larger').hide(); $('.blank_span').hide();
$('.more_content').hide(); 
 

$('.ykcvbtn').on('click',function(){	

$('.ykmorebtn').attr('clicked', 0); 
$('.ykezyengbtn').attr('clicked', 0); 
$('.ykpicmatchbtn').attr('clicked', 0); 
	
			//Click toggle functionality :
			if($(this).attr('clicked') == 1)
				{
					//Clicked again : 
					$(this).attr('clicked', 0);
					
					var id_you_need = $(this).attr("id");					
					var div_needed = $('.ykcontentcolumn').find('.' + id_you_need);				
					$(div_needed).hide("explode", {pieces: 16 }, 250);
					setTimeout(function(){$('.monlogodiv').fadeIn(250);}, 250);
									
					$(".ykcvbtn:focus").css("cssText", "background-color: transparent!important;");
					$(".ykbutton").css("cssText", "background-color: transparent!important;");
					
					
					//Remove the class for the larger height of the div on the content column
					$('.ykcontentcolumn').removeClass('ykcontentcolumn_bigger');
					
					myStopFunction(); rotation = false; 
					myStopFunction2(); rotation2 = false; 
				} 				
				else
				{
					
					//Clicked first time : 
					$(this).attr('clicked', 1);
					
					var id_you_need = $(this).attr("id");					
					var div_needed = $('.ykcontentcolumn').find('.' + id_you_need);		
					$('.monlogodiv').fadeOut(250);
					$(div_needed).siblings().hide("explode", {pieces: 16 }, 250); 				
					setTimeout(function(){$(div_needed).show("blind", {pieces: 16 }, 250);}, 250);
					
					
					$(".ykcvbtn:focus").css("cssText", "background-color: #007095!important;");
					$(".ykezyengbtn").css("cssText", "background-color: transparent!important;");
					$(".ykmorebtn").css("cssText", "background-color: transparent!important;");
					$(".ykpicmatchbtn").css("cssText", "background-color: transparent!important;");	
					
									
					//Remove the class for the larger height of the div on the content column
					$('.ykcontentcolumn').removeClass('ykcontentcolumn_bigger');			
					
					myStopFunction(); rotation = false; 
					myStopFunction2(); rotation2 = false; 
			}
				
});

$('.ykpicmatchbtn').on('click',function(){	

$('.ykmorebtn').attr('clicked', 0); 
$('.ykezyengbtn').attr('clicked', 0); 
$('.ykcvbtn').attr('clicked', 0); 



			//Click toggle functionality :
			if($(this).attr('clicked') == 1)
				{
		
					
						
					$(this).attr('clicked', 0);
					
					var id_you_need = $(this).attr("id");					
					var div_needed = $('.ykcontentcolumn').find('.' + id_you_need);				
					$(div_needed).hide("explode", {pieces: 16 }, 250);
					setTimeout(function(){$('.monlogodiv').fadeIn(250);}, 250);
					 
					$(".ykpicmatchbtn:focus").css("cssText", "background-color: transparent!important;");
					$(".ykbutton").css("cssText", "background-color: transparent!important;");
					
					//Remove the class for the larger height of the div on the content column
					$('.ykcontentcolumn').removeClass('ykcontentcolumn_bigger');
					
					myStopFunction(); rotation = false; 
					myStopFunction2(); rotation2 = false; 
			
				} 				
				else
				{
					
					myStopFunction(); rotation = false; 
					myStopFunction2(); rotation2 = false; 
					
					$(this).attr('clicked', 1);
					
					var id_you_need = $(this).attr("id");					
					var div_needed = $('.ykcontentcolumn').find('.' + id_you_need);	
					$('.monlogodiv').fadeOut(250);			
					$(div_needed).siblings().hide("explode", {pieces: 16 }, 250); 				
					setTimeout(function(){$(div_needed).show("blind", {pieces: 16 }, 250);}, 250);
					$(".ykpicmatchbtn:focus").css("cssText", "background-color: #007095!important;");
					$(".ykezyengbtn").css("cssText", "background-color: transparent!important;");
					$(".ykmorebtn").css("cssText", "background-color: transparent!important;");
					$(".ykcvbtn").css("cssText", "background-color: transparent!important;");
					
					//Remove the class for the larger height of the div on the content column
					$('.ykcontentcolumn').removeClass('ykcontentcolumn_bigger');

					rotation = true;
					if (rotation == true)
					{
					$('#1').show(); $('#2').hide(); $('#3').hide(); $('#4').hide(); $('#5').hide(); $('#6').hide();					
					rotationFunction();
					}
					
				}
				

				
});

$('.ykezyengbtn').on('click',function(){	

$('.ykmorebtn').attr('clicked', 0); 
$('.ykpicmatchbtn').attr('clicked', 0); 
$('.ykcvbtn').attr('clicked', 0); 

			//Click toggle functionality :
			if($(this).attr('clicked') == 1)
				{
					$(this).attr('clicked', 0);
					
					var id_you_need = $(this).attr("id");					
					var div_needed = $('.ykcontentcolumn').find('.' + id_you_need);				
					$(div_needed).hide("explode", {pieces: 16 }, 250); 
					setTimeout(function(){$('.monlogodiv').fadeIn(250);}, 250);
					
					$(".ykezyengbtn:focus").css("cssText", "background-color: transparent!important;");
					$(".ykbutton").css("cssText", "background-color: transparent!important;");	
					
					//Remove the class for the larger height of the div on the content column
					$('.ykcontentcolumn').removeClass('ykcontentcolumn_bigger');				
					
					myStopFunction(); rotation = false;  
					myStopFunction2(); rotation2 = false;  
				} 				
				else
				{
					
					myStopFunction(); rotation = false;
					myStopFunction2(); rotation2 = false; 
					
					$(this).attr('clicked', 1);
					
					var id_you_need = $(this).attr("id");					
					var div_needed = $('.ykcontentcolumn').find('.' + id_you_need);	
					$('.monlogodiv').fadeOut(250);			
					$(div_needed).siblings().hide("explode", {pieces: 16 }, 250); 				
					setTimeout(function(){$(div_needed).show("blind", {pieces: 16 }, 250);}, 250);
					$(".ykezyengbtn:focus").css("cssText", "background-color: #007095!important;");
					$(".ykpicmatchbtn").css("cssText", "background-color: transparent!important;");
					$(".ykmorebtn").css("cssText", "background-color: transparent!important;");
					$(".ykcvbtn").css("cssText", "background-color: transparent!important;");
					
					//Remove the class for the larger height of the div on the content column
					$('.ykcontentcolumn').removeClass('ykcontentcolumn_bigger');

				rotation2 = true;
				if (rotation2 == true)
				{
				$('.slides_small_1').show(); $('.slides_small_2').hide(); $('.slides_small_3').hide(); $('.slides_small_4').hide(); $('.slides_small_5').hide(); 				
				rotationFunction2();
				}
				
				}
				
});

$('.ykmorebtn').on('click',function(){	


$('.ykezyengbtn').attr('clicked', 0); 
$('.ykpicmatchbtn').attr('clicked', 0); 
$('.ykcvbtn').attr('clicked', 0); 

			//Click toggle functionality :
			if($(this).attr('clicked') == 1)
				{
					$(this).attr('clicked', 0);
					
					more_button_is_clicked = false; 
					
					var id_you_need = $(this).attr("id");					
					var div_needed = $('.ykcontentcolumn').find('.' + id_you_need);				
					$(div_needed).hide("explode", {pieces: 16 }, 250); 
					setTimeout(function(){$('.monlogodiv').fadeIn(250);}, 250);
					
					$(".ykmorebtn:focus").css("cssText", "background-color: transparent!important;");
					$(".ykbutton").css("cssText", "background-color: transparent!important;");
					
					//Remove the class for the larger height of the div on the content column
					$('.ykcontentcolumn').removeClass('ykcontentcolumn_bigger');
					
					myStopFunction(); rotation = false;
					myStopFunction2(); rotation2 = false; 
				} 				
				else
				{
					$(this).attr('clicked', 1);
					
					more_button_is_clicked = true; 				
					 
					
					myStopFunction(); rotation = false; 
					myStopFunction2(); rotation2 = false; 
					
					//Remove the class for the larger height of the div on the content column
					$('.ykcontentcolumn').removeClass('ykcontentcolumn_bigger');
					
					if (more_button_for_greater_height == true)
					{
					//Add the class for the larger height of the div on the content column
					$('.ykcontentcolumn').addClass('ykcontentcolumn_bigger'); 	
					}
					
					var id_you_need = $(this).attr("id");					
					var div_needed = $('.ykcontentcolumn').find('.' + id_you_need);	
					$('.monlogodiv').fadeOut(250);			
					$(div_needed).siblings().hide("explode", {pieces: 16 }, 250); 				
					setTimeout(function(){$(div_needed).show("blind", {pieces: 16 }, 250);}, 250);
					$(".ykmorebtn:focus").css("cssText", "background-color: #007095!important;");					
					$(".ykpicmatchbtn").css("cssText", "background-color: transparent!important;");
					$(".ykezyengbtn").css("cssText", "background-color: transparent!important;");
					$(".ykcvbtn").css("cssText", "background-color: transparent!important;");

				}
				
});



//--------------------------------BIGGER IMAGES---------------------------\\

/*Pic Match*/
$('.slides_small_pm').on('click', function(){
	
	bigslidesnotshowing = false; 
	
	myStopFunction();
	
	var this_images_id = $(this).attr('id'); 
	
	var image_you_need = $(this).parent().next().find("#larger_" + this_images_id).attr("id"); 
		
	$('.rotating_banner_images').hide();
	$('.banner_images_larger').show();

	$('#' + image_you_need).show(); 
	
	$('#' + image_you_need).siblings().hide();
	
	//Add the classes needed for the larger slides :  
	$('.yk_home_page_wrapper').addClass('yk_home_page_wrapper2'); 
	$('.yk_content_with_banner').addClass('yk_content_with_banner2');
	
	//Hide the paragraph so the larger images can be shown better : 
	$('.ykcontent_innercontent').find('p').hide(); 
	
	//Hide the top row, the cv row and the buttons but show some blank spans so that foundation works correctly : 
	$('.cv_row').hide(); $('.mon').hide(); $('.ykbutton').hide(); $('.blank_span').show();
	
	});
	
$('.x_button').on('click', function(){
	
	bigslidesnotshowing = true;
	
	//alert('x button clicked'); 
	
	//Show the top row, the cv row and the buttons but hide some blank spans back again : 
	$('.cv_row').show(); $('.mon').show(); $('.ykbutton').show(); $('.blank_span').hide();
	
	//Show the paragraphs again : 
	$('.ykcontent_innercontent').find('p').show(); 
	
	//Remove the classes that were needed for the larger slides :  
	$('.yk_home_page_wrapper').removeClass('yk_home_page_wrapper2'); 
	$('.yk_content_with_banner').removeClass('yk_content_with_banner2');
	
	//Hide the large banner and show the small banner
	$('.banner_images_larger').hide();
	$('.rotating_banner_images').show();
	
	restoreMoreOtherStuff();
	rotationFunction();
	
	
});

$('.x_button').on('mouseenter', function(){
	
$(this).attr("src", "mwf/Images/x_highlighted.png"); 	
	
});

$('.x_button').on('mouseleave', function(){
	
$(this).attr("src", "mwf/Images/x.png"); 	
	
});
	
$(".previous").on({
    mouseenter: function () {
        $(this).attr("src", "mwf/Images/backk_txt.png");
    },
    mouseleave: function () {
        $(this).attr("src", "mwf/Images/backk.png");
    }
});

$(".next").on({
    mouseenter: function () {
        $(this).attr("src", "mwf/Images/nextt_txt.png");
    },
    mouseleave: function () {
        $(this).attr("src", "mwf/Images/nextt.png");
    }
});

$('.prev1').on('click', function(){
	
	$('#larger_1').hide();
	$('#larger_5').show();
 
	
});
$('.prev2').on('click', function(){
	
    $('#larger_2').hide(); 
	$('#larger_1').show(); 
	
});
$('.prev3').on('click', function(){
	
    $('#larger_3').hide(); 
	$('#larger_2').show(); 
	
});
$('.prev4').on('click', function(){
	
    $('#larger_4').hide(); 
	$('#larger_3').show(); 
	
});
$('.prev5').on('click', function(){
	
    $('#larger_5').hide(); 
	$('#larger_4').show(); 
	
});

$('.nxt1').on('click', function(){
	
	$('#larger_1').hide();
	$('#larger_2').show();
 
	
});
$('.nxt2').on('click', function(){
	
    $('#larger_2').hide(); 
	$('#larger_3').show(); 
	
});
$('.nxt3').on('click', function(){
	
    $('#larger_3').hide(); 
	$('#larger_4').show(); 
	
});
$('.nxt4').on('click', function(){
	
    $('#larger_4').hide(); 
	$('#larger_5').show(); 
	
});
$('.nxt5').on('click', function(){
	
    $('#larger_5').hide(); 
	$('#larger_1').show(); 
	
});
	
/*Non Pic Match*/
	
$('.slides_small_not_pm').on('click', function(){
	
	bigslidesnotshowing = false;
	
	myStopFunction2();
	
	var this_images_id = $(this).attr('id');
	
	function getSecondPart(str) {
    return str.split('_')[1];
	}
	
	var theiduneed = getSecondPart(this_images_id); 

	var image_you_need = $(this).parent().next().find("#non_pm_larger_" + theiduneed).attr("id"); 
	
	$('.rotating_banner_images').hide();
	$('.banner_images_larger').show();

	$('#' + image_you_need).show(); 
	
	$('#' + image_you_need).siblings().hide();
	
	//Add the classes needed for the larger slides :  
	$('.yk_home_page_wrapper').addClass('yk_home_page_wrapper2'); 
	$('.yk_content_with_banner').addClass('yk_content_with_banner2');
	
	//Hide the paragraph so the larger images can be shown better : 
	$('.ykcontent_innercontent').find('p').hide(); 
	
	//Hide the top row, the cv row and the buttons but show some blank spans so that foundation works correctly : 
	$('.cv_row').hide(); $('.mon').hide(); $('.ykbutton').hide(); $('.blank_span').show();
	
	}); 

$('.non_pm_x_button').on('click', function(){
	
	bigslidesnotshowing = true;
	
	//alert('x button clicked'); 
	
	//Show the top row, the cv row and the buttons but hide some blank spans back again : 
	$('.cv_row').show(); $('.mon').show(); $('.ykbutton').show(); $('.blank_span').hide();
	
	//Show the paragraphs again : 
	$('.ykcontent_innercontent').find('p').show(); 
	
	//Remove the classes that were needed for the larger slides :  
	$('.yk_home_page_wrapper').removeClass('yk_home_page_wrapper2'); 
	$('.yk_content_with_banner').removeClass('yk_content_with_banner2');
	
	//Hide the large banner and show the small banner
	$('.banner_images_larger').hide();
	$('.rotating_banner_images').show();

	
	restoreMoreOtherStuff();
	rotationFunction2();
	
	
});

$('.non_pm_x_button').on('mouseenter', function(){
	
$(this).attr("src", "mwf/Images/x_highlighted.png"); 	
	
});

$('.non_pm_x_button').on('mouseleave', function(){
	
$(this).attr("src", "mwf/Images/x.png"); 	
	
});

$(".nonpm_previous").on({
    mouseenter: function () {
        $(this).attr("src", "mwf/Images/backk_txt.png");
    },
    mouseleave: function () {
        $(this).attr("src", "mwf/Images/backk.png");
    }
});

$(".nonpm_next").on({
    mouseenter: function () {
        $(this).attr("src", "mwf/Images/nextt_txt.png");
    },
    mouseleave: function () {
        $(this).attr("src", "mwf/Images/nextt.png");
    }
});

$('.nonpm_prev1').on('click', function(){
	
	$('#non_pm_larger_1').hide();
	$('#non_pm_larger_5').show();
 
	
});
$('.nonpm_prev2').on('click', function(){
	
    $('#non_pm_larger_2').hide(); 
	$('#non_pm_larger_1').show(); 
	
});
$('.nonpm_prev3').on('click', function(){
	
    $('#non_pm_larger_3').hide(); 
	$('#non_pm_larger_2').show(); 
	
});
$('.nonpm_prev4').on('click', function(){
	
    $('#non_pm_larger_4').hide(); 
	$('#non_pm_larger_3').show(); 
	
});
$('.nonpm_prev5').on('click', function(){
	
    $('#non_pm_larger_5').hide(); 
	$('#non_pm_larger_4').show(); 
	
});

$('.nonpm_nxt1').on('click', function(){
	
	$('#non_pm_larger_1').hide();
	$('#non_pm_larger_2').show();
 
	
});
$('.nonpm_nxt2').on('click', function(){
	
    $('#non_pm_larger_2').hide(); 
	$('#non_pm_larger_3').show(); 
	
});
$('.nonpm_nxt3').on('click', function(){
	
    $('#non_pm_larger_3').hide(); 
	$('#non_pm_larger_4').show(); 
	
});
$('.nonpm_nxt4').on('click', function(){
	
    $('#non_pm_larger_4').hide(); 
	$('#non_pm_larger_5').show(); 
	
});
$('.nonpm_nxt5').on('click', function(){
	
    $('#non_pm_larger_5').hide(); 
	$('#non_pm_larger_1').show(); 
	
});




///*------------------- MORE SECTION ---------------------*\\\

$('.morelink').on('click', function(){
	
   //Add extra height for more inner content div
   $('.ykmore_innercontent').css("height", "950px");

	var this_images_id = $(this).attr('id');
	
	function getSecondPart(str) {
    return str.split('_')[1];
	}
	
	var theiduneed = getSecondPart(this_images_id);
	
	var div_you_need = $('.more_content_wrapper').find("#more_content_" + theiduneed).attr("id");
	
	$('#' + div_you_need).show(); 
	
	$('#' + div_you_need).siblings().hide();
	
	//Highlighting the link : 
	$(this).addClass("more_section_highlighted_link");
	//removing other links in this row : 
    $(this).parent().siblings().find("h4").removeClass("more_section_highlighted_link"); 
	//removing other links in the row below : 
	$(this).parent().parent().siblings().find("h4").removeClass("more_section_highlighted_link"); 
	
	//$(this).parent().siblings().find("morelink").removeClass("more_section_highlighted_link"); 
	
   //Add the class for the larger height of the div on the content column
	$('.ykcontentcolumn').addClass('ykcontentcolumn_bigger');
	
	more_button_for_greater_height = true; 
	 
});


//--------------------'More' screenshots

//Hide other images first : 
$('.ykmorepics_2').hide();  $('.ykmorepics_3').hide(); $('.ykmorepics_4').hide(); 


$('.ykmorepics_1').on('click', function(){
	
	//Add the class for the larger height of the div on the content column
	$('.ykcontentcolumn').addClass('ykcontentcolumn_bigger');
	
	$('.ykmorepics_1').hide("explode", {pieces: 64 }, 250); 
	setTimeout(function(){$('.ykmorepics_2').show("blind", {pieces: 64 }, 250);}, 250);

});


$('.ykmorepics_2').on('click', function(){
	//Add the class for the larger height of the div on the content column
	$('.ykcontentcolumn').addClass('ykcontentcolumn_bigger');
	
	$('.ykmorepics_2').hide("explode", {pieces: 64 }, 250); 
	setTimeout(function(){$('.ykmorepics_3').show("blind", {pieces: 64 }, 250);	}, 250);
	
	
	
	
});


$('.ykmorepics_3').on('click', function(){
	//Add the class for the larger height of the div on the content column
	$('.ykcontentcolumn').addClass('ykcontentcolumn_bigger');
	
	$('.ykmorepics_3').hide("explode", {pieces: 64 }, 250); 
	setTimeout(function(){$('.ykmorepics_4').show("blind", {pieces: 64 }, 250);}, 250); 
	
	
	
});

$('.ykmorepics_4').on('click', function(){
	//Add the class for the larger height of the div on the content column
	$('.ykcontentcolumn').addClass('ykcontentcolumn_bigger');
	
	$('.ykmorepics_4').hide("explode", {pieces: 64 }, 250); 
	setTimeout(function(){$('.ykmorepics_1').show("blind", {pieces: 64 }, 250);}, 250); 
	
	
	
});

//Other projects within more projects :
var y =1;
for (i = 0; i < 50; i++)

{

    $('.ykmore_other_pics_' + i).click(function() {

        var newDiv = $(this).next();

        if ($(newDiv).length) {
            // console.log('Found with Length');
            $(this).hide("explode", {pieces: 64 }, 250);            
            setTimeout(function(){newDiv.show("blind", {pieces: 64 }, 250);}, 250);
            $('.ykmore_other_pics_details_' + y).hide();
            $('.ykmore_other_pics_details_' + y).next().show(); 
            $('.yk_more_other_slides_goto_' + y).next().addClass('ykmosg_highlighted'); 
            $('.yk_more_other_slides_goto_' + y).next().siblings().removeClass('ykmosg_highlighted'); 
            y++; 
                     
        }
        //If div has no length, then it doesn't exist, so go back to first pic : 
        else {
            setTimeout(function(){$('.ykmore_other_pics_1').show("blind", {pieces: 64 }, 250);}, 250);
            $('.ykmore_other_pics_1').siblings().hide("explode", {pieces: 64 }, 250);
            $('.ykmore_other_pics_details_1').show();
            $('.ykmore_other_pics_details_1').find('p').siblings().hide();
            $('.yk_more_other_slides_goto_1').addClass('ykmosg_highlighted');
            $('.yk_more_other_slides_goto_1').siblings().removeClass('ykmosg_highlighted');
            $('.ykmore_other_pics_details_' + y).hide();
            y=1;
        }
    });

}

// Clicking on the little bits of text next to 'Screenshots' to go to the one you want to go to :


function createCallback( i ){
  return function(){
  	$('.ykmore_other_pics_' + i).show(); 
	$('.ykmore_other_pics_'+ i).siblings().hide();
	$('.ykmore_other_pics_details_' + i).show();
	$('.ykmore_other_pics_details_' + i).siblings().hide();
	y=i;
	$('.yk_more_other_slides_goto_' + y).addClass('ykmosg_highlighted'); 
    $('.yk_more_other_slides_goto_' + y).siblings().removeClass('ykmosg_highlighted');
  		    
  }
}
   

   for (i = 1; i < 10; i++) 
    { 
    	
    	$('.yk_more_other_slides_goto_' + i).click(createCallback(i));

	}


//Issue where when you clicked to 'x' out Ezy Eng and Pic Match slideshow, it did stuff with the 'other projects' subsection of the 'more' section : 

function restoreMoreOtherStuff() {
//Restore the 'screenshots' in 'other' sub-section of 'More' section
	$('.ykmore_other_pics_details_1').siblings().hide();
	$('.ykmore_other_pics_1').show();
	$('.ykmore_other_pics_1').siblings().hide();
	$('.yk_more_other_slides_goto_1').addClass('ykmosg_highlighted');
    $('.yk_more_other_slides_goto_1').siblings().removeClass('ykmosg_highlighted');
	y=1;
}


//-------------------------------- LOGO-------------------------------------\\

$('.monlogo').on('mouseenter', function(){
	
	$(this).attr("src","mwf/Images/mon_logo_gl_wd.png"); 
	
	});
	
$('.monlogo').on('mouseleave', function(){
	
	$(this).attr("src","mwf/Images/monz_logo.png"); 
	
	});
	

//CV image
$('.yk_cvimage_image').on('mouseenter', function(){
	
	$(this).attr("src","mwf/Images/cv_lightblue.png"); 
	
});

$('.yk_cvimage_image').on('mouseleave', function(){
	
	$(this).attr("src","mwf/Images/cv_white.png"); 
	
});


//Leaving browser window thing ---------------------------------------  
	
$(window).blur(function() {
 
 if (bigslidesnotshowing != false)
 {
	myStopFunction();   
	myStopFunction2();
	
	rotationFunction();
	rotationFunction2();
 }
	
});


//Schoolspace sites links			
$(".schoolspace_sites_links").hide(); 
$(".ykllink_schoolspace").click(function(){
				
	$(".schoolspace_sites_links").toggle(); 

});

//try it links color animation on hover
 $('.ykllink_a').on('mouseenter', function(){
               $(this).animate({
                  color: "#c02b2b"
               }, 500);
            });
			
 $('.ykllink_a').on('mouseleave', function(){
               $(this).animate({
                  color: "#ffffff"
               }, 10);
            });
			
//smaller links color animation on hover
 $('.ykaboutmike').find('a').on('mouseenter', function(){
               $(this).animate({
                  color: "#c02b2b"
               }, 250);
            });
			
 $('.ykaboutmike').find('a').on('mouseleave', function(){
               $(this).animate({
                  color: "#ffffff"
               }, 10);
            });
			
//Hover on small logo : 
 $('#yksmallerlogo').on('mouseenter', function(){
              
			  $(this).attr("src","mwf/Images/m_black.png"); 
			  
            });
			
 $('#yksmallerlogo').on('mouseleave', function(){
	 
               $(this).attr("src","mwf/Images/m_white.png"); 
			   
            });
			
//Clicking on small logo to reload page : 
 $('#yksmallerlogo').on('click', function(){
	 
               //Stop rotations : 
			   myStopFunction2();
			   myStopFunction();
			   
			   
			   $('.monlogodiv').show();
			   $('.ykcontent_innercontent').hide(); 
			   
			   $('.ykcvbtn').attr('clicked', 0);
			   $('.ykpicmatchbtn').attr('clicked', 0);
			   $('.ykezyengbtn').attr('clicked', 0); 
			   $('.ykmorebtn').attr('clicked', 0);

				$('.ykcontentcolumn').removeClass('ykcontentcolumn_bigger'); 
				
				if (more_button_is_clicked == true)
					{
					$('.monlogodiv').addClass('divthing');						
					}
				else
					{
					$('.monlogodiv').removeClass('divthing');	
					}
				
				$(".ykbutton:focus").css("cssText", "background-color: transparent!important;");
				$(".ykbutton").css("cssText", "background-color: transparent!important;");
				
	
	            });
			


});