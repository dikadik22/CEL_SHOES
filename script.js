function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active'); // Menghapus kelas aktif dari semua section
    });

    const activePage = document.getElementById(pageId);
    activePage.classList.add('active'); // Menambahkan kelas aktif ke section yang dipilih
}
