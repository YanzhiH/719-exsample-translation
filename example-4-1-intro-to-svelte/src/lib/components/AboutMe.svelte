<script>
  /**
   * Welcome to your first Svelte component!
   *
   * Code in this script block runs when the component first loads.
   */
  export let name = "Andrew";
  export let interest;
</script>

<!-- The "HTML" section starts here. We can use a mix of HTML,
	other Svelte components, and {} syntax. -->
<h2>About Me</h2>

<!-- The {} can contain any JavaScript expression, which will be evaluated and displayed.
	In this case, we're displaying the values of the "name" and "interest" variables declared above. -->
<p>My name is {name}, and I like {interest}!</p>

<!-- We can have a style block in a component. If we do, any CSS declared within will only be applied to
	this component. For example, the CSS below will make all paragraphs in this component have bold, green
	text (but will not affect any other paragraphs in our app in any way). -->
<style>
  p {
    color: green;
    font-weight: bold;
  }
</style>




<script>
  /**
   * 欢迎来到你的第一个 Svelte 组件！
   * * <script> 块中的代码会在组件首次加载时运行。
   */

  // "export let" 语法用于定义“属性 (Props)”。
  // 外部组件在使用这个组件时，可以传递这些值。
  export let name = "Andrew"; // 带有默认值的属性
  export let interest;        // 必须由外部传递的属性
</script>

<h2>关于我</h2>

<p>我的名字是 {name}，我喜欢 {interest}！</p>

<style>
  p {
    color: green;
    font-weight: bold;
  }
</style>