import TUser from "@/components/types/index";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

export default function UserProfile({ userId }: { userId: string }) {
  const [profile, setProfile] = useState<TUser>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`,
        );

        if (!response.ok) {
          setError(response.statusText);
          throw new Error(`failed to fetch data : ${response.statusText}`);
        }

        const data = await response.json();

        if (data) {
          setProfile(data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchUser();
  }, [userId]);

  return (
    <>
      <h1 className="text-4xl mb-6">User Profile</h1>
      {loadContent()}
    </>
  );
}
