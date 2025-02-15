const newsData = [
    {
        title: "Kumpulkan Direksi Telkom, Erick Thohir Minta Genjot Bisnis Data Center",
        link: "https://finance.detik.com/berita-ekonomi-bisnis/d-7778883/kumpulkan-direksi-telkom-erick-thohir-minta-genjot-bisnis-data-center",
        date: "2025-02-14 10:46:34",
        author: "",
        publisher: "Detik",
        country: "Indonesia",
        category: "Business",
        language: "Indonesian",
        description: "Menteri Badan Usaha Milik Negara (BUMN) Erick Thohir menggelar pertemuan dengan jajaran direksi PT Telkom Indonesia (Persero) Tbk.",
        image: "https://akcdn.detik.net.id/community/media/visual/2025/02/10/menteri-bumn-erick-thohir_169.jpeg?q=90&w=360",
        video: ""
    },
    {
        title: "Pertumbuhan KDNK 2024 cemerlang, defisit fiskal susut ke 4.1 peratus",
        link: "https://www.bharian.com.my/bisnes/lain-lain/2025/02/1361390/pertumbuhan-kdnk-2024-cemerlang-defisit-fiskal-susut-ke-41-peratus",
        date: "2025-02-14 10:46:09",
        author: "Hazwan Faisal Mohamad",
        publisher: "Berita Malaysia",
        country: "Malaysia",
        category: "Top",
        language: "Malay",
        description: "KUALA LUMPUR: Keluaran Dalam Negeri Kasar (KDNK) melonjak kepada 5.1 peratus pada 2024 (2023: 3.6 peratus), melebihi unjuran awal kerajaan sebanyak 4.0 peratus hingga 5.0 peratus yang diumumkan dalam Belanjawan 2024.",
        image: "https://assets.bharian.com.my/images/articles/bizh-kdnk1402_BHfield_image_listing_featured_v2.var_1739529130.jpg",
        video: ""
    },
    {
        title: "Apple Luncurkan Penelitian Dampak Gadget ke Kesehatan",
        link: "https://inet.detik.com/cyberlife/d-7778328/apple-luncurkan-penelitian-dampak-gadget-ke-kesehatan",
        date: "2025-02-14 10:45:07",
        author: "",
        publisher: "Detik",
        country: "Indonesia",
        category: "Technology",
        language: "Indonesian",
        description: "Apple pada Rabu (12/2) mengumumkan studi penelitian longitudinal baru yang akan menyelidiki hubungan antara berbagai aspek kesehatan yang dapat diukur.",
        image: "https://akcdn.detik.net.id/community/media/visual/2018/09/21/77280a4e-4b58-4e04-9f39-2a5c0f31364e_169.jpeg?q=90&w=360",
        video: ""
    },
    {
        title: "Analys: Finns det pengar att hämta i Loomis?",
        link: "https://www.placera.se/placera/redaktionellt/2025/02/14/loomis-aktie-ar-kopvard-om-bolaget-fortsatter-prestera.html",
        date: "2025-02-14 10:42:36",
        author: "",
        publisher: "Placera",
        country: "Sweden",
        category: "Top",
        language: "Swedish",
        description: "Trots knepiga förutsättningar blev 2024 ett rekordår för kontanthanteringsbolaget. Aktien har stigit 50% senaste året – men kan Loomis prestera 12% rörelsemarginal uthålligt över tid är värderingen fortfarande låg.",
        image: "https://www.placera.se/placera/Afv-bilder/Bilder/loomis-segment-februari-2025.png",
        video: ""
    },
    {
        title: "Konstelasi Gen Alpha, Wujud Perkembangan Bahasa dan Pemaknaan Otonom Antargenerasi",
        link: "https://mediaindonesia.com/forum-mahasiswa/743782/konstelasi-gen-alpha-wujud-perkembangan-bahasa-dan-pemaknaan-otonom-antargenerasi",
        date: "2025-02-14 10:37:00",
        author: "Abdillah M. Marzuqi",
        publisher: "Mediaindonesia",
        country: "Indonesia",
        category: "Top",
        language: "Indonesian",
        description: "BAHASA berkembang berbanding lurus dengan kelahiran tiap generasi. Gen Alpha yang tumbuh bersama internet, memberikan sumbangsih besar terhadap siniar dunia maya.",
        image: "",
        video: ""
    },
    {
        title: "3 Negara Penghasil Minyak Bumi Terbesar di Asia Tenggara",
        link: "https://www.liputan6.com/bisnis/read/5921667/3-negara-penghasil-minyak-bumi-terbesar-di-asia-tenggara",
        date: "2025-02-14 10:30:14",
        author: "",
        publisher: "Liputan6",
        country: "Indonesia",
        category: "Business",
        language: "Indonesian",
        description: "Brunei Darussalam, Indonesia, dan Malaysia menjadi tiga negara penghasil minyak bumi terbesar di Asia Tenggara, meskipun produksi masing-masing negara memiliki fluktuasi seiring waktu.",
        image: "https://cdn0-production-images-kly.akamaized.net/eeFgmYOV-M1o2MrLARBSiyL5eeI=/673x379/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4723197/original/079083300_1705922196-fotor-ai-20240122181351.jpg",
        video: ""
    },
    {
        title: "Sangat Berbahaya, Pencurian Avtur Harus Ditindak Tegas!",
        link: "https://www.jpnn.com/news/sangat-berbahaya-pencurian-avtur-harus-ditindak-tegas",
        date: "2025-02-14 10:25:31",
        author: "",
        publisher: "Jpnn",
        country: "Indonesia",
        category: "Top",
        language: "Indonesian",
        description: "JPNN.com, JAKARTA - Pencurian avtur bawah laut di Pantai Labu, Deli Serdang, Sumatera Utara dinilai sangat berbahaya.",
        image: "https://cloud.jpnn.com/photo/arsip/watermark/2018/02/25/ilustrasi-pengisian-avtur-foto-jpnn.jpeg",
        video: ""
    },
    {
        title: "Malaysia atasi sasaran KDNK dan defisit fiskal 2024",
        link: "https://www.kosmo.com.my/2025/02/14/malaysia-atasi-sasaran-kdnk-dan-defisit-fiskal-2024/",
        date: "2025-02-14 10:21:12",
        author: "MUHAMMAD IKHWAN IDERIS",
        publisher: "Kosmo Digital",
        country: "Malaysia",
        category: "Top",
        language: "Malay",
        description: "PETALING JAYA – Keluaran Dalam Negeri Kasar (KDNK) Malaysia melonjak kepada 5.1 peratus pada 2024 (2023: 3.6 peratus), melebihi unjuran awal kerajaan sebanyak empat hingga lima peratus yang diumumkan dalam Belanjawan 2024. Kerajaan Madani turut mengatasi sasaran defisit fiskal bagi tahun 2024 pada 4.1 peratus (2023: lima peratus), berbanding sasaran 4.3 peratus.",
        image: "https://www.kosmo.com.my/wp-content/uploads/2024/12/mof.jpg",
        video: ""
    },
    {
        title: "Teollisuusliitto jätti uusia lakkovaroituksia",
        link: "https://www.is.fi/taloussanomat/art-2000011034730.html",
        date: "2025-02-14 10:17:00",
        author: "",
        publisher: "Ilta-sanomat",
        country: "Finland",
        category: "Business",
        language: "Finnish",
        description: "Lakkovaroitukset koskevat 41:tä yritystä teknologiateollisuudessa ja kemianteollisuudessa.",
        image: "https://images.sanoma-sndp.fi/a6b5d757e7c40548afe99b9a2f58d046/normal/1440.EXT",
        video: ""
    },
    {
        title: "Abdul Aziz dilantik Komisioner Jeneral Penjara baharu",
        link: "https://www.bharian.com.my/berita/nasional/2025/02/1361362/abdul-aziz-dilantik-komisioner-jeneral-penjara-baharu",
        date: "2025-02-14 10:16:34",
        author: "Hafidzul Hilmi Mohd Noor",
        publisher: "Berita Malaysia",
        country: "Malaysia",
        category: "Top",
        language: "Malay",
        description: "KUALA LUMPUR: Timbalan Komisioner Jeneral Penjara (Keselamatan dan Koreksional), Datuk Abdul Aziz Abdul Razak, dilantik sebagai Komisioner Jeneral Penjara yang baharu, berkuat kuasa hari ini.",
        image: "https://assets.bharian.com.my/images/articles/BH14JENERALPENJARA-O_BHfield_image_listing_featured_v2.var_1739526279.jpg",
        video: ""
    },
    {
        title: "Starting Five: Alabama-Auburn clash leads college basketball weekend games to watch",
        link: "https://www.usatoday.com/story/sports/ncaab/2025/02/14/college-basketball-games-watch-alabama-auburn-starting-five/78435288007/",
        date: "2025-02-14 11:08:58",
        author: "",
        publisher: "Usa Today",
        country: "United States Of America",
        category: "Other",
        language: "English",
        description: "",
        image: "https://www.usatoday.com/gcdn/authoring/authoring-images/2025/02/14/USAT/78562413007-usatsi-25373123.jpg?auto=webp&crop=3314%2C1864%2Cx1027%2Cy704&format=pjpg&height=1800&width=3200",
        video: ""
    },
    {
        title: "How far would a wife go to keep $2M Ponzi scheme a secret?",
        link: "https://www.yahoo.com/news/far-wife-keep-2m-ponzi-110855243.html",
        date: "2025-02-14 11:08:55",
        author: "Good Morning America",
        publisher: "Yahoo! News",
        country: "United States Of America",
        category: "Politics",
        language: "English",
        description: "",
        image: "https://s.yimg.com/ny/api/res/1.2/bH9PTxxnK.cQI1g3Qd9jGg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTU0MA--/https://media.zenfs.com/en/us.abcnews.gma.com/28df36c58e5c47c8c2d3493bd713a7d4",
        video: ""
    },
    {
        title: "Deschamps s’exprime sur son départ, son avenir et son potentiel successeur : “Je ne sais pas si Zizou aura envie”",
        link: "https://www.dhnet.be/sports/football/2025/02/14/deschamps-sexprime-sur-son-depart-son-avenir-et-son-potentiel-successeur-je-ne-sais-pas-si-zizou-aura-envie-X3SHEKS4GJGHZD3FTVSRTYH73U/",
        date: "2025-02-14 11:08:51",
        author: "La Rédaction",
        publisher: "Dh",
        country: "Belgium",
        category: "Sports",
        language: "French",
        description: "Didier Deschamps est revenu sur les décisions qui ont motivé son départ. Il a aussi donné son avis sur Zinedine Zidane comme futur entraîneur de l’équipe de France.",
        image: "https://www.dhnet.be/resizer/v2/AOV3UWOO4ZAAXMHS4DV3SJRHUI.jpg?auth=eae2d487270d4a6b4728738e2a2e30e21532b893cdee6f58aaafc11b4b2749b8&focal=3239%2C2159&height=800&quality=85&width=1200",
        video: ""
    },
    {
        title: "Newcastle boss Eddie Howe determined to keep star striker Alexander Isak",
        link: "https://uk.sports.yahoo.com/news/newcastle-boss-eddie-howe-determined-110846490.html",
        date: "2025-02-14 11:08:46",
        author: "PA Media: Sport",
        publisher: "Yahoo! News",
        country: "United Kingdom",
        category: "Sports",
        language: "English",
        description: "The Sweden international has scored 19 goals this season.",
        image: "https://s.yimg.com/uu/api/res/1.2/SXYxdC5apYzfufshTOAudQ--~B/aD0xNzUyO3c9MzExNTthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/pa-sport.com/79d7187629da23d6aa965d9788035348",
        video: ""
    },
    {
        title: "Florida International vs. Kennesaw State Basketball Tickets – Thursday, February 27",
        link: "https://www.lagrangenews.com/2025/02/14/florida-international-vs-kennesaw-state-basketball-tickets-thursday-february-27/",
        date: "2025-02-14 11:08:39",
        author: "Data Skrive",
        publisher: "Lagrange Daily News",
        country: "United States Of America",
        category: "Top",
        language: "English",
        description: "Thursday’s CUSA slate includes the Florida International Panthers (8-17, 2-10 CUSA) meeting the Kennesaw State Owls (15-10, 7-5 CUSA) at 7:00 PM ET on ESPN+.",
        image: "https://www.lagrangenews.com/wp-content/uploads/sites/37/2025/02/florida-international-vs-kennesaw-state-basketball-tickets-thursday-february-27.jpg",
        video: ""
    },
    {
        title: "Auch Autos in Deutschland betroffen: Mercedes-Benz ruft tausende Fahrzeuge wegen Brandgefahr zurück",
        link: "https://www.nordbayern.de/panorama/auch-autos-in-deutschland-betroffen-mercedes-benz-ruft-tausende-fahrzeuge-wegen-brandgefahr-zuruck-1.14580450",
        date: "2025-02-14 11:08:19",
        author: "minh-anh.nguyen@vnp.de (Minh Anh Nguyen)",
        publisher: "Nordbayern",
        country: "Germany",
        category: "Other",
        language: "German",
        description: "Washington - In den USA muss Mercedes aktuell rund 7.400 Elektro-SUV zurückrufen. Wegen möglicher Kurzschlüsse besteht die Gefahr eines Fahrzeugbrandes. Auch Modelle in Deutschland sind betroffen.",
        image: "https://images.nordbayern.de/image/contentid/policy:1.14580451:1739531373/new_black_Mercedes_EQB_electric_SUV_4MATIC_car_in_.jpg?%24p%24f%24h%24m%24w=dfc79b9&f=16%3A9&h=816&m=FIT&w=1680",
        video: ""
    },
    {
        title: "Im „Team of the Week“: BVB-Neuzugang hinterlässt mächtig Eindruck",
        link: "https://www.giessener-allgemeine.de/sport/fussball/im-team-of-the-week-bvb-neuzugang-hinterlaesst-maechtig-eindruck-zr-93572188.html",
        date: "2025-02-14 11:08:15",
        author: "Lars Pollmann",
        publisher: "Giessener-allgemeine De",
        country: "Germany",
        category: "Sports",
        language: "German",
        description: "Beim 3:0-Sieg in Portugal zahlt sich eine mutige Entscheidung von Trainer Niko Kovač für den BVB aus. Ein Neuzugang legt einen starken Kaltstart hin.",
        image: "https://www.giessener-allgemeine.de/assets/images/37/68/37068185-daniel-svensson-feierte-ein-gelungenes-startelf-und-champions-league-debuet-fuer-dortmund-39mEaMQcwj01.jpg",
        video: ""
    },
    {
        title: "Αναστολή της απαγόρευσης στον Δημήτρη Γιαννακόπουλο - Έχει δικαίωμα εισόδου στα ματς Κυπέλλου",
        link: "https://www.skai.gr/news/sports/dimitris-giannakopoulos-exei-dikaioma-eisodou-sta-mats-kypellou",
        date: "2025-02-14 11:08:12",
        author: "Newsroom",
        publisher: "Skai",
        country: "Greece",
        category: "Top",
        language: "Greek",
        description: "Ο Δημήτρης Γιαννακόπουλος μπορεί να δώσει το «παρών» στα παιχνίδια του Κυπέλλου μπάσκετ καθώς ανεστάλη η ποινή του",
        image: "https://cdn.skai.gr/sites/default/files/styles/article_16_9/public/2025-02/giannakopoulos_sportfm.jpg?itok=qms457jR",
        video: ""
    },
    {
        title: "The BelTel archives: From sporting greats to music icons and special guests like Princess Diana in NI",
        link: "https://www.belfasttelegraph.co.uk/life/features/the-beltel-archives-from-sporting-greats-to-music-icons-and-special-guests-like-princess-diana-in-ni/a1245388086.html",
        date: "2025-02-14 11:08:05",
        author: "",
        publisher: "Belfast Telegraph",
        country: "United Kingdom",
        category: "Top",
        language: "English",
        description: "A look back at images from the Belfast Telegraph archives, dating from 1975 to 2015.",
        image: "https://focus.belfasttelegraph.co.uk/thumbor/yMbbjf7uDXb5wtFHsYiukp_zlsk=/720x0/smart/prod-mh-ireland/97777123-5d5b-4d87-bcd3-a8cb138ea092/0e996b44-e1ff-4489-b7ac-4d808825e224/97777123-5d5b-4d87-bcd3-a8cb138ea092.jpg",
        video: ""
    },
    {
        title: "Penyebab Karier Abroad Pemain asal Indonesia Tak Bertahan Lama di Eropa dan Hanya Sisakan Marselino",
        link: "https://wow.tribunnews.com/2025/02/14/penyebab-karier-abroad-pemain-asal-indonesia-tak-bertahan-lama-di-eropa-dan-hanya-sisakan-marselino",
        date: "2025-02-14 07:47:17",
        author: "",
        publisher: "Tribun News",
        country: "Indonesia",
        category: "Top",
        language: "Indonesian",
        description: "Sejumlah pemain asal Indonesia sempat merasakan abroad di Eropa sebelum akhirnya kembali ke Liga Indonesia.",
        image: "https://asset-2.tstatic.net/wow/foto/bank/images/Marselino-mencetak-brace-ke-gawang-Banbury-United.jpg",
        video: ""
    },
    {
        title: "Italia Terancam Kehilangan Kuota Kelima Liga Champions",
        link: "https://www.bola.net/champions/italia-terancam-kehilangan-kuota-kelima-liga-champions-46aee3.html",
        date: "2025-02-14 02:14:00",
        author: "",
        publisher: "Bola",
        country: "Indonesia",
        category: "Sports",
        language: "Indonesian",
        description: "Italia mengalami kemunduran dalam peringkat UEFA setelah hasil buruk di babak play-off kompetisi Eropa pekan ini. Kini, mereka berada di peringkat ketiga, di bawah Inggris dan Spanyol.",
        image: "https://cdns.klimg.com/bola.net/library/upload/21/2025/02/320/juventus-11_0d4cc39.jpg",
        video: ""
    },
    {
        title: "Neymar Ingin Kembali ke Eropa, Barcelona Jadi Target",
        link: "https://www.bola.net/spanyol/neymar-ingin-kembali-ke-eropa-barcelona-jadi-target-500ec4.html",
        date: "2025-02-14 01:04:00",
        author: "editor@bola.net (Editor)",
        publisher: "Bola",
        country: "Indonesia",
        category: "Sports",
        language: "Indonesian",
        description: "Neymar dikabarkan ingin kembali ke Barcelona setelah menyelesaikan kontraknya bersama Santos.",
        image: "https://cdns.klimg.com/bola.net/library/upload/21/2025/02/neymar-1_de474ad.jpg",
        video: ""
    },
    {
        title: "Jelang AS Roma Duel Porto di Liga Europa, Ranieri Lempar Peringatan Keras ke Dybala Cs Soal Ini",
        link: "https://kaltara.tribunnews.com/2025/02/13/jelang-as-roma-duel-porto-di-liga-europa-ranieri-lempar-peringatan-keras-ke-dybala-cs-soal-ini",
        date: "2025-02-13 04:56:06",
        author: "",
        publisher: "Tribun News",
        country: "Indonesia",
        category: "Top",
        language: "Indonesian",
        description: "Jelang AS Roma duel melawan Porto di play-off Liga Europa, Claudio Ranieri melempar peringatan keras ke Paulo Dybala cs.",
        image: "https://asset-1.tstatic.net/img/zoom-in.svg",
        video: ""
    }
];

