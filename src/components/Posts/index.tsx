'use client';

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { createClient } from "@/prismicio";
import { PostDocument } from "../../../prismicio-types";

import Next from "@/components/Next";
import PostLoading from "../PostLoading";
import Post from "@/components/Post";

export default function Posts() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get('page');
  const page = query ? parseInt(query) : 1;
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<Array<PostDocument>>([]);
  const [hasNext, setHasNext] = useState(true);
  const client = createClient();

  useEffect(() => {
    setLoading(true);
    client.getByType("post", {
      orderings: {
        field: "document.first_publication_date",
        direction: "desc"
      },
      page,
      pageSize: 5
    }).then((data) => {
      setPosts(data.results);
      setLoading(false);
      setHasNext(data.total_pages !== page);
    });
  }, [page]);

  const onNext = () => {
    const opts = { scroll: false };

    if (!hasNext) {
      router.push(`/`, opts);
    } else {
      router.push(`/?page=${page+1}`, opts);
    }
  }

  return (
    loading ? <PostLoading /> :
      <>
        {
          posts.map((post, i) => <Post key={i} post={post} />)
        }
        <Next onNext={onNext} />
      </>
  )
}