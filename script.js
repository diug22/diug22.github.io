function uploadAudio() {
    var fileInput = document.getElementById('audioInput');
    var file = fileInput.files[0];
    var formData = new FormData();
    formData.append('audio', file);

    fetch('https://eb43-139-47-125-37.ngrok-free.app/generate', {
        method: 'POST',
        body: formData,
        headers: {
            'X-API-KEY': 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'  // Asegúrate de cambiar esto por tu clave API real
        }
    })
    .then(response => response.blob())
    .then(blob => {
        var url = URL.createObjectURL(blob);
        var video = document.getElementById('resultVideo');
        video.src = url;
        video.load();
        video.play();
    })
    .catch(error => console.error('Error al subir el archivo:', error));
}
