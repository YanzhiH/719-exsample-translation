<script>
  import { goto } from "$app/navigation";

  /**
   * goto() will programmatically navigate to the given URL ("/" in this case).
   *
   * The second argument to goto() is a configuration object. Here, we are supplying one property: replaceState.
   * If true, this navigation will not be added to the browser's history, so when we click the back button, it
   * will go back to where we were BEFORE we originally landed on this page. Otherwise, the navigation functions as normal,
   * and clicking the back button will go back to this page.
   */
  function goHome() {
    const replaceState = false;

    goto("/", { replaceState });
  }
</script>

<!-- We can include a svelte:head element on our pages. Within, we can include anything we would normally
	include in a standard <head> element in a normal HTML page. The most common use for this is to set
	the page's <title>. -->
<svelte:head>
  <title>About Me</title>
</svelte:head>

<h1>About me</h1>
<p>My name is Andrew, and I like Pokemon!</p>

<!-- When we click this button, we'll go home -->
<button on:click={goHome}>Go home!</button>




<script>
  // 从 SvelteKit 的导航库中导入 goto 函数
  import { goto } from "$app/navigation";

  /**
   * goto() 会通过代码逻辑跳转到指定的 URL（本例中为首页 "/"）。
   *
   * goto() 的第二个参数是一个配置对象。
   * 这里我们使用了一个属性：replaceState。
   * - 如果为 true：本次跳转不会在浏览器历史记录中增加新条目，而是替换当前条目。
   * 这意味着用户点击“后退”按钮时，会直接跳过本页，回到进入本页之前的那个页面。
   * - 如果为 false（默认值）：跳转行为正常，点击“后退”会回到当前这个“关于我”页面。
   */
  function goHome() {
    const replaceState = false;

    goto("/", { replaceState });
  }
</script>

<svelte:head>
  <title>关于我 - 我的个人主页</title>
</svelte:head>

<h1>关于我</h1>
<p>我的名字是 Andrew，我喜欢宝可梦！</p>

<button on:click={goHome}>回到首页</button>