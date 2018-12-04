$("#leagueStandings").toggle();
$(document).ready(function(){
    $("#scores").click(function(){
        $("#leagueStandings").toggle();
        $(".container").toggle();
    });
});

$(document).ready(function(){
    $("#standings").click(function(){
        $("#leagueStandings").toggle();
        $(".container").toggle();
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
                $("#content").html(data);
    
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
    
        });
    });
});
