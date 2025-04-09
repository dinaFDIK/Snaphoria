const video = document.getElementById('video');
const fotoHasil = document.getElementById('fotoHasil');
const frameTerpilih = document.getElementById('frameTerpilih');
let selectedFrame = ''; // Menyimpan frame yang dipilih

// Mengakses kamera
navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
        video.srcObject = stream;
    })
    .catch((err) => {
        console.error("Gagal mengakses kamera:", err);
    });

// Fungsi memilih frame
function pilihFrame(frame) {
    selectedFrame = frame;
    frameTerpilih.src = frame; // Menampilkan frame yang dipilih
}

// Fungsi mengambil foto
function ambilFoto() {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    
    // Menentukan ukuran canvas sesuai dengan video
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    
    // Menggambar video ke dalam canvas
    context.drawImage(video, 0, 0);

    // Mengambil data gambar
    const imageData = canvas.toDataURL('image/png');
    
    // Menampilkan foto hasil di dalam frame yang dipilih
    fotoHasil.src = imageData;

    // Menyembunyikan kamera dan menampilkan hasil foto
    document.querySelector('.kamera').style.display = 'none';
    document.getElementById('hasilFoto').style.display = 'block';
}
