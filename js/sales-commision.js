$('.sales-nav-menu ul li').css('display' , 'block')


$(document).ready(function() {
    $("#button1").click(function() {
        var x = $("#disabledSelect :selected").text();
        console.log(x);
    });
});

$(function() {
    $("#button1").on("click", function() {
        var x = $("#disabledSelect :selected").text();
        console.log(x);
        var r = $('<input type="button" value="new button"/>');
        $(".x").append(r);
    });
});
$(document).ready(function() {

    var multipleCancelButton = new Choices('#choices-multiple-remove-button', {
        removeItemButton: true,
        maxItemCount: 3,
        searchResultLimit: 5,
        renderChoiceLimit: 5
    });


});
$('#save').click(function() {
    $('#save').css('backgroundColor', ' #1C5E3B')


})