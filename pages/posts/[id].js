import Layout from "../../components/layout";
import Head from "next/head";
import Date from "../../components/date";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Image from "next/image";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  const { title, id, date, contentHtml, img } = postData;

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>

      <section className="row">
        <Image
          src={img}
          className="post__image"
          width={335}
          height={170}
          alt=""
        />

        <Date dateString={date} className="post__date" />
        <h1 className="post__title">{title}</h1>
        <article
          dangerouslySetInnerHTML={{ __html: contentHtml }}
          className="post"
        />

        <div className="post__footer">
          <p className="post__author">Підгородний Павло Михайлович</p>
          <p className="post__contacts">
            Тел.{" "}
            <a className="post__phone" href="tel:+380632404508">
              0632404508
            </a>
            <a className="post__phone" href="tel:+380679802165">
              0679802165
            </a>
          </p>
        </div>
      </section>
    </Layout>
  );
}
