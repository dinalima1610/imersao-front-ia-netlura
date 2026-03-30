import { createCard } from './Card.js';

// Cria um carrossel para uma categoria de filmes/séries.
export function createCarousel(category) {
    const section = document.createElement('div');
    section.className = 'slider-section';

    // Cabeçalho do carrossel com título e indicadores.
    const header = document.createElement('div');
    header.className = 'slider-header';

    const title = document.createElement('h2');
    title.className = 'slider-title';
    title.innerText = category.title; // Mostra o nome da categoria.

    const indicators = document.createElement('div');
    indicators.className = 'slider-indicators';

    header.appendChild(title);
    header.appendChild(indicators);
    section.appendChild(header);

    const row = document.createElement('div');
    row.className = 'movie-row';

    // Para cada item da categoria, cria um cartão e adiciona ao carrossel.
    category.items.forEach(item => {
        const card = createCard(item);
        row.appendChild(card);
    });

    section.appendChild(row);
    return section;
}
