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
        <nav class="navigation">
          <div class="navigation__left">
            <Image
              priority
              src="/images/menu.svg"
              className="navigation__menu-btn"
              height={25}
              width={24}
              alt=""
            />
            <div class="navigation__line"></div>
            <Image
              priority
              src="/images/logo.png"
              className="navigation__logo"
              height={36}
              width={160}
              alt="Емпатія"
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

      <div class="contact__background">
        <section class="contact" id="contact-form">
          <h3 class="contact__title">записатись</h3>

          <form
            action="https://airform.io/pidgorodniy24@gmail.com"
            method="post"
            name="contact-form"
            class="contact__form form"
          >
            <div class="form__underline">
              <input
                placeholder="Імʼя"
                type="text"
                name="name"
                id="username"
                class="form__input"
                pattern="[a-z]|[A-Z]|[а-я]|[А-Я]"
                minlength="3"
                required
              />
            </div>
            <div class="form__underline">
              <input
                placeholder="Email"
                type="email"
                name="Email"
                id="user-email"
                class="form__input"
                required
              />
            </div>
            <div class="form__underline form__underline--with-number">
              <input
                placeholder="Моб. телефон"
                type="number"
                name="phone"
                id="user-phone"
                class="form__input form__input--number"
                required
              />
            </div>

            <div class="form__underline">
              <textarea
                placeholder="Ваш коментар"
                name="comment"
                id="user-comment"
                cols="30"
                rows="10"
                class="form__area"
              ></textarea>
            </div>

            <label for="agrred-with-policy" class="form__policy">
              <input
                type="checkbox"
                name="policy"
                id="agrred-with-policy"
                class="form__checkbox"
                required
              />
              <span class="form__policy-text">
                Я даю свою згоду на обробку персональних даних
              </span>
            </label>

            <button type="submit" class="form__button">
              Записатись
            </button>
          </form>

          <div class="contact__contacts">
            <h4 class="contact__part-title">Контактні дані</h4>

            <a href="mailto:pidgorodniy24@gmail.com" class="contact__mail">
              pidgorodniy24@gmail.com
            </a>
            <a href="mailto:pidgorodniy24@ukr.net" class="contact__mail">
              pidgorodniy24@ukr.net
            </a>

            <a href="tel:+38067-980-21-65" class="contact__phone">
              067-980-21-65
            </a>
            <a href="tel:+38063-240-45-08" class="contact__phone">
              063-240-45-08
            </a>

            <p class="contact__address">
              <a
                href="https://goo.gl/maps/BSxatAhcwLMQgNf56"
                class="contact__link"
                target="_blank"
              >
                м. Львів, вул. Бузкова 2 (корпус Б) 3-й поверх, кім. 312.
              </a>
            </p>
          </div>
        </section>
      </div>
      {/* </main> */}

      <footer class="footer" id="page-footer">
        <Image
          src="/images/logo.png"
          className="footer__logo"
          height={12}
          width={74}
          alt="Логотип Емпатія"
        />

        <p class="footer__rights">
          Created by
          <a
            href="https://www.behance.net/yuriytarasenko"
            class="footer__link"
            target="_blank"
          >
            Yurii Tarasenko
          </a>{" "}
          &{" "}
          <a
            href="https://cutt.ly/yp_site"
            class="footer__link"
            target="_blank"
          >
            Yuriy Putsan
          </a>
          All rights reserved.
        </p>
      </footer>
    </div>
  );
}
