export default function UserProfile({ userId }: { userId: string }) {
  return (
    <>
      <h1 className="text-4xl mb-6">User Profile</h1>
      <p>
        User Id : <span className="text-blue-500 font-bold">{userId}</span>
      </p>
    </>
  );
}
