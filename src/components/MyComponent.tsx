import { useCounter } from "../hooks";

export default function MyComponent() {
  // basic
  const { count, increase } = useCounter(0);

  // double
  const { count: doubleCount, increase: doubleIncrease } = useCounter(0, {
    iterationValue: 2,
  });

  // coustom
  const { count: customCount, increase: coustomIncrease } = useCounter(0, {
    /**
     * 用途：
     * 1. 可以结合外部逻辑实现计数。
     * 2. 可以结合Promise实现异步统计。
     */
    increase: (prevCount: number, iterationValue: number) =>
      prevCount + iterationValue,
  });

  return (
    <>
      <h3>basic</h3>
      <hr />
      <span>{count}</span>
      <button onClick={increase}>+1</button>

      <h3>double</h3>
      <hr />
      <span>{doubleCount}</span>
      <button onClick={doubleIncrease}>double</button>

      <h3>coustom</h3>
      <hr />
      <span>{customCount}</span>
      <button onClick={coustomIncrease}>customCount</button>
    </>
  );
}
