"use client";

import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import ResourceCard from "./ResourceCard";
import { useNavItem } from "../../hooks/NavContext";
import Image from "next/image";

const ResourceList = ({ resources }) => {
  const { selectedNavItem } = useNavItem();
  const [filteredResources, setFilteredResources] = useState([]);

  console.log(selectedNavItem);

  useEffect(() => {
    if (selectedNavItem && selectedNavItem !== "All") {
      const filtered = resources.filter(
        (resource) => resource?.fields?.category === selectedNavItem
      );
      setFilteredResources(filtered);
    } else {
      setFilteredResources(resources);
    }
  }, [selectedNavItem, resources]);

  if (filteredResources?.length < 1) {
    return (
      <div className="w-full my-8">
        <div className="flex flex-col gap-6 items-center justify-center py-12">
          <Image src="/empty.png" alt="empty screen" height={100} width={100} />
          <p className="text-sm">No resources added yet for this category</p>
        </div>
      </div>
    );
  }

  return (
    <section className=" m-auto w-full py-12">
      <Container>
        <div className="m-auto gap-8 grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 w-full ">
          {filteredResources?.map((resource, idx) => (
            <ResourceCard
              key={idx}
              image={
                "https:" + resource?.fields?.resourceImage?.fields?.file?.url
              }
              alt={resource?.fields?.resourceMateral?.fields?.file?.fileName}
              type={resource?.fields?.category}
              title={resource?.fields?.title}
              url={
                "https:" + resource?.fields?.resourceMateral?.fields?.file?.url
              }
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ResourceList;
