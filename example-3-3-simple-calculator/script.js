/**
 * Gets the numbers entered by the user in the #num1 and #num2 inputs,
 * calculates their sum, and displays it in the #result paragraph.
 */
function calculateSum() {
  // Get input elements
  const num1Input = document.querySelector("#num1");
  const num2Input = document.querySelector("#num2");

  // Get the values of the inputs. All input values are strings, so we need to parse them as numbers.
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);

  // Calculate the sum
  const sum = num1 + num2;

  // Get the result paragraph and display the sum
  const resultParagraph = document.querySelector("#result");
  resultParagraph.textContent = `Sum: ${sum}`;
}

/**
 * Add event listener to the button which will call the calculateSum
 * function above when it is clicked.
 */
const calculateButton = document.querySelector("#calculateButton");
calculateButton.addEventListener("click", calculateSum);




/**
 * 获取用户在 #num1 和 #num2 输入框中输入的数字，
 * 计算它们的总和，并将结果显示在 #result 段落中。
 */
function calculateSum() {
  // 获取输入框元素
  const num1Input = document.querySelector("#num1");
  const num2Input = document.querySelector("#num2");

  // 获取输入框的值。
  // 注意：所有输入框的值默认都是“字符串”类型，所以我们需要使用 parseFloat 将其解析为“数字”。
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);

  // 计算总和
  const sum = num1 + num2;

  // 获取显示结果的段落元素，并展示总和
  const resultParagraph = document.querySelector("#result");
  resultParagraph.textContent = `总和: ${sum}`;
}

/**
 * 为按钮添加事件监听器。
 * 当按钮被点击时，它会调用上面定义的 calculateSum 函数。
 */
const calculateButton = document.querySelector("#calculateButton");
calculateButton.addEventListener("click", calculateSum);