function checkAge() {
  const ageInput = document.querySelector("#ageInput");
  const resultParagraph = document.querySelector("#result");

  const age = parseInt(ageInput.value);

  // The following if-else block will run the code inside the first matching condition.

  if (age < 1) {
    // If age is less than 1, this code will run.
    resultParagraph.textContent = "Invalid age. Please enter a valid age.";
  } else if (age < 18) {
    // If age is between 1 and 17 inclusive, this code will run.
    resultParagraph.textContent = "You are a minor.";
  } else if (age < 120) {
    // If age is between 18 and 119 inclusive, this code will run.
    resultParagraph.textContent = "You are an adult.";
  } else {
    // If age is 120 or higher, this code will run.
    resultParagraph.textContent = "Wow, you're really old!";
  }
}

const checkButton = document.querySelector("#checkButton");
checkButton.addEventListener("click", checkAge);




function checkAge() {
  const ageInput = document.querySelector("#ageInput");
  const resultParagraph = document.querySelector("#result");

  // 将输入的值转换为整数 (Integer)
  const age = parseInt(ageInput.value);

  /**
   * 下面的 if-else 代码块会按顺序执行，
   * 并且只运行第一个匹配成功的条件分支代码。
   */

  if (age < 1) {
    // 如果年龄小于 1，执行这段代码
    resultParagraph.textContent = "无效年龄。请输入一个有效的年龄。";
  } else if (age < 18) {
    // 如果年龄在 1 到 17 之间（包含 1 和 17），执行这段代码
    resultParagraph.textContent = "你未成年。";
  } else if (age < 120) {
    // 如果年龄在 18 到 119 之间（包含 18 和 119），执行这段代码
    resultParagraph.textContent = "你已经成年了。";
  } else {
    // 如果年龄是 120 或更高，执行这段代码
    resultParagraph.textContent = "哇，你真的很长寿！";
  }
}

// 选中按钮并添加点击事件监听器
const checkButton = document.querySelector("#checkButton");
checkButton.addEventListener("click", checkAge);