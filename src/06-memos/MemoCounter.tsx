import { useCounter } from "@/hooks/useCounter";

export const MemoCounter = () => {
  const { counter, increment } = useCounter(40_000);

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-thin text-white">MemoCounter useMemo</h1>
      <hr />

      <h4 className="text-lg font-semibold text-white">Counter: {counter}</h4>

      <button
        type="button"
        className="bg-blue-500 text-white px-4 py-2 rounded-md w-fit"
        onClick={increment}
      >
        Increment
      </button>
    </div>
  );
};
