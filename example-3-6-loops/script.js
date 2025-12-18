const changeColorsButton = document.querySelector("#changeColors");
const numberList = document.querySelector("#numberList");

// Uses a for-loop to add 100 list items to the page.
for (let i = 0; i < 100; i++) {
  const listItem = document.createElement("li");
  listItem.innerHTML = `Number: ${i}`;
  numberList.appendChild(listItem);
}

/**
 * When the changeColorsButton is clicked, use querySelectorAll to get an array of ALL
 * <li>s on the page. Then, use the array's forEach function to call the changeListItemColor()
 * function below, once for each item.
 *
 * Each time the function is called, the corresponding array element will be passed into the function
 * as its first argument.
 */
changeColorsButton.addEventListener("click", () => {
  const listItems = document.querySelectorAll("li");
  listItems.forEach(changeListItemColor);
});

/**
 * Sets the "color" style property for the given li to a random color.
 *
 * @param {HTMLElement} li the list item to style
 */
function changeListItemColor(li) {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  li.style.color = `rgb(${r}, ${g}, ${b})`;
}




const changeColorsButton = document.querySelector("#changeColors");
const numberList = document.querySelector("#numberList");

// 使用 for 循环一次性向页面添加 100 个列表项 (<li>)
for (let i = 0; i < 100; i++) {
  const listItem = document.createElement("li");
  listItem.innerHTML = `数字: ${i}`;
  numberList.appendChild(listItem);
}

/**
 * 当点击 changeColorsButton 按钮时，使用 querySelectorAll 获取页面上“所有” <li> 的数组（节点列表）。
 * 然后，使用数组的 forEach 函数为每个项目调用一次下方的 changeListItemColor() 函数。
 *
 * 每次调用该函数时，当前正在处理的数组元素都会作为第一个参数传递给函数。
 */
changeColorsButton.addEventListener("click", () => {
  const listItems = document.querySelectorAll("li");
  listItems.forEach(changeListItemColor);
});

/**
 * 将给定 li 元素的 "color"（颜色）样式属性设置为随机颜色。
 *
 * @param {HTMLElement} li 要设置样式的列表项
 */
function changeListItemColor(li) {
  // 生成 0 到 255 之间的随机红、绿、蓝数值
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  
  // 使用 rgb() 格式应用颜色
  li.style.color = `rgb(${r}, ${g}, ${b})`;
}