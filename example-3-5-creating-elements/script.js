const addButton = document.querySelector("#addButton");
const numberList = document.querySelector("#numberList");

/**
 * This is using the arrow function syntax to define an anonymous function which will be called
 * when the button is clicked. See:
 *
 * <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions>
 */
addButton.addEventListener("click", () => {
  // Generate a random number between 0 and 99
  const randomNumber = Math.floor(Math.random() * 100);

  // Create a new <li> and set its innerHTML
  const listItem = document.createElement("li");
  listItem.innerHTML = `Random Number: ${randomNumber}`;

  // Add the new <li> to the #numberList
  numberList.appendChild(listItem);
});




const addButton = document.querySelector("#addButton");
const numberList = document.querySelector("#numberList");

/**
 * 这里使用了“箭头函数”语法来定义一个匿名函数，
 * 该函数会在按钮被点击时被调用。
 * 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 */
addButton.addEventListener("click", () => {
  // 生成一个 0 到 99 之间的随机整数
  const randomNumber = Math.floor(Math.random() * 100);

  // 创建一个全新的 <li> 元素
  const listItem = document.createElement("li");
  
  // 设置该 <li> 标签内部的 HTML 内容
  listItem.innerHTML = `随机数: ${randomNumber}`;

  // 将这个新创建的 <li> 标签添加到 #numberList（通常是一个 <ul> 或 <ol>）中
  numberList.appendChild(listItem);
});