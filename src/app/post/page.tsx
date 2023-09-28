import React from 'react';

import { PostCard } from '@/components/PostCard';
import { getPostsInfo } from '../lib/getPostInfo';

const Posts = () => {
  const posts = getPostsInfo();
  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <PostCard post={post} key={post.slug} />
      ))}
    </div>
  );
};

export default Posts;
