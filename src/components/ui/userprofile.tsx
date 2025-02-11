import DisplayUserProfile from "@/app/users/serverside/displayuserprofile";

export default function UserProfile({ userId }: { userId: string }) {
  return (
    <>
      <h1 className="text-4xl mb-6">User Profile</h1>
      <DisplayUserProfile userId={userId} />
    </>
  );
}
