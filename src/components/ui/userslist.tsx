import GetUsersNumber from "@/app/users-number-serverside/page";
import Link from "next/link";

export default async function UsersList() {
  const usersNumber = await GetUsersNumber();
  console.log(typeof usersNumber);

  const displayUserList = (usersNumber: number) => {
    return Array.from({ length: usersNumber }, (_, i) => (
      <li key={i}>
        <Link href={`/users/${i + 1}`}>User {i + 1}</Link>
      </li>
    ));
  };

  return <ul>{displayUserList(usersNumber)}</ul>;
}