// Konfigurasi pagination
const itemsPerPage = 5;
let currentPage = 1;
let isLoading = false;

// Fungsi untuk menampilkan berita
function displayNews(category = "all", searchQuery = "", page = 1, append = false) {
    const newsContainer = document.getElementById('news-container');
    if (!append) {
        newsContainer.innerHTML = "";
    }

    const filteredNews = newsData.filter(news => {
        const matchesCategory = category === "all" || news.category === category;
        const matchesSearch = news.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const totalPages = Math.ceil(filteredNews.length / itemsPerPage);

    if (filteredNews.length === 0) {
        if (!append) {
            newsContainer.innerHTML = `<p class="no-news">Tidak ada berita yang ditemukan.</p>`;
        }
        renderPagination(0);
        return;
    }

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedNews = filteredNews.slice(startIndex, endIndex);

    paginatedNews.forEach((news, index) => {
        if (index === 2) {
            // Tambahkan iklan setelah 2 berita
            newsContainer.innerHTML += `
                <div class="ad-container ad-in-article">
                    <ins class="adsbygoogle"
                        style="display:block; text-align:center;"
                        data-ad-layout="in-article"
                        data-ad-format="fluid"
                        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
                        data-ad-slot="XXXXXXXXXX"></ins>
                </div>
            `;
            (adsbygoogle = window.adsbygoogle || []).push({});
        }

        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');
        const newsImage = news.image ? `<img src="${news.image}" alt="${news.title}" loading="lazy">` : '';
        const newsContent = `
            ${newsImage}
            <div class="content">
                <h2>${news.title}</h2>
                <p>${news.description}</p>
                <p><strong>Tanggal:</strong> ${news.date}</p>
                <p><strong>Penulis:</strong> ${news.author || 'Tidak diketahui'}</p>
                <p><strong>Kategori:</strong> ${news.category}</p>
                <a href="${news.link}" target="_blank">Baca selengkapnya</a>
                <div class="share-buttons">
                    <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(news.link)}" target="_blank" class="share-facebook">Facebook</a>
                    <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(news.title)}&url=${encodeURIComponent(news.link)}" target="_blank" class="share-twitter">Twitter</a>
                    <a href="https://api.whatsapp.com/send?text=${encodeURIComponent(news.title + " " + news.link)}" target="_blank" class="share-whatsapp">WhatsApp</a>
                </div>
            </div>
        `;
        newsItem.innerHTML = newsContent;
        newsContainer.appendChild(newsItem);
    });

    renderPagination(totalPages, page);
}

// Fungsi untuk merender tombol pagination
function renderPagination(totalPages, currentPage = 1) {
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = "";

    if (totalPages <= 1) return;

    const prevButton = document.createElement('button');
    prevButton.textContent = "Previous";
    prevButton.disabled = currentPage === 1;
    prevButton.addEventListener('click', () => {
        const activeCategory = document.querySelector('nav ul li a.active')?.getAttribute('data-category') || "all";
        const searchQuery = document.getElementById('search-input').value;
        displayNews(activeCategory, searchQuery, currentPage - 1);
    });
    paginationContainer.appendChild(prevButton);

    const maxPagesToShow = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (endPage - startPage + 1 < maxPagesToShow) {
        startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        if (i === currentPage) {
            button.classList.add('active');
        }
        button.addEventListener('click', () => {
            const activeCategory = document.querySelector('nav ul li a.active')?.getAttribute('data-category') || "all";
            const searchQuery = document.getElementById('search-input').value;
            displayNews(activeCategory, searchQuery, i);
        });
        paginationContainer.appendChild(button);
    }

    const nextButton = document.createElement('button');
    nextButton.textContent = "Next";
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener('click', () => {
        const activeCategory = document.querySelector('nav ul li a.active')?.getAttribute('data-category') || "all";
        const searchQuery = document.getElementById('search-input').value;
        displayNews(activeCategory, searchQuery, currentPage + 1);
    });
    paginationContainer.appendChild(nextButton);
}

// Hamburger Menu Toggle
document.getElementById('menu-toggle').addEventListener('click', () => {
    const nav = document.getElementById('main-nav');
    nav.classList.toggle('active');
});

// Tutup menu saat mengklik di luar menu
document.addEventListener('click', (e) => {
    const nav = document.getElementById('main-nav');
    const menuToggle = document.getElementById('menu-toggle');

    if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
        nav.classList.remove('active');
    }
});

// Event listener untuk kategori
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const category = e.target.getAttribute('data-category');
        setActiveCategory(category);
        currentPage = 1;
        displayNews(category);
    });
});

