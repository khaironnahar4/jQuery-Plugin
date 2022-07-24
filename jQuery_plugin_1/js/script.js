$(document).ready(function(){

    $('#myContainer').multiscroll({
        sectionsColor: ['#ff5f45', '#0798ec', '#fc6c7c'],
        anchors: ['first', 'second', 'third'],
        menu: '#menu',
        navigation: true,
        navigationTooltips: ['One', 'Two', 'Three'],
        loopBottom: true,
        loopTop: true
    });

    
})