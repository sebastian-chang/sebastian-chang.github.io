$('.icon, .box').addClass('destat')
$('.icon, .box').hover(
    function () { $(this).removeClass('destat') },
    function () { $(this).addClass('destat') },
)