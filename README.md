# CS719 Example Code 11

This repository contains example code which you can run and play around with. **Important:** It is likely that this repo will be updated throughout the semester. Please `git pull` regularly - _especially_ if instructed to do so by your lectuerer!

## Index by topic

### Topic 1: HTML

1. [**html-basics**](./example-1-1-html-basics/): Shows off some basic HTML elements such as headings, paragraphs, and lists, and demonstrates the difference between block-level and inline elements.

2. [**html-tables**](./example-1-2-html-tables/): Shows the structure of an HTML table, including table sections (`tbody`, `thead`, `tfoot`), rows and cells.

3. [**html-forms**](./example-1-3-html-forms/): Shows off a plethora of HTML form elements which can be used to allow users to input data into the page. The data can be either submitted to a server, or processed with client-side JavaScript code (see Topic 3 below).

### Topic 2: CSS

1. [**css-selectors**](./example-2-1-css-selectors/): Shows off a variety of commonly-used CSS selectors. CSS selectors, as their name implies, lets you use rules to _select_ which elements will be styled by a particular set of styling rules.

2. [**css-box-model**](./example-2-2-css-box-model/): Shows several examples of margins, borders, and padding, which are very important aspects of CSS layouts, used by themselves and / or in conjunction with flex and grid (see below).

3. [**image-filters**](./example-2-3-image-filters/): Shows how images can be filtered to look differently within the browser itself, no image software required, for certain image transformations.

4. [**flexbox**](./example-2-4-flexbox/): Shows a layout created using Flexbox, which can be used to layout page elements in a row or column.

5. [**grid**](./example-2-5-grid/): Shows off CSS grid, which can be used to layout page elements in a two-dimensional grid.

6. [**grid-named-areas**](./example-2-6-grid-named-areas/): Shows off named areas, which are part of CSS grid which can be used to precisely designate which page elements go into which grid rows / columns. In addition, shows off _media queries_, which can be used in conjunction with named areas and other CSS techniques to enable responsive design. Finally, shows how grid and flexbox can be used together in the same page layout - with the main page layout being dictated by a grid, with individual sections being laid out according to flex.

### Topic 3: JavaScript

1. [**basic-javascript**](./example-3-1-basic-javascript/): Shows off some basic JavaScript code, focusing on how to import script files, and when various JavaScript code will be executed.
展示了一些基础 JavaScript 代码，重点介绍如何导入脚本文件，以及各种 JavaScript 代码的执行时机。


2. [**modifying-elements-with-js**](./example-3-2-modifying-elements-with-js/): Shows how we can use `document.querySelector()` to find HTML elements on a page, then modify various properties of those elements such as `innerHTML`, `style`, and `src`. Also contains an example of a JavaScript function which takes some input arguments and returns a value.
[使用 JS 修改元素]：展示如何使用 document.querySelector() 查找页面上的 HTML 元素，并修改这些元素的各种属性（如 innerHTML、style 和 src）。还包含一个接收输入参数并返回值的 JavaScript 函数示例。



3. [**simple-calculator**](./example-3-3-simple-calculator/): A simple HTML / JavaScript application that lets users enter two numbers in a pair of `<input>`s, then click a button to calculate and display the sum of those inputs.
[简易计算器]：一个简单的 HTML / JavaScript 应用程序，允许用户在两个 <input> 框中输入两个数字，然后点击按钮计算并显示这些输入值的总和。



4. [**conditionals**](./example-3-4-conditionals/): Shows off JavaScript `if`-`else` statements with an example application letting the user enter their age. A different message will be displayed to the user depending on the age they enter.
[条件语句]：通过一个让用户输入年龄的示例程序展示 JavaScript 的 if-else 语句。根据用户输入的年龄，将向其显示不同的信息。



