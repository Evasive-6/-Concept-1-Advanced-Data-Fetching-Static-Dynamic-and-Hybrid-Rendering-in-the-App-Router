export const revalidate = 60;

interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
  postId: number;
}

export default async function HybridPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/comments/1');
  const comment: Comment = await res.json();

  return (
    <div>
      <h1>Hybrid Page - News</h1>
      <p>{comment.name}</p>
      <p>This page uses Incremental Static Regeneration, revalidating every 60 seconds.</p>
    </div>
  );
}
