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

      <div class="intro">
        <div class="intro__container">
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

        <div class="intro__poster-content">
          <p class="intro__pre-title">Психолог Підгородний</p>
          <h1 class="intro__page-title section-title">
            Консультація психолога у Львові
          </h1>
          <p class="intro__sub-title">Завжди в житті з довірою.</p>

          <button class="button button--contrast">
            <a href="#contact-form" class="button__link">
              <span class="button__text">Записатись</span>
              <div class="button__icon">
                <svg
                  class="button__arrow"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    id="right-arrow&contrast"
                    stroke="#F8F9F8"
                    stroke-width="6"
                    stroke-linecap="round"
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

        <div class="experience">
          <div class="experience__ellipse"></div>

          <ul class="experience__list">
            <li class="experience__item">
              <span class="experience__number">10*</span>{" "}
              <span class="experience__label">Років досвіду</span>
            </li>

            <li class="experience__item">
              <span class="experience__number">250+</span>{" "}
              <span class="experience__label">Задоволених клієнтів</span>
            </li>

            <li class="experience__item">
              <span class="experience__number">6*</span>{" "}
              <span class="experience__label">Проведено коучингів</span>
            </li>

            <li class="experience__item">
              <span class="experience__number">6 років</span>{" "}
              <span class="experience__label">Акредитації в Україні</span>
            </li>
          </ul>
        </div>
      </div>

      <main>
        <section class="row" id="services">
          <h2 class="section-title row__title">Послуги</h2>

          <ol class="num-list">
            <li class="num-list__item">
              <p class="num-list__text">
                Консультування та провідна діяльність із психологічної адаптації
                дітей та підлітків;
              </p>
            </li>
            <li class="num-list__item">
              <p class="num-list__text">
                Консультування і діяльність із запобігання жорстокого поводження
                з дітьми та іншими особами;
              </p>
            </li>
            <li class="num-list__item">
              <p class="num-list__text">
                Консультування сімейного психолога з питань шлюбу і сім’ї,
                регулювання відносин між чоловіком та жінкою;
              </p>
            </li>
            <li class="num-list__item">
              <p class="num-list__text">
                Психологічна підтримка та допомога жертвам стихійних лих,
                іммігрантам, а також тим хто потрапив у складне становище;
              </p>
            </li>
            <li class="num-list__item">
              <p class="num-list__text">
                Психологічна підтримка та допомога жертвам стихійних лих,
                іммігрантам, а також тим хто потрапив у складне становище;
              </p>
            </li>
            <li class="num-list__item">
              <p class="num-list__text">
                Професійна реабілітація або підготовка до певного виду
                діяльності безробітних, а також хто не може себе реалізувати по
                професії;
              </p>
            </li>
          </ol>
        </section>

        <section class="row" id="about">
          <h2 class="section-title row__title">Про мене</h2>

          <div class="about">
            <Image
              src="/images/mind.svg"
              className="about__image"
              height={157}
              width={157}
              alt="Зображення силуету голови людини з мозком у ній"
            />

            <div class="about__text">
              <p class="about__paragraph">
                Закінчив Дрогобицький державний педагогічний університет імені
                Івана Франка і отримав вищу освіту за спеціальністю{" "}
                <span class="about__accent">
                  «Практична психологія. Соціальна педагогіка»
                </span>{" "}
                та здобув кваліфікацію практичного психолога у закладах освіти,
                соціального педагога.
              </p>

              <p class="about__paragraph">
                Порив у навчанні допоміг навчати та виховувати особистість за
                видами педагогіки: за народною педагогікою; світською та
                духовною. Найбільші досягнення у вивчення психіки людини
                принесло для мене успіх та щастя, а також прийшлось вивчати
                різновиди субкультур і відхилення від норми, що називається{" "}
                <span class="about__accent">«девіантною поведінкою»</span>, моя
                дипломна робота.
              </p>

              <p class="about__paragraph">
                У 2013 році повищив свою кваліфікацію, закінчив Національний
                університет{" "}
                <span class="about__accent">«Львівська політехніка»</span> і
                отримав повну вищу освіту за спеціальністю «Управління
                навчальним закладом» та здобув кваліфікацію магістра з
                управління навчальним закладом. З 2013року займаюсь приватним
                консультуванням та іншими видами соціальної допомоги.
              </p>
            </div>
          </div>
        </section>

        <section class="row" id="prices">
          <h2 class="section-title row__title">ціни</h2>

          <ol class="price">
            <li class="price__item">
              <p class="price__label">
                Індивідуальна консультація психолога або соціального педагога
              </p>
              <p class="price__value">
                600 грн. <span class="price__time">/ 1 год.</span>
              </p>
            </li>
            <li class="price__item">
              <p class="price__label">
                Навчально виховна робота з дітьми дошкільного віку
              </p>
              <p class="price__value">
                600 грн. <span class="price__time">/ 1 год.</span>
              </p>
            </li>
            <li class="price__item">
              <p class="price__label">
                Консультування в процесі професійної реабілітації
              </p>
              <p class="price__value">
                600 грн. <span class="price__time">/ 1 год.</span>
              </p>
            </li>
            <li class="price__item">
              <p class="price__label">
                Консультування з питань шлюбу і сім’ї, сімейне консультування
              </p>
              <p class="price__value">
                900 грн. <span class="price__time">/ 1 год.</span>
              </p>
            </li>
            <li class="price__item">
              <p class="price__label">
                Консультація та профілактика в процесі позбавлення шкідливих
                звичок, психологічна підтримка жертвам стихійних лих
              </p>
              <p class="price__value">
                600 грн. <span class="price__time">/ 1 год.</span>
              </p>
            </li>
            <li class="price__item">
              <p class="price__label">
                Консультування із соціальної адаптації дітей і підлітків
              </p>
              <p class="price__value">
                600 грн. <span class="price__time">/ 1 год.</span>
              </p>
            </li>
          </ol>
        </section>

        <section className="">
          <h2 className="">Blog</h2>
          <ul className="">
            {allPostsData.map(({ id, date, title }) => (
              <li className="" key={id}>
                <Link href={`/posts/${id}`}>{title}</Link>
                <br />
                <small className=''>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </Layout>
  );
}
