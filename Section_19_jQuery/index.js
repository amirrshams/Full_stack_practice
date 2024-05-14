$("body").keydown(function(event) {
    $("h1").text(event.key);
});

$("button").on("click", function() {
    $("h1").css("color", "purple");
});