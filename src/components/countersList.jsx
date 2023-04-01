import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Ложка" },
    { id: 1, value: 0, name: "Вилка" },
    { id: 2, value: 0, name: "Нож" },
    { id: 3, value: 0, name: "Тарелка" },
    { id: 5, value: 0, name: "Кастрюля" },
  ];
  const [counters, setCounters] = useState(initialState);

  const handleIncrement = (id) => {
    const updateCounters = counters.map((counter) => {
      counter.value =
        counter.id === id ? (counter.value = counter.value + 1) : counter.value;
      return counter;
    });
    setCounters(updateCounters);
  };
  const handleDecrement = (id) => {
    const updateCounters = counters.map((counter) => ({
      ...counter,
      value: counter.id === id ? counter.value - 1 : counter.value,
    }));

    /*
    const updateCounters = counters.map((counter) => {
      counter.value =
        counter.id === id ? (counter.value = counter.value - 1) : counter.value;
      return counter;
    });
    */
    setCounters(updateCounters);
  };
  const handleDelete = (id) => {
    const newCounters = counters.filter((counter) => {
      return counter.id !== id;
    });
    setCounters(newCounters);
  };

  const handleReset = () => {
    setCounters(initialState);
  };

  return (
    <div>
      {counters.map((counter) => {
        return (
          <Counter
            key={counter.id}
            {...counter}
            onDelete={handleDelete}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
        );
      })}
      <button className="btn btn-primary btm-sn m-2" onClick={handleReset}>
        Сброс
      </button>
    </div>
  );
};

export default CountersList;
