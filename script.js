// Chờ DOM tải xong trước khi thực thi
document.addEventListener("DOMContentLoaded", function () {

    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");

    // Khi nhấn vào biểu tượng ☰: thêm/xóa class "active"
    // → CSS sẽ hiện hoặc ẩn .nav-links dựa vào class này
    menuIcon.addEventListener("click", function () {
        navLinks.classList.toggle("active");

        // Đổi biểu tượng: ☰ (mở) ↔ ✕ (đóng)
        if (navLinks.classList.contains("active")) {
            menuIcon.innerHTML = "&#10005;"; // ✕
        } else {
            menuIcon.innerHTML = "&#9776;"; // ☰
        }
    });

    // Đóng menu khi nhấn vào một mục trong menu (mobile)
    navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
            menuIcon.innerHTML = "&#9776;"; // Trở về ☰
        });
    });

    // Đóng menu khi resize lên desktop (> 768px)
    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            navLinks.classList.remove("active");
            menuIcon.innerHTML = "&#9776;";
        }
    });

});
