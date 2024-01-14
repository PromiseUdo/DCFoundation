import React from "react";
import Container from "./Container";
import PostCard from "./PostCard";
import { TbExternalLink } from "react-icons/tb";
import Link from "next/link";
import SectionContainer from "./SectionContainer";

const LatestPosts = ({ blogPosts }) => {
  return (
    <SectionContainer
      title="Blog Posts"
      subtitle="Find the latest from our blog posts"
      description=""
      hasBg={true}
      color="#fafafa"
    >
      <div className="w-full">
        <div className="w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-8">
          {blogPosts.map((post, idx) => (
            <PostCard
              key={idx}
              title={post?.fields?.title}
              image={post?.fields?.featuredImage?.fields?.file?.url}
              slug={post?.fields?.slug}
              snippet={post?.fields?.snippet}
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
    </SectionContainer>
  );
};

export default LatestPosts;
