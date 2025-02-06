import Link from "next/link";

export default function UsersList() {
  const usersArray = [1, 2, 3, 4, 5];

  return (
    <ul>
      {usersArray.map((user, index) => (
        <li key={index}>
          <Link href={`/users/${user}`}>User {user}</Link>
        </li>
      ))}
    </ul>
  );
}
