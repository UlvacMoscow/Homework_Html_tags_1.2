var playlist = ['wav/clap.wav',
                'wav/boom.wav',
                'wav/hihat.wav',
                'wav/kick.wav',
                'wav/openhat.wav',
                'wav/ride.wav']



document.getElementsByClassName('key-clap')[0].onclick = function () {
     var audio = new Audio();
     audio.src = playlist[0];
     audio.autoplay = true;
}

document.getElementsByClassName('key-hihat')[0].onclick = function () {
     var audio = new Audio();
     audio.src = playlist[3];
     audio.autoplay = true;
}

document.getElementsByClassName('key-boom')[0].onclick = function () {
     var audio = new Audio();
     audio.src = playlist[2];
     audio.autoplay = true;
}

document.getElementsByClassName('key-kick')[0].onclick = function () {
     var audio = new Audio();
     audio.src = playlist[3];
     audio.autoplay = true;
}

document.getElementsByClassName('key-openhat')[0].onclick = function () {
     var audio = new Audio();
     audio.src = playlist[4];
     audio.autoplay = true;
}

document.getElementsByClassName('key-ride')[0].onclick = function () {
     var audio = new Audio();
     audio.src = playlist[5];
     audio.autoplay = true;
}


а можно сделать так что бы у меня определялась какая именно нажалась кнопка,
чтобы я не дублировал код.

по типу если нажал такую кнопку, то играет такая мелодия.
Как это можно реализовать, если можно. 
