import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export const siteTitle =
  "Ваш психолог у Львові: консультації, тренінги, коучинг ❘ Підгородний";

export default function Layout({ children, home }) {
  return (
    <div className="">
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />

        <link
          href="/fonts/mont/stylesheet.css"
          rel="stylesheet"
          type="text/css"
        />
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
      <header id="header" className="">
        <nav className="navigation">
          <div className="navigation__left">
            <Image
              priority
              src="/images/menu.svg"
              className="navigation__menu-btn"
              height={25}
              width={24}
              alt=""
            />
            <div className="navigation__line"></div>
            <Link href="/">
              <Image
                priority
                src="/images/logo.png"
                className="navigation__logo"
                height={36}
                width={160}
                alt="Емпатія"
              />
            </Link>
          </div>

          <div className="navigation__menu">
            <ul className="navigation__list">
              <li className="navigation__item">
                <Link
                  href="/#services"
                  className="navigation__link"
                  scroll={false}
                >
                  Послуги
                </Link>
              </li>
              <li className="navigation__item">
                <Link
                  href="/#about"
                  className="navigation__link"
                  scroll={false}
                >
                  Про мене
                </Link>
              </li>
              <li className="navigation__item">
                <Link
                  href="/#prices"
                  className="navigation__link"
                  scroll={false}
                >
                  Ціни
                </Link>
              </li>
              <li className="navigation__item">
                <Link
                  href="/#posts"
                  className="navigation__link"
                  scroll={false}
                >
                  Статті
                </Link>
              </li>
            </ul>
          </div>

          <button className="navigation__button">
            <a href="#contact-form" className="navigation__btn-link">
              Записатись
            </a>
          </button>
        </nav>
        {/* {home ? (
          <>
            <Image
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

      {/* {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )} */}

      <div className="contact__background">
        <section className="contact" id="contact-form">
          <h3 className="contact__title">записатись</h3>

          <form
            action="https://airform.io/pidgorodniy24@gmail.com"
            method="post"
            name="contact-form"
            className="contact__form form"
          >
            <div className="form__underline">
              <input
                placeholder="Імʼя"
                type="text"
                name="name"
                id="username"
                className="form__input"
                pattern="[a-z]|[A-Z]|[а-я]|[А-Я]"
                minLength="3"
                required
              />
            </div>
            <div className="form__underline">
              <input
                placeholder="Email"
                type="email"
                name="Email"
                id="user-email"
                className="form__input"
                required
              />
            </div>
            <div className="form__underline form__underline--with-number">
              <input
                placeholder="Моб. телефон"
                type="number"
                name="phone"
                id="user-phone"
                className="form__input form__input--number"
                required
              />
            </div>

            <div className="form__underline">
              <textarea
                placeholder="Ваш коментар"
                name="comment"
                id="user-comment"
                cols="30"
                rows="10"
                className="form__area"
              ></textarea>
            </div>

            <label htmlFor="agrred-with-policy" className="form__policy">
              <input
                type="checkbox"
                name="policy"
                id="agrred-with-policy"
                className="form__checkbox"
                required
              />
              <span className="form__policy-text">
                Я даю свою згоду на обробку персональних даних
              </span>
            </label>

            <button type="submit" className="form__button">
              Записатись
            </button>
          </form>

          <div className="contact__contacts">
            <h4 className="contact__part-title">Контактні дані</h4>

            <a href="mailto:pidgorodniy24@gmail.com" className="contact__mail">
              pidgorodniy24@gmail.com
            </a>
            <a href="mailto:pidgorodniy24@ukr.net" className="contact__mail">
              pidgorodniy24@ukr.net
            </a>

            <a href="tel:+38067-980-21-65" className="contact__phone">
              067-980-21-65
            </a>
            <a href="tel:+38063-240-45-08" className="contact__phone">
              063-240-45-08
            </a>

            <p className="contact__address">
              <a
                href="https://goo.gl/maps/BSxatAhcwLMQgNf56"
                className="contact__link"
                target="_blank"
                rel="noreferrer"
              >
                м. Львів, вул. Бузкова 2 (корпус Б) 3-й поверх, кім. 312.
              </a>
            </p>
          </div>
        </section>
      </div>
      {/* </main> */}

      <footer className="footer" id="page-footer">
        <Image
          src="/images/logo.png"
          className="footer__logo"
          height={12}
          width={74}
          alt="Логотип Емпатія"
        />

        <p className="footer__rights">
          Created by
          <a
            href="https://www.behance.net/yuriytarasenko"
            className="footer__link"
            target="_blank"
            rel="noreferrer"
          >
            Yurii Tarasenko
          </a>{" "}
          &{" "}
          <a
            href="https://cutt.ly/yp_site"
            className="footer__link"
            target="_blank"
            rel="noreferrer"
          >
            Yuriy Putsan
          </a>
          All rights reserved.
        </p>
      </footer>
    </div>
  );
}
