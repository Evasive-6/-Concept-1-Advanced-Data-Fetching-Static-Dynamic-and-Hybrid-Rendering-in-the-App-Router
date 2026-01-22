export const revalidate = false;

export default async function StaticPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const post = await res.json();

  return (
    <div>
      <h1>Static Page - About</h1>
      <p>{post.title}</p>
      <p>This page is statically rendered at build time.</p>
    </div>
  );
}
