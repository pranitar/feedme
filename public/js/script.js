$(document).ready(function(){
	// var tagArray = [];
	$("#submit").on("click", function() {
		var tag = $("#tag").val();
		if(tag===""){
			return;
		}
		else if(!isDuplicate(tag))
		{
		$("#menu ul").append("<li>"+tag+"<img src='img/close.png' class='close'/><\/li>");
		}
		$("#pics").html("");
		//alert(tag);
		$.ajax({
	        type: "GET",
	        dataType: "jsonp",
	        cache: false,
	        url: "https://api.instagram.com/v1/tags/"+tag+"/media/recent?client_id=17b605e326494ebf958596b21441d8df",
	        success: function(data) {
	            for (var i = 0; i < 15; i++) {
	                $("#pics").append("<a target='_blank' href='" + data.data[i].link + "'><img src='" + data.data[i].images.low_resolution.url + "' class='insta'></img></a>");
	            }
	        }
	    });
	});

        $("#popular").click(function() {
        	console.log("this is INDEED working");
        	
                $.getJSON("food.json", function(responseObject) {
                        console.log("in get json");
                        var displayText = 
                                "<ul>";
                        for (var i = 0; i<responseObject.popularFoods.length; i++) {
                                var popfood = responseObject.popularFoods[i];
                                displayText += "<li>"+popfood.food+"<\/li>";
                                }
                        displayText += "<\/ul>";
                $("#poptags").html(displayText).hide().slideDown(800);
                } );  // getJSON
        });  // click

         $("#left").on("click", "li", function() {
         	// console.log($(this).text());
            $("input").val($(this).text());
        });

        $("#left").on("click", ".close", function() {
         	// console.log($(this).text());
            $(this).parent().fadeOut(800);
        }); 
});

 function isDuplicate(input){
            var array = [];
            $(".list li").each(function(){
                console.log("hello");
                array.push($(this).text());
            });

            if(array.length===0)
            {
                return false;
            }

            for(var x=0; x<array.length;x++)
            {
                console.log("bye");
                if(array[x]===input)
                {return true;}                  
            }
            
            return false;
        };



// $(function() {
// $('form[name="eg1"] input').click(function() {
//     $.ajax({
//         type: "GET",
//         dataType: "jsonp",
//         cache: false,
//         url: "https://api.instagram.com/v1/tags/food/media/recent?client_id=17b605e326494ebf958596b21441d8df",
//         success: function(data) {
//             for (var i = 0; i < 15; i++) {
//                 $("#pics").append("<a target='_blank' href='" + data.data[i].link + "'><img src='" + data.data[i].images.low_resolution.url + "'></img></a>");
//             }
//         }
//     });
// 	});
// });