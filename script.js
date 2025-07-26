const ingredients = [
  "檸檬汁", "可爾必思", "黑咖啡", "鮮奶", "蘋果汁", "維他命水", "蜂蜜水",
  "能量飲料", "烏龍茶", "紅茶", "綠茶", "椰子水", "氣泡水", "香蕉牛奶",
  "百香果汁", "可樂", "乳酸飲料", "青草茶", "巧克力牛奶", "葡萄汁",
  "番茄汁", "米漿", "養樂多", "高蛋白飲", "豆漿",
  "草莓果凍", "梅子乾", "奇異果", "香蕉", "茶葉蛋", "起司條", "魷魚絲",
  "洋芋片", "可麗露", "鯛魚燒", "抹茶泡芙", "小蛋糕", "花生糖", "巧克力棒",
  "麻糬", "牛奶糖", "蒟蒻果凍", "堅果包", "小黃瓜條"
];

let picked1 = null;
let picked2 = null;

function rollSlot(slotId) {
  const slotElement = document.getElementById(slotId);
  let count = 0;
  const maxCount = 20;
  const interval = setInterval(() => {
    const temp = ingredients[Math.floor(Math.random() * ingredients.length)];
    slotElement.textContent = temp;
    count++;
    if (count >= maxCount) {
      clearInterval(interval);
      let final;
      do {
        final = ingredients[Math.floor(Math.random() * ingredients.length)];
      } while ((slotId === 'slot2' && final === picked1) || (slotId === 'slot1' && final === picked2));
      slotElement.textContent = final;
      if (slotId === 'slot1') picked1 = final;
      if (slotId === 'slot2') picked2 = final;
      updateResult();
    }
  }, 50);
}

function updateResult() {
  if (picked1 && picked2) {
    document.getElementById("result").textContent =
      `請發揮創意，使用「${picked1}」與「${picked2}」調出一杯飲品吧！`;
  }
}