let currentPage = 1;
const totalPages = 13;

function showContent(page) {
    for (let i = 1; i <= totalPages; i++) {
        const content = document.querySelector(`#page${i} .content`);
        if (content) {
            content.classList.toggle('active', i === page);
        }
    }
}

function updateZIndex() {
    for (let i = 1; i <= totalPages; i++) {
        const page = document.getElementById(`page${i}`);
        if (i === currentPage) {
            page.style.zIndex = totalPages + 1; // Página actual arriba
        } else {
            page.style.zIndex = totalPages - i + 1; // Otras páginas debajo
        }
    }
}

// Llama a updateZIndex() después de cambiar de página
function nextPage() {
    if (currentPage < totalPages) {
        document.getElementById(`page${currentPage + 1}`).classList.add('flipped');
        currentPage++;
        showContent(currentPage);
        updateZIndex();
    }
}

function prevPage() {
    if (currentPage > 1) {
        document.getElementById(`page${currentPage}`).classList.remove('flipped');
        currentPage--;
        showContent(currentPage);
        updateZIndex();
    }
}

// Inicializa mostrando solo el contenido de la primera página
showContent(currentPage);
updateZIndex();