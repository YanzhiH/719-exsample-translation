/**
 * This variable respresents a person. A person is a more complex data type than just a number,
 * string, or boolean.
 */
const person = {
  // Some properties of this person are simple values (strings, numbers, etc).
  firstName: "Walter",
  lastName: "White",
  isAlive: false,
  age: 52,

  // This person's address is itself another JS object, with its own properties.
  address: {
    streetAddress: "308 Negra Arroyo Lane",
    city: "Albuquerque",
    state: "NM",
    country: "USA",
  },

  // This person's phoneNumbers are an Array of JS objects, each with their own properties.
  phoneNumbers: [
    { type: "home", number: "212 555-1234" },
    { type: "office", number: "646 555-4567" },
    { type: "mobile", number: "123 456-7890" },
  ],

  // Walter is not married by the end of the series, so their spouse is null :(
  spouse: null,
};

displayPerson(person);

/**
 * Displays the given person in the #info div.
 *
 * @param person the person to display
 */
function displayPerson(person) {
  const div = document.querySelector("#info");

  displayName(person, div);
  displayAddress(person, div);
  displayPhoneNumbers(person, div);
}

/**
 * Adds a paragraph with the person's name to the given div.
 *
 * @param person the person whose name to display
 * @param div the div where the info should be displayed
 */
function displayName(person, div) {
  div.innerHTML += `<p>Name: ${person.firstName} ${person.lastName}</p>`;
}

/**
 * Adds a paragraph with the person's address to the given div.
 *
 * @param person the person whose address to display
 * @param div the div where the info should be displayed
 */
function displayAddress(person, div) {
  const add = person.address;
  div.innerHTML += `<p>Address: ${add.streetAddress}, ${add.city}, ${add.state}, ${add.country}</p>`;
}

/**
 * Adds a list (<ol>) with the person's phone numbers to the given div.
 *
 * @param person the person whose phone numbers to display
 * @param div the div where the info should be displayed
 */
function displayPhoneNumbers(person, div) {
  // Create a paragraph, with an <ol> inside, and append it to the div.
  const p = document.createElement("p");
  p.innerText = "Phone numbers:";
  const list = document.createElement("ol");
  div.appendChild(p);
  p.appendChild(list);

  // Add a <li> for each phone number. We are looping using forEach and an arrow function.
  const phNums = person.phoneNumbers;
  phNums.forEach((phNum) => {
    list.innerHTML += `<li>${phNum.number} (${phNum.type})</li>`;
  });
}

// Exercise: Try modifying this code to display some of Walt's other data!









/**
 * 这个变量代表一个人。
 * 在 JS 中，“对象”比简单的数字、字符串或布尔值更复杂，它可以包含多个信息片段。
 */
const person = {
  // 对象的某些属性是简单值（如字符串、数字等）。
  firstName: "Walter",
  lastName: "White",
  isAlive: false,
  age: 52,

  // 这里的 address（地址）本身就是另一个 JS 对象，拥有它自己的属性。
  address: {
    streetAddress: "308 Negra Arroyo Lane",
    city: "Albuquerque",
    state: "NM",
    country: "USA",
  },

  // phoneNumbers（电话号码）是一个“对象数组”，每个对象代表一个电话条目。
  phoneNumbers: [
    { type: "home", number: "212 555-1234" },
    { type: "office", number: "646 555-4567" },
    { type: "mobile", number: "123 456-7890" },
  ],

  // 在剧集结束时，沃特没有配偶，所以 spouse 的值是 null（空） :(
  spouse: null,
};

// 调用函数，开始在页面上展示这个人的信息
displayPerson(person);

/**
 * 将给定的 person 对象显示在 ID 为 #info 的 div 容器中。
 *
 * @param person 要显示的人员对象
 */
function displayPerson(person) {
  const div = document.querySelector("#info");

  displayName(person, div);
  displayAddress(person, div);
  displayPhoneNumbers(person, div);
}

/**
 * 向指定的 div 中添加一个包含人员姓名的段落。
 *
 * @param person 要显示姓名的人员
 * @param div 信息显示的容器
 */
function displayName(person, div) {
  div.innerHTML += `<p>姓名: ${person.firstName} ${person.lastName}</p>`;
}

/**
 * 向指定的 div 中添加一个包含地址信息的段落。
 */
function displayAddress(person, div) {
  const add = person.address; // 简化访问路径
  div.innerHTML += `<p>地址: ${add.streetAddress}, ${add.city}, ${add.state}, ${add.country}</p>`;
}

/**
 * 向指定的 div 中添加一个电话号码列表 (<ol>)。
 */
function displayPhoneNumbers(person, div) {
  // 创建一个段落标签，并在其中放入一个有序列表 (<ol>)，然后添加到 div 中。
  const p = document.createElement("p");
  p.innerText = "电话号码:";
  const list = document.createElement("ol");
  div.appendChild(p);
  p.appendChild(list);

  // 为每个电话号码添加一个 <li>。
  // 我们使用 forEach 配合箭头函数来进行循环。
  const phNums = person.phoneNumbers;
  phNums.forEach((phNum) => {
    list.innerHTML += `<li>${phNum.number} (${phNum.type})</li>`;
  });
}

// 练习：尝试修改代码，把沃特的“年龄”或“是否在世”的状态也显示出来吧！