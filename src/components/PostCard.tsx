import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type PropType = {
  post: any;
};

export const PostCard = ({ post }: PropType): JSX.Element => {
  return (
    <div className="postCard" key={post.slug}>
      <Link href={`/post/${post.slug}`}>
        <div className="postImage">
          <Image
            src={`/${post.data.image}`}
            width={500}
            height={300}
            alt={post.title}
          />
        </div>
        {post.data.title}
      </Link>
    </div>
  );
};
