import React from "react";
import Container from "../../components/Container";
import PostCard from "./PostCard";

const PageContent = ({ blogPosts }) => {
  return (
    <div className="w-full mb-12">
      <Container>
        <div className="w-full  grid grid-cols-8">
          {/* <div className="hidden md:block border-r border-gray-400  pr-1 col-span-2 h-full w-full py-4 px-2">
            <h3 className="text-3xl font-semibold mb-6 ">Our latest posts</h3>
          </div> */}

          <div className="md:pl-1 col-span-8  grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 h-full w-full ">
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
        </div>
      </Container>
    </div>
  );
};

export default PageContent;
