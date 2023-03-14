import Trash from "../assets/icons/Trash";
import { FC } from "react";
interface counterProps {
  handleIncrement: (id: number) => void;
  handleDecrement: (id: number) => void;
  handleDelete: (id: number) => void;
  counter: { id: number; name: string; count: number };
}

const Counter: FC<counterProps> = ({
  handleIncrement,
  counter,
  handleDecrement,
  handleDelete,
}) => {
  return (
    <div className="w-96 grid grid-cols-8 mt-5">
      <div className="col-span-3">
        <span className="font-bold flex justify-center">{counter.name}</span>
      </div>
      <div className="flex justify-center">
        <button
          className="btn btn-warning btn-sm w-12"
          onClick={() => counter.count > 0 && handleDecrement(counter.id)}
        >
          -
        </button>
      </div>
      <div className="flex justify-center">
        <span>{counter.count}</span>
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => handleIncrement(counter.id)}
          className="btn btn-primary btn-sm mb-2 w-12"
        >
          +
        </button>
      </div>
      <div className="flex justify-center">
        <button
          className=" from-red-600 "
          onClick={() => handleDelete(counter.id)}
        >
          <Trash />
        </button>
      </div>
    </div>
  );
};

export default Counter;
