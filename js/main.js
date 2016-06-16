$(function() {

    // set background to black
    document.body.style.background = "black";

    // load json file
    $.getJSON("data/data.json", function (data) {
        var people = Object.keys(data);
        for (var each in people) {
            var person = data[people[each]];
            var personid = people[each];
            console.log(personid);
            console.log(person["message"]);
            // load the pictures to the page
            $("#picturesdiv")
                .append("<img id='" + personid + "' src='img/" + personid + ".png' class='smallpicture nohover'>");
        }

        $(".smallpicture")
            .mouseover(function() {
                $("#birthdaywishdiv").text('"' + data[this.id].message + '". -' + data[this.id].name);
                $("#" + this.id).removeClass("nohover").addClass("onhover");
            });

        $(".smallpicture")
            .mouseout(function() {
                $("#birthdaywishdiv").text("  ");
                $("#" + this.id).removeClass("onhover").addClass("nohover");
            })
    });
})
