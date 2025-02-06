import Link from "next/link";

export default function Users() {
  return (
    <ul>
      <li>
        <Link href="/users/1">First user profile</Link>
      </li>
      <li>
        <Link href="/users/2">Second user profile</Link>
      </li>
      <li>
        <Link href="/users/3">Third user profile</Link>
      </li>
    </ul>
  );
}
