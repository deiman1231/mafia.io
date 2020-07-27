const videoTaken = [];
const url = 'http://localhost:8080';
let stompClient;
let selectedUser;
let newMessages = new Map();

for(let i = 0; i < 9; i++){
    videoTaken.push(false)
}

function connectSocket() {
    console.log("connecting to chat...")
    let socket = new SockJS(url + "/mafia");
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function () {
        console.log(1);
        connectCamera("#video1");
    });
}

function connectCamera(videoElement) {
    var video = document.querySelector(videoElement);

    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({video: true})
            .then(function (stream) {
                video.srcObject = stream;
                return true;
            })
            .catch(function () {
                console.log("Something went wrong!");
            });
    }
}

connectSocket();

