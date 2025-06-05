let currentPrice = 0;

// جلب السعر الحي من Twelve Data
setInterval(() => {
  fetch("https://api.twelvedata.com/price?symbol=EUR/USD&apikey=f527a1ac48704fb289a01669bf2e2ba0
    .then(res => res.json())
    .then(data => {
      currentPrice = parseFloat(data.price);
      document.getElementById("price").textContent = currentPrice;
    });
}, 3000); // كل 3 ثوانٍ

function placeTrade(direction) {
  const entryPrice = currentPrice;
  const duration = 30 * 1000; // 30 ثانية

  alert("تم فتح صفقة: " + direction);
  
  setTimeout(() => {
    const result = (direction === "up" && currentPrice > entryPrice) ||
                   (direction === "down" && currentPrice < entryPrice)
                   ? "ربحت ✅" : "خسرت ❌";
    alert("النتيجة: " + result);
  }, duration);
}