5. [**creating-elements**](./example-3-5-creating-elements/): Shows how we can use `document.createElement()` to create any HTML element, then `appendChild()` to add it to our page. When the user clicks a button, a new `<li>` displaying a random number will be added to a `<ul>` which already exists on the page.
[创建元素]：展示如何使用 document.createElement() 创建任何 HTML 元素，然后使用 appendChild() 将其添加到页面中。当用户点击按钮时，一个新的显示随机数字的 <li> 将被添加到页面上已有的 <ul> 列表中。



6. [**loops**](./example-3-6-loops/): Contains examples of a couple of kinds of looping strategies in JavaScript. Uses a `for`-loop to create 100 new list items when the page first loads. Also uses `document.querySelectorAll()` to find all list items on a page, then uses the JavaScript array `forEach()` function to loop through and set each one to a random color.
[循环]：包含几种 JavaScript 循环策略的示例。使用 for 循环在页面首次加载时创建 100 个新的列表项。还使用 document.querySelectorAll() 查找页面上的所有列表项，然后使用 JavaScript 数组的 forEach() 函数进行遍历并为每一项设置随机颜色。



7. [**dynamic-click-handlers**](./example-3-7-dynamic-click-handlers/): Shows that we can add event handlers - such as for mouse clicks - to dynamically-generated HTML elements. This extends the previous example to allow users to individually change the color of each list item by clicking the individual item.
[动态点击处理程序]：展示了我们可以为动态生成的 HTML 元素添加事件处理程序（例如鼠标点击）。这扩展了之前的示例，允许用户通过点击单个列表项来分别更改其颜色。



8. [**js-objects**](./example-3-8-js-objects/): Shows a complex JavaScript object, representing a person. Shows how to access individual properties of that object - including _nested_ properties.
[JS 对象]：展示了一个代表“人”的复杂 JavaScript 对象。演示了如何访问该对象的单个属性——包括“嵌套”属性。



9. [**topic3-comprehensive**](./example-3-9-topic3-comprehensive/): Shows off many JavaScript fundamentals (and some HTML and CSS too), bundled into one simple website which displays personnel data. The data is created as an array of JavaScript objects, which is then iterated over and passed around to create various HTML table elements, displaying each person in its own table row. The functionality is broken down into several functions - showing how the use of functions, plus good code comments, can make each individual part of the code easier to understand.
[主题 3 综合实例]：展示了许多 JavaScript 基础知识（以及一些 HTML 和 CSS），并集成到一个显示人员数据的简单网站中。数据以 JavaScript 对象数组的形式创建，然后通过遍历和传递这些数据来创建各种 HTML 表格元素，在各自的表格行中显示每个人。功能被拆分为多个函数——展示了如何通过使用函数以及良好的代码注释，使代码的每个独立部分都更容易理解



### Topic 4: Svelte

1. [**intro-to-svelte**](./example-4-1-intro-to-svelte/): Contains basic Svelte examples, including components, props & exports, event handling, reactivity, styling, and logic blocks.
[Svelte 入门]：包含基础 Svelte 示例，包括组件、属性(props)与导出、事件处理、响应式、样式和逻辑块。



2. [**binding**](./example-4-2-binding/): Contains more advanced Svelte exmaples, including custom events and data binding.
[绑定]：包含更高级的 Svelte 示例，包括自定义事件和数据绑定。



3. [**stores**](./example-4-3-stores/): Contains examples showing how Svelte stores can be created and used. Stores are a great way to take certain application state "out of" the component hierarchy and share it amongst many different components, while maintaining reactivity. This example shows off both writable & derived stores, and the use of the `$` syntax to access and modify stores almost as if they were plain variables.
[状态库 (Stores)]：包含展示如何创建和使用 Svelte stores 的示例。Stores 是将某些应用程序状态从组件层级中“提取出来”并在多个不同组件之间共享，同时保持响应式的极佳方式。本示例展示了可写 (writable) 和衍生 (derived) stores，以及使用 $ 语法像访问普通变量一样访问和修改 stores。



