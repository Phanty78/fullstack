"use client";

import GetPostByID from "@/app/post-id-serverside/page";
import { useParams } from "next/navigation";

export default function DisplayPostByID() {
  const params = useParams<{ postId: string }>();
  return <div>{<GetPostByID postId={params.postId} />}</div>;
}
