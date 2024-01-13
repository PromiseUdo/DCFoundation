"use client";
import React, { useContext } from "react";
import Container from "../../components/Container";
import { GoDash } from "react-icons/go";
import { useNavItem } from "../../hooks/NavContext";
import { clsx } from "clsx";

const ResourceNav = () => {
  const { selectedNavItem, updateNavItem } = useNavItem();
  console.log(selectedNavItem);
  return (
    <div className="w-full">
      <Container>
        <div className="w-full flex flex-col gap-4">
          <div className="w-full items-center gap-2 flex">
            <h2 className="text-2xl">Explore Our Resources</h2>
            <GoDash size={30} className="font-bold" />
          </div>
          <div className="w-full flex flex-col lg:flex-row items-center gap-2 lg:gap-8">
            <button
              onClick={() => updateNavItem("All")}
              className={clsx(
                "rounded-lg hover:bg-[#565C5B] py-2 px-4 hover:text-[#f7f7f7] font-semibold",
                selectedNavItem === "All" && "bg-[#565C5B] text-[#f7f7f7]"
              )}
            >
              All
            </button>
            <button
              onClick={() => updateNavItem("Career Restart")}
              className={clsx(
                "rounded-lg hover:bg-[#565C5B] py-2 px-4 hover:text-[#f7f7f7] font-semibold",
                selectedNavItem === "Career Restart" &&
                  "bg-[#565C5B] text-[#f7f7f7]"
              )}
            >
              Career Restart
            </button>
            <button
              onClick={() => updateNavItem("Trauma Counselling")}
              className={clsx(
                "rounded-lg hover:bg-[#565C5B] py-2 px-4 hover:text-[#f7f7f7] font-semibold",
                selectedNavItem === "Trauma Counselling" &&
                  "bg-[#565C5B] text-[#f7f7f7]"
              )}
            >
              Trauma Counselling
            </button>
            <button
              onClick={() => updateNavItem("Domestic Violence Support")}
              className={clsx(
                "rounded-lg hover:bg-[#565C5B] py-2 px-4 hover:text-[#f7f7f7] font-semibold",
                selectedNavItem === "Domestic Violence Support" &&
                  "bg-[#565C5B] text-[#f7f7f7]"
              )}
            >
              Domestic Violence Support
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ResourceNav;
