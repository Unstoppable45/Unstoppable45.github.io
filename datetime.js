document.addEventListener('DOMContentLoaded', function() {
    // 更新日期
    const dateElement = document.querySelector('.gregorian-date');
    function updateDate() {
        const now = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        dateElement.textContent = now.toLocaleDateString('zh-CN', options);
    }
    setInterval(updateDate, 60000);
    updateDate();

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 汉堡菜单
    document.querySelector('.hamburger-menu').addEventListener('click', () => {
        document.querySelector('.navbar').classList.toggle('active');
    });


});



document.addEventListener('DOMContentLoaded', function() {
    let isAnimationPlayed = false;

    function playAnimation() {
        if (isAnimationPlayed) return;
        isAnimationPlayed = true;

        const personItems = document.querySelectorAll('.person-item');
        personItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
                item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            }, index * 200);
        });

        personItems.forEach((item, index) => {
            const text = item.querySelector('p');
            text.style.opacity = '0';
            text.style.transform = 'translateY(20px)';
            setTimeout(() => {
                text.style.opacity = '1';
                text.style.transform = 'translateY(0)';
                text.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            }, (index + 1) * 200 + 100); // 文本动画延迟，确保在图片之后
        });
    }

    window.addEventListener('scroll', function() {
        const heritagePersons = document.querySelector('#heritage-persons');
        const rect = heritagePersons.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0 && !isAnimationPlayed) {
            playAnimation();
            // 检查是否滚动到第三页的中间位置
        if (rect.top < window.innerHeight / 4 && rect.bottom >= 0 && !isAnimationPlayed) {
        playAnimation();
            
        }
    }
});

    document.querySelector('#nav-heritage-persons').addEventListener('click', function() {
        playAnimation();
    });
});


document.addEventListener('DOMContentLoaded', function() {
    let isMarketAnimationPlayed = false;

    function playMarketAnimation() {
        if (isMarketAnimationPlayed) return;
        isMarketAnimationPlayed = true;

        const marketItems = document.querySelectorAll('.market-item');
        marketItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
                item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            }, index * 200);
        });
    }

    window.addEventListener('scroll', function() {
        const heritageMarket = document.querySelector('#heritage-market');
        const rect = heritageMarket.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0 && !isMarketAnimationPlayed) {
            playMarketAnimation();
        }
    });
});
