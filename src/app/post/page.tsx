import React from 'react';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { PostCard } from '@/components/PostCard';

const Posts = () => {
  const files = fs.readdirSync('_posts');
  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '');
    const fileContent = fs.readFileSync(path.join('_posts', filename), 'utf-8');
    const { data } = matter(fileContent);
    return {
      data,
      slug,
    };
  });
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
