import React from "react";
import Container from "../../components/Container";
import ResourceCard from "./ResourceCard";

const ResourceList = ({ resources }) => {
  return (
    <section className=" m-auto w-full py-12">
      <Container>
        <div className="m-auto gap-8 grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 w-full ">
          {resources?.map((resource, idx) => (
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
