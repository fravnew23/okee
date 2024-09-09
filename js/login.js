document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari pengiriman otomatis

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('error-message');

    // Validasi input
    if (username === '' || password === '') {
        errorMessage.textContent = 'Username dan password harus diisi!';
        errorMessage.style.color = 'red';
    } else if (username !== 'blubiez' || password !== '12345') { 
        // Ganti ini dengan validasi yang sesuai atau panggil API autentikasi
        errorMessage.textContent = 'Username atau password salah!';
        errorMessage.style.color = 'red';
    } else {
        errorMessage.textContent = '';
        alert('Login sukses!');
        
        // Arahkan ke halaman lain setelah login sukses
        window.location.href = 'index.html'; // Ganti dengan URL halaman tujuan
    }
});