// Fungsi untuk mengatur kategori aktif
function setActiveCategory(category) {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => link.classList.remove('active'));
    const activeLink = document.querySelector(`nav ul li a[data-category="${category}"]`);
    if (activeLink) activeLink.classList.add('active');
}

// Event listener untuk pencarian
document.getElementById('search-button').addEventListener('click', () => {
    const searchQuery = document.getElementById('search-input').value;
    const activeCategory = document.querySelector('nav ul li a.active')?.getAttribute('data-category') || "all";
    currentPage = 1;
    displayNews(activeCategory, searchQuery, currentPage);
});

// Event listener untuk input pencarian (jika pengguna menekan Enter)
document.getElementById('search-input').addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        const searchQuery = document.getElementById('search-input').value;
        const activeCategory = document.querySelector('nav ul li a.active')?.getAttribute('data-category') || "all";
        currentPage = 1;
        displayNews(activeCategory, searchQuery, currentPage);
    }
});

// Event listener untuk infinite scroll
window.addEventListener('scroll', () => {
    if (isLoading) return;

    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 10) {
        isLoading = true;
        currentPage++;
        loadMoreNews();
    }
});

function loadMoreNews() {
    const activeCategory = document.querySelector('nav ul li a.active')?.getAttribute('data-category') || "all";
    const searchQuery = document.getElementById('search-input').value;
    displayNews(activeCategory, searchQuery, currentPage, true);
    isLoading = false;
}

// Event listener untuk dark mode
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Event listener untuk back to top button
window.addEventListener('scroll', () => {
    const backToTopButton = document.getElementById('back-to-top');
    if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

document.getElementById('back-to-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Jalankan fungsi saat halaman dimuat
window.onload = () => {
    displayNews();
    setActiveCategory("all");
    (adsbygoogle = window.adsbygoogle || []).push({});
};