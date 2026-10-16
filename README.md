# Responsive Navbar

Bài thực hành — Tạo thanh điều hướng (navbar) responsive bằng HTML, CSS (Flexbox + Media Queries) và JavaScript.

---

## 🎯 Mục tiêu

- Dùng **Flexbox** để căn chỉnh navbar trên desktop.
- Dùng **Media Queries** (`@media max-width: 768px`) để điều chỉnh cho mobile.
- Dùng **JavaScript** để bật/tắt menu hamburger trên mobile.

---

## 📁 Cấu trúc dự án

```
responsive-navbar/
├── index.html   # Cấu trúc HTML: navbar, logo, nav-links, menu-icon
├── style.css    # CSS: Flexbox, media queries, hiệu ứng hover
├── script.js    # JS: toggle class "active" khi nhấn ☰
└── README.md    # Mô tả dự án
```

---

## 🖥️ Hành vi theo màn hình

| Màn hình | Hành vi |
|---|---|
| **Desktop** (> 768px) | Menu hiển thị ngang, ☰ ẩn |
| **Mobile** (≤ 768px) | Menu ẩn, ☰ xuất hiện |
| **Nhấn ☰** | Menu mở ra dọc, icon đổi thành ✕ |
| **Nhấn ✕** | Menu đóng lại, icon về lại ☰ |
| **Nhấn vào link** | Menu tự đóng |
| **Resize lên desktop** | Menu tự đóng |

---

## 🔑 Kỹ thuật CSS

### Flexbox cho Desktop
```css
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-links { display: flex; }   /* Menu ngang */
.menu-icon { display: none; }   /* Ẩn hamburger */
```

### Media Query cho Mobile
```css
@media (max-width: 768px) {
    .nav-links {
        display: none;           /* Ẩn menu mặc định */
        flex-direction: column;  /* Menu dọc khi mở */
        position: absolute;
        width: 100%;
    }
    .menu-icon { display: block; }       /* Hiện ☰ */
    .nav-links.active { display: flex; } /* Mở menu khi có class active */
}
```

---

## 🔑 Kỹ thuật JavaScript

```js
menuIcon.addEventListener("click", function () {
    navLinks.classList.toggle("active"); // Thêm/xóa class active
});
```

---

## 🚀 Cách chạy

Mở file `index.html` trực tiếp trên trình duyệt — không cần server.

**Kiểm tra responsive:** Nhấn `F12` → chọn icon điện thoại để xem chế độ mobile.

---

## 👤 Tác giả

- **Học viên:** Ha Thi My Binh
- **Khóa học:** CodeGym — Thực hành Responsive Navbar
