const apiKey = '993712deb967433999088ed756f15b3c';
const apiUrl = 'https://newsapi.org/v2/top-headlines';
let currentPage = 1;
const articlesPerPage = 6;
let filteredArticles = [];
let currentView = 'grid';
let totalResults = 0;

// Fungsi untuk mengambil berita dari API
async function fetchNews(category = 'general', country = 'id', pageSize = 100) {
    try {
        const response = await fetch(
            `${apiUrl}?country=${country}&category=${category}&pageSize=${pageSize}&apiKey=${apiKey}`
        );
        const data = await response.json();
        
        if(data.status === 'ok') {
            totalResults = data.totalResults;
            return data.articles.map(article => ({
                title: article.title,
                category: category,
                content: article.content || article.description,
                image: article.urlToImage || 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZWVlIi8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM2NjYiPk5vIEltYWdlPC90ZXh0Pgo8L3N2Zz4=',
                link: article.url,
                date: new Date(article.publishedAt).toLocaleDateString('id-ID', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                }),
                author: article.author || 'Unknown',
                source: article.source.name,
                rating: 0
            }));
        }
        return [];
    } catch (error) {
        console.error('Error fetching news:', error);
        showError('Gagal memuat berita. Coba lagi nanti.');
        return [];
    }
}

// Fungsi untuk memuat berita
async function loadNews(category = 'all') {
    try {
        const categoryMap = {
            'all': 'general',
            'tech': 'technology',
            'health': 'health',
            'travel': 'general' // News API tidak memiliki kategori travel
        };
        
        const newsCategory = categoryMap[category] || 'general';
        const articles = await fetchNews(newsCategory);
        
        filteredArticles = category === 'travel' ? 
            articles.filter(article => article.title.toLowerCase().includes('travel')) :
            articles;
            
        currentPage = 1;
        renderArticles();
    } catch (error) {
        console.error('Error loading news:', error);
    }
}

// Fungsi untuk merender skeleton loading
function renderSkeleton() {
    const skeletonHTML = Array(articlesPerPage).fill(`
        <div class="skeleton">
            <div class="skeleton-image"></div>
            <div class="skeleton-content">
                <div class="skeleton-text" style="width: 80%"></div>
                <div class="skeleton-text" style="width: 100%"></div>
                <div class="skeleton-text" style="width: 60%"></div>
                <div class="skeleton-text" style="width: 30%; height: 2rem; margin-top: 1rem"></div>
            </div>
        </div>
    `).join('');
    document.getElementById('articles-list').innerHTML = skeletonHTML;
}

// Fungsi untuk merender artikel
function renderArticles() {
    const start = (currentPage - 1) * articlesPerPage;
    const end = start + articlesPerPage;
    const articlesToShow = filteredArticles.slice(start, end);

    if(!articlesToShow.length) {
        showError('Tidak ada artikel yang ditemukan');
        return;
    }

    document.getElementById('articles-list').innerHTML = articlesToShow
        .map((article, index) => `
            <article aria-labelledby="article-title-${index}" class="${currentView === 'list' ? 'list-view' : ''}">
                <img src="${article.image}" 
                     alt="${article.title}"
                     loading="lazy"
                     onerror="this.src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZWVlIi8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM2NjYiPk5vIEltYWdlPC90ZXh0Pgo8L3N2Zz4=';">
                <div class="content">
                    <h3 id="article-title-${index}">${article.title}</h3>
                    <div class="article-meta">
                        <div>
                            <span>📅 ${article.date}</span>
                            <span>✍️ ${article.author}</span>
                            <span>📰 ${article.source}</span>
                            <span class="reading-time">⏱️ ${Math.ceil((article.content?.length || 0) / 200)} min read</span>
                        </div>
                        <div class="share-buttons">
                            <button class="share-twitter" onclick="shareArticle('${article.title}', '${article.link}', 'twitter')">🐦</button>
                            <button class="share-facebook" onclick="shareArticle('${article.title}', '${article.link}', 'facebook')">📘</button>
                        </div>
                    </div>
                    <p>${article.content || 'Tidak ada deskripsi tersedia'}</p>
                    <div class="article-rating">
                        ${[1, 2, 3, 4, 5].map(star => `
                            <button onclick="rateArticle(${index + start}, ${star})" 
                                    data-rating="${star}"
                                    class="${star <= article.rating ? 'active' : ''}">
                                ${star <= article.rating ? '⭐' : '☆'}
                            </button>
                        `).join('')}
                    </div>
                    <a href="${article.link}" target="_blank" rel="noopener noreferrer">Baca Selengkapnya</a>
                </div>
            </article>
        `).join('');

    renderPagination();
}

