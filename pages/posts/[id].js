import Head from "next/head";

import Link from "next/link";

import { getAllPosts, getPostById } from "../../services/postService";

/*
 * Make all necessary imports.
 * Write the function getStaticPaths.
 * Write the function getStaticProps.
 * Pass down your props to the component.
 * Render the data.
 *
 */
/* export async function getStaticPaths() {
  const posts = await getAllPosts();
  const ids = posts.map((post) => post.id);
  return {
    paths: ids.map((id) => ({ params: { id: id } })),
    fallback: false,
  };
} */

/* export async function getStaticProps(context) {
  const { id } = context.params;
  const post = await getPostById(id);
  return {
    props: { description: post.description, id: post.id, name: post.name },
  };
} */

export async function getServerSideProps(context) {
  const { id } = context.params;
  const post = await getPostById(id);
  return {
    props: { ...post },
  };
}
export default function Post({ name, id, description }) {
  return (
    <>
      <Head>
        <title>title</title>
      </Head>
      <h1>{name}</h1>
      <p>{id}</p>
      <h2>{description}</h2>

      <p></p>
    </>
  );
}
