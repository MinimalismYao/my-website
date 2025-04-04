document.addEventListener("DOMContentLoaded", function () {
    // 處理下拉選單開關（手機版）
    const dropdownToggle = document.getElementById("dropdown-toggle");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    dropdownToggle.addEventListener("click", function (event) {
        event.preventDefault(); // 阻止直接跳轉
        dropdownMenu.style.display = (dropdownMenu.style.display === "block") ? "none" : "block";
    });

    document.addEventListener("click", function (event) {
        if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = "none";
        }
    });

    // 處理 email 複製
    const emailButton = document.getElementById("copy-email");

    emailButton.addEventListener("click", function (e) {
        e.preventDefault();

        const email = "musemoran@gmail.com";
        navigator.clipboard.writeText(email).then(() => {
            alert("📧 已複製電子郵件地址！");
        }).catch(err => {
            alert("⚠️ 複製失敗，請手動複製： " + email);
        });
    });
});
