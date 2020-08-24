$(document).ready(function(){
    //tooltip settings
    $('[data-toggle="tooltip"]').tooltip();   

    //ajax asynchronize call
    console.log("document ready...");
    $('#submit').click(function() {
        var url = "http://api.giphy.com/v1/gifs/search";
        var data = $('#myForm').serialize();
        console.log(data);
        $.ajax( {
            type: "GET",
            url: url,
            data: data,
            success: function(data) {
                console.log("received data");
                var output = "";
                $.each(data.data, function (key, obj) { 
                    //id, type, and url converted to variables
                    var id = obj.id;
                    var type = obj.type;
                    var imgSrc = "https://media2.giphy.com/media/"+obj.id+"/giphy."+obj.type; //feed url + id + type
                    output += "<div><img class='answer d-flex height='50' width='auto'' src='"+imgSrc+"' /></div>\n" //create output and assign img tag for gifs
                });
                console.log(output);
                $("#outputArea").html(output); //get output
            }
        });
    });
});