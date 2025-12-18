<script>
  let username = "";
  let password = "";
  let favouritePokemon = "charmander";
  let bio = "";
  let likesPie = true;
  let favouriteCarBrands = "mg,bmw";

  function handleSubmit(e) {
    alert("Form values logged to console.");
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
    console.log(`Favourite Pokemon: ${favouritePokemon}`);
    console.log(`Bio: ${bio}`);
    console.log(`Likes pie?: ${likesPie}`);
    console.log(`Favourite car brands: ${favouriteCarBrands}`);
  }
</script>

<div>
  <!-- Using the |preventDefault option will have the same effect as calling
        e.preventDefault() at the top of our submit function. This is a cleaner
        way of doing this in Svelte. -->
  <form on:submit|preventDefault={handleSubmit}>
    <label for="username">Username:</label>
    <input type="text" name="username" bind:value={username} />

    <label for="password">Password:</label>
    <input type="password" name="password" bind:value={password} />

    <label for="favouritePokemon">Favourite Pokemon:</label>
    <!-- We can bind to a select box's value just as easily as a textbox. -->
    <select bind:value={favouritePokemon} name="favouritePokemon">
      <option value="charmander">Charmander</option>
      <option value="squirtle">Squirtle</option>
      <option value="bulbasaur">Bulbasaur</option>
    </select>

    <!-- Text areas can have their "value" bound too. -->
    <label class="two-col" for="bio">My bio:</label>
    <textarea
      class="two-col"
      aria-multiline="true"
      rows="5"
      cols="50"
      bind:value={bio}
      name="bio"
    />

    <label class="two-col">
      <!-- We can bind to the "checked" property of a checkbox (it's a boolean). -->
      <input type="checkbox" bind:checked={likesPie} /> I {likesPie ? "like" : "don't like"} pie
    </label>

    <label class="two-col" for="cars">Select your favourite car brands</label>
    <!-- We can bind to the value of a multi-select box too. The resulting value will be a
				comma-separated string, e.g. "bmw,tesla" if "BMW" and "Tesla" are both selected. -->
    <select class="two-col" name="cars" bind:value={favouriteCarBrands} multiple>
      <option value="bmw">BMW</option>
      <option value="tesla">Tesla</option>
      <option value="audi">Audi</option>
      <option value="mg">MG</option>
    </select>

    <button class="two-col" type="submit">Submit</button>
  </form>
</div>

<style>
  div {
    display: flex;
  }

  form {
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 5px;
  }

  .two-col {
    grid-column: 1 / 3;
  }

  label:not(.two-col) {
    justify-self: right;
  }
</style>





<script>
  // 定义表单的各种初始状态
  let username = "";
  let password = "";
  let favouritePokemon = "charmander"; // 设置下拉菜单默认值
  let bio = "";
  let likesPie = true; // 复选框的初始状态（布尔值）
  let favouriteCarBrands = "mg,bmw"; // 多选框的初始值，以逗号分隔

  /**
   * 当用户点击提交按钮且表单通过校验时调用此函数。
   * @param e 事件对象
   */
  function handleSubmit(e) {
    alert("表单值已打印到控制台。");
    console.log(`用户名: ${username}`);
    console.log(`密码: ${password}`);
    console.log(`喜欢的宝可梦: ${favouritePokemon}`);
    console.log(`个人简介: ${bio}`);
    console.log(`喜欢派吗？: ${likesPie}`);
    console.log(`喜欢的汽车品牌: ${favouriteCarBrands}`);
  }
</script>

<div>
  <form on:submit|preventDefault={handleSubmit}>
    <label for="username">用户名:</label>
    <input type="text" name="username" bind:value={username} />

    <label for="password">密码:</label>
    <input type="password" name="password" bind:value={password} />

    <label for="favouritePokemon">喜欢的宝可梦:</label>
    <select bind:value={favouritePokemon} name="favouritePokemon">
      <option value="charmander">小火龙 (Charmander)</option>
      <option value="squirtle">杰尼龟 (Squirtle)</option>
      <option value="bulbasaur">妙蛙种子 (Bulbasaur)</option>
    </select>

    <label class="two-col" for="bio">个人简介:</label>
    <textarea
      class="two-col"
      aria-multiline="true"
      rows="5"
      cols="50"
      bind:value={bio}
      name="bio"
    />

    <label class="two-col">
      <input type="checkbox" bind:checked={likesPie} /> 
      我{likesPie ? "喜欢" : "不喜欢"}吃派
    </label>

    <label class="two-col" for="cars">选择你喜欢的汽车品牌</label>
    <select class="two-col" name="cars" bind:value={favouriteCarBrands} multiple>
      <option value="bmw">BMW</option>
      <option value="tesla">Tesla</option>
      <option value="audi">Audi</option>
      <option value="mg">MG</option>
    </select>

    <button class="two-col" type="submit">提交表单</button>
  </form>
</div>

<style>
  div {
    display: flex;
  }

  form {
    /* 使用 Grid 布局让标签和输入框整齐排列 */
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 5px;
  }

  .two-col {
    /* 让特定的元素跨越两列 */
    grid-column: 1 / 3;
  }

  /* 让非跨列的标签文字右对齐，显得更美观 */
  label:not(.two-col) {
    justify-self: right;
  }
</style>