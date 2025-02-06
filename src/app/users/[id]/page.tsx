"use client";

import UserProfile from "@/components/ui/userprofile";
import { useParams } from "next/navigation";

export default function UserPage() {
  const params = useParams<{ id: string }>();
  return (
    <div>
      <UserProfile userId={params.id} />
    </div>
  );
}
