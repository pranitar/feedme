// $(function() {    // do once original document loaded and ready
//         $('form[name="eg1"] input').click(function() {
//         	$.ajax({
//         	dataType: "jsonp", 
//             crossDomain: true,
//             type:"GET",
//             contentType: "application/json; charset=utf-8",
//             async:false,
//             cache: false,
//             url: "https://api.instagram.com/v1/tags/food/media/recent?client_id=17b605e326494ebf958596b21441d8df",
//             // data: {projectID:1},               
//             // jsonpCallback: 'fnsuccesscallback'
//             success: function(data){
//             	for (var i = 0; i < 10; i++) {
//                 $("#pics").append("<a target='_blank' href='" + data.data[i].link + "'><img src='" + data.data[i].images.low_resolution.url + "'></img></a>");
//             }
//             }
//         	});
//         } );  // click
//   } ); // onReady
//function getPics() {
$(document).ready(function(){
	$("#submit").on("click", function() {
		var tag = $("#tag").val();
		if(tag===""){
			return;
		}
		$("#menu").appendTo(tag);
		$("#pics").html("");
		//alert(tag);
		$.ajax({
	        type: "GET",
	        dataType: "jsonp",
	        cache: false,
	        url: "https://api.instagram.com/v1/tags/"+tag+"/media/recent?client_id=17b605e326494ebf958596b21441d8df",
	        success: function(data) {
	            for (var i = 0; i < 15; i++) {
	                $("#pics").append("<a target='_blank' href='" + data.data[i].link + "'><img src='" + data.data[i].images.low_resolution.url + "'></img></a>");
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
                                displayText += "<li>"+popfood.food + "<\/li>";
                                }
                        displayText += "<\/ul>";
                $("#poptags").html(displayText);
                } );  // getJSON
        } );  // click


} );



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




