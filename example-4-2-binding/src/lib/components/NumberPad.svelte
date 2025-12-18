<!-- This component shows how we can create and dispatch custom events. In this case, we have defined a custom
    "numberClicked" event, which will be dispatched to listeners whenever the user clicks one of the numpad
    buttons. The event will contain information about which number was clicked. -->

<script>
  // We need to access Svelte's createEventDispatcher function to create our own custom events.
  import { createEventDispatcher } from "svelte";

  const NUMS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  /**
   * This gets us access to an event dispatcher (the "dispatch" variable), which we can call to
   * dispatch custom events.
   */
  const dispatch = createEventDispatcher();

  /**
   * This function dispatches a "numberClicked" event, supplying the number which was clicked.
   *
   * We could just as easily have defined this as an arrow function directly in the button's
   * on:click handler below.
   *
   * @param num the number which was clicked.
   */
  function dispatchNumberClickedEvent(num) {
    dispatch("numberClicked", num);
  }
</script>

<div>
  <!-- Loop through our NUMS array. Display a button for each number. -->
  {#each NUMS as num}
    <button on:click={() => dispatchNumberClickedEvent(num)}>{num}</button>
  {/each}
</div>

<style>
  div {
    display: grid;
    grid-template-columns: repeat(3, 50px);
    grid-auto-rows: 50px;
    gap: 5px;

    & :last-child {
      grid-column: 2 / 3;
    }
  }
</style>






<script>
  // 我们需要访问 Svelte 的 createEventDispatcher 函数来创建我们自己的自定义事件。
  import { createEventDispatcher } from "svelte";

  const NUMS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  /**
   * 这让我们能够访问事件派发器（即变量 "dispatch"）。
   * 我们可以调用它来派发自定义事件。
   */
  const dispatch = createEventDispatcher();

  /**
   * 此函数派发一个名为 "numberClicked" 的事件，并提供被点击的数字。
   *
   * 我们也可以轻松地在下方按钮的 on:click 处理器中直接将其定义为箭头函数。
   *
   * @param num 被点击的数字。
   */
  function dispatchNumberClickedEvent(num) {
    // 第一个参数是事件名称，第二个参数是你想传递的数据（payload）
    dispatch("numberClicked", num);
  }
</script>

<div>
  {#each NUMS as num}
    <button on:click={() => dispatchNumberClickedEvent(num)}>{num}</button>
  {/each}
</div>

<style>
  div {
    /* 使用 CSS Grid 创建一个 3 列的布局 */
    display: grid;
    grid-template-columns: repeat(3, 50px);
    grid-auto-rows: 50px;
    gap: 5px;

    /* 让最后一个按钮（数字 0）居中显示在第二列 */
    & :last-child {
      grid-column: 2 / 3;
    }
  }

  button {
    cursor: pointer;
    border: 1px solid #ccc;
    background: #f9f9f9;
    font-weight: bold;
  }

  button:hover {
    background: #e0e0e0;
  }
</style>