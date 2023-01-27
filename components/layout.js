import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export const siteTitle =
  "Ваш психолог у Львові: консультації, тренінги, коучинг ❘ Підгородний";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        {/* <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        /> */}
        {/* <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" /> */}
      </Head>
      <header id="header" className={styles.header}>
        <nav class="navigation">
          <div class="navigation__left">
            <img src="./images/menu.svg" class="navigation__menu-btn" alt="" />
            <div class="navigation__line"></div>
            <img
              src="./images/logo.png"
              alt="Емпатія"
              class="navigation__logo"
            />
          </div>

          <div class="navigation__menu">
            <ul class="navigation__list">
              <li class="navigation__item">
                <a href="#services" class="navigation__link">
                  Послуги
                </a>
              </li>
              <li class="navigation__item">
                <a href="#about" class="navigation__link">
                  Про мене
                </a>
              </li>
              <li class="navigation__item">
                <a href="#prices" class="navigation__link">
                  Ціни
                </a>
              </li>
              <li class="navigation__item">
                <a href="#posts" class="navigation__link">
                  Статті
                </a>
              </li>
            </ul>
          </div>

          <button class="navigation__button">
            <a href="#contact-form" class="navigation__btn-link">
              Записатись
            </a>
          </button>
        </nav>
        {/* {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )} */}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
