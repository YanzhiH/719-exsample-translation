<script>
  export let allStaff = [];
</script>

<h2>PGCertIT Staff</h2>

{#if allStaff && allStaff.length > 0}
  <ul>
    <!-- This is similar to the #each block in the ShoppingList, but uses a key (staff.id).
      Using a key like this helps Svelte know which HTML corresponds to which item in the list,
      which makes it more efficient when rendering - especially when the list changes.
      If the items in your array have any unique properties (like id in this case), it is
      usually best to use keyed #each blocks like this. -->
    {#each allStaff as staff (staff.id)}
      <li>{staff.firstName} {staff.lastName}</li>
    {/each}
  </ul>
{:else}
  <p>No staff to show!</p>
{/if}




<script>
  /**
   * 定义并导出属性 allStaff。
   * 默认值设为空数组 []，这样即使父组件忘记传值，程序也不会崩溃。
   */
  export let allStaff = [];
</script>

<h2>PGCertIT 教职员工</h2>

{#if allStaff && allStaff.length > 0}
  <ul>
    {#each allStaff as staff (staff.id)}
      <li>{staff.firstName} {staff.lastName}</li>
    {/each}
  </ul>
{:else}
  <p>暂无员工信息显示！</p>
{/if}