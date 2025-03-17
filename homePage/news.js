document.addEventListener("DOMContentLoaded", function () {
    const newsContent = [
        {
            agency:"中央通訊社",
            title: "藝術品認證導入區塊鏈 業者交易更安全",
            date: "2025/03/06",
            imageUrl: "../img/482795685_17914946868077462_2052051537771332291_n.jpg",
            newsC: "以區塊鏈技術將珠寶、藝術品的特徵數位化收藏及認證，藏逸拍賣會董事長伍穗華表示，這項技術可能影響整個拍賣收藏業界，讓買賣更有信心也更安全。",
            articleUrl:"https://tw.news.yahoo.com/%E8%97%9D%E8%A1%93%E5%93%81%E8%AA%8D%E8%AD%89%E5%B0%8E%E5%85%A5%E5%8D%80%E5%A1%8A%E9%8F%88-%E6%A5%AD%E8%80%85%E4%BA%A4%E6%98%93%E6%9B%B4%E5%AE%89%E5%85%A8-121423477.html"


        },
        {
            agency:"藝信",
            title: "花絮回顧｜藝信亮相亞洲最大創業盛會 Meet Taipei",
            date: "2025/02/27",
            imageUrl: "../img/482363972_17914190457077462_5689976194794848157_n.jpg",
            newsC: "2024 Meet Taipei 創新創業嘉年華匯聚來自全球的創新團隊、投資人及產業專家，共同探索技術與市場趨勢。藝信於去年 11 月 22 日參展，展示 「藝術指紋」技術，並與業界專家深度交流，共同探討數位鑑證技術如何改變藝術市場。",
            articleUrl:"https://www.facebook.com/share/p/1654CFPtLV/"
        },
        {
            agency:"藝信",
            title: "數位指紋｜這件作品，還是原來的那一件嗎？",
            date: "2024/02/20",
            imageUrl: "../img/480657483_17912990667077462_94806702073237062_n.jpg",
            newsC: "「在藝術市場中，作品的真偽與溯源至關重要。我們運用 數位顯微鏡 和 AI 技術，為每件藝術品建立無法篡改的數位履歷，確保作品的真實性與可追溯性。",
            articleUrl:"https://www.facebook.com/share/p/1FQvoCUpMP/"
        },
    ];

    const newsItem = document.getElementById("newsItem");
    // 使用 DocumentFragment 來提高效能
    const fragment = document.createDocumentFragment();

    newsContent.forEach((news) => {
        const carouselitem = document.createElement("div");
        carouselitem.classList.add("carousel-item");

        const newsPicBox = document.createElement("div");
        newsPicBox.classList.add("newsPicBox");

        const newsPic = document.createElement("img");
        newsPic.classList.add("newsPic");
        newsPic.src = news.imageUrl;

        const carouselItemHeader = document.createElement("div");
        carouselItemHeader.classList.add("carousel-item-header");

        const newsAgency = document.createElement("span");
        newsAgency.classList.add("news", "agency");
        newsAgency.textContent = news.agency + " ";

        const news1 = document.createElement("span");
        news1.classList.add("news");
        news1.textContent = "| " + news.date;

        const newsTopic = document.createElement("div");
        newsTopic.classList.add("newsTopic");
        newsTopic.textContent = news.title;

        const newsC = document.createElement("div");
        newsC.classList.add("newsC");
        newsC.textContent = news.newsC;

        newsPicBox.appendChild(newsPic);
        carouselItemHeader.appendChild(newsAgency);
        carouselItemHeader.appendChild(news1);

        carouselitem.appendChild(newsPicBox);
        carouselitem.appendChild(carouselItemHeader);
        carouselitem.appendChild(newsTopic);
        carouselitem.appendChild(newsC);

        const url = document.createElement("a");
        url.href = news.articleUrl; // 設定超連結
        url.appendChild(carouselitem)
        fragment.appendChild(url);
    })
    newsItem.appendChild(fragment);
});


document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.carousel-container').forEach(carousel => {
        const carouselItems = carousel.querySelector('.carousel-items');
        const prevButton = carousel.querySelector('.arrow.prev');
        const nextButton = carousel.querySelector('.arrow.next');
        const items = carousel.querySelectorAll('.carousel-item');
        const itemsPerPage = 3;  // 每頁顯示 3 個新聞 item
        let currentPage = 0;
        const totalPages = Math.ceil(items.length / itemsPerPage);

        function updateCarousel() {
            // 每頁寬度固定為 container 的寬度：1240px
            const offset = currentPage * window.innerWidth * 0.865;
            carouselItems.style.transform = `translateX(-${offset}px)`;
            updateButtons();
        }

        function updateButtons() {
            prevButton.style.display = currentPage === 0 ? 'none' : 'block';
            nextButton.style.display = currentPage === totalPages - 1 ? 'none' : 'block';
        }

        updateButtons();

        prevButton.addEventListener('click', function () {
            if (currentPage > 0) {
                currentPage--;
                updateCarousel();
            }
        });

        nextButton.addEventListener('click', function () {
            if (currentPage < totalPages - 1) {
                currentPage++;
                updateCarousel();
            }
        });
    });
});


