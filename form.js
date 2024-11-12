        // Fungsi untuk menampilkan pratinjau gambar yang diunggah
        function displayImagePreview(input) {
            const previewArea = document.getElementById('imagePreview');
            previewArea.innerHTML = ''; // Hapus konten sebelumnya

            if (input.files && input.files[0]) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    img.alt = "Pratinjau Gambar";
                    img.style.maxWidth = "100%";
                    img.style.height = "auto";
                    previewArea.appendChild(img);
                };
                reader.readAsDataURL(input.files[0]);
            }
        }

        // Fungsi untuk membuka kamera dan mengambil gambar
function openCamera() {
    // Meminta izin akses ke kamera
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
            const video = document.createElement('video');
            video.srcObject = stream;
            video.play();

            // Menampilkan video dalam area pratinjau
            const previewArea = document.getElementById('imagePreview');
            previewArea.innerHTML = ''; // Bersihkan area pratinjau
            previewArea.appendChild(video);

            // Tambahkan tombol untuk menangkap gambar
            const captureButton = document.createElement('button');
            captureButton.innerText = "Ambil Gambar";
            previewArea.appendChild(captureButton);

            captureButton.onclick = function() {
                // Ambil snapshot dari video
                const canvas = document.createElement('canvas');
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                canvas.getContext('2d').drawImage(video, 0, 0);

                // Tampilkan snapshot dan hentikan video
                const img = document.createElement('img');
                img.src = canvas.toDataURL('image/png');
                img.alt = "Pratinjau Gambar";
                img.style.maxWidth = "100%";
                img.style.height = "auto";

                previewArea.innerHTML = ''; // Bersihkan area pratinjau
                previewArea.appendChild(img);

                // Hentikan aliran video
                stream.getTracks().forEach(track => track.stop());
            };
        })
        .catch(function(error) {
            console.error("Tidak dapat mengakses kamera: ", error);
        });
}

        // Fungsi untuk memproses dan menampilkan detail gambar
        function scanImage() {
            const scanResult = document.getElementById('scanResult');
            const scanDetails = document.getElementById('scanDetails');

         // Simulasi hasil scan
    scanDetails.innerText = "Detail dari gambar yang discan: [Masukkan detail gambar di sini]";
    scanResult.style.display = "block";
}