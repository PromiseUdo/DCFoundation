import React from "react";
import Container from "../../components/Container";
import ResourceCard from "./ResourceCard";

const resources = [
  {
    image: "/resource1.png",
    alt: "resource1",
    type: "eBook",
    title: "A New Career Path in 2024",
    url: "/",
  },
  {
    image: "/resource2.png",
    alt: "resource1",
    type: "eBook",
    title: "Family Life and Support",
    url: "/",
  },
  {
    image: "/resource3.png",
    alt: "resource1",
    type: "eBook",
    title: "How to Get Help",
    url: "/",
  },
  {
    image: "/resource4.png",
    alt: "resource1",
    type: "eBook",
    title: "Starting a new Family",
    url: "/",
  },
  {
    image: "/resource5.png",
    alt: "resource1",
    type: "eBook",
    title: "Care Giving in Modern Life",
    url: "/",
  },
  {
    image: "/resource6.png",
    alt: "resource1",
    type: "eBook",
    title: "Healthy Diets",
    url: "/",
  },
];

const ResourceList = () => {
  return (
    <section className=" m-auto w-full py-12">
      <Container>
        <div className="m-auto gap-8 w-full 2xl:w-[80%] flex flex-wrap">
          {resources.map((resource, idx) => (
            <ResourceCard
              key={idx}
              image={resource.image}
              alt={resource.alt}
              type={resource.type}
              title={resource.title}
              url={resource.url}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ResourceList;
