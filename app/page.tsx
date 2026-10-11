import Image from "next/image";
import { SiteHeader } from "@/components/site-header";

const imagePath = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

const spaces = [
  {
    src: "/images/space-lounge.jpg",
    alt: "Лаунж-зона у природного бассейна среди зелени",
    title: "Минималистичные зоны",
    description: "Чистые линии и тактильный лён",
  },
  {
    src: "/images/space-pavilion.jpg",
    alt: "Уединённый павильон для созерцания",
    title: "Павильон для практик",
    description: "Терраса для тихих утренних часов",
  },
  {
    src: "/images/space-terrace.jpg",
    alt: "Каменная терраса с видом на долину",
    title: "Природные террасы",
    description: "Ландшафтная панорама тишины",
  },
];

const retreats = [
  {
    src: "/images/retreat-suite.png",
    alt: "Каменный сьют на побережье",
    title: "Каменный сьют",
    duration: "4 дня",
    description: "Восстановление сна и осознанность",
  },
  {
    src: "/images/retreat-olive.png",
    alt: "Оливковый сад и залитая солнцем вилла",
    title: "Оливковый сад",
    duration: "7 дней",
    description: "Цифровой детокс и прогулки",
  },
  {
    src: "/images/retreat-mountain.png",
    alt: "Уединённый дом в горах",
    title: "Горная тишина",
    duration: "5 дней",
    description: "Дыхательные практики и телесная терапия",
  },
  {
    src: "/images/retreat-villa.png",
    alt: "Вилла для уединённого пребывания у моря",
    title: "Вилла созерцания",
    duration: "10 дней",
    description: "Полная автономия и личное кураторство",
  },
];

