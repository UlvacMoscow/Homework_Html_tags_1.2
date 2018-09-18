

const AllTagLi = document.getElementsByClassName('drum-kit__drum');
const audio = document.getElementsByTagName('audio');

for (let i = 0; i < AllTagLi.length; i++) {
  AllTagLi[i].onclick = () => {
    audio[i].currentTime = 0;
    audio[i].play();
  };
}
