const backgrounds = [
    'img/backgrounds/DSC_0012.jpg',
    'img/backgrounds/DSC_0188.jpg',
    'img/backgrounds/DSC_0291.jpg',
    'img/backgrounds/DSC_0295.jpg',
    'img/backgrounds/DSC_0992.jpg',
    'img/backgrounds/IMG_8210.jpg',
]

const backNum = Math.floor(Math.random() * Math.floor(backgrounds.length))
$('#intro').css({'background-image': `url(${backgrounds[backNum]}`})