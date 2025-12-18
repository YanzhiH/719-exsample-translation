// When the script first runs, display this alert box to the user.
alert("Welcome to this webpage!");

/**
 * Get a reference to the button on the page from within our JS code.
 *
 * Essentially, the document.querySelector() function will look for the given CSS selector (in this case
 * an element selector - "button") and will return the first HTML element on the page which matches that
 * CSS selector.
 */
const button = document.querySelector("button");

// This is a function that we can call later on to run the code inside.
function handleButtonClick() {
  alert("You clicked me!");
}

/**
 * Hook up the button so that when it is clicked, the handleButtonClick() function above will be run.
 *
 * Notice that we do NOT have () - we just wrote handleButtonClick, NOT handleButtonClick(). This is
 * because here, we are only NAMING the function to call later, we are NOT calling it immediately.
 *
 * Experiment by adding () to the end of handleButtonClick below and see what happens.
 */
button.addEventListener("click", handleButtonClick);

/**
 * This is another way of writing the above. Rather than defining a function and naming it to be called later,
 * we can write an anonymous function directly in the addEventListener call here. This can be useful if, for example,
 * we never need to use this function anywhere else.
 */
// button.addEventListener("click", function () {
//   alert("You clicked me!");
// });

/**
 * Here's another way of defining an anonymous function - this time, using arrow function syntax. This is a shorthand for the
 * above on lines 33 - 35. This is probably the most common of the three variations shown in this example, as they are
 * the quickest to write once you get used to them.
 *
 * See: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions>
 */
// button.addEventListener("click", () => alert("You clicked me!"));









// 当脚本首次运行时，向用户显示这个警报框（弹窗）。
alert("欢迎来到这个网页！");

/**
 * 在 JS 代码中获取对页面上按钮（button）的引用。
 *
 * 本质上，document.querySelector() 函数会寻找给定的 CSS 选择器（在这里
 * 是一个元素选择器 —— "button"），并返回页面上第一个匹配该选择器的 HTML 元素。
 */
const button = document.querySelector("button");

// 这是一个函数，我们可以在稍后调用它来运行其中的代码。
function handleButtonClick() {
  alert("你点击了我！");
}

/**
 * 挂载按钮，以便在点击它时运行上面的 handleButtonClick() 函数。
 *
 * 请注意，我们没有写 () —— 我们只写了 handleButtonClick，而不是 handleButtonClick()。
 * 这是因为在这里，我们只是“指定”稍后要调用的函数名称，而不是立即执行它。
 *
 * 你可以尝试在下方的 handleButtonClick 后面加上 ()，看看会发生什么（提示：弹窗会立即弹出）。
 */
button.addEventListener("click", handleButtonClick);

/**
 * 这是编写上述内容的另一种方式。
 * 我们不需要先定义并命名一个函数，而是直接在 addEventListener 调用中编写一个“匿名函数”。
 * 如果这个函数不需要在其他地方使用，这种方法会非常方便。
 */
button.addEventListener("click", function () {
  alert("你点击了我！");
 });

/**
 * 这是定义匿名函数的又一种方式 —— 这一次使用的是“箭头函数”语法。
 * 这是第 33 - 35 行代码的简写形式。
 * 这可能是本例所示的三种变体中最常见的一种，因为一旦习惯了，它们的编写速度最快。
 *
 * 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 */
 button.addEventListener("click", () => alert("你点击了我！"));