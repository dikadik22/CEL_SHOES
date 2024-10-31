function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    const activePage = document.getElementById(pageId);
    activePage.classList.add('active');
}
