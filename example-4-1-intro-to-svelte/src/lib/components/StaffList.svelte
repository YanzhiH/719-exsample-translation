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
  // 定义一个名为 allStaff 的属性，用于接收教职员工数组
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
  <p>没有可显示的员工信息！</p>
{/if}