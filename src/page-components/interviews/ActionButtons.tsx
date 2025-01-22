import { FC } from "react";
import EditIcon from "@/assets/icons/EditIcon.svg";
import cn from "classnames";

export const ActionButtons: FC = () => {
  return (
    <div className="flex gap-4">
      <button>
        <EditIcon />
      </button>
      <button
        className={
          "w-14 h-8 flex justify-center items-center rounded-lg bg-black p-4  text-white font-bold text-md"
        }
      >
        Launch
      </button>
    </div>
  );
};
