import { getPostInfo } from '@/app/lib/getPostInfo';
import React from 'react';

const Post = ({
  params,
}: {
  params: {
    slug: string;
  };
}): JSX.Element => {
  const { data, content } = getPostInfo(params.slug);
  return (
    <div className="postPage">
      <h1>{data.title}</h1>
      <div>{content}</div>
    </div>
  );
};

export default Post;
