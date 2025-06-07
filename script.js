let currentPage = 1;
const pages = document.querySelectorAll('.page');
const totalPages = pages.length;

function showPage(page, flip = false) {
    pages.forEach((p, i) => {
        p.classList.remove('show', 'flipping');
        if (i + 1 === page) {
            p.classList.add('show');
            if (flip) {
                p.classList.add('flipping');
                setTimeout(() => {
                    p.classList.remove('flipping');
                }, 600); // Debe coincidir con el tiempo de transición CSS
            }
        }
    });
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage, true);
    }
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage, true);
    }
}

// Mostrar la primera página al cargar
showPage(currentPage);