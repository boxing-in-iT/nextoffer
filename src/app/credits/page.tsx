import { Card } from "@/components/Button/Card";
import { FC } from "react";
import { CardVariants } from "./types";

const Credits: FC = () => {
  return (
    <div className="flex flex-col  h-screen items-center justify-center">
      <div className="flex flex-col gap-5 items-center justify-center">
        <h2 className="text-3xl font-bold text-[">Remaining credits</h2>
        <div className="w-56 bg-[#C5C6C64F] h-32 rounded-lg flex flex-col items-center justify-center p-5">
          <p className="text-4xl font-bold">10</p>
          <p className="text-4xl font-bold">minutes</p>
        </div>
      </div>
      <hr className="my-10 h-3" />

      <div className="w-[95%] flex flex-col ">
        <h2 className="text-xl font-bold">Buy Credits</h2>
        <div className="flex w-full justify-center gap-10 mt-5">
          <Card
            variant={CardVariants.REGULAR}
            time="1 hour"
            description="25 credits"
            price="$25"
          />
          <Card
            variant={CardVariants.POPULAR}
            time="1 hour"
            description="25 credits"
            price="$25"
          />
          <Card
            variant={CardVariants.REGULAR}
            time="1 hour"
            description="25 credits"
            price="$25"
          />
        </div>
      </div>
    </div>
  );
};

export default Credits;
