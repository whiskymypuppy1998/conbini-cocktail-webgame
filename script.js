console.log("JS loaded");

const ingredients = ["可樂", "啤酒", "牛奶", "果汁", "巧克力", "薯片", "香蕉", "草莓", "餅乾", "綠茶"];

document.getElementById('spinBtn').addEventListener('click', () => {
  console.log("Button clicked");
  const slot1 = document.getElementById('slot1');
  const slot2 = document.getElementById('slot2');
  const result = document.getElementById('result');

  slot1.textContent = "?";
  slot2.textContent = "?";
  result.textContent = "";

  setTimeout(() => {
    const ing1 = ingredients[Math.floor(Math.random() * ingredients.length)];
    const ing2 = ingredients[Math.floor(Math.random() * ingredients.length)];

    slot1.textContent = ing1;
    slot2.textContent = ing2;

    result.textContent = `你的調酒：${ing1} + ${ing2}！`;
  }, 500);
});
