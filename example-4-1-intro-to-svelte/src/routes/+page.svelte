<script>
  /**
   * Import some components here. $lib is a special directive that always points to our "lib" folder,
   * no matter where we are in the folder hierarchy.
   *
   * Once imported, we can use our components below, similarly to regular HTML elements.
   */
  import AboutMe from "$lib/components/AboutMe.svelte";
  import Counter from "$lib/components/Counter.svelte";
  import CounterSquared from "$lib/components/CounterSquared.svelte";
  import ShoppingList from "$lib/components/ShoppingList.svelte";
  import StaffList from "$lib/components/StaffList.svelte";

  /**
   * This function will be called when the button below is clicked.
   * @param event contains info about the button click.
   */
  function onButtonClick(event) {
    alert("Thanks for clicking me!");
  }

  // Is used in the StaffList component below.
  const gradSchoolStaff = [
    { id: 1, firstName: "Yu-Cheng", lastName: "Tu" },
    { id: 2, firstName: "Andrew", lastName: "Meads" },
    { id: 3, firstName: "Tyne", lastName: "Crow" },
    { id: 4, firstName: "David", lastName: "Huang" }
  ];
</script>

<!-- The "HTML" section of the doc starts here. We can use a mix of
	regular HTML, Svelte components, and {} syntax. -->
<h1>Hello, world!</h1>

<p>This is a new paragraph!</p>

<!-- Shows how we can use the AboutMe component imported above,
	supplying the values of the "name" and "interest" props. -->
<AboutMe name="Andrew" interest="Pokemon" />

<h2>Buttons are cool! Let's click some buttons!</h2>
<div class="buttonPanel">
  <!-- This button has a "click" event handler defined, which will call the "onButtonClick"
	function defined above. -->
  <button on:click={onButtonClick}>Click me!</button>

  <!-- This button also has a "click" handler. We can use arrow functions if we like, rather than
	calling functions written above. This will log some info to the browser console. -->
  <button on:click={(e) => console.log(e)}>Click me too!</button>

  <!-- Here's another button - this time, as a Svelte component with some extra logic defined :) -->
  <Counter />

  <CounterSquared />
</div>

<!-- A shopping list with some stuff inside -->
<ShoppingList list={["Pokemon cards", "Dragonball Z Figurines", "Comic books"]} />

<!-- An empty shopping list -->
<ShoppingList list={[]} />

<!-- A staff list, which shows keyed #each block. -->
<StaffList allStaff={gradSchoolStaff} />

<!-- An "internal" style. CSS defined here will only apply to this component. -->
<style>
  .buttonPanel {
    display: flex;
    flex-direction: column;
    width: 300px;
    /* margin: 0 auto; */
    gap: 10px;
  }
</style>










<script>
  /**
   * 在此处导入组件。$lib 是一个特殊的路径别名，它始终指向项目的 "lib" 文件夹，
   * 无论当前文件处于文件夹层级的哪个位置，都能轻松找到它。
   *
   * 导入之后，我们就可以像使用普通 HTML 元素一样在下方使用这些组件。
   */
  import AboutMe from "$lib/components/AboutMe.svelte";
  import Counter from "$lib/components/Counter.svelte";
  import CounterSquared from "$lib/components/CounterSquared.svelte";
  import ShoppingList from "$lib/components/ShoppingList.svelte";
  import StaffList from "$lib/components/StaffList.svelte";

  /**
   * 当下方的按钮被点击时，将调用此函数。
   * @param event 包含了关于按钮点击的信息。
   */
  function onButtonClick(event) {
    alert("谢谢你点击我！");
  }

  // 这组数据将用于下方的 StaffList 组件。
  const gradSchoolStaff = [
    { id: 1, firstName: "Yu-Cheng", lastName: "Tu" },
    { id: 2, firstName: "Andrew", lastName: "Meads" },
    { id: 3, firstName: "Tyne", lastName: "Crow" },
    { id: 4, firstName: "David", lastName: "Huang" }
  ];
</script>

<h1>你好，世界！</h1>

<p>这是一个新段落！</p>

<AboutMe name="Andrew" interest="宝可梦" />

<h2>按钮很酷！让我们来点一下！</h2>
<div class="buttonPanel">
  <button on:click={onButtonClick}>点我！</button>

  <button on:click={(e) => console.log(e)}>也点我一下！</button>

  <Counter />

  <CounterSquared />
</div>

<ShoppingList list={["宝可梦卡牌", "龙珠 Z 手办", "漫画书"]} />

<ShoppingList list={[]} />

<StaffList allStaff={gradSchoolStaff} />

<style>
  .buttonPanel {
    display: flex;
    flex-direction: column;
    width: 300px;
    gap: 10px;
  }
</style>