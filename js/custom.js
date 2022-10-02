jquery(document).ready(function () {
    jquery('.chat_icon').click(function () {
        $('.chat_box').toggleClass('active');
    });

    jquery('.conv-form-wrapper').convform({ selectInputStyle: 'disable' })
});