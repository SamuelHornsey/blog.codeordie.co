import React from "react";

import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, JSXMapSerializer } from "@prismicio/react";

import { PostDocument } from "../../../prismicio-types";

import styles from "./index.module.css";

type props = {
  post: PostDocument;
}

const components: JSXMapSerializer = {
  paragraph: ({ node }) => {
    return <p className={styles.content}>{node.text}</p>
  }
};

export default function Post({ post }: props) {
  const { title, icon, snippet } = post.data;
  const date = new Date(post.first_publication_date);

  return (
    <div className={styles.post}>
      <PrismicNextLink className={styles.link} document={post}>

        <h4 className={styles.day}>{date.toLocaleString('en-AU', { weekday: 'long' })}</h4>
        <h4 className={styles.date}>{`${date.toLocaleString('en-AU', { day: '2-digit' })}/${date.toLocaleString('en-AU', { month: '2-digit' })}`}</h4>

        <PrismicNextImage className={styles.image} field={icon} />

        <h3 className={styles.title}>{title}</h3>
        <PrismicRichText field={snippet} components={components} />
      </PrismicNextLink>
    </div>
  )
}