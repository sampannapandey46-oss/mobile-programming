$(document).ready(function () {

    // =========================
    // GET & SET
    // =========================

    $("#show-name").click(function () {
        let name = $("#student-name").text();
        $("#output").text("Student Name: " + name);
    });

    $("#change-name").click(function () {
        $("#student-name").text("Sampanna Pandey");
        $("#output").text("Name changed successfully!");
    });

    $("#show-bio").click(function () {
        let bio = $("#student-bio").html();
        $("#output").text("Bio HTML: " + bio);
    });

    $("#get-input").click(function () {
        let nickname = $("#nickname-input").val();

        if (nickname == "") {
            $("#output").text("Please enter a nickname first!");
        } else {
            $("#output").text("Your nickname is: " + nickname);
        }
    });

    $("#set-input").click(function () {
        $("#nickname-input").val("jQuery Pro");
        $("#output").text("Nickname changed to: jQuery Pro");
    });


    // =========================
    // CSS CLASSES
    // =========================

    $("#highlight-card").click(function () {
        $("#profile-card").addClass("highlighted");
        $("#output").text("Profile card highlighted!");
    });

    $("#remove-highlight").click(function () {
        $("#profile-card").removeClass("highlighted");
        $("#output").text("Highlight removed!");
    });

    $("#dark-mode").click(function () {
        $("#profile-card").toggleClass("dark-mode");
        $("#output").text("Dark mode toggled!");
    });

    $("#rounded").click(function () {
        $("#profile-photo").toggleClass("rounded");
        $("#output").text("Photo shape toggled!");
    });


    // =========================
    // CSS METHOD
    // =========================

    $("#red-background").click(function () {
        $("#profile-card").css("background", "#e74c3c");
        $("#output").text("Background changed to red!");
    });

    $("#reset-background").click(function () {
        $("#profile-card").css("background", "white");
        $("#output").text("Background reset to white!");
    });


    // =========================
    // HIDE & SHOW
    // =========================

    $("#hide-photo").click(function () {
        $("#profile-photo").hide("slow");
        $("#output").text("Photo hidden!");
    });

    $("#show-photo").click(function () {
        $("#profile-photo").show("slow");
        $("#output").text("Photo shown!");
    });

    $("#toggle-bio").click(function () {
        $("#student-bio").toggle();
        $("#output").text("Bio toggled!");
    });


    // =========================
    // FADE
    // =========================

    $("#fade-out").click(function () {
        $("#profile-card").fadeOut();
    });

    $("#fade-in").click(function () {
        $("#profile-card").fadeIn();
    });

    $("#fade-50").click(function () {
        $("#profile-card").fadeTo("slow", 0.5);
        $("#output").text("Card opacity changed to 50%!");
    });


    // =========================
    // SLIDE
    // =========================

    $("#slide-up").click(function () {
        $("#skills-list").slideUp();
        $("#output").text("Skills hidden!");
    });

    $("#slide-down").click(function () {
        $("#skills-list").slideDown();
        $("#output").text("Skills shown!");
    });

    $("#slide-toggle").click(function () {
        $("#skills-list").slideToggle();
        $("#output").text("Skills toggled!");
    });


    // =========================
    // ANIMATE
    // =========================

    $("#animate-card").click(function () {

        $("#profile-card")
            .animate({
                marginLeft: "200px"
            }, 1000)
            .animate({
                marginLeft: "0px"
            }, 1000);

        $("#output").text("Card animation running!");
    });


    // =========================
    // EVENTS
    // =========================

    $("#profile-photo").mouseenter(function () {
        $("#profile-photo").addClass("shadow");
    });

    $("#profile-photo").mouseleave(function () {
        $("#profile-photo").removeClass("shadow");
    });


    // Key press event

    $("#nickname-input").keydown(function (event) {

        let key = event.key;

        $("#output").html(
            "⌨️ You pressed: <strong>" + key + "</strong>"
        );

    });

});