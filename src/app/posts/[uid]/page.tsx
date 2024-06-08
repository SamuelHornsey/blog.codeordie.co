import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

import Container from "@/components/Container";

import styles from "./index.module.css";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("post", params.uid)
    .catch(() => notFound());

  return (
    <Container>
      <div className={styles.inner}>
        <div className={styles.block}>
          <div className={styles.divider}>
            <h2 className={styles.headline}>{page.data.headline}</h2>
          </div>
          <SliceZone slices={page.data.slices} components={components} />
        </div>
        <div>
          <h1 className={styles.heading}>{page.data.title}</h1>
        </div>
      </div>

    </Container>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID("post", params.uid)
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("post");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}