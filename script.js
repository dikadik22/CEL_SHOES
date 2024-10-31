function showPage(pageId) {
    const pages = document.querySelectorAll('.page'); // Ambil semua elemen dengan kelas 'page'
    pages.forEach(page => page.classList.remove('active')); // Hapus kelas 'active' dari semua halaman
    
    const activePage = document.getElementById(pageId); // Temukan halaman yang aktif berdasarkan ID yang diberikan
    activePage.classList.add('active'); // Tambahkan kelas 'active' ke halaman yang sesuai
}
