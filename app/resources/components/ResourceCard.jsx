import Image from "next/image";
import React from "react";

const ResourceCard = ({ image, title, alt, type, url }) => {
  return (
    <div className="rounded-lg border border-[#d7d7d7] shadow hover:shadow-lg w-96 h-[25rem] px-4 py-4 flex flex-col">
      <div
        className="rounded-lg w-full h-52"
        style={{
          background: `url('${image}')`,
          backgroundPostiton: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="flex flex-col grow w-full pt-4 ">
        <div className="flex-grow">
          <p className="text-light">{type}</p>
          <h2 className="text-2xl">{title}</h2>
        </div>
        <div className="border-t mt-auto pt-4">
          <a
            href={url}
            download
            className="bg-[#f7f7f7] hover:bg-[#d7d7d7] transition-all duration-100 rounded-lg border-2 border-[#202441] py-2 px-4"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
