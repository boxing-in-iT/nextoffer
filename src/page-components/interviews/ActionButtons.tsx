import { FC } from "react";
import EditIcon from "@/assets/icons/EditIcon.svg";
import cn from "classnames";

export const ActionButtons: FC = () => {
  return (
    <div className="flex gap-5 w-full">
      <button>
        <EditIcon />
      </button>
      <button className="  flex justify-center items-center rounded-lg w-32 h-8 bg-black text-white font-bold text-md">
        Launch
      </button>
    </div>
  );
};
