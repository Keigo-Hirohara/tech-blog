import { getPostInfo } from '@/app/lib/getPostInfo';
import React from 'react';
import { marked } from 'marked';
import Image from 'next/image';

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
      <Image src={`/${data.image}`} width={500} height={300} alt={data.title} />
      <h1>{data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
    </div>
  );
};

export default Post;
