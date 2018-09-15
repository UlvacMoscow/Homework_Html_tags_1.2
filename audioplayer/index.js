const playlist = ['mp3/LA Chill Tour.mp3',
                  'mp3/LA Fusion Jam.mp3',
                  'mp3/This is it band.mp3']

const namePlaylist = ['LA Chill Tour',
                      'LA Fusion Jam',
                      'This is it band']


var song = 0;
const player = document.getElementsByClassName('mediaplayer')[0];
const audio = player.getElementsByTagName('audio')[0];
const title = document.getElementsByTagName('span')[0];

//console.log(playlist[song])

function setCurrentTrack() {
  audio.src = playlist[song];
  title.title = namePlaylist[song];

  if (player.classList.contains('play')) {
    audio.play()
  }
}

const playAndPause = document.getElementsByClassName('playstate')[0].onclick = function()    {
  player.classList.contains('play') ? audio.pause() : audio.play();
  player.classList.toggle('play');
}


document.getElementsByClassName('next')[0].onclick = function() {
  if (song >= namePlaylist.length - 1) {
     song = 0;
   } else {
     song++;
   }
   setCurrentTrack();
}


document.getElementsByClassName('back')[0].onclick = function() {
    if (song <= 0) {
      song = namePlaylist.length - 1;
    } else {
      song--;
    }
    setCurrentTrack();
  }


document.getElementsByClassName('stop')[0].onclick = function() {
  if (player.classList.contains('play')) {
    player.classList.remove('play');
  }
  audio.pause();
  audio.currentTime = 0;
}
