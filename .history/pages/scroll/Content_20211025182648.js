import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const Content = ({ item }) => {
  const [posts, setPosts] = useState(item);
  const [hasMore, setHasMore] = useState(true);

  const getMorePost = async () => {
    const res = 
    const newPosts = await res.json();
    setPosts((post) => [...item, ...newPosts]);
  };

  return (
    <>
      <InfiniteScroll
        dataLength={posts.length}
        next={getMorePost}
        hasMore={hasMore}
        loader={<h3> Loading...</h3>}
        endMessage={<h4>Nothing more to show</h4>}
      >
        {posts.map((data) => (
          <div key={data.id}>
            <div className="back">
              <strong> {data.id}</strong> {data.title}
            </div>
            {data.completed}
          </div>
        ))}
      </InfiniteScroll>
      <style jsx>
        {`
          .back {
            padding: 10px;
            background-color: dodgerblue;
            color: white;
            margin: 10px;
          }
        `}
      </style>
    </>
  );
};

export default Content;