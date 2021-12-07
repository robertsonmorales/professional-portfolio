$(() => {
    'use strict';

    var date = new Date();
    $('#year').html(date.getFullYear());

    $(document).on('scroll', function () {
        $("#navbar").toggleClass('border-bottom', $(this).scrollTop() > $("#navbar").height());
        $("#navbar").toggleClass('bg-white', $(this).scrollTop() > $("#navbar").height());
	});
});