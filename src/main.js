import "./style.css";

// mobile nav toggle
const btn = document.querySelector("[data-nav-toggle]");
const menu = document.querySelector("[data-nav-menu]");
btn?.addEventListener("click", () => menu?.classList.toggle("hidden"));
menu?.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => menu.classList.add("hidden")));

// current year in footer
document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = String(new Date().getFullYear())));

// hide broken images, keep the soft gradient behind them
document.querySelectorAll(".img-card img").forEach((img) => img.addEventListener("error", () => (img.style.opacity = "0")));

// booking form -> WhatsApp message
const form = document.querySelector("[data-book-form]");
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const d = new FormData(form);
  const text = [
    "طلب حجز جديد من الموقع",
    `الاسم: ${d.get("name")}`,
    `الجوال: ${d.get("phone")}`,
    `نوع الطلب: ${d.get("type")}`,
    `التاريخ: ${d.get("date") || "-"}`,
    `المكان: ${d.get("place") || "-"}`,
    `التفاصيل: ${d.get("details") || "-"}`,
  ].join("\n");
  window.open(`https://wa.me/966507895720?text=${encodeURIComponent(text)}`, "_blank");
});