// Fungsi untuk menampilkan error
function showError(message) {
    document.getElementById('articles-list').innerHTML = `
        <div class="no-results">
            <h3>${message}</h3>
            <p>Coba kata kunci lain atau pilih kategori berbeda</p>
        </div>
    `;
    document.getElementById('pagination').innerHTML = '';
}

// Fungsi untuk merender pagination
function renderPagination() {
    const pageCount = Math.ceil(filteredArticles.length / articlesPerPage);
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    if(pageCount > 1) {
        pagination.innerHTML = `
            <button onclick="previousPage()" ${currentPage === 1 ? 'disabled' : ''}>
                ← Sebelumnya
            </button>
            ${Array.from({length: pageCount}, (_, i) => `
                <button onclick="goToPage(${i + 1})" 
                        class="${i + 1 === currentPage ? 'active' : ''}">
                    ${i + 1}
                </button>
            `).join('')}
            <button onclick="nextPage()" ${currentPage === pageCount ? 'disabled' : ''}>
                Selanjutnya →
            </button>
        `;
    }
}

// Fungsi navigasi halaman
function previousPage() {
    if(currentPage > 1) {
        currentPage--;
        renderArticles();
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
}

function nextPage() {
    if(currentPage < Math.ceil(filteredArticles.length / articlesPerPage)) {
        currentPage++;
        renderArticles();
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
}

function goToPage(page) {
    currentPage = page;
    renderArticles();
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// Fungsi untuk filter kategori
function filterByCategory() {
    const category = document.getElementById('category-filter').value;
    loadNews(category);
}

// Fungsi pencarian
let searchTimeout;
function searchArticles() {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        const query = document.getElementById('search-input').value.toLowerCase();
        filteredArticles = filteredArticles.filter(article =>
            article.title.toLowerCase().includes(query) ||
            (article.content || '').toLowerCase().includes(query)
        );
        currentPage = 1;
        renderArticles();
    }, 300);
}

// Fungsi untuk berbagi artikel
function shareArticle(title, url, platform) {
    const encodedTitle = encodeURIComponent(title);
    const encodedUrl = encodeURIComponent(url);
    
    const shareUrls = {
        twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
    };

    window.open(shareUrls[platform], '_blank', 'noopener,noreferrer');
}

// Fungsi untuk rating artikel
function rateArticle(index, rating) {
    filteredArticles[index].rating = rating;
    localStorage.setItem(`rating-${filteredArticles[index].title}`, rating);
}

// Fungsi untuk mengupdate progress membaca
function updateReadingProgress() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    document.querySelector('.reading-progress-bar').style.width = `${scrollPercent}%`;
}

// Fungsi untuk scroll ke atas
function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    toggleTheme(savedTheme);
    loadNews('all');
    window.addEventListener('scroll', updateReadingProgress);
});

document.getElementById('category-filter').addEventListener('change', filterByCategory);
document.getElementById('search-input').addEventListener('input', searchArticles);

// Tampilkan tombol back to top saat scroll
window.onscroll = () => {
    document.getElementById('backToTop').style.display = 
        (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
        ? 'block' : 'none';
};

// Fungsi toggle tema
function toggleTheme(theme) {
    document.body.dataset.theme = theme;
    localStorage.setItem('theme', theme);
}

// Inisialisasi rating dari localStorage
window.addEventListener('load', () => {
    filteredArticles.forEach((article, index) => {
        const savedRating = localStorage.getItem(`rating-${article.title}`);
        if(savedRating) {
            filteredArticles[index].rating = parseInt(savedRating);
        }
    });
});