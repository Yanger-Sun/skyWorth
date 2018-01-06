	$(function(){	

	//图片预加载	
	var num = 0;
    var the_images = [
		"images/wapBack.jpg",
		"images/pressTitle.png",
		"images/press.png",
		"images/floatTitle.png",
		"images/endBack.jpg",
		"images/login.png",
		"images/endTitle.png",
		"images/EWM.png",
		"images/floatDeco.png"
	];	

    jQuery.imgpreload(the_images,
    {
        each: function()
        {
		
            var status = $(this).data('loaded')?'success':'error';
			
            if (status == "success") {                
				++num;
			
				$("#lodingnum").html((num/the_images.length*100).toFixed(0)+"%");				               
            }
        },
        all: function()
        {
			$("#lodingnum").html("100%");			
	
				document.getElementById('loading').style.display="none";
				$(".pressTitle").addClass("show");	
				$(".floatTitle").addClass("show");	
				$(".floatBtn").addClass("show").delay(1000).queue(function(){
					$(".squre01").show().addClass("scaleBig")	
					$(this).dequeue()
				});
			
        }
    });




			$(".floatBtn").on("touchstart",function(e){
				e.preventDefault(); 
				$(".floatBg2").fadeOut();
				$(".video").show();
				$(".floatBg1").fadeOut();
				$("video")[0].play();
				$(".floatDeco").fadeOut();
				$(".pressTitle").removeClass("show");	
				$(".floatTitle").removeClass("show");
				$(".beforeTop").fadeOut();
				$(".beforeBottom").fadeOut();
				$(".floatBtn").hide();
				$(".squre01").fadeOut().removeClass("scaleBig")
				testVideoTimer = setInterval(testVideo,1000);
			})
			/*$(".floatBtn").on("touchmove",function(e){
				e.preventDefault(); 
				if($("video")[0].currentTime >= $("video")[0].duration){
			 		//alert("视频播放完成")
		        	$(".video").fadeOut();
		        	$(".End").fadeIn();
		        	$(".EndTitle").addClass("show").addClass("swing");
		        	$(".video").html("");
		        	$(".end-btn").fadeIn().addClass("pulse");
		        	$(".EWM").fadeIn();
					clearInterval(testVideoTimer)
		     	}	
			})
			$(".floatBtn").on("touchend",function(e){
				e.preventDefault(); 
				$("video")[0].pause();
				console.log($("video")[0].currentTime,$("video")[0].duration)
				if($("video")[0].currentTime >= 3.78){
					$("video")[0].play();
					$(".floatBtn").fadeOut();
					$(".squre01").fadeOut().removeClass("scaleBig")
					testVideoTimer = setInterval(testVideo,1000);
				}else{
					$(".floatBg2").fadeOut();
					$(".floatBg1").fadeIn();
					$("video")[0].pause();	
					$(".floatDeco").fadeIn();	
					$(".pressTitle").addClass("show");	
					$(".floatTitle").addClass("show");	
				}
			})*/
			
			
			function testVideo(){
			 	if($("video")[0].currentTime >= $("video")[0].duration){
			 		//alert("视频播放完成")
		        	$(".video").fadeOut();
		        	$(".End").fadeIn();
		        	$(".EndTitle").addClass("show").addClass("swing");
		        	$(".video").html("");
		        	$(".end-btn").fadeIn().addClass("pulse");
		        	$(".EWM").fadeIn();
					clearInterval(testVideoTimer)
		     	}
				
			}
			 

})
			
 




