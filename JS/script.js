document.addEventListener("DOMContentLoaded", function() {
    let dropdownToggle = document.getElementById("dropdown-toggle");
    let dropdownMenu = document.querySelector(".dropdown-menu");

    dropdownToggle.addEventListener("click", function(event) {
        event.preventDefault(); // 阻止直接跳轉
        dropdownMenu.style.display = (dropdownMenu.style.display === "block") ? "none" : "block";
    });

    // 點擊其他地方時關閉選單
    document.addEventListener("click", function(event) {
        if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
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
