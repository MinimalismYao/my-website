document.addEventListener("DOMContentLoaded", function () {
    // 📌 處理下拉選單（手機版 Content）
    const dropdownToggle = document.getElementById("dropdown-toggle");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    if (dropdownToggle && dropdownMenu) {
        dropdownToggle.addEventListener("click", function (event) {
            event.preventDefault(); // 避免跳轉
            dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
        });

        document.addEventListener("click", function (event) {
            if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
                dropdownMenu.style.display = "none";
            }
        });
    }

    // 📧 複製 Email 功能
    const emailButton = document.getElementById("copy-email");
    if (emailButton) {
        emailButton.addEventListener("click", function (e) {
            e.preventDefault();
            const email = "musemoran@gmail.com";

            if (navigator.clipboard) {
                navigator.clipboard.writeText(email).then(() => {
                    alert("📧 已複製電子郵件地址！");
                }).catch(() => {
                    alert("⚠️ 無法自動複製，請手動複製：" + email);
                });
            } else {
                alert("⚠️ 不支援自動複製，請手動複製：" + email);
            }
        });
    }
});
