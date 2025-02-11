import TUser from "@/components/types";

export default async function DisplayUserProfile({
  userId,
}: {
  userId: string;
}) {
  try {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
      { cache: "no-store" },
    );
    if (!data.ok) {
      throw new Error(`failed to fetch data : ${data.statusText}`);
    }
    const profile: TUser = await data.json();
    return (
      <>
        <p className="pb-2">Name : {profile ? profile.name : null}</p>
        <p className="pb-2">Email : {profile ? profile.email : null}</p>
        <p className="pb-2">City : {profile ? profile.address.city : null}</p>
      </>
    );
  } catch (error) {
    return <p className="text-red-500">{error as string}</p>;
  }
}
