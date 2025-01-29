import { Card } from "@/components/Card/Card";
import { FC } from "react";
import { CardVariants } from "./types";
import { Title } from "@/components/Title";

const Credits: FC = () => {
  return (
    <div className="w-full px-5 flex flex-col  h-screen items-start justify-start mt-10">
      <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-4">
        <div className="flex w-full flex-col items-start justify-start shadow-lg border border-gray-200 rounded-lg px-6 py-4">
          <h3 className="text-gray-700 ">Email</h3>
          <h2 className="text-2xl font-bold">kozakvolodymyr21@gmail.com</h2>
        </div>
        <div className="flex w-full flex-col items-start justify-start shadow-lg border border-gray-200 rounded-lg px-6 py-4">
          <h3 className="text-gray-700 ">Remaining Credits</h3>
          <h2 className="text-2xl font-bold">10 minutes</h2>
        </div>
      </div>
      <hr className="my-10 w-full h-[1px] bg-gray-400" />
      <Title title="Buy Credits" subtitle="" />
      <div className="w-full mt-12 flex justify-center">
        <div className="grid grid-cols-1 gap-16 xl:grid-cols-3 ">
          <Card
            variant={CardVariants.REGULAR}
            time="1 hour"
            description="Starter Pack: 1 interview with AI Assistant"
            credit="25 credits"
            price="$19.90"
          />
          <Card
            variant={CardVariants.POPULAR}
            time="5 hours"
            description="Pro Pack: Get Your Dream Offer"
            credit="25 credits"
            price="$59.90"
          />
          <Card
            variant={CardVariants.REGULAR}
            time="10 hour"
            description="Ultimate Pack: Practice Makes Perfect"
            credit="25 credits"
            price="$99.90"
          />
        </div>
      </div>
    </div>
  );
};

export default Credits;
