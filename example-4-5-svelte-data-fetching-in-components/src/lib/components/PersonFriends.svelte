<script>
  export let id = null;
  let friends = [];

  //   Re-run the fetchFriends() function whenever id changes.
  $: fetchFriends(id);

  /**
   * Asynchronously fetch the friends of the person with the given id from trex-sandwich.
   *
   * @param id the id to fetch. If null, do not try to fetch.
   */
  async function fetchFriends(id) {
    if (id == null) {
      friends = [];
      return;
    }

    // Fetch the friends
    const response = await fetch(`https://people-db.trex-sandwich.com/people/${id}/friends`);

    // Get friends as JS object array
    const data = await response.json();

    //Set the firends variable above, which will cause the UI to update.
    friends = data;
  }
</script>

<ul>
  {#each friends as friend (friend.id)}
    <li>{friend.firstName} {friend.lastName}</li>
  {/each}
</ul>








<script>
  // 接收从父组件传来的 id
  export let id = null;
  let friends = [];

  /**
   * 响应式声明：每当 id 的值发生改变时，都会重新运行 fetchFriends() 函数。
   * 这保证了当你在父组件点击不同的人时，这里的朋友列表会自动刷新。
   */
  $: fetchFriends(id);

  /**
   * 异步获取指定 id 人员的朋友列表。
   * * @param id 要查询的 ID。如果为 null，则不进行获取。
   */
  async function fetchFriends(id) {
    // 基础防御：如果没有 ID，清空列表并返回
    if (id == null) {
      friends = [];
      return;
    }

    // 发起网络请求，使用模板字符串动态构建 URL
    const response = await fetch(`https://people-db.trex-sandwich.com/people/${id}/friends`);

    // 将响应解析为 JS 对象数组
    const data = await response.json();

    // 更新变量，这将触发上方的 {#each} 块自动重新渲染
    friends = data;
  }
</script>

<ul>
  {#each friends as friend (friend.id)}
    <li>{friend.firstName} {friend.lastName}</li>
  {:else}
    <li>暂无朋友信息</li>
  {/each}
</ul>