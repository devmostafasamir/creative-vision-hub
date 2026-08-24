import { motion, useReducedMotion } from "motion/react";
import portrait from "@/assets/portrait-dev.png";
import { Magnetic } from "@/components/motion-text";
import { Parallax } from "@/components/reveal";
import { tools } from "@/data/projects";

const uniqueTools = Array.from(new Set(tools));

const WORD_BEFORE = ["P", "o", "r", "t", "f"];
const WORD_AFTER = ["l", "i", "o"];

export function Hero() {
  const reduce = useReducedMotion();

  const letter = {
    hidden: { y: "110%", opacity: 0 },
    show: (i: number) => ({
      y: "0%",
      opacity: 1,
      transition: reduce
        ? { duration: 0 }
        : { delay: 0.12 + i * 0.055, duration: 0.85, ease: [0.16, 1, 0.3, 1] as const },
    }),
  };

  const pillDelay = 0.12 + WORD_BEFORE.length * 0.055;

  return (
    <section id="top" className="dot-grid relative overflow-hidden px-4 pt-10 sm:px-6 lg:pt-14">
      <div
        aria-hidden
        className="drift-blob pointer-events-none absolute -top-28 right-0 size-80 rounded-full bg-brand-orange/15 blur-3xl"
      />
      <div
        aria-hidden
        className="drift-blob pointer-events-none absolute -bottom-32 -left-24 size-96 rounded-full bg-brand-sky/20 blur-3xl"
        style={{ animationDelay: "-6s" }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Giant wordmark */}
        <h1 className="sr-only">Mostafa Samir — Healthcare Full-Stack Engineer Portfolio 2026</h1>
        <div
          aria-hidden
          className="flex w-full items-center justify-center overflow-hidden font-display leading-[0.8] font-extrabold tracking-[-0.05em] text-foreground"
          style={{ fontSize: "clamp(3.5rem, 15.5vw, 13rem)" }}
        >
          {WORD_BEFORE.map((c, i) => (
            <span key={`b-${i}`} className="inline-block overflow-hidden">
              <motion.span
                className="inline-block"
                variants={letter}
                custom={i}
                initial="hidden"
                animate="show"
              >
                {c}
              </motion.span>
            </span>
          ))}

          {/* The stadium "o" */}
          <motion.span
            className="mx-[0.06em] inline-block rounded-full border-[0.115em] border-current"
            style={{ height: "0.52em" }}
            initial={reduce ? { width: "1.05em", opacity: 1 } : { width: "0.2em", opacity: 0 }}
            animate={{ width: "1.05em", opacity: 1 }}
            transition={
              reduce
                ? { duration: 0 }
                : { delay: pillDelay, duration: 1.1, ease: [0.16, 1, 0.3, 1] }
            }
          />

          {WORD_AFTER.map((c, i) => (
            <span key={`a-${i}`} className="inline-block overflow-hidden">
              <motion.span
                className="inline-block"
                variants={letter}
                custom={WORD_BEFORE.length + 1 + i}
                initial="hidden"
                animate="show"
              >
                {c}
              </motion.span>
            </span>
          ))}
        </div>

        <motion.p
          className="mx-auto mt-4 max-w-xl text-center text-sm text-muted-foreground sm:text-base"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          EHR platforms, telehealth and remote monitoring — built secure, HIPAA-aligned and fast.
        </motion.p>

        {/* Showcase card */}
        <motion.div
          className="relative mt-8 sm:mt-10"
          initial={reduce ? false : { opacity: 0, y: 60, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.45, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="slide-card relative overflow-hidden rounded-[2rem] bg-brand-sky/25 p-3 sm:rounded-[2.5rem] sm:p-4">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-brand-sky/40 sm:rounded-[2rem]">
              <Parallax strength={-18} className="absolute inset-[-6%]">
                <motion.img
                  src={portrait}
                  alt="Illustrated portrait of Mostafa Samir, a healthcare full-stack engineer"
                  width={1024}
                  height={1024}
                  className="float-slow size-full object-cover object-top"
                  initial={reduce ? false : { scale: 1.12 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                />
              </Parallax>
            </div>
          </div>
        </motion.div>

        {/* Bottom row: scroll dot + year */}
        <motion.div
          className="relative mt-6 flex items-center justify-between gap-4"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-wrap items-center gap-3">
            <Magnetic strength={10}>
              <a
                href="#work"
                className="press sheen inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                View projects
              </a>
            </Magnetic>
            <Magnetic strength={10}>
              <a
                href="#contact"
                className="press edge inline-flex items-center gap-2 rounded-full bg-card px-5 py-2.5 text-sm font-semibold hover:bg-secondary"
              >
                Get in touch
              </a>
            </Magnetic>
          </div>

          <Magnetic strength={14}>
            <a
              href="#about"
              aria-label="Scroll to about section"
              className="press absolute left-1/2 hidden size-14 -translate-x-1/2 items-center justify-center rounded-full bg-card shadow-[var(--shadow-image)] edge sm:inline-flex"
            >
              <motion.span
                className="block size-2 rounded-full bg-foreground"
                animate={reduce ? {} : { y: [-3, 3, -3] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />
            </a>
          </Magnetic>

          <div className="flex items-center gap-2 font-display text-2xl font-extrabold tracking-[-0.03em] sm:text-4xl">
            2026
            <motion.span
              aria-hidden
              className="inline-flex size-7 items-center justify-center rounded-full border-2 border-current text-xs sm:size-9 sm:text-sm"
              animate={reduce ? {} : { rotate: [0, 12, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              ˘‿˘
            </motion.span>
          </div>
        </motion.div>

        {/* Tools marquee */}
        <div className="mt-6">
          <div className="edge-card overflow-hidden rounded-2xl bg-card py-2.5 sm:rounded-full sm:py-3">
            <div className="marquee-track gap-5 px-3 sm:gap-8 sm:px-4">
              {[...uniqueTools, ...uniqueTools].map((tool, i) => (
                <span
                  key={`tool-${tool}-${i}`}
                  className="flex shrink-0 items-center gap-2 text-[0.68rem] font-semibold tracking-wide whitespace-nowrap text-muted-foreground uppercase transition-colors hover:text-brand-orange sm:gap-3 sm:text-sm"
                >
                  <span className="size-1.5 shrink-0 rounded-full bg-brand-orange" />
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
