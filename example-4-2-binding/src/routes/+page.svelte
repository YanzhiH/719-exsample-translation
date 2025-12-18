<script>
  import SimpleCalculator from "$lib/components/SimpleCalculator.svelte";
  import NumberPad from "$lib/components/NumberPad.svelte";
  import BindableNumberPad from "$lib/components/BindableNumberPad.svelte";
  import SignupForm from "$lib/components/SignupForm.svelte";

  // This value will be set by the NumberPad below.
  let numberClicked = null;
  // This value can be changed with the BindableNumberPad or its associated <input> below.
  let enteredNumber = 0;
</script>

<h1>More advanced Svelte concepts</h1>

<h2>Component demos go here</h2>

<h3>Number pad (shows off custom events)</h3>
<div class="numpad-container">
  <!-- We can handle our NumberPad's custom numberClicked event using the on: directive,
		just as we would handle regular events like button clicks. The number which was clicked
		is available in the event's "detail" property. -->
  <NumberPad on:numberClicked={(e) => (numberClicked = e.detail)} />

  <p>The last number clicked was: {numberClicked}</p>
</div>

<h3>Simple calculator (shows off binding)</h3>
<SimpleCalculator />

<h3>Signup form (shows off binding to more kinds of form elements)</h3>
<SignupForm />

<h3>Bindable number pad (shows off custom bindings)</h3>
<div class="numpad-container">
  <!-- Both clicking the numpad buttons and typing in the textbox will change the enteredNumber value. -->
  <BindableNumberPad bind:value={enteredNumber} />
  <input type="number" bind:value={enteredNumber} />
</div>

<style>
  .numpad-container {
    display: flex;
    gap: 10px;
    align-items: center;
  }
</style>




<script>
  import SimpleCalculator from "$lib/components/SimpleCalculator.svelte";
  import NumberPad from "$lib/components/NumberPad.svelte";
  import BindableNumberPad from "$lib/components/BindableNumberPad.svelte";
  import SignupForm from "$lib/components/SignupForm.svelte";

  // 这个变量的值将由下方的 NumberPad 组件设置。
  let numberClicked = null;
  
  // 这个变量可以由 BindableNumberPad 组件或下方的 <input> 输入框共同修改。
  let enteredNumber = 0;
</script>

<h1>Svelte 进阶概念</h1>

<h2>组件演示区域</h2>

<h3>数字键盘（展示自定义事件）</h3>
<div class="numpad-container">
  <NumberPad on:numberClicked={(e) => (numberClicked = e.detail)} />

  <p>最后点击的数字是：{numberClicked}</p>
</div>

<h3>简单计算器（展示数据绑定）</h3>
<SimpleCalculator />

<h3>注册表单（展示更多类型的表单元素绑定）</h3>
<SignupForm />

<h3>可绑定的数字键盘（展示自定义双向绑定）</h3>
<div class="numpad-container">
  <Bind