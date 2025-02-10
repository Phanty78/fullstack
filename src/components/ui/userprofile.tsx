import useUser from "@/components/hooks/useUser";
import ClipLoader from "react-spinners/ClipLoader";

export default function UserProfile({ userId }: { userId: string }) {
  const { profile, error, isLoading } = useUser({ userId });

  function loadContent() {
    if (isLoading) {
      return <ClipLoader />;
    } else if (error) {
      return <p>{error}</p>;
    } else {
      return (
        <>
          <p className="pb-2">Name : {profile ? profile.name : null}</p>
          <p className="pb-2">Email : {profile ? profile.email : null}</p>
          <p className="pb-2">City : {profile ? profile.address.city : null}</p>
        </>
      );
    }
  }

  return (
    <>
      <h1 className="text-4xl mb-6">User Profile</h1>
      {loadContent()}
    </>
  );
}
