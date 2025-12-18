// Import the store creation functions from svelte/store to be able to create stores.
import { derived, writable } from "svelte/store";

/**
 * Create a store called "counterStore" with the initial value of 0.
 *
 * Export it so we can import it into other places in our code.
 */
export const counterStore = writable(0);

/**
 * Create a store called "powerStore" with the initial value of 2.
 *
 * Export it so we can import it into other places in our code.
 */
export const powerStore = writable(2);

/**
 * Create a derived store called "squareStore" which will automatically calculate
 * the square of the above store.
 *
 * The first argument to this function is either a single store or an array of stores from which
 * to derive the final value. The second argument is a function which returns the derived value
 * from the input stores.
 */
export const squareStore = derived(counterStore, ($counterStore) => Math.pow($counterStore, 2));
squareStore.subscribe((value) => console.log(value));

/**
 * And here's one more derived store, this one depends on two source stores, both counterStore and powerStore.
 * Its derived value will be the value of counterStore, raised to the power of the value of powerStore.
 */
export const mathyStore = derived([counterStore, powerStore], ([$counterStore, $powerStore]) =>
  Math.pow($counterStore, $powerStore)
);







// 从 svelte/store 导入 store 创建函数。
import { derived, writable } from "svelte/store";

/**
 * 创建一个名为 "counterStore" 的 store，初始值为 0。
 * * 使用 writable 创建的 store 是“可写的”，意味着你可以在任何地方修改它的值。
 * 导出它，以便我们在代码的其他地方引用。
 */
export const counterStore = writable(0);

/**
 * 创建一个名为 "powerStore" 的 store，初始值为 2。
 * 这个 store 将作为幂运算的指数。
 */
export const powerStore = writable(2);

/**
 * 创建一个名为 "squareStore" 的“衍生 Store”。
 * 它会自动根据 counterStore 的值计算平方。
 * * derived 函数的第一个参数是源 store（一个或一组）；
 * 第二个参数是一个函数，负责根据输入值返回计算后的新值。
 */
export const squareStore = derived(counterStore, ($counterStore) => Math.pow($counterStore, 2));

// 订阅 squareStore 的变化，每当值改变时在控制台打印出来。
squareStore.subscribe((value) => console.log("当前平方值为:", value));

/**
 * 这是另一个衍生 Store，它同时依赖于两个源：counterStore 和 powerStore。
 * 它的值是 counterStore 的值作为底数，powerStore 的值作为指数。
 * * 当这两个源中的任何一个发生变化时，mathyStore 都会自动重新计算。
 */
export const mathyStore = derived(
  [counterStore, powerStore], 
  ([$counterStore, $powerStore]) => Math.pow($counterStore, $powerStore)
);