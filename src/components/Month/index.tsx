import { PrismicLink } from "@prismicio/react";
import { PostDocument } from "../../../prismicio-types";

import styles from "./index.module.css"

export default function Month({ posts, month }: { posts: Array<PostDocument>, month: string }) {
  return (
    <div>
      <h4 className={styles.heading}>{month}</h4>
      <ul className={styles.posts}>
        {
          posts.map((post, i) => {
            return (
              <li className={styles.item} key={i}>
                <PrismicLink className={styles.post} document={post}>{post.data.title}</PrismicLink>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}