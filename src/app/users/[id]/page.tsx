"use client";

import { useParams } from "next/navigation";

export default function UserProfile() {
  const params = useParams<{ id: string }>();
  return (
    <div>
      <h1 className="text-4xl mb-6">User Profile</h1>
      <p>
        User Id : <span className="text-blue-500 font-bold">{params.id}</span>
      </p>
    </div>
  );
}
