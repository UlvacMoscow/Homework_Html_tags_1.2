const playlist = ['mp3/LA Chill Tour.mp3',
                  'mp3/LA Fusion Jam.mp3',
                  'mp3/This is it band.mp3']

const namePlaylist = ['LA Chill Tour',
                      'LA Fusion Jam',
                      'This is it band']
/*const playstate = document.getElementsByClassName('playstate');
const PlayAndPause = playstate.getElementsByTagName('i');

if (PlayAndPause.length)    {
    console.log('Найдена хотя бы одна кнопка')
} else {
    console.log('не ни одного тега <i>')
}*/

/*const PlayAndPause = document.querySelectorAll('playstate.i');

if (PlayAndPause.length)    {
    console.log('Найдена хотя бы одна кнопка')
} else {
    console.log('не ни одного тега <i>')
}*/


/*PlayAndPause[0].onclick() = function()  {
    var audio = new Audio();
    audio.src = playlist[0];
    audio.autoplay = true;
}*/
var song = 0;
const audio = new Audio();
const title = document.getElementsByTagName('span')[0];

const play = document.getElementsByClassName('playstate')[0].onclick = function()    {
    audio.src = playlist[song];
    audio.play();
}

document.getElementsByClassName('fa fa-pause')[0].onclick = function() {
    audio.pause();
}

document.getElementsByClassName('next')[0].onclick = function() {
    song += 1;
    title.setAttribute('title', namePlaylist[song])
    audio.src = playlist[song];
    audio.play();
}

document.getElementsByClassName('back')[0].onclick = function() {
    song -= 1;
    title.setAttribute('title', namePlaylist[song])
    audio.src = playlist[song];
    audio.play();
}

document.getElementsByClassName('stop')[0].onclick = function() {
    audio.pause();
    audio.currentTime = 0;
}
