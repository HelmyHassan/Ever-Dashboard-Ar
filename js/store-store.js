$('.store-nav-menu ul li').css('display' , 'block')

$(document).ready(function() {

    var multipleCancelButton = new Choices('#choices-multiple-remove-button', {
        removeItemButton: true,
        maxItemCount: 5,
        searchResultLimit: 5,
        renderChoiceLimit: 5
    });


});
$('#save').click(function() {
    $('#save').css('backgroundColor', ' #1C5E3B')


})

$('.sectionBack').click(function(){
    window.history.back();
})
