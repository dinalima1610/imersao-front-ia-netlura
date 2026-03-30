// Pega o ID do vídeo do YouTube a partir de uma URL.
export function getYouTubeId(url) {
    if (!url) return "7RUA0IOfar8"; // Usa um vídeo padrão se a URL estiver vazia.
    if (url.includes('v=')) {
        return url.split('v=')[1].split('&')[0]; // URL no formato ?v=ID
    }
    return url.split('/').pop(); // URL no formato /ID
}

// Retorna um número aleatório entre 80 e 99.
export function getRandomMatchScore() {
    return Math.floor(Math.random() * 20 + 80);
}

// Retorna uma duração fictícia para exibir no cartão.
export function getRandomDuration(hasProgress) {
    return hasProgress ? '10 temporadas' : '2h ' + Math.floor(Math.random() * 59) + 'm';
}

// Retorna um selo de idade aleatório para mostrar no cartão.
export function getRandomAgeBadge() {
    return Math.random() > 0.5 ? { text: 'A16', class: 'red-accent' } : { text: '16', class: '' };
}
