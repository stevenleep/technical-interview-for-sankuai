import React from "react";

type ExcludeUndefined<T> = T extends undefined ? never : T;
export interface CounterOptions {
  /**
   * @type {Number} iterationValue
   * @description The value that needs to be iterated each time the increase and decrease buttons are clicked
   */
  iterationValue?: number;
  increase?: (
    prevCount: number,
    iterationValue: ExcludeUndefined<CounterOptions["iterationValue"]>
  ) => number;
}
export interface CounterReturnType {
  count: number;
  increase: () => void;
}

export function useCounter(
  initCount: number = 0,
  options?: CounterOptions
): CounterReturnType {
  const [count, updateCount] = React.useState(initCount ?? 0);

  const increaseHandler = options?.increase
    ? options.increase
    : React.useCallback(
        (prevCount: number, iterationValue: number) =>
          prevCount + iterationValue,
        []
      );

  const increase = React.useCallback(() => {
    updateCount((prev) => increaseHandler(prev, options?.iterationValue ?? 1));
  }, [options?.iterationValue]);

  return { count, increase };
}
