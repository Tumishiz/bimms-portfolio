"use client";

import {
  ArrowUpRight,
  Check,
  Download,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { ThemeSwitcher } from "@/components/theme-switcher";

const services = [
  {
    number: "01",
    title: "Facility management",
    text: "Thoughtful systems that keep spaces safe, functional, and comfortable every day.",
    icon: ShieldCheck,
  },
  {
    number: "02",
    title: "Transport & logistics",
    text: "Reliable movement of people, goods, and ideas across every part of your operation.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Cleaning & fumigation",
    text: "All-in-one care that protects your property and creates a healthier environment.",
    icon: Check,
  },
  {
    number: "04",
    title: "Farm settlement setup",
    text: "Practical planning and on-ground coordination for productive, well-run settlements.",
    icon: ArrowUpRight,
  },
];

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) =>
      event.key === "Escape" && setMenuOpen(false);
    const closeOnDesktop = () => window.innerWidth >= 768 && setMenuOpen(false);
    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("resize", closeOnDesktop);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("resize", closeOnDesktop);
    };
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <motion.header
        initial={reduceMotion ? false : { opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10"
      >
        <a
          href="#top"
          className="flex items-center gap-3"
          aria-label="Bimms Consulting home"
        >
          <Image
            src="/logo.png"
            alt=""
            width={40}
            height={40}
            className="size-10 rounded-full object-contain"
            priority
          />
          <span className="font-semibold tracking-tight">
            Bimms{" "}
            <span className="font-normal text-muted-foreground">
              Consulting
            </span>
          </span>
        </a>
        <nav
          className={`${menuOpen ? "flex" : "hidden"} absolute left-6 right-6 top-20 z-10 flex-col gap-5 rounded-2xl border border-border bg-background p-6 shadow-xl md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
        >
          <a
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            href="#about"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            href="#services"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </a>
          <a
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
          <a
            href="/ABIOLA-ABIMBOLA CV-26.docx"
            download
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            Download CV <Download className="size-4" />
          </a>
        </nav>
        <div className={"flex items-center gap-2"}>
          <ThemeSwitcher />
          <button
            className="md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </motion.header>

      <section
        id="top"
        className="mx-auto grid max-w-7xl items-center gap-14 px-6 pb-24 pt-14 lg:grid-cols-[1.05fr_.95fr] lg:px-10 lg:pb-32 lg:pt-24"
      >
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
        >
          <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-accent">
            <span className="h-px w-8 bg-accent" /> Real estate operations
          </p>
          <h1 className="max-w-3xl font-serif text-6xl leading-[0.98] tracking-[-0.04em] sm:text-7xl lg:text-[6.5rem]">
            Built to <em className="text-accent">deliver.</em>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
            Not just build — we build for safety, comfort, and the smooth
            running of the places people call home.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Let&apos;s work together <ArrowUpRight className="size-4" />
            </a>
            <a
              href="#services"
              className="text-sm font-semibold underline decoration-border underline-offset-8 hover:decoration-foreground"
            >
              Explore services
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.16, ease: "easeOut" }}
          className="relative flex min-h-[390px] items-end justify-center lg:min-h-[500px]"
        >
          <div className="absolute right-4 top-0 h-72 w-72 rounded-full border border-accent/40 sm:right-16 sm:h-96 sm:w-96" />
          <div className="relative z-[1] flex h-80 w-64 flex-col justify-between rounded-t-full bg-secondary px-8 pb-8 pt-12 shadow-2xl sm:h-[430px] sm:w-[350px]">
            <div className="flex justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span>Since 2024</span>
              <span>01 / 04</span>
            </div>
            <div>
              <div className="mb-3 font-serif text-6xl italic text-accent sm:text-8xl">
                AA
              </div>
              <p className="max-w-[190px] text-sm leading-6 text-muted-foreground">
                Making places work better for the people inside them.
              </p>
            </div>
          </div>
          <div className="absolute bottom-8 left-0 z-[2] max-w-[180px] rounded-2xl border border-border bg-background p-4 shadow-lg sm:left-6">
            <p className="text-2xl font-semibold text-accent">04</p>
            <p className="mt-1 text-xs leading-5 text-muted-foreground">
              Ways we make operations feel effortless
            </p>
          </div>
        </motion.div>
      </section>

      <section id="about" className="border-y border-border bg-secondary/50">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[.65fr_1fr] lg:px-10 lg:py-28">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">
              A little about me
            </p>
            <div className="relative mt-8 aspect-[474/670] overflow-hidden rounded-2xl bg-secondary shadow-lg">
              <Image
                src="/bimms.jpg"
                alt="Biola of Bimms Consulting"
                fill
                sizes="(min-width: 1024px) 320px, (min-width: 640px) 384px, calc(100vw - 3rem)"
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div>
            <h2 className="max-w-3xl font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
              Hi, I&apos;m Biola. I turn the moving parts of real estate into{" "}
              <em className="text-accent">peace of mind.</em>
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground">
              I&apos;m a Product Management Trainee who runs both facility and
              transport management. I&apos;m inspired to add value into the real
              estate space by solving logistics problems and making facility
              maintenance simpler, safer, and more human.
            </p>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28"
      >
        <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">
              What we do
            </p>
            <h2 className="mt-4 font-serif text-5xl tracking-tight">
              One partner.
              <br />
              <em className="text-accent">Many solutions.</em>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-muted-foreground">
            From the ground up to the day-to-day, Bimms Consulting brings care
            to every detail.
          </p>
        </div>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {services.map(({ number, title, text, icon: Icon }) => (
            <article
              key={number}
              className="group bg-background p-7 transition-colors hover:bg-secondary sm:p-9"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs text-accent">{number}</span>
                <Icon
                  className="size-5 text-muted-foreground transition-colors group-hover:text-accent"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="mt-16 font-serif text-2xl">{title}</h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">
                {text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-12 px-6 py-20 lg:flex-row lg:items-end lg:px-10 lg:py-24">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">
              Start a conversation
            </p>
            <h2 className="mt-5 max-w-2xl font-serif text-5xl leading-tight tracking-tight sm:text-6xl">
              Let&apos;s make your space work{" "}
              <em className="text-accent">better.</em>
            </h2>
          </div>
          <div className="flex flex-col gap-5 text-sm">
            <a
              className="flex items-center gap-3 hover:text-accent"
              href="tel:+2347086082634"
            >
              <Phone className="size-4" /> 0708 6082 634
            </a>
            <a
              className="flex items-center gap-3 hover:text-accent"
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle className="size-4" /> Biola Bimms
            </a>
            <a
              href="/ABIOLA-ABIMBOLA CV-26.docx"
              download
              className="mt-3 inline-flex w-fit items-center gap-2 rounded-full bg-accent px-5 py-3 font-semibold text-accent-foreground hover:opacity-90"
            >
              Download my CV <Download className="size-4" />
            </a>
          </div>
        </div>
      </section>
      <footer className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <span>© 2024 Bimms Consulting</span>
        <span>Built to deliver.</span>
      </footer>
    </main>
  );
}
