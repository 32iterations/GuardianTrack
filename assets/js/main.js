// 當整個 HTML 文件被完全讀取和解析後，才執行此腳本
document.addEventListener('DOMContentLoaded', function() {
    
    // 這個腳本的目的是根據用戶當前所在的頁面路徑，
    // 自動將底部對應的導航按鈕設置為 "active" (啟用) 狀態，以提供視覺反饋。

    // 取得當前網頁的相對路徑 (例如 "index.html" 或 "profile.html")
    const currentPath = window.location.pathname.split("/").pop();

    // 為了安全起見，先移除所有導航按鈕的 active class，避免重複或錯誤的標記
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // 進行判斷：
    // 1. 如果當前路徑是 'index.html' 或是空的 (代表根目錄)，就高亮「首頁」按鈕
    if (currentPath === 'index.html' || currentPath === '') {
        const navHome = document.getElementById('nav-home');
        if(navHome) navHome.classList.add('active');
    } 
    // 2. 如果當前路徑是 'profile.html'，就高亮「會員」按鈕
    else if (currentPath === 'profile.html') {
        const navProfile = document.getElementById('nav-profile');
        if(navProfile) navProfile.classList.add('active');
    }
    // 3. 您未來可以為 "安心守護" 頁面添加判斷。
    //    由於 guardian/ 下可能有多個頁面，我們可以判斷路徑是否包含 '/guardian/'
    else if (window.location.pathname.includes('/guardian/')) {
        // 在這裡您可以決定是否要高亮某個特定圖示，
        // 例如，如果安心守護功能是從會員頁面進入的，可以考慮高亮會員圖示
        const navProfile = document.getElementById('nav-profile');
        if(navProfile) navProfile.classList.add('active');
    }
});

