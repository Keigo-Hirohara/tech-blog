import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const getPostsInfo = () => {
  const files = fs.readdirSync('_posts');
  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '');
    const fileContent = fs.readFileSync(path.join('_posts', filename), 'utf-8');
    const { data, content } = matter(fileContent);
    return {
      slug,
      data,
      content,
    };
  });

  return posts;
};

export const getPostInfo = (slug: string) => {
  const fileContent = fs.readFileSync(
    path.join('_posts', `${slug}.md`),
    'utf-8'
  );
  const { data, content } = matter(fileContent);
  return {
    slug,
    data,
    content,
  };
};
