import Layout from "../../components/layout";
import Head from "next/head";
import Date from "../../components/date";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Image from "next/image";
import Link from "next/link";

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
  const { title, date, postContentHtml, img } = postData;

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>

      <section className="row">
        <Image
          src={img}
          priority
          className="post__image"
          width={1200}
          height={360}
          alt=""
        />

        <Date dateString={date} className="post__date" />
        <h1 className="post__title">{title}</h1>
        <article
          dangerouslySetInnerHTML={{ __html: postContentHtml }}
          className="post"
        />

        <div className="post__footer">
          <div className="post__footer-left">
            <p className="post__author">Підгородний Павло Михайлович</p>
            <p className="post__contacts">
              Тел.{" "}
              <a className="post__phone" href="tel:+380632404508">
                0632404508
              </a>
              {" / "}
              <a className="post__phone" href="tel:+380679802165">
                0679802165
              </a>
            </p>
          </div>

          <button type="button" className="post__button button button--gray button--s">
            <Link href="/" className="button__link">
              <span className="button__text">Перейти на головну</span>
              <div className="button__icon">
                <svg className="button__arrow" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <g id="right-arrow" stroke="#F8F9F8" strokeWidth="6" strokeLinecap="round">
                    <line x1="5" y1="50" x2="95" y2="50"></line>
                    <line x1="58" y1="13" x2="95" y2="50"></line>
                    <line x1="58" y1="87" x2="95" y2="50"></line>
                  </g>
                </svg>
              </div>
            </Link>
          </button>
        </div>
      </section>
    </Layout>
  );
}