const rituals = [
  {
    title: "Травертиновая купель",
    duration: "45 минут",
    description: "Тёплые термальные воды под открытым небом, с видом на долину.",
  },
  {
    title: "Травяная парная и ароматерапия",
    duration: "60 минут",
    description: "Дикорастущие розмарин, лаванда и можжевельник для мягкого очищения.",
  },
  {
    title: "Звуковая медитация в воде",
    duration: "50 минут",
    description: "Невесомость в тёплой минеральной воде под звуки тибетских чаш.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <span className="eyebrow mb-3 block">{children}</span>;
}

export default function Home() {
  return (
    <>
      <a className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-linen-50 focus:px-4 focus:py-3" href="#main">
        Перейти к содержимому
      </a>
      <SiteHeader />

      <main id="main">
        <section className="mx-auto max-w-[1440px] px-3 pt-3 pb-14 sm:px-6 md:px-12 md:pt-5 md:pb-20" id="hero">
          <div className="relative isolate flex min-h-[570px] items-center justify-center overflow-hidden border border-border/70 bg-linen-200 sm:min-h-[620px] md:min-h-[680px] lg:min-h-[740px]">
            <Image
              alt="Тихий интерьер STILL с панорамным видом на оливковую долину"
              className="hero-image object-cover"
              fill
              priority
              sizes="100vw"
              src={imagePath("/images/hero.jpg")}
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-linen-900/35 via-linen-900/5 to-linen-900/15" />
            <div className="relative mx-4 max-w-2xl bg-linen-100/55 px-6 py-9 text-center backdrop-blur-[3px] sm:mx-8 sm:px-10 sm:py-12 md:px-14 md:py-14">
              <p className="eyebrow mb-4 text-charcoal/80">Пространство для возвращения к себе</p>
              <h1 className="hero-title display-heading text-charcoal sm:whitespace-nowrap">
                Обретите тишину
              </h1>
              <p className="mx-auto mt-4 max-w-xl font-serif text-xl italic leading-relaxed text-charcoal/90 sm:text-2xl md:mt-5">
                Иммерсивное святилище для современного благополучия и внутреннего баланса.
              </p>
              <a className="hero-cta mt-8 inline-flex min-h-12 items-center justify-center px-7 text-[10px] font-medium uppercase tracking-[0.19em] transition-colors sm:px-9 sm:text-[11px]" href="#journeys">
                Исследовать программы
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1344px] grid-cols-1 items-start gap-10 border-t border-border/80 px-6 py-16 sm:px-8 md:gap-14 md:py-20 lg:grid-cols-12 lg:gap-8 lg:px-12" id="sanctuary">
          <div className="lg:col-span-4 lg:pr-7">
            <SectionLabel>Философия покоя</SectionLabel>
            <h2 className="display-heading text-4xl sm:text-[2.7rem]" id="philosophy">Почувствуйте тишину</h2>
            <p className="mt-5 text-sm leading-7 text-muted sm:text-[15px]">
              STILL. Уединённое пространство, где архитектурный минимализм и природные фактуры помогают восстановить связь с собой. Индивидуальные ретриты среди вековых оливковых рощ.
            </p>
            <a className="editorial-link mt-6 inline-flex items-center" href="#philosophy">
              Узнать о концепции <span aria-hidden="true" className="ml-2 font-serif text-lg">→</span>
            </a>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-5 lg:col-span-8 lg:gap-7">
            {spaces.map((space) => (
              <article className="group" key={space.title}>
                <div className="image-frame relative mb-3 aspect-[4/3] overflow-hidden border border-border/70 bg-linen-200">
                  <Image alt={space.alt} className="object-cover" fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw" src={imagePath(space.src)} />
                </div>
                <h3 className="text-[11px] font-medium uppercase tracking-[0.13em]">{space.title}</h3>
                <p className="mt-1 text-xs text-muted">{space.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1344px] border-t border-border/80 px-6 py-16 sm:px-8 md:py-20 lg:px-12" id="journeys">
          <div className="mb-9 flex flex-col gap-4 md:mb-11 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionLabel>Коллекция сезонов</SectionLabel>
              <h2 className="display-heading text-4xl sm:text-[2.7rem]">Избранные ретриты</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-muted">
              В каждой программе есть работа с ментором, авторская нутрициология и спа-ритуалы.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-9 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
            {retreats.map((retreat) => (
              <a className="group block" href="#book" key={retreat.title}>
                <div className="retreat-image-frame image-frame relative mb-3 aspect-[3/4] overflow-hidden border border-border/70 bg-linen-200">
                  <Image alt={retreat.alt} className="object-cover" fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" src={imagePath(retreat.src)} />
                </div>
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-serif text-xl leading-tight transition-opacity group-hover:opacity-70">{retreat.title}</h3>
                  <span className="shrink-0 text-xs text-muted">{retreat.duration}</span>
                </div>
                <p className="mt-1.5 text-xs leading-5 text-muted">{retreat.description}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1344px] border-t border-border/80 px-6 py-16 sm:px-8 md:py-20 lg:px-12" id="spa">
          <div className="mb-9 flex flex-col gap-4 md:mb-11 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionLabel>Термальный комплекс</SectionLabel>
              <h2 className="display-heading text-4xl sm:text-[2.7rem]">Вода, тепло и тишина</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-muted">
              Минеральные купели с видом на рощи и банные ритуалы на травах для глубокой перезагрузки.
            </p>
          </div>
          <div className="image-frame relative mb-9 h-[340px] overflow-hidden border border-border/70 bg-linen-200 sm:h-[440px] lg:h-[560px]">
            <Image alt="Термальный бассейн в спокойном интерьере из натурального камня" className="object-cover" fill sizes="100vw" src={imagePath("/images/thermal.jpg")} />
          </div>
          <div className="grid grid-cols-1 gap-7 md:grid-cols-3 md:gap-8">
            {rituals.map((ritual) => (
              <article className="border-t border-border pt-5" key={ritual.title}>
                <div className="mb-2 flex items-baseline justify-between gap-4">
                  <h3 className="text-[11px] font-medium uppercase tracking-[0.11em]">{ritual.title}</h3>
                  <span className="shrink-0 font-mono text-[10px] text-muted">{ritual.duration}</span>
                </div>
                <p className="text-xs leading-6 text-muted">{ritual.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto grid max-w-[1344px] grid-cols-1 items-center gap-10 border-t border-border/80 px-6 py-16 sm:px-8 md:gap-14 md:py-20 lg:grid-cols-12 lg:px-12" id="gastronomy">
          <div className="image-frame relative aspect-[4/3] overflow-hidden border border-border/70 bg-linen-200 lg:col-span-7">
            <Image alt="Сезонное фермерское блюдо на льняной скатерти в мягком утреннем свете" className="object-cover" fill sizes="(max-width: 1024px) 100vw, 58vw" src={imagePath("/images/gastronomy.jpg")} />
          </div>
          <div className="lg:col-span-5 lg:pl-3">
            <SectionLabel>Сезонный стол</SectionLabel>
            <h2 className="display-heading text-4xl leading-[1.08] sm:text-[2.7rem]">Вкус чистой земли</h2>
            <p className="mt-5 text-sm leading-7 text-muted sm:text-[15px]">
              Овощи и травы из собственного биодинамического сада, местное оливковое масло, дикие злаки и меню, созданное с учётом биоритмов и нутрициологии.
            </p>
            <ul className="my-6 space-y-3 border-y border-border/70 py-5 text-xs leading-5 text-charcoal/90">
              <li className="flex gap-3"><span aria-hidden="true" className="mt-[7px] size-1.5 shrink-0 rounded-full bg-charcoal/60" />Локальные биодинамические ингредиенты</li>
              <li className="flex gap-3"><span aria-hidden="true" className="mt-[7px] size-1.5 shrink-0 rounded-full bg-charcoal/60" />Индивидуальное меню от нутрициолога</li>
              <li className="flex gap-3"><span aria-hidden="true" className="mt-[7px] size-1.5 shrink-0 rounded-full bg-charcoal/60" />Авторские травяные сборы и настойки</li>
            </ul>
            <a className="editorial-link inline-flex items-center" href="mailto:sanctuary@still-retreats.com?subject=Сезонное%20меню">
              Узнать о сезонном меню <span aria-hidden="true" className="ml-2 font-serif text-lg">→</span>
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-16 text-center sm:px-8 md:py-24" id="journal">
          <SectionLabel>Отзывы гостей</SectionLabel>
          <blockquote className="font-serif text-[1.7rem] italic leading-snug text-charcoal sm:text-3xl md:text-[2.2rem]">
            «STILL: редкое место, где замедление времени ощущается физически. Лишь чистая гармония камня, света и тишины.»
          </blockquote>
          <cite className="mt-6 block text-[10px] font-normal not-italic uppercase tracking-[0.16em] text-muted sm:text-[11px]">
            Элеонора фон Берг · Главный редактор архитектурного вестника
          </cite>
        </section>
      </main>

      <footer className="mt-auto border-t border-border/70 bg-[#f0ece5] pt-14 pb-8 md:pt-[88px] md:pb-16" id="book">
        <div className="mx-auto w-[calc(100%_-_3rem)] max-w-[1648px] sm:w-[calc(100%_-_4rem)] lg:w-[calc(100%_-_6rem)]">
          <div className="mb-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:mb-[76px] lg:grid-cols-2 lg:gap-x-10 xl:grid-cols-4">
            <div>
              <a className="mb-6 inline-block pl-[0.25em] font-serif text-[30px] font-light uppercase leading-none tracking-[0.25em]" href="#hero">STILL</a>
              <p className="max-w-[350px] text-sm leading-6 text-muted">Экосистема премиального уединенного отдыха, архитектуры спокойствия и бережной заботы о внутреннем мире.</p>
            </div>
            <div>
              <h2 className="eyebrow mb-5 text-charcoal">Локации</h2>
              <ul className="space-y-2.5 text-sm leading-6 text-muted">
                <li>Тосканские холмы, Италия</li>
                <li>Майорка, Северный склон</li>
                <li>Альпийское святилище, Швейцария</li>
                <li>Алтайские террасы, Россия</li>
              </ul>
            </div>
            <div>
              <h2 className="eyebrow mb-5 text-charcoal">Журнал тишины</h2>
              <p className="mb-4 max-w-sm text-sm leading-5 text-muted">Получайте редкие эссе об архитектуре и приватные приглашения на ретриты.</p>
              <form action="mailto:sanctuary@still-retreats.com?subject=Журнал%20тишины" className="space-y-2.5" encType="text/plain" method="post">
                <label className="sr-only" htmlFor="newsletter-email">Ваш e-mail</label>
                <input className="h-12 w-full border border-border bg-linen-50/75 px-5 text-sm text-charcoal outline-none placeholder:text-muted/65 focus:border-charcoal" id="newsletter-email" name="email" placeholder="Ваш e-mail" required type="email" />
                <button className="h-11 w-full bg-charcoal text-[10px] font-medium uppercase tracking-[0.16em] text-linen-50 transition-colors hover:bg-charcoal/85" type="submit">Подписаться</button>
              </form>
            </div>
            <div>
              <h2 className="eyebrow mb-5 text-charcoal">Контакты</h2>
              <p className="mb-1 text-sm text-muted">Консьерж-служба:</p>
              <a className="block text-sm font-medium text-charcoal" href="tel:+390558924100">+39 (0) 55 892 4100</a>
              <p className="mb-1 mt-5 text-sm text-muted">Прием заявок:</p>
              <a className="block break-all text-sm font-medium text-charcoal" href="mailto:sanctuary@still-retreats.com">sanctuary@still-retreats.com</a>
              <a className="editorial-link mt-10 inline-flex border-b border-charcoal pb-1" href="mailto:sanctuary@still-retreats.com?subject=Бронирование%20номера">
                Забронировать номер <span aria-hidden="true" className="ml-2">→</span>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-5 border-t border-border/80 pt-7 text-xs leading-5 text-muted lg:flex-row lg:items-center lg:justify-between md:pt-10">
            <p>© 2025 STILL Retreats &amp; Sanctuaries. Все права защищены.</p>
            <nav aria-label="Правовая информация" className="flex flex-wrap gap-x-4 gap-y-2 sm:gap-x-6 lg:justify-end">
              <a className="hover:text-charcoal" href="mailto:sanctuary@still-retreats.com?subject=Конфиденциальность">Конфиденциальность</a>
              <a className="hover:text-charcoal" href="mailto:sanctuary@still-retreats.com?subject=Условия%20пребывания">Условия пребывания</a>
              <a className="hover:text-charcoal" href="#sanctuary">Архитектурный манифест</a>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
