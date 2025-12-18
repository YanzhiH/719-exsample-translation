<script>
  let a = 0;
  let b = 0;
  $: sum = a + b;
</script>

<!-- The two inputs below have their values bound to the variables a and b defined above.
    When the inputs are first created, their initial values will be set to whatever the values
    of a and b are at that time. Then, whenever the user changes the value by typing in the
    input, a and b will be updated automatically (which in turn will cause sum to be
    recalculated as it is a reactive statement). -->

<div>
  <input type="number" bind:value={a} /> + <input type="number" bind:value={b} /> = {sum}
</div>




<script>
  let a = 0;
  let b = 0;

  /**
   * 这是一个响应式声明。
   * 每当 a 或 b 的值发生变化时，Svelte 都会自动重新运行这行代码并更新 sum 的值。
   */
  $: sum = a + b;
</script>

<div>
  <input type="number" bind:value={a} /> 
  + 
  <input type="number" bind:value={b} /> 
  = {sum}
</div>