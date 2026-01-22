export const dynamic = 'force-dynamic';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export default async function DynamicPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/1', { cache: 'no-store' });
  const user: User = await res.json();

  return (
    <div>
      <h1>Dynamic Page - Dashboard</h1>
      <p>{user.name}</p>
      <p>This page is dynamically rendered on each request.</p>
    </div>
  );
}
