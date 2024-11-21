/* eslint-disable @next/next/no-sync-scripts */
import Image from "next/image";
import Link from "next/link";


const HomePage = () => {
  return (
    <>
  <header className="fixed top-0 z-20 w-full">
    <nav className="2lg:px-12 mx-auto max-w-7xl px-6 py-12 lg:px-12 xl:px-6 2xl:px-0">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-2xl font-light tracking-widest text-white">
          webSrc
        </Link>
        <Link
          href="#contact"
          className="relative py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10"
        >
          <span className="relative">Get in touch</span>
        </Link>
      </div>
    </nav>
  </header>
  <main className="background relative">
    <section id="home" className="relative flex min-h-screen items-center">
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] bg-gradient-to-b from-black/10 via-black/20 to-black"
      />
      <Image
        src="/landing-images/woman-in-dark.webp"
        className="fixed inset-0 h-full w-full object-cover"
        alt="woman in dark"
        width={4160}
        height={6240}
      />
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-40 pt-60 lg:px-12 xl:px-6 2xl:px-0">
        <div className="pb-12 media-h:md:pb-32 media-h:lg:pb-12 xl:pb-12">
          <h1
            data-rellax-speed={-3}
            data-rellax-xs-speed={0}
            data-rellax-mobile-speed={0}
            className="rellax text-6xl font-bold text-white sm:text-8xl md:text-9xl xl:leading-tight"
            
          >
            Creative Duo
          </h1>
        </div>
        <div>
          <div className="ml-auto md:w-2/3 md:pt-12 lg:w-1/2">
            <p className="mb-20 text-lg font-light text-white sm:text-2xl xl:leading-normal">
              On an endless journey to create experiences that inspire others.
              Always motived by design that&apos;s honest, aesthetic and natural.
              Probably the only designer you’ll ever need.
            </p>
            <Link
              data-rellax-speed={1}
              data-rellax-xs-speed={0}
              data-rellax-mobile-speed={0}
              href="#work"
              className="rellax relative inline-block py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10"
              
            >
              <span className="relative">See our work</span>
            </Link>
          </div>
        </div>
        <div
          data-rellax-speed={-5}
          data-rellax-xs-speed={0}
          data-rellax-mobile-speed={0}
          className="rellax relative mt-16 ml-auto w-max md:mt-32 md:ml-0 xl:-mt-16"
          
        >
          <span className="text-xs font-light uppercase tracking-widest text-white">
            Follow us
          </span>
          <ul className="relative z-20 mt-4 space-y-2 text-sm font-light text-white">
            <li>
              <Link href="#" target="_blank">
                001 ------ Instagram
              </Link>
            </li>
            <li>
              <Link href="#" target="_blank">
                002 ------ Behance
              </Link>
            </li>
            <li>
              <Link href="#" target="_blank">
                003 ------ Twitter
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section id="work" className="relative z-10 bg-black pb-20 lg:pt-0">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 xl:pb-96 2xl:px-0">
        <div
          data-rellax-speed={-3}
          data-rellax-xs-speed={0}
          data-rellax-mobile-speed={0}
          className="rellax flex flex-wrap items-center gap-6"
          
        >
          <h2 className="text-7xl font-bold text-white xl:text-8xl">
            Our work
          </h2>
          <span className="h-max rounded-full border border-white/40 px-2 py-1 text-xs tracking-wider text-white">
            12 Projects
          </span>
        </div>
        <div className="relative mt-20 gap-20 gap-x-6 space-y-20 sm:grid sm:grid-cols-2 sm:space-y-0 md:mt-72 lg:mt-60">
          <Link
            className="rellax group col-span-2 lg:col-span-1"
            data-rellax-mobile-speed={0}
            data-rellax-speed={-2}
            data-rellax-tablet-speed={0}
            data-rellax-xs-speed={0}
            href="/pages/project"
           
          >
            <div className="relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 group-hover:before:origin-bottom group-hover:before:scale-y-0">
              <Image
                className="transition duration-500"
                src="/landing-images/gild-cover.webp"
                alt="gild cover"
                width={2000}
                height={1333}
              />
            </div>
            <div className="flex items-center justify-between p-4">
              <h3 className="text-2xl font-normal text-white">Gild Sport</h3>
              <span className="h-max rounded-full border border-white/30 px-2 py-1 text-xs tracking-wider text-white">
                01 / 2023
              </span>
            </div>
          </Link>
          <Link
            className="rellax group block"
            data-rellax-mobile-speed={0}
            data-rellax-speed={1}
            data-rellax-tablet-speed={0}
            data-rellax-xs-speed={0}
            href="/pages/project"
            
          >
            <div className="relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 group-hover:before:origin-bottom group-hover:before:scale-y-0">
              <Image
                className="transition duration-500"
                src="/landing-images/project2.webp"
                alt="project description"
                width={1380}
                height={920}
              />
            </div>
            <div className="flex items-center justify-between p-4">
              <h3 className="text-2xl font-normal text-white">Project Name</h3>
              <span className="h-max rounded-full border border-white/30 px-2 py-1 text-xs tracking-wider text-white">
                01 / 2023
              </span>
            </div>
          </Link>
          <Link
            className="rellax group block"
            data-rellax-mobile-speed={0}
            data-rellax-speed={-2}
            data-rellax-tablet-speed={0}
            data-rellax-xs-speed={0}
            href="/pages/project"
           
          >
            <div className="relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 group-hover:before:origin-bottom group-hover:before:scale-y-0">
              <Image
                className="transition duration-500"
                src="/landing-images/project3.webp"
                alt="project description"
                width={826}
                height={826}
              />
            </div>
            <div className="flex items-center justify-between p-4">
              <h3 className="text-2xl font-normal text-white">Project Name</h3>
              <span className="h-max rounded-full border border-white/30 px-2 py-1 text-xs tracking-wider text-white">
                01 / 2023
              </span>
            </div>
          </Link>
          <Link
            className="rellax group col-span-2 block lg:col-span-1"
            data-rellax-mobile-speed={0}
            data-rellax-speed={0}
            data-rellax-tablet-speed={0}
            data-rellax-xs-speed={0}
            href="/pages/project"
          
          >
            <div className="relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 group-hover:before:origin-bottom group-hover:before:scale-y-0">
              <Image
                className="transition duration-500"
                src="/landing-images/project4.webp"
                alt="project description"
                width={1380}
                height={1380}
              />
            </div>
            <div className="flex items-center justify-between p-4">
              <h3 className="text-2xl font-normal text-white">Project Name</h3>
              <span className="h-max rounded-full border border-white/30 px-2 py-1 text-xs tracking-wider text-white">
                01 / 2023
              </span>
            </div>
          </Link>
          <Link
            className="rellax group block"
            data-rellax-mobile-speed={0}
            data-rellax-speed={-3}
            data-rellax-tablet-speed={0}
            data-rellax-xs-speed={0}
            href="/pages/project"
           
          >
            <div className="relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 group-hover:before:origin-bottom group-hover:before:scale-y-0">
              <Image
                className="transition duration-500"
                src="/landing-images/project5.webp"
                alt="project description"
                width={740}
                height={1112}
              />
            </div>
            <div className="flex items-center justify-between p-4">
              <h3 className="text-2xl font-normal text-white">Project Name</h3>
              <span className="h-max rounded-full border border-white/30 px-2 py-1 text-xs tracking-wider text-white">
                01 / 2023
              </span>
            </div>
          </Link>
          <Link
            className="rellax group block"
            data-rellax-mobile-speed={0}
            data-rellax-speed={0}
            data-rellax-tablet-speed={0}
            data-rellax-xs-speed={0}
            href="/pages/project"
           
          >
            <div className="relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 group-hover:before:origin-bottom group-hover:before:scale-y-0">
              <Image
                className="transition duration-500"
                src="/landing-images/project6.webp"
                alt="project description"
                width={740}
                height={1110}
              />
            </div>
            <div className="flex items-center justify-between p-4">
              <h3 className="text-2xl font-normal text-white">Project Name</h3>
              <span className="h-max rounded-full border border-white/30 px-2 py-1 text-xs tracking-wider text-white">
                01 / 2023
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
    <section
      id="services"
      className="relative bg-black pb-20 pt-32 md:pb-0 lg:pb-0 xl:pt-96"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 2xl:px-0">
        <div className="flex flex-wrap items-center gap-6">
          <h2 className="text-7xl font-bold text-white xl:text-8xl">
            Our services
          </h2>
          <span className="h-max rounded-full border border-white/40 px-2 py-1 text-xs tracking-wider text-white">
            03 services
          </span>
        </div>
        <div className="mt-24">
          <div className="">
            <div className="grid gap-12 sm:grid-cols-2 xl:grid-cols-3">
              <div>
                <div className="group border-b border-white/30 pb-8">
                  <div className="flex flex-col gap-4 divide-y divide-white/30">
                    <span className="inline-block text-white/60">001</span>
                    <h3 className="bg-black pt-6 text-3xl text-white">
                      Branding for Agencies
                    </h3>
                  </div>
                  <div className="mt-0 overflow-hidden transition-all duration-500 group-hover:mt-8">
                    <p className="max-h-0 font-light text-white/70 transition-all duration-500 group-hover:max-h-24 md:text-xl">
                      Sapiente, rem debitis obcaecati facilis earum repudiandae
                      enim ratione nihil iusto ea. Officia sint perspiciatis ad
                      ducimus qui.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="group border-b border-white/30 pb-8">
                  <div className="flex flex-col gap-4 divide-y divide-white/30">
                    <span className="inline-block text-white/60">002</span>
                    <h3 className="bg-black pt-6 text-3xl text-white">
                      Branding for Agencies
                    </h3>
                  </div>
                  <div className="mt-0 overflow-hidden transition-all duration-500 group-hover:mt-8">
                    <p className="max-h-0 font-light text-white/70 transition-all duration-500 group-hover:max-h-24 md:text-xl">
                      Sapiente, rem debitis obcaecati facilis earum repudiandae
                      enim ratione nihil iusto ea. Officia sint perspiciatis ad
                      ducimus qui.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="group border-b border-white/30 pb-8">
                  <div className="flex flex-col gap-4 divide-y divide-white/30">
                    <span className="inline-block text-white/60">003</span>
                    <h3 className="bg-black pt-6 text-3xl text-white">
                      Branding for Agencies
                    </h3>
                  </div>
                  <div className="mt-0 overflow-hidden transition-all duration-500 group-hover:mt-8">
                    <p className="max-h-0 font-light text-white/70 transition-all duration-500 group-hover:max-h-24 md:text-xl">
                      Sapiente, rem debitis obcaecati facilis earum repudiandae
                      enim ratione nihil iusto ea. Officia sint perspiciatis ad
                      ducimus qui.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      id="about"
      className="relative z-10 bg-black pb-20 pt-32 md:pb-0 md:pt-0 lg:pb-0"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 2xl:px-0">
        <div
          data-rellax-speed="-0.4"
          data-rellax-xs-speed={0}
          data-rellax-mobile-speed={0}
          className="rellax flex flex-wrap items-center gap-6"
          
        >
          <h2 className="text-7xl font-bold text-white xl:text-8xl">
            About us
          </h2>
          <span className="h-max rounded-full border border-white/40 px-2 py-1 text-xs tracking-wider text-white">
            01 Duo
          </span>
        </div>
        <div className="mt-24 md:mt-72">
          <div className="grid gap-6">
            <div className="grid md:grid-cols-3">
              <div className="overflow-hidden md:col-span-2">
                <Image
                  src="/landing-images/un-duo.webp"
                  alt="unnamed duo photo"
                  width={1500}
                  height={1000}
                />
              </div>
            </div>
            <div
              data-rellax-speed={1}
              data-rellax-xs-speed={0}
              data-rellax-mobile-speed={0}
              data-rellax-tablet-speed="0.5"
              className="rellax ml-auto md:w-3/5 lg:w-2/5"
             
            >
              <p className="mt-12 text-2xl font-light text-white">
                Minima iure saepe necessitatibus ipsa voluptatibus, minus
                voluptatem in facere maxime quae repellendus nisi inventore
                libero impedit eligendi, accusantium consequuntur consectetur
                quidem?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      id="contact"
      className="relative z-10 bg-gradient-to-b from-black via-black/80 to-black pt-32 backdrop-blur-3xl lg:pb-32 lg:pt-0"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 2xl:px-0">
        <div className="flex flex-wrap items-center gap-6">
          <h2 className="text-7xl font-bold text-white xl:text-8xl">
            Let&apos;s work together
          </h2>
          <span className="h-max rounded-full border border-white/40 px-2 py-1 text-xs tracking-wider text-white">
            __
          </span>
        </div>
        <div className="mt-24">
          <div className="grid gap-6 border-t border-white/30 pt-24 lg:grid-cols-3 lg:gap-24">
            <div className="lg:col-span-2">
              <form action="" className="mx-auto space-y-8 md:w-3/4">
                <div className="grid gap-8 sm:grid-cols-2 sm:gap-4">
                  <div>
                    <label
                      htmlFor="firstname"
                      className="tracking-wide text-white"
                    >
                      Fistname
                    </label>
                    <input
                      type="text"
                      id="fistname"
                      name="fistname"
                      autoComplete="name"
                      placeholder="Your fistname"
                      className="mt-3 w-full border border-white/20 bg-transparent px-4 py-3 text-white/70 outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastname"
                      className="tracking-wide text-white"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      autoComplete="family-name"
                      placeholder="Your last name"
                      className="mt-3 w-full border border-white/20 bg-transparent px-4 py-3 text-white/70 outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="tracking-wide text-white">
                    Mail address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your mail address"
                    className="mt-3 w-full border border-white/20 bg-transparent px-4 py-3 text-white/70 outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="tracking-wide text-white">
                    Your message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    cols={30}
                    rows={6}
                    placeholder="Your message"
                    className="mt-3 w-full border border-white/20 bg-transparent px-4 py-3 text-white/70 outline-none focus:ring-1 focus:ring-primary"
                    defaultValue={""}
                  />
                </div>
                <button
                  type="submit"
                  className="group ml-auto flex h-12 w-auto items-center overflow-hidden bg-white px-5 transition-all duration-300 hover:bg-primary"
                >
                  <span className="relative uppercase tracking-wide text-black group-hover:text-white">
                    {" "}
                    Send message{" "}
                  </span>
                </button>
              </form>
            </div>
            <div className="mt-8 border border-white/30 p-8 sm:p-12">
              <div>
                <h3 className="text-xs font-light uppercase tracking-widest text-white">
                  Address
                </h3>
                <p className="mt-4 text-white">
                  Riverside 25, San Francisco, California
                </p>
              </div>
              <div className="mt-16">
                <h3 className="text-xs font-light uppercase tracking-widest text-white">
                  Contact Info
                </h3>
                <ul className="relative z-20 mt-4 space-y-2 font-light text-white">
                  <li>
                    <Link href="tel:+918109041335">
                      Phone ------ +91 8109041335
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:mohammed.poolwala@gmail.com">
                      E-mail ------- mohammed.poolwala@gmail.com
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-16">
                <h3 className="text-xs font-light uppercase tracking-widest text-white">
                  Follow us
                </h3>
                <ul className="relative z-20 mt-4 space-y-2 font-light text-white">
                  <li>
                    <Link href="#" target="_blank">
                      001 ------ Instagram
                    </Link>
                  </li>
                  <li>
                    <Link href="#" target="_blank">
                      002 ------ Behance
                    </Link>
                  </li>
                  <li>
                    <Link href="#" target="_blank">
                      003 ------ Twitter
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <footer className="relative bg-black pt-32 backdrop-opacity-0">
    <div className="mx-auto max-w-7xl px-6 pb-12 lg:px-12 xl:px-6 2xl:px-0">
      <div>
        <div className="flex flex-wrap items-center gap-6">
          <h2 className="text-3xl text-white xl:text-6xl">Instagram</h2>
          <Link
            href="#"
            target="_blank"
            className="h-max rounded-full border border-white/40 px-2 py-1 text-xs tracking-wider text-white"
          >
            @WebSrc
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-3 md:mt-16 lg:mt-24">
          <Link
            href="#"
            target="_blank"
            className="relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 hover:before:origin-bottom hover:before:scale-y-0"
          >
            <span className="sr-only">Instagram feed</span>
            <Image
              className="transition duration-500"
              src="/landing-images/gild-cover.webp"
              alt="insta feed cover"
              width={2000}
              height={1333}
            />
          </Link>
          <Link
            href="#"
            target="_blank"
            className="relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 hover:before:origin-bottom hover:before:scale-y-0"
          >
            <span className="sr-only">Instagram feed</span>
            <Image
              className="transition duration-500"
              src="/landing-images/gild-cover2.webp"
              alt="insta feed cover"
              width={2000}
              height={1334}
            />
          </Link>
          <Link
            href="#"
            target="_blank"
            className="relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 hover:before:origin-bottom hover:before:scale-y-0"
          >
            <span className="sr-only">Instagram feed</span>
            <Image
              className="transition duration-500"
              src="/landing-images/gild-cover.webp"
              alt="insta feed cover"
              width={1800}
              height={1200}
            />
          </Link>
        </div>
      </div>
      <div className="mt-12 md:mt-16 lg:mt-24">
        <div className="space-y-8 md:space-y-12">
          <Link
            href="/"
            className="text-2xl font-light tracking-widest text-white"
          >
            <Image
              className="h-8 w-auto brightness-200"
              src="/favicon.svg"
              alt="logo mark"
              width={100}
              height={100}
            />
          </Link>
          <nav>
            <ul className="flex flex-wrap gap-6 text-sm uppercase tracking-wider text-white">
              <li>
                <Link href="#home">Home</Link>
              </li>
              <li>
                <Link href="#work">Work</Link>
              </li>
              <li>
                <Link href="#services">Services</Link>
              </li>
              <li>
                <Link className="block w-max" href="#about">
                  About us
                </Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <div className="flex flex-wrap justify-between gap-3">
            <span className="text-sm text-white/50">
              © Radiant 2024 - Present
            </span>
            <span className="text-sm text-white/50">
              Designed by{" "}
              <Link href="https://websrc.uk/" className="text-white">
                WebSrc
              </Link>{" "}
              in India{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
    <script src="/js/load.js"></script>
  </footer>

</>

  );
};

export default HomePage;
