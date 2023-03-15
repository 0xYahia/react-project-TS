import Counter from "./Counter";
import Reset from "./Reset";
import { FC } from "react";
export interface cartProps {
  handleIncrement: (id: number) => void;
  handleDecrement: (id: number) => void;
  handleDelete: (id: number) => void;
  handelReset: () => void;
  counters: any;
}

const Cart: FC<cartProps> = ({
  handleIncrement,
  handleDecrement,
  handleDelete,
  handelReset,
  counters,
}) => {
  return (
    <div className="flex justify-center">
      <div>
        {counters.length === 0 && <h1>Your cart is empty</h1>}
        {counters.map((counter: any) => (
          <Counter
            key={counter.id}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            handleDelete={handleDelete}
            counter={counter}
          />
        ))}
      </div>
      <div className="rest">
        {counters.length !== 0 && <Reset handelReset={handelReset} />}
      </div>
    </div>
  );
};

export default Cart;
