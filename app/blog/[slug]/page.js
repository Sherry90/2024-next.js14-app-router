const BlogPostPage = ({ params }) => {
  return (
    <main>
      <h1>Bolg Post</h1>
      <p>{params.slug}</p>
    </main>
  );
};

export default BlogPostPage;
