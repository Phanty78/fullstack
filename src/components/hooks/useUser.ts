import TUser from "@/components/types/index";
import { useEffect, useState } from "react";

function useUser({ userId }: { userId: string }) {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [profile, setProfile] = useState<TUser>();

  useEffect(() => {
    fetchUser(userId);
  }, [userId]);

  async function fetchUser(userId: string) {
    if (userId) {
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
  }

  return { profile, error, isLoading };
}

export default useUser;
