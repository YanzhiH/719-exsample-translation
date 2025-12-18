const changeColorsButton = document.querySelector("#changeColors");
const numberList = document.querySelector("#numberList");

// Uses a for-loop to add 100 list items to the page.
for (let i = 0; i < 100; i++) {
  const listItem = document.createElement("li");
  listItem.innerHTML = `Number: ${i}`;

  /**
   * Add a click handler to the list item so that when it is clicked, the
   * changeListItemColor() function below will be called, with this list item
   * as the argument. So, when the user clicks a list item, its color will be
   * randomized.
   *
   * The click event handler function takes one argument which we haven't used until now. This argument
   * contains info about the click event which occurred. Its "target" property will be the element which
   * was clicked.
   */
  listItem.addEventListener("click", (e) => changeListItemColor(e.target));

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
 * Sets the "backgroundColor" style property for the given li to a random color.
 *
 * @param {HTMLElement} li the list item to style
 */
function changeListItemColor(li) {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  li.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}









const changeColorsButton = document.querySelector("#changeColors");
const numberList = document.querySelector("#numberList");

// 使用 for 循环向页面添加 100 个列表项
for (let i = 0; i < 100; i++) {
  const listItem = document.createElement("li");
  listItem.innerHTML = `数字: ${i}`;

  /**
   * 为每个列表项添加点击处理程序。
   * 当点击某个列表项时，会调用下方的 changeListItemColor() 函数，
   * 并将当前点击的这个列表项作为参数传入。
   * 这样，当用户点击具体的某一项时，它的颜色会随机改变。
   *
   * 点击事件处理函数会接收到一个我们之前没用过的参数 "e"（即 event，事件对象）。
   * 这个参数包含了触发点击事件的相关信息。
   * 它的 "target" 属性指代的就是被点击的那个具体 HTML 元素。
   */
  listItem.addEventListener("click", (e) => changeListItemColor(e.target));

  numberList.appendChild(listItem);
}

/**
 * 当点击“修改颜色”按钮时，使用 querySelectorAll 获取页面上“所有” <li>。
 * 然后使用 forEach 遍历，对每个项目调用一次 changeListItemColor()。
 */
changeColorsButton.addEventListener("click", () => {
  const listItems = document.querySelectorAll("li");
  listItems.forEach(changeListItemColor);
});

/**
 * 将给定 li 元素的 "backgroundColor"（背景颜色）属性设置为随机颜色。
 *
 * @param {HTMLElement} li 要设置样式的列表项
 */
function changeListItemColor(li) {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  
  // 注意：这次修改的是 backgroundColor（背景色）
  li.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}