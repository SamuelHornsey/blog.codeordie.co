import React from "react";
import { Metadata } from "next";

import { PrismicRichText, JSXMapSerializer } from "@prismicio/react";
import { createClient } from "@/prismicio";

import Container from "@/components/Container";
import Month from "@/components/Month";

import styles from "./index.module.css";
import { PostDocument } from "../../../prismicio-types";

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("archive");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

const components: JSXMapSerializer = {
  heading2: ({ children }) => {
    return <h2 className={styles.heading}>{children}</h2>
  },
  heading4: ({ children }) => {
    return <h4 className={styles.headline}>{children}</h4>
  }
};

export default async function Archive() {
  const client = createClient();
  const archive = await client.getSingle("archive");
  const posts = await client.getByType("post", {
    orderings: {
      field: "document.first_publication_date",
      direction: "desc"
    }
  }).then(posts => {
    const months: { [key: string]: Array<PostDocument> } = {};

    posts.results.forEach(post => {
      const date = new Date(post.first_publication_date);
      const month = date.toLocaleString('en-AU', { month: 'long' });
      const year = date.toLocaleString('en-AU', { year: 'numeric' });
      const key = `${month} ${year}`;

      if (key in months) {
        months[key].push(post);
      } else {
        months[key] = [post];
      }
    });

    return months;
  });

  return (
    <Container>
      <div className={styles.archive}>
        <div className={styles.heading}>
          <PrismicRichText field={archive.data.title} components={components}></PrismicRichText>
          <PrismicRichText field={archive.data.headline} components={components}></PrismicRichText>
        </div>
        <div className={styles.posts}>
          {
            Object.keys(posts).map((month, i) => (<Month posts={posts[month]} month={month} key={i} />))
          }
        </div>
      </div>
    </Container>
  )
}