$(function() {    // do once original document loaded and ready
        $('form[name="eg1"] input').click(function() {
        	$.ajax({
            crossDomain: true,
            type:"GET",
            contentType: "application/json; charset=utf-8",
            async:false,
            url: "https://api.instagram.com/v1/tags/food/media/recent?client_id=17b605e326494ebf958596b21441d8df&callback=display",
            data: {projectID:1},
            dataType: "jsonp",                
            jsonpCallback: 'fnsuccesscallback'
        });
        	    
        	    // $.getJSON("dance.json", function(responseObject, diditwork) {
                //         console.log(diditwork);
                //         var displayText = 
                //                 "There are " 
                //                 + responseObject.indianDances.length 
                //                 + " Indian dances:<ol>";
                //         for (var i = 0; i<responseObject.indianDances.length; i++) {
                //                 var dance = responseObject.indianDances[i];
                //                 displayText += "<li>"
                //                                         +dance.danceName + " " 
                //                                         + dance.region + "<\/li>";
                //                 }
                //         displayText += "<\/ul>";
                // $("#jqueryresponse").html(displayText);
                // } );  // getJSON
        } );  // click
  } ); // onReady

function display(tag) {

}




