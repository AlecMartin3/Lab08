$("#leagueStandings").toggle();
$(document).ready(function(){
    $("#scores").click(function(){
        $("#leagueStandings").toggle();
        $("#teams").toggle();
    });
});

$(document).ready(function(){
    $("#standings").click(function(){
        $("#leagueStandings").toggle();
        $("#teams").toggle();
    });
    $('#standings').click(function(e) {

        // don't allow the anchor to visit the link
        e.preventDefault();
    
        $.ajax({
            url: "/ajax-GET-list",
            dataType: "html",
            type: "GET",
            data: { format: "html-list"},
            success: function(data) {
                console.log("SUCCESS HTML:", data);
                $("#leagueStandings").html(data);
    
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
    
        });
    });
    $('#scores').click(function(e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "json",
            type: "GET",
            data: { format: "json-list"},
            success: function(data) {
                console.log("SUCCESS JSON:", data);
                var div = $("#leagueStandings");
                let htmlStr = "<ol>";
                for(let i = 0; i < data.length; i++) {
                    htmlStr += "<li>" + data[i] + "</li>";
                }
                htmlStr += "</ol>";
                div.html(htmlStr);

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    });
});
