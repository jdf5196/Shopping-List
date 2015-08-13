$(document).ready(function () {
		function getItem() {
        $('#additem').keydown(function (enter) {
            if (enter.keyCode == 13) {
                postItem();
            }
        });
    }
    getItem();
    function postItem() {
        $('.item-list').append('<p class="need">' + '<span class="cross">&#x2717</span>' + $('#additem').val() + '<span class="check">&#x2713</span>' + '</p>');
        $('#additem').val('');
        $('.item-list p:first-child');
    }
});
$(document).on('click', '.cross', function(){
    $(this).closest('p').fadeOut(200);
});
$(document).on('click', '.check', function(){
    $(this).closest('p').addClass('done').removeClass('need');
    $(this).closest('.check').addClass('uncheck').removeClass('check')
});
$(document).on('click', '.uncheck', function(){
    $(this).closest('p').addClass('need').removeClass('done');
    $(this).closest('.uncheck').addClass('check').removeClass('uncheck')
});