import Image from "next/image";
import Link from "next/link";
import React from "react";

const GoalItem = ({ title, description }) => {
  return (
    <div className="border flex border-[#d9d9d980] rounded-md gap-8 h-[fit-content] px-4 py-4">
      <div className="flex flex-col gap-3">
        <h4 className="font-semibold text-lg">{title}</h4>
        <p className="text-sm md:text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default GoalItem;
