// Seleciona o botão de alternância de tema
const themeToggle = document.getElementById('theme-toggle');

// Função para alternar o tema
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    // Atualiza o ícone do botão
    updateButtonIcon(newTheme);
}

// Função para atualizar o ícone do botão
function updateButtonIcon(theme) {
    themeToggle.textContent = theme === 'light' ? '☀️' : '🌙';
}

// Verifica o tema salvo no localStorage ao carregar a página
const savedTheme = localStorage.getItem('theme') || 'dark'; // Padrão dark
document.documentElement.setAttribute('data-theme', savedTheme);
updateButtonIcon(savedTheme);

// Adiciona evento de clique ao botão
themeToggle.addEventListener('click', toggleTheme);

// --- Seleção de perfil (salva nome e imagem no localStorage) ---
// Procura todos os elementos com a classe .profile e adiciona handlers
document.querySelectorAll('.profile').forEach(profile => {
    // Ao clicar, guarda nome e imagem do perfil e vai para a página do catálogo
    profile.addEventListener('click', () => {
        const nameEl = profile.querySelector('figcaption');
        const imgEl = profile.querySelector('img');
        if (nameEl && imgEl) {
            // Salva no localStorage para a página catalogo.html usar
            localStorage.setItem('perfilAtivoNome', nameEl.textContent.trim());
            localStorage.setItem('perfilAtivoImagem', imgEl.src);
            // Redireciona para a página de catálogo
            window.location.href = 'catalogo/catalogo.html';
        }
    });

    // Permite ativar via teclado (Enter ou Espaço) quando o elemento estiver focado
    profile.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            profile.click();
        }
    });
});