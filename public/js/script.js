$(document).ready(function(){
//if user's cursor is within textbox, clicking 'enter' on keyboard should also serve as submitting query
    $("#tag").keypress(function(event){
    if(event.keyCode == 13){
        $("#submit").click();
    return false;
    }
});
//purpose of submit button - what it should do upon click
	$("#submit").on("click", function() {
//reads in tag
        var tag = $("#tag").val();
		if(tag===""){
			return;
		}
//if tag has not already been added by user, adds to the menu
		else if(!isDuplicate(tag))
		{
		$("#menu ul").append("<li>"+tag+"<img src='img/close.png' class='close'/><\/li>");
		}
//refreshes right div between queries
		$("#pics").html("");
//ajax request to 3rd party server - Instagram - puts in custom tags from user
        $.ajax({
	        type: "GET",
	        dataType: "jsonp",
	        cache: false,
	        url: "https://api.instagram.com/v1/tags/"+tag+"/media/recent?client_id=17b605e326494ebf958596b21441d8df",
	        success: function(data) {
	            for (var i = 0; i < 40; i++) {
	                $("#pics").append("<a target='_blank' href='" + data.data[i].link + "'><img src='" + data.data[i].images.low_resolution.url + "' class='insta'></img></a>");
	            }
	        }
	    });
	});
//ajax call to local server - requests list of 5 most popular tags
        $("#popular").click(function() {      	
                $.getJSON("food.json", function(responseObject) {
                        var displayText = 
                                "<ul>";
                        for (var i = 0; i<responseObject.popularFoods.length; i++) {
                                var popfood = responseObject.popularFoods[i];
                                displayText += "<li>"+popfood.food+"<\/li>";
                                }
                        displayText += "<\/ul>";
                //users only view recommended if they click on title
                $("#poptags").html(displayText).hide().slideDown(800);
                } );  
        });  
        //if user wants to search for food previously on menu, upon click of item name, it can be added directly to input box
         $("#left").on("click", "li", function() {
            $("input").val($(this).text());
        });
         //if users wants to delete a food tag from the menu
        $("#left").on("click", ".close", function() {
            $(this).parent().fadeOut(800);
        }); 
});

//function - returns true if tag already exists in menu; false if new tag or first tag searched
 function isDuplicate(input){
            //all tags (in string form) are added to the array
            var array = [];
            $(".list li").each(function(){
                array.push($(this).text());
            });

            if(array.length===0)
            {
                return false;
            }
            //traverses through array to check for duplicate tags
            for(var x=0; x<array.length;x++)
            {
                if(array[x]===input)
                {return true;}                  
            } 
            return false;
        };