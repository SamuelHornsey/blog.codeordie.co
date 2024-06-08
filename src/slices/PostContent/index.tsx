import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import { PrismicRichText, JSXMapSerializer } from "@prismicio/react";

import Container from "@/components/Container";

import styles from "./index.module.css";

const components: JSXMapSerializer = {
  paragraph: ({ node, children}) => {
    return <p className={styles.content}>{children}</p>
  }
};

/**
 * Props for `PostContent`.
 */
export type PostContentProps = SliceComponentProps<Content.PostContentSlice>;

/**
 * Component for "PostContent" Slices.
 */
const PostContent = ({ slice }: PostContentProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
        <PrismicRichText field={slice.primary.content} components={components} />
    </section>
  );
};

export default PostContent;
