import { FC } from "react";

interface resetProps {
  handelReset: () => void;
}

const Reset: FC<resetProps> = ({ handelReset }) => {
  return (
    <div>
      <button onClick={handelReset} className="btn btn-accent btn-sm ml-1 mt-2">
        Reset
      </button>
    </div>
  );
};

export default Reset;
