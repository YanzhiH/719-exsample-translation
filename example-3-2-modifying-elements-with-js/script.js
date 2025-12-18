// Select the first paragraph using querySelector
const selectedParagraph = document.querySelector("p");
console.log(selectedParagraph);

// Modify the innerHTML of the first paragraph
selectedParagraph.innerHTML = "First paragraph: Updated paragraph content";

/**
 * Modify the style of the second paragraph (change color and font weight).
 * We can change any CSS style using the JavaScript "style" property.
 *
 * The names of the individual styles are almost the same as they are in CSS,
 * except replacing dash-case with camelCase - for example, fontWeight instead
 * of font-weight, as shown below.
 */
const highlightedParagraph = document.querySelector(".highlight");
highlightedParagraph.style.color = "red";
highlightedParagraph.style.fontWeight = "bold";

/**
 * Calculates a random integer.
 *
 * @param {number} min the minimum value to return
 * @param {number} max the maximum value to return
 * @returns an integer between min and max, inclusive.
 */
function randomIntegerBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Pick a random Pokemon Pokedex number
const dexNumber = randomIntegerBetween(1, 386);

/**
 * This `` syntax is a string template literal. It lets us add values into the string using
 * the ${} syntax. Here we are using it to add the value of the dexNumber variable above into our string.
 *
 * So, for example, if dexNumber is 149, then imgSrc will be equal to:
 * <https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/149.png>
 */
const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${dexNumber}.png`;

// Set the image src
const image = document.querySelector("img");
image.src = imgSrc;














// 使用 querySelector 选择第一个段落 <p> 标签
const selectedParagraph = document.querySelector("p");
console.log(selectedParagraph);

// 修改第一个段落的 innerHTML（内部 HTML 内容）
selectedParagraph.innerHTML = "第一个段落：已更新段落内容";

/**
 * 修改第二个段落的样式（更改颜色和字体粗细）。
 * 我们可以使用 JavaScript 的 "style" 属性来更改任何 CSS 样式。
 *
 * 样式的名称与 CSS 中的名称几乎完全相同，
 * 区别在于将“短横线连接式”（dash-case）替换为“驼峰式”（camelCase）。
 * 例如：用 fontWeight 代替 font-weight，如下所示。
 */
const highlightedParagraph = document.querySelector(".highlight");
highlightedParagraph.style.color = "red";
highlightedParagraph.style.fontWeight = "bold";

/**
 * 计算一个随机整数。
 *
 * @param {number} min 返回的最小值
 * @param {number} max 返回的最大值
 * @returns 一个介于 min 和 max 之间的整数（包含边界值）。
 */
function randomIntegerBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 随机选择一个宝可梦图鉴编号（1 到 386 之间）
const dexNumber = randomIntegerBetween(1, 386);

/**
 * 这种 `` 语法是“字符串模板字面量”。
 * 它允许我们使用 ${} 语法将变量值插入到字符串中。
 * 在这里，我们将上面生成的 dexNumber 变量的值插入到图片链接中。
 *
 * 例如，如果 dexNumber 是 149，那么 imgSrc 将等于：
 * <https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/149.png>
 */
const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${dexNumber}.png`;

// 选中 <img> 标签并设置它的 src 属性，从而显示图片
const image = document.querySelector("img");
image.src = imgSrc;