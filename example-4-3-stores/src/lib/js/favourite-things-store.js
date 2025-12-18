import { v4 as uuid } from "uuid";
import { writable } from "svelte/store";

const INITIAL_THINGS = [
  { id: uuid(), description: "Finding matching socks on the first try" },
  { id: uuid(), description: "Accidentally adulting successfully" },
  { id: uuid(), description: "When the Wi-Fi connects instantly" },
  { id: uuid(), description: "Eating pizza without dropping any toppings" },
  { id: uuid(), description: "Remembering why you walked into a room" },
  { id: uuid(), description: "Winning an argument with yourself in the shower" }
];

export const favouriteThingsStore = writable(INITIAL_THINGS);

/**
 * Adds a new favourite thing.
 *
 * This (and all other functions in this file) use the Svelte store's update() function. This takes a callback
 * which has one argument, which will be the current value of the store. In this case, that will be the current
 * array of all favourite things.
 *
 * The callback function should return the new value of the store - which in this case, should be a new array
 * with one extra thing (newThing). As you can see below, we use JavaScript's spread operator to easily
 * accomplish this.
 *
 * @param {string} description the description of the new favourite thing to add.
 */
export function addThing(description) {
  const newThing = { id: uuid(), description };
  favouriteThingsStore.update((things) => [...things, newThing]);
}

/**
 * This time we are using update() in combination with JavaScript array's filter() function to filter
 * out the thing with the matching id. This will result in the creation of a new array containing everything
 * except the thing with the given id.
 *
 * @param {string} id the id of the thing to remove
 */
export function removeThing(id) {
  favouriteThingsStore.update((things) => things.filter((t) => t.id !== id));
}

/**
 * This time we are using update() in combination with JavaScript array's map() function to return a new array
 * where every item is the same, except the thing we want to modify. For that one thing, we create and return a
 * new object with the same id and modified description.
 *
 * This code can be tricky to understand, but this is a common pattern. Refer back to this example often when
 * required.
 *
 * @param {string} id the id of the thing to modify
 * @param {string} newDescription the new description
 */
export function editThing(id, newDescription) {
  // Update the favourite things store. Given the current array of things...
  favouriteThingsStore.update((things) =>
    // Using map() return a new array...
    things.map((t) => {
      // Where, if the id of the thing at that index matches the supplied id, create a new object...
      if (t.id === id) return { id, description: newDescription };

      // Otherwise just use the existing thing.
      return t;
    })
  );
}




import { v4 as uuid } from "uuid";
import { writable } from "svelte/store";

// 初始数据：一些有趣的“小确幸”
const INITIAL_THINGS = [
  { id: uuid(), description: "第一次尝试就找到了配对的袜子" },
  { id: uuid(), description: "意外地成功完成了“成年人”该做的事" },
  { id: uuid(), description: "Wi-Fi 瞬间连接成功的瞬间" },
  { id: uuid(), description: "吃披萨时没有掉任何配料" },
  { id: uuid(), description: "走进房间后竟然还记得自己要干什么" },
  { id: uuid(), description: "在洗澡时吵赢了假想中的自己" }
];

// 导出可写的 Store
export const favouriteThingsStore = writable(INITIAL_THINGS);

/**
 * 添加一个新的喜爱之物。
 * 这里使用了 Svelte Store 的 update() 函数。它接收一个回调函数，
 * 该回调的参数是 Store 的当前值（即当前的所有喜爱之物数组）。
 *
 * 回调函数应返回 Store 的新值。在这里，我们使用 JavaScript 的“展开运算符” (...)
 * 来轻松创建一个包含新项目的新数组。
 *
 * @param {string} description 新项目的描述。
 */
export function addThing(description) {
  const newThing = { id: uuid(), description };
  // 核心逻辑：[...旧数组, 新项目]
  favouriteThingsStore.update((things) => [...things, newThing]);
}

/**
 * 删除项目。
 * 这一次我们结合使用 update() 和数组的 filter() 函数。
 * 这将创建一个新数组，其中包含除指定 ID 以外的所有项目。
 *
 * @param {string} id 要删除项目的 ID
 */
export function removeThing(id) {
  favouriteThingsStore.update((things) => things.filter((t) => t.id !== id));
}

/**
 * 修改项目。
 * 我们结合使用 update() 和数组的 map() 函数。
 * map 会遍历数组并返回一个新数组。如果 ID 匹配，我们就返回一个修改后的新对象；
 * 否则，直接返回原对象。
 *
 * 这种模式在 React/Svelte 开发中非常常见，建议多复习几次。
 *
 * @param {string} id 要修改项目的 ID
 * @param {string} newDescription 新的描述内容
 */
export function editThing(id, newDescription) {
  favouriteThingsStore.update((things) =>
    things.map((t) => {
      // 如果 ID 匹配，创建一个新的对象并替换它
      if (t.id === id) return { id, description: newDescription };

      // 否则，保持原样
      return t;
    })
  );
}