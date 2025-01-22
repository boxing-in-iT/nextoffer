"use client";
import { FC } from "react";
import EditIcon from "@/assets/icons/EditIcon.svg";
import cn from "classnames";
import { useRouter } from "next/navigation";

interface Props {
  id: string;
}

export const ActionButtons: FC<Props> = ({ id }) => {
  const router = useRouter();

  const goToEdit = () => {
    router.push(`/interviews/edit/${id}`);
  };

  return (
    <div className="flex gap-5 w-full">
      <button onClick={goToEdit}>
        <EditIcon />
      </button>
      <button className="  flex justify-center items-center rounded-lg w-32 h-8 bg-black text-white font-bold text-md">
        Launch
      </button>
    </div>
  );
};
