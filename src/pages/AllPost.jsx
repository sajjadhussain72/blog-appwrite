import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../Appwrite/config";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {}, []);
  appwriteService.getPosts([]).then((posts) => {
    if (posts) {
      setPosts(posts.documents);
    }
  });
  return (
    <div className="bg-gray-100">
      <Container>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto  max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <div className="mt-6  space-y-12  gap-y-10 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0 ">
              {posts.map((post) => (
                <div key={post.$id} className=" group relative">
                  <PostCard {...post} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
