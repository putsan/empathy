import Head from "next/head";
import Image from "next/image";
import Layout, { siteTitle } from "../components/layout";
import Link from "next/link";
import Date from "../components/date";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{siteTitle}</title>
      </Head>

      <div className="intro">
        <div className="intro__container">
          <Image
            priority
            src="/images/poster-d.jpg"
            className="intro__poster"
            // height={154}
            // width={320}
            fill
            alt="На фото Підгородний  Павло Михайлович"
          />
        </div>

        <div className="intro__poster-content">
          <p className="intro__pre-title">Психолог Підгородний</p>
          <h1 className="intro__page-title section-title">
            Консультація психолога у Львові
          </h1>
          <p className="intro__sub-title">Завжди в житті з довірою.</p>

          <button className="button button--contrast">
            <a href="#contact-form" className="button__link">
              <span className="button__text">Записатись</span>
              <div className="button__icon">
                <svg
                  className="button__arrow"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    id="right-arrow&contrast"
                    stroke="#F8F9F8"
                    strokeWidth="6"
                    strokeLinecap="round"
                  >
                    <line x1="5" y1="50" x2="95" y2="50" />
                    <line x1="58" y1="13" x2="95" y2="50" />
                    <line x1="58" y1="87" x2="95" y2="50" />
                  </g>
                </svg>
              </div>
            </a>
          </button>
        </div>

        <div className="experience">
          <div className="experience__ellipse"></div>

          <ul className="experience__list">
            <li className="experience__item">
              <span className="experience__number">10*</span>{" "}
              <span className="experience__label">Років досвіду</span>
            </li>

            <li className="experience__item">
              <span className="experience__number">250+</span>{" "}
              <span className="experience__label">Задоволених клієнтів</span>
            </li>

            <li className="experience__item">
              <span className="experience__number">6*</span>{" "}
              <span className="experience__label">Проведено коучингів</span>
            </li>

            <li className="experience__item">
              <span className="experience__number">6 років</span>{" "}
              <span className="experience__label">Акредитації в Україні</span>
            </li>
          </ul>
        </div>
      </div>

      <main>
        <section className="row" id="services">
          <h2 className="section-title row__title">Послуги</h2>

          <ol className="num-list">
            <li className="num-list__item">
              <p className="num-list__text">
                Консультування та провідна діяльність із психологічної адаптації
                дітей та підлітків;
              </p>
            </li>
            <li className="num-list__item">
              <p className="num-list__text">
                Консультування і діяльність із запобігання жорстокого поводження
                з дітьми та іншими особами;
              </p>
            </li>
            <li className="num-list__item">
              <p className="num-list__text">
                Консультування сімейного психолога з питань шлюбу і сім’ї,
                регулювання відносин між чоловіком та жінкою;
              </p>
            </li>
            <li className="num-list__item">
              <p className="num-list__text">
                Психологічна підтримка та допомога жертвам стихійних лих,
                іммігрантам, а також тим хто потрапив у складне становище;
              </p>
            </li>
            <li className="num-list__item">
              <p className="num-list__text">
                Психологічна підтримка та допомога жертвам стихійних лих,
                іммігрантам, а також тим хто потрапив у складне становище;
              </p>
            </li>
            <li className="num-list__item">
              <p className="num-list__text">
                Професійна реабілітація або підготовка до певного виду
                діяльності безробітних, а також хто не може себе реалізувати по
                професії;
              </p>
            </li>
          </ol>
        </section>

        <section className="row" id="about">
          <h2 className="section-title row__title">Про мене</h2>

          <div className="about">
            <Image
              src="/images/mind.svg"
              className="about__image"
              height={157}
              width={157}
              alt="Зображення силуету голови людини з мозком у ній"
            />

            <div className="about__text">
              <p className="about__paragraph">
                Закінчив Дрогобицький державний педагогічний університет імені
                Івана Франка і отримав вищу освіту за спеціальністю{" "}
                <span className="about__accent">
                  «Практична психологія. Соціальна педагогіка»
                </span>{" "}
                та здобув кваліфікацію практичного психолога у закладах освіти,
                соціального педагога.
              </p>

              <p className="about__paragraph">
                Порив у навчанні допоміг навчати та виховувати особистість за
                видами педагогіки: за народною педагогікою; світською та
                духовною. Найбільші досягнення у вивчення психіки людини
                принесло для мене успіх та щастя, а також прийшлось вивчати
                різновиди субкультур і відхилення від норми, що називається{" "}
                <span className="about__accent">«девіантною поведінкою»</span>,
                моя дипломна робота.
              </p>

              <p className="about__paragraph">
                У 2013 році повищив свою кваліфікацію, закінчив Національний
                університет{" "}
                <span className="about__accent">«Львівська політехніка»</span> і
                отримав повну вищу освіту за спеціальністю «Управління
                навчальним закладом» та здобув кваліфікацію магістра з
                управління навчальним закладом. З 2013року займаюсь приватним
                консультуванням та іншими видами соціальної допомоги.
              </p>
            </div>
          </div>
        </section>

        <section className="row" id="prices">
          <h2 className="section-title row__title">ціни</h2>

          <ol className="price">
            <li className="price__item">
              <p className="price__label">
                Індивідуальна консультація психолога або соціального педагога
              </p>
              <p className="price__value">
                600 грн. <span className="price__time">/ 1 год.</span>
              </p>
            </li>
            <li className="price__item">
              <p className="price__label">
                Навчально виховна робота з дітьми дошкільного віку
              </p>
              <p className="price__value">
                600 грн. <span className="price__time">/ 1 год.</span>
              </p>
            </li>
            <li className="price__item">
              <p className="price__label">
                Консультування в процесі професійної реабілітації
              </p>
              <p className="price__value">
                600 грн. <span className="price__time">/ 1 год.</span>
              </p>
            </li>
            <li className="price__item">
              <p className="price__label">
                Консультування з питань шлюбу і сім’ї, сімейне консультування
              </p>
              <p className="price__value">
                900 грн. <span className="price__time">/ 1 год.</span>
              </p>
            </li>
            <li className="price__item">
              <p className="price__label">
                Консультація та профілактика в процесі позбавлення шкідливих
                звичок, психологічна підтримка жертвам стихійних лих
              </p>
              <p className="price__value">
                600 грн. <span className="price__time">/ 1 год.</span>
              </p>
            </li>
            <li className="price__item">
              <p className="price__label">
                Консультування із соціальної адаптації дітей і підлітків
              </p>
              <p className="price__value">
                600 грн. <span className="price__time">/ 1 год.</span>
              </p>
            </li>
          </ol>
        </section>

        <section className="row" id="posts">
          <h2 className="section-title row__title">Статті</h2>

          <ul>
            {allPostsData.map(({ id, date, title, img, excerpt }) => (
              <li className="post" key={id}>
                <Image
                  src={img}
                  className="post__image"
                  width={335}
                  height={170}
                  alt=""
                />
                <Date dateString={date} className="post__date" />
                <Link href={`/posts/${id}`}>
                  <h4 className="post__title">{title}</h4>
                </Link>

                <main className="post__content ">
                  <p className="post__paragraph">{excerpt}</p>
                </main>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </Layout>
  );
}
