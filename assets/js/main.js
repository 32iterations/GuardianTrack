// 等待 HTML 文件完全載入並解析後再執行
document.addEventListener('DOMContentLoaded', () => {

    // 取得所有需要操作的頁面和導航按鈕元素
    const homePage = document.getElementById('home-page');
    const profilePage = document.getElementById('profile-page');
    // 預留安心守護頁面，方便未來擴充
    // const guardianPage = document.getElementById('guardian-page'); 
    
    const navItems = document.querySelectorAll('.nav-item');
    const navHome = document.getElementById('nav-home');
    const navProfile = document.getElementById('nav-profile');

    // 頁面切換函式
    function showPage(pageToShow, activeNavItem) {
        // 隱藏所有頁面
        homePage.classList.add('hidden');
        profilePage.classList.add('hidden');
        // if (guardianPage) guardianPage.classList.add('hidden');

        // 移除所有導航按鈕的啟用狀態
        navItems.forEach(item => {
            item.classList.remove('active');
        });
        
        // 顯示指定的頁面
        if (pageToShow) {
            pageToShow.classList.remove('hidden');
        }
        
        // 將對應的導航按鈕設為啟用狀態
        if (activeNavItem) {
            activeNavItem.classList.add('active');
        }
    }

    // 為導航按鈕綁定點擊事件
    navHome.addEventListener('click', () => {
        showPage(homePage, navHome);
    });

    navProfile.addEventListener('click', () => {
        showPage(profilePage, navProfile);
    });
    
    // 你也可以為"安心守護"按鈕新增事件，導向新頁面
    const guardianFeatureButton = document.getElementById('guardian-feature-button');
    if (guardianFeatureButton) {
        guardianFeatureButton.addEventListener('click', (e) => {
            e.preventDefault(); // 防止頁面跳轉
            // 在這裡可以加入切換到 "安心守護" 頁面的邏輯
            // showPage(guardianPage, navProfile); // 例如：切換到守護頁，並保持會員分頁啟用
            alert('即將前往「安心守護」頁面！');
        });
    }


    // 初始載入時顯示首頁
    showPage(homePage, navHome);

});
