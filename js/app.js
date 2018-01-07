// alert(ua.indexOf('OS 7'))
$(function(){

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
				console.log(document.getElementById('loading').style.display,num)
				$("#lodingnum").html((num/the_images.length*100).toFixed(0)+"%");				               
            }
        },
        all: function()
        {
			$("#lodingnum").html("100%");			
	
				document.getElementById('loading').style.display="none";
				$("#press-word").addClass("show");	
				$("#intro-word").addClass("show");	
				$(".floatBtn").addClass("show").delay(1000).queue(function(){
					$(".squre01").show().addClass("scaleBig")	
					$(this).dequeue()
				});
			
        }
    });

    $('.floatBtn').on('touchstart',function(e){
		e.preventDefault();
			$("#press-word").removeClass("show");	
			$("#intro-word").removeClass("show");
			$('#video > #poster').hide();
			$("#frame").hide();
			$("#intro-deco").fadeOut();
			$("#video").show();
			$("#intro").addClass("on");
			$('#v1').get(0).play();
			$('.floatBtn').hide();
			testVideoTimer = setInterval(testVideo,1000);
	})
	

	function testVideo(){
			 	if($('#v1').get(0).currentTime >= $('#v1').get(0).duration){
			 		//alert("视频播放完成")
		        	$("#video").hide();
		        	$("#video-end").fadeIn();
		        	$(".EndTitle").addClass("show").addClass("swing");
		        	$(".video").html("");
		        	$("#end-btn").fadeIn().addClass("pulse");
		        	$(".EWM").fadeIn();
					clearInterval(testVideoTimer)
		     	}
				
	}

})
document.addEventListener('touchmove',function(e){
	e.preventDefault()
},false)