4. [**multi-page-apps**](./example-4-4-multi-page-apps/): Contains examples showing how the SvelteKit filesystem-based router can be used to provide multi-page apps. Includes information on routes, file & directory structure, layouts and `<slot>`s, hyperlinks, route parameters, and more.
[多页面应用]：包含展示如何使用基于文件系统的 SvelteKit 路由来构建多页面应用的示例。包括关于路由、文件和目录结构、布局 (layouts) 和插槽 (<slot>)、超链接、路由参数等信息。



5. [**svelte-data-fetching-in-components**](./example-4-5-svelte-data-fetching-in-components/): Contains examples of how we can `fetch()` data from a server from within our Svelte components - both at component load time, or when our application state changes (using reactive statements).
. [组件内的 Svelte 数据获取]：包含如何在 Svelte 组件内部从服务器 fetch() 获取数据的示例——既可以在组件加载时获取，也可以在应用程序状态改变时获取（使用响应式语句）。



6. [**sveltekit-data-fetching**](./example-4-6-sveltekit-data-fetching/): Contains examples showing the _preferred_ method of data fetching using SvelteKit. We show how to write a `load()` function in `+layout.js` or `+page.js`, and how that data can then be accessed using a special `data` variable we declare in our `+layout.svelte` and `+page.svelte` components.
[SvelteKit 数据获取]：包含展示使用 SvelteKit 获取数据的“首选”方法的示例。我们展示了如何在 +layout.js 或 +page.js 中编写 load() 函数，以及如何通过在我们声明的 +layout.svelte 和 +page.svelte 组件中使用特殊的 data 变量来访问这些数据。



### Topic 5: Node.js, Express, and APIs

1. [**the-simplest-server**](./example-5-1-the-simplest-server/): Contains a project showing now [Node.js](https://nodejs.org/en) can be used to create a simple HTTP server, with no additional dependencies. In practice, using Node by itself for this purpose is very uncommon; we usually use an additional framework such as Express (see below) on top of this.

2. [**intro-to-express**](./example-5-2-intro-to-express/): Contains a basic Node.js / [Express](https://expressjs.com/) server with a couple of _routes_ (around getting people info from a "database") and _middleware_ configurations. Contains many comments explaining what each piece does.

3. [**express-routers**](./example-5-3-express-routers/): Contains an Express server building on example 6 by organizing route handler code using Express routers. All Express servers provided (and made by you) throughout the course will follow this general layout.

4. [**rest-services**](./example-5-4-rest-services/): Contains an example RESTful Customer / Order API, written using node.js and Express.

5. [**rest-services-with-middleware**](./example-5-5-rest-services-with-middleware/): Expands on the previous exmaple by using custom middleware to extract common functionality (searching for a customer with a particular id and returning a 404 Not Found response if the customer doesn't exist) into its own reusable middleware function.

6. [**rest-services-with-validation**](./example-5-6-rest-services-with-validation/): Expands on the previous exmaple by adding validation of incoming client requests using the [Yup](https://www.npmjs.com/package/yup) package.

### Topic 6: Backend - Frontend connectivity

1. [**svelte-express**](./example-6-1-svelte-express/): Shows how we can use a SvelteKit frontend with a node.js / Express backend.

2. [**svelte-express-comprehensive**](./example-6-2-svelte-express-comprehensive/): A more advanced version of the previous example, this time also showing how we can send non-`GET` requests from the frontend.

3. [**cookies**](./example-6-3-cookies/): Shows how we can interact with HTTP cookies from both the frontend and backend.

### Topic 7: Databases

### Topic 8: The Full Stack

1. [**fullstack**](./example-8-1-fullstack/): Shows a full-stack application, including an SQLite database, node.js / Express backend, and SvelteKit frontend.

### Topic 9: Extra / supplementary material

1. [**file-uploads**](./example-9-1-file-uploads/): A bonus example showing how we can allow users to upload files using the `FormData` object on the frontend, and the `multer` package on the backend. **Hint:** Useful for your final project!!
