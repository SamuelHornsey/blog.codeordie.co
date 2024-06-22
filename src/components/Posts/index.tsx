import React from "react";
import { createClient } from "@/prismicio";

import Next from "@/components/Next";
import Post from "@/components/Post";

export default async function Posts() {
  const client = createClient();
  const posts = await client.getByType("post", {
    orderings: {
      field: "document.first_publication_date",
      direction: "desc"
    },
    page: 1,
    pageSize: 5
  });

  return (
    <>
      {
        posts.results.map((post, i) => <Post key={i} post={post} />)
      }
      <Next />
    </>

  )
}