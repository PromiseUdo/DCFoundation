import React from "react";
import Container from "./Container";
import PostCard from "./PostCard";
import { TbExternalLink } from "react-icons/tb";
import Link from "next/link";
import SectionContainer from "./SectionContainer";

const posts = [
  {
    title: "FINANCIAL TIPS: make your worries go away",
    image: "/post1.jpg",
    snippet:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quo fugiat enim eum ad ab commodi?...",
    url: "/",
  },
  {
    title: "maybe it's time to get a new car",
    image: "/post2.jpg",
    snippet:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quo fugiat enim eum ad ab commodi?...",
    url: "/",
  },
  {
    title: "how we can help you get that home",
    image: "/post3.jpg",
    snippet:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.  Explicabo quo fugiat enim eum ad ab commodi?...",
    url: "/",
  },
];

const LatestPosts = () => {
  return (
    <SectionContainer
      title="Blog Posts"
      subtitle="Find the latest from our blog posts"
      description=""
      hasBg={true}
      color="#fafafa"
    >
      {/* <Container> */}
      <div className="w-full">
        {/* <div className="w-full">
            <h2 className="text-[#505ca4]  font-semibold text-4xl leading-relaxed">
              Latest from our Blog
            </h2>
            <div className="w-20 mt-1 h-[2px] bg-[#FFB600]"></div>
          </div> */}

        <div className="w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-8">
          {posts.map((post, idx) => (
            <PostCard
              key={idx}
              title={post.title}
              image={post.image}
              url={post.url}
              snippet={post.snippet}
            />
          ))}
        </div>
        <div className="mt-8 w-full flex items-center justify-center">
          <Link
            href="/blog"
            target="_blank"
            className=" flex items-center gap-2 shadow hover:shadow-md transition-all duration-100 border border-[#e5e5e5]  hover:bg-[#e5e5e5] py-2 px-4 rounded-md"
          >
            <TbExternalLink />

            <span>See our Blog</span>
          </Link>
        </div>
      </div>
      {/* </Container> */}
    </SectionContainer>
  );
};

export default LatestPosts;
