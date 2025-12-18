<script>
  /**
   * We will display this value as part of the button's text below.
   *
   * When this value changes, Svelte will automatically take care of re-rendering the button!
   * This is known as a Reactive value, or Reactive state.
   *
   * This is one of the main benefits of a framework like Svelte - it means we don't have to have
   * tonnes of messy code to update the UI in response to state changes - that part is handled for us :)
   */
  let count = 0;
</script>

<!-- The button displays the "count" value above, and increments it when clicked. -->
<button on:click={() => count++}>The count is: {count}</button>

<!-- Here's some random CSS. It will only apply to this component. -->
<style>
  button {
    border: 0;
    background-color: rgb(52, 154, 70);
    padding: 10px 0;
    translate: -1px -1px;
    box-shadow: 2px 2px 2px rgba(128, 128, 128, 0.5);
    color: white;
    font-weight: bold;
  }

  button:hover {
    background-color: rgb(78, 181, 67);
  }

  button:active {
    background-color: rgb(42, 139, 70);
    translate: 0;
    box-shadow: 1px 1px 2px rgba(128, 128, 128, 0.5);
  }
</style>




<script>
  /**
   * 我们将在下方按钮的文本中显示这个值。
   *
   * 当这个值改变时，Svelte 会自动负责重新渲染按钮！
   * 这被称为“响应式变量”或“响应式状态”。
   *
   * 这是像 Svelte 这样的框架的主要优势之一 —— 意味着我们不需要编写
   * 大量杂乱的代码来根据状态变化更新 UI —— 这一部分由框架代劳了 :)
   */
  let count = 0;
</script>

<button on:click={() => count++}>当前计数为: {count}</button>

<style>
  button {
    border: 0;
    background-color: rgb(52, 154, 70);
    padding: 10px 20px; /* 稍微增加了点左右内边距 */
    translate: -1px -1px;
    box-shadow: 2px 2px 2px rgba(128, 128, 128, 0.5);
    color: white;
    font-weight: bold;
    cursor: pointer;
  }

  button:hover {
    background-color: rgb(78, 181, 67);
  }

  button:active {
    background-color: rgb(42, 139, 70);
    translate: 0;
    box-shadow: 1px 1px 2px rgba(128, 128, 128, 0.5);
  }
</style>