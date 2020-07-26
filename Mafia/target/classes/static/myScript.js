const videoTaken = [];
for(let i = 0; i < 9; i++){
    videoTaken.push(false)
}

function connectCamera(videoElement) {
    var video = document.querySelector(videoElement);

    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({video: true})
            .then(function (stream) {
                video.srcObject = stream;
                return true;
            })
            .catch(function (err0r) {
                console.log("Something went wrong!");
            });
    }
}

console.log(connectCamera("#video1"));


