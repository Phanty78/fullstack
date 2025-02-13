export default async function GetPostByID({ postId }: { postId: string }) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
      { next: { revalidate: 3600 } },
    );
    if (!res.ok) {
      throw new Error(
        `Error fetching post id : ${postId}, error : ${res.status}`,
      );
    }
    const post = await res.json();

    return (
      <article>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </article>
    );
  } catch (error) {
    return <div className="text-red-500">{error as string}</div>;
  }
}
