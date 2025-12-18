<script>
  import NumberPad from "./NumberPad.svelte";

  // We can bind to values which we export.
  export let value = 0;

  // Updates the value by multiplying it by 10 then adding the clicked number.
  function handleNumberClicked(e) {
    value = 10 * value + e.detail;
  }
</script>

<NumberPad on:numberClicked={handleNumberClicked} />




<script>
  import NumberPad from "./NumberPad.svelte";

  /**
   * 我们可以对导出的变量（Props）使用绑定。
   * 这意味着父组件可以使用 bind:value 来与这个组件内部的 value 保持实时同步。
   */
  export let value = 0;

  /**
   * 更新数值的逻辑：
   * 将当前值乘以 10，然后加上点击的数字（例如：原来是 5，点击 2，变成 5*10 + 2 = 52）。
   * * @param e 事件对象，e.detail 包含了来自 NumberPad 的数字。
   */
  function handleNumberClicked(e) {
    value = 10 * value + e.detail;
  }
</script>

<NumberPad on:numberClicked={handleNumberClicked} />