export default async function getStaticPosts() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=5",
      { next: { revalidate: 20 } },
    );

    if (!response.ok) {
      throw new Error(`Error fetching posts data : ${response.status}`);
    }
    const posts = await response.json();

    return (
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    );
  } catch (error) {
    return <div>{error as string}</div>;
  }
}
