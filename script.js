// Menampilkan pesan saat tombol "Beli" diklik
const buyButtons = document.querySelectorAll(".btn");

buyButtons.forEach((button) => {
    if (button.textContent === "Beli") {
        button.addEventListener("click", function () {
            alert("Terima kasih! Produk telah ditambahkan ke keranjang.");
        });
    }
});

// Form daftar member
const registerButton = document.querySelector(".form-section .btn");

registerButton.addEventListener("click", function () {
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;

    if (name === "" || email === "") {
        alert("Silakan isi nama dan email terlebih dahulu.");
    } else {
        alert(`Selamat datang, ${name}! Pendaftaran berhasil.`);
    }
});