// src/components/PostList.js
import React from 'react';
import { FixedSizeList } from 'react-window';
import Post from 'blocks/posts'; // Ensure the path is correct

function PostList({ posts }) {
  return (
    <FixedSizeList
      height={600} // Adjust height as needed
      width="100%"
      itemSize={240} // Adjust itemSize as needed based on content height
      itemCount={posts.length}
      overscanCount={5}
    >
      {({ index, style }) => (
        <div style={{ ...style, padding: '8px' }}>
          <Post project={posts[index]} />
        </div>
      )}
    </FixedSizeList>
  );
}

export default PostList;
