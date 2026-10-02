import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Clock3,
  Globe2,
  Menu,
  MessageCircle,
  Plane,
  PlaneTakeoff,
  Route,
  ShieldCheck,
  Sparkles,
  Star,
  X,
  Zap,
} from "lucide-react";

/* =========================================================
   IMAGE PLACEHOLDERS
   Replace these Unsplash URLs with your own aviation images.
========================================================= */

const images = {
  hero:
    "https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&w=2200&q=90",

  privateJet:
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=85",

  luxury:
    "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&w=1400&q=85",

  interior:
    "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1400&q=85",

  destination:
    "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1400&q=85",
};

/* =========================================================
   FRAMER MOTION SETTINGS
========================================================= */

const reveal = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

const heroContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const heroItem = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

/* =========================================================
   NAVBAR
========================================================= */

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [experienceOpen, setExperienceOpen] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Destinations", href: "#destinations" },
    { name: "Experiences", href: "#experiences", dropdown: true },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Benefits", href: "#benefits" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-6">
      <div className="mx-auto max-w-[1450px]">

        {/* =================================================
            NAVBAR CONTAINER
        ================================================= */}

        <div
          className={`glass border border-white/10 px-3 py-2 shadow-2xl shadow-black/10 transition-all duration-300 ${
            mobileOpen
              ? "rounded-[28px]"
              : "rounded-full"
          }`}
        >
          <div className="flex h-14 items-center justify-between">

            {/* Logo */}

            <a
              href="#"
              className="flex items-center gap-2.5 pl-2"
              aria-label="Eagle Aviation home"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--bg)]">
                <PlaneTakeoff size={18} strokeWidth={2.2} />
              </span>

              <span className="font-heading text-lg font-medium tracking-tight text-white">
                EAGLE
                <span className="text-[var(--accent)]">.</span>
              </span>
            </a>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================= */}

            <nav className="hidden items-center rounded-full bg-[var(--nav-bg)] px-2 py-1.5 lg:flex">
              {navItems.map((item) => (
                <div key={item.name} className="relative">

                  <a
                    href={item.href}
                    onClick={(e) => {
                      if (item.dropdown) {
                        e.preventDefault();
                        setExperienceOpen(!experienceOpen);
                      }
                    }}
                    className="flex items-center gap-1 rounded-full px-5 py-2.5 text-sm font-medium text-[var(--nav-text)] transition hover:bg-white/50"
                  >
                    {item.name}

                    {item.dropdown && (
                      <ChevronDown
                        size={14}
                        className={`transition-transform ${
                          experienceOpen ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </a>

                  {item.dropdown && (
                    <AnimatePresence>
                      {experienceOpen && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            y: 8,
                            scale: 0.96,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                          }}
                          exit={{
                            opacity: 0,
                            y: 8,
                            scale: 0.96,
                          }}
                          transition={{
                            duration: 0.2,
                          }}
                          className="absolute left-1/2 top-[calc(100%+12px)] w-56 -translate-x-1/2 overflow-hidden rounded-2xl border border-white/10 bg-[#172b28] p-2 shadow-2xl"
                        >
                          {[
                            "Private Charters",
                            "Corporate Travel",
                            "Luxury Escapes",
                          ].map((experience) => (
                            <a
                              key={experience}
                              href="#experiences"
                              className="block rounded-xl px-4 py-3 text-sm text-[var(--muted)] transition hover:bg-white/5 hover:text-white"
                              onClick={() =>
                                setExperienceOpen(false)
                              }
                            >
                              {experience}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* =================================================
                DESKTOP CTA
            ================================================= */}

            <div className="hidden lg:block">
              <a
                href="#contact"
                className="white-button inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-medium text-[var(--bg)] transition duration-300 hover:scale-[1.03] hover:brightness-105"
              >
                Book Your Trip
                <ArrowUpRight size={16} />
              </a>
            </div>

            {/* =================================================
                MOBILE MENU BUTTON
            ================================================= */}

            <motion.button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              whileTap={{ scale: 0.92 }}
              className={`mr-1 flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 lg:hidden ${
                mobileOpen
                  ? "bg-[var(--accent)] text-[var(--bg)] shadow-[0_0_25px_rgba(234,251,123,0.18)]"
                  : "bg-white/10 text-white"
              }`}
              aria-label="Toggle navigation"
              aria-expanded={mobileOpen}
            >
              <AnimatePresence
                mode="wait"
                initial={false}
              >
                <motion.span
                  key={mobileOpen ? "close" : "menu"}
                  initial={{
                    opacity: 0,
                    rotate: -45,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 45,
                    scale: 0.7,
                  }}
                  transition={{
                    duration: 0.18,
                  }}
                  className="flex items-center justify-center"
                >
                  {mobileOpen ? (
                    <X size={21} />
                  ) : (
                    <Menu size={21} />
                  )}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>

          {/* =================================================
              MOBILE NAVIGATION BOX
          ================================================= */}

          <AnimatePresence initial={false}>
            {mobileOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                  y: -8,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                  y: -8,
                }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="overflow-hidden lg:hidden"
              >
                {/* Inner Box */}

                <div className="mt-2 rounded-[22px] border border-white/10 bg-[#101d1b]/95 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">

                  <motion.nav
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col gap-1"
                  >
                    {navItems.map((item, index) => (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        onClick={() =>
                          setMobileOpen(false)
                        }
                        initial={{
                          opacity: 0,
                          x: -15,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay:
                            0.05 + index * 0.055,
                          duration: 0.28,
                          ease: "easeOut",
                        }}
                        whileTap={{
                          scale: 0.98,
                        }}
                        className="group flex items-center justify-between rounded-[15px] px-4 py-3.5 text-sm font-medium text-[var(--muted)] transition-all duration-300 hover:bg-white/5 hover:pl-5 hover:text-white"
                      >
                        <span>{item.name}</span>

                        {item.dropdown && (
                          <ChevronDown
                            size={15}
                            className="text-white/40 transition-transform duration-300 group-hover:translate-y-0.5"
                          />
                        )}
                      </motion.a>
                    ))}

                    {/* Mobile CTA */}

                    <motion.a
                      href="#contact"
                      onClick={() =>
                        setMobileOpen(false)
                      }
                      initial={{
                        opacity: 0,
                        y: 12,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0.32,
                        duration: 0.3,
                      }}
                      whileTap={{
                        scale: 0.98,
                      }}
                      className="mt-2 flex items-center justify-center gap-2 rounded-[15px] bg-[var(--accent)] px-4 py-3.5 text-center text-sm font-medium text-[var(--bg)] shadow-[0_0_25px_rgba(234,251,123,0.10)] transition-all duration-300 hover:brightness-105"
                    >
                      Book Your Trip
                      <ArrowUpRight size={16} />
                    </motion.a>
                  </motion.nav>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}

/* =========================================================
   HERO
========================================================= */

function Hero() {
  return (
    <section className="px-4 pb-10 pt-28 md:px-6 md:pt-32">
      <motion.div
        variants={heroContainer}
        initial="hidden"
        animate="visible"
        className="relative mx-auto flex min-h-[760px] max-w-[1450px] items-center justify-center overflow-hidden rounded-[28px]"
      >
        <img
          src={images.hero}
          alt="Private aircraft flying above clouds"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">

          <motion.div
            variants={heroItem}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-4 py-2 backdrop-blur-md"
          >
            <Sparkles
              size={14}
              className="text-[var(--accent)]"
            />

            <span className="text-xs tracking-[0.15em] text-white/80 uppercase">
              Private Aviation Reimagined
            </span>
          </motion.div>

          <motion.h1
            variants={heroItem}
            className="font-heading text-[clamp(3rem,7vw,6.8rem)] font-light leading-[0.95] tracking-[-0.04em] text-[var(--text)]"
          >
            The{" "}
            <span className="text-[var(--accent)]">
              Exceptional
            </span>{" "}
            Way
            <br />
            to Travel.
          </motion.h1>

          <motion.p
            variants={heroItem}
            className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/75 md:text-lg"
          >
            Fly beyond ordinary with private aviation designed around your
            time, your destination and the way you want to travel.
          </motion.p>

          <motion.div
            variants={heroItem}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href="#contact"
              className="lime-button inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-7 py-4 text-sm font-medium text-[var(--bg)]"
            >
              Book Your Trip
              <ArrowUpRight size={17} />
            </a>

            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/10 px-7 py-4 text-sm text-white backdrop-blur-md transition hover:bg-white/10"
            >
              Explore Eagle
              <ArrowDown size={16} />
            </a>
          </motion.div>
        </div>

        <div className="absolute bottom-6 left-6 right-6 z-10 hidden items-center justify-between md:flex">
          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-black/20 px-4 py-2.5 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />

            <span className="text-xs text-white/75">
              Available Worldwide
            </span>
          </div>

          <div className="rounded-full border border-white/10 bg-black/20 px-4 py-2.5 text-xs text-white/75 backdrop-blur-md">
            Seamless. Private. Yours.
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* =========================================================
   INTRO / ABOUT
========================================================= */

function About() {
  return (
    <section id="about" className="px-6 py-28 md:py-36">
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-end"
      >
        <div>
          <span className="text-xs tracking-[0.2em] text-[var(--accent)] uppercase">
            About Eagle
          </span>

          <h2 className="font-heading mt-5 text-4xl font-light leading-tight tracking-[-0.03em] text-[var(--text)] md:text-6xl">
            Your journey
            <br />
            deserves more.
          </h2>
        </div>

        <div>
          <p className="text-lg leading-8 text-[var(--muted)]">
            Eagle Aviation connects you to the world through thoughtfully
            curated private aviation. From spontaneous weekend escapes to
            critical business journeys, every detail is designed around
            freedom, comfort and your time.
          </p>

          <a
            href="#experiences"
            className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)]"
          >
            Discover the Eagle experience
            <ArrowRight size={16} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

/* =========================================================
   FEATURE DATA
========================================================= */

const features = [
  {
    number: "01",
    title: "Your time.\nYour aircraft.",
    description:
      "Skip the queues, fixed schedules and unnecessary waiting. Travel when you choose, from airports that work for you.",
    bullets: [
      "Flexible departure times",
      "Access to private airports",
      "Aircraft matched to your journey",
    ],
    image: images.privateJet,
    position: "right",
  },

  {
    number: "02",
    title: "Luxury that\nfeels effortless.",
    description:
      "From spacious cabins to personalised onboard service, every element is considered to make the journey feel completely yours.",
    bullets: [
      "Premium cabin environments",
      "Personalised onboard service",
      "Complete travel privacy",
    ],
    image: images.luxury,
    position: "left",
  },

  {
    number: "03",
    title: "Go further.\nStay longer.",
    description:
      "Reach more destinations without compromising your time. Eagle opens the door to a truly global travel network.",
    bullets: [
      "Worldwide destination access",
      "Direct private routes",
      "Multi-city travel planning",
    ],
    image: images.destination,
    position: "right",
  },

  {
    number: "04",
    title: "Every detail.\nHandled.",
    description:
      "Your aircraft is only one part of the experience. Our team coordinates the journey around you from takeoff to arrival.",
    bullets: [
      "Dedicated travel support",
      "Ground transportation coordination",
      "24/7 journey assistance",
    ],
    image: images.interior,
    position: "left",
  },
];

/* =========================================================
   FEATURE CARD
========================================================= */

function FeatureCard({ feature, index }) {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="sticky"
      style={{
        top: `${90 + index * 12}px`,
        zIndex: index + 1,
      }}
    >
      <div
        className="premium-card overflow-hidden rounded-[24px] bg-[var(--surface)]"
        style={{
          transform: `scale(${1 - index * 0.012})`,
        }}
      >
        <div
          className={`grid min-h-[560px] md:grid-cols-2 ${
            feature.position === "left"
              ? "md:[direction:rtl]"
              : ""
          }`}
        >
          <div className="flex flex-col justify-center p-8 md:p-14 lg:p-20 md:[direction:ltr]">
            <div className="flex items-center justify-between">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#3E5450] text-sm text-white">
                {feature.number}
              </span>

              <Plane
                size={19}
                className="rotate-45 text-[var(--icon)]"
                strokeWidth={1.5}
              />
            </div>

            <h3 className="font-heading mt-10 whitespace-pre-line text-4xl font-light leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-5xl">
              {feature.title}
            </h3>

            <p className="mt-6 max-w-lg text-sm leading-7 text-[var(--muted)] md:text-base">
              {feature.description}
            </p>

            <ul className="mt-8 space-y-4">
              {feature.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-center gap-3 text-sm text-[var(--text)]"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--bg)]">
                    <ArrowUpRight size={11} />
                  </span>

                  {bullet}
                </li>
              ))}
            </ul>
          </div>

          <div className="min-h-[350px] p-3 md:min-h-full md:[direction:ltr]">
            <div className="h-full min-h-[340px] overflow-hidden rounded-[18px]">
              <img
                src={feature.image}
                alt={`${feature.title.replace(
                  "\n",
                  " "
                )} experience`}
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   FEATURES SECTION
========================================================= */

function Experiences() {
  return (
    <section
      id="experiences"
      className="px-4 py-10 md:px-6 md:py-20"
    >
      <div className="mx-auto max-w-[1250px]">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-14 max-w-2xl px-2"
        >
          <span className="text-xs tracking-[0.2em] text-[var(--accent)] uppercase">
            The Eagle Experience
          </span>

          <h2 className="font-heading mt-5 text-4xl font-light tracking-[-0.03em] md:text-6xl">
            More than a flight.
          </h2>
        </motion.div>

        <div className="space-y-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.number}
              feature={feature}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   HOW IT WORKS
========================================================= */

const steps = [
  {
    number: "1",
    icon: Sparkles,
    title: "Tell us\nyour plans.",
    description:
      "Share your destination, preferred timing and what matters most to you.",
  },

  {
    number: "2",
    icon: Route,
    title: "We curate\nyour journey.",
    description:
      "Our aviation specialists match the right aircraft and route to your needs.",
  },

  {
    number: "3",
    icon: Plane,
    title: "Step aboard\nwith ease.",
    description:
      "Arrive at your private terminal and leave the logistics to our team.",
  },

  {
    number: "4",
    icon: Globe2,
    title: "Enjoy the\nfreedom.",
    description:
      "Travel comfortably, privately and on your own schedule.",
  },
];

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative z-10 mx-auto mb-20 max-w-2xl text-center"
        >
          <span className="text-xs tracking-[0.2em] text-[var(--accent)] uppercase">
            Simple by design
          </span>

          <h2 className="font-heading mt-5 text-4xl font-light tracking-[-0.03em] md:text-6xl">
            From idea to
            <br />
            <span className="text-[var(--accent)]">
              airborne.
            </span>
          </h2>

          <p className="mt-6 text-sm leading-7 text-[var(--muted)] md:text-base">
            A seamless private aviation experience from the first conversation
            to the moment you arrive.
          </p>
        </motion.div>

        <div className="pointer-events-none absolute left-[5%] right-[5%] top-[51%] hidden lg:block">
          <svg
            viewBox="0 0 1200 160"
            className="h-40 w-full overflow-visible"
            fill="none"
          >
            <path
              d="M10 100 C 180 10, 300 10, 460 85 S 730 170, 870 70 S 1060 15, 1190 70"
              stroke="rgba(127,181,164,0.45)"
              strokeWidth="1.5"
              strokeDasharray="10 12"
              className="flight-path"
            />

            <g
              transform="translate(600 80) rotate(-15)"
            >
              <path
                d="M0 -7 L18 0 L0 7 L4 1 L-12 4 L-15 0 L-12 -4 L4 -1 Z"
                fill="#EAFB7B"
              />
            </g>
          </svg>
        </div>

        <div className="relative z-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                className="premium-card rounded-[22px] bg-[var(--surface)] p-7 md:min-h-[350px]"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3E5450] text-sm text-white">
                    {step.number}
                  </span>

                  <Icon
                    size={30}
                    strokeWidth={1.3}
                    className="text-[var(--icon)]"
                  />
                </div>

                <h3 className="font-heading mt-20 whitespace-pre-line text-3xl font-light leading-[1.05] tracking-[-0.03em]">
                  {step.title}
                </h3>

                <p className="mt-5 text-sm leading-6 text-[var(--muted)]">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   COMPARISON
   (Mobile fix: equal fixed column widths shared by every row,
    smaller padding/text on mobile, text wraps inside its cell.
    Desktop (md and up) is unchanged.)
========================================================= */

function Comparison() {
  const rows = [
    [
      "Departure flexibility",
      "Fixed schedules",
      "Fly when you choose",
    ],
    [
      "Airport access",
      "Major airports",
      "Private & convenient airports",
    ],
    [
      "Privacy",
      "Shared environment",
      "Entire aircraft is yours",
    ],
    [
      "Travel experience",
      "Standard",
      "Personalised",
    ],
    [
      "Journey support",
      "Limited",
      "Dedicated support",
    ],
  ];

  // Same column template for header + every row so columns line up perfectly.
  // minmax(0, ...) stops long text from stretching/cutting a column.
  const gridCols =
    "grid-cols-[minmax(0,0.9fr)_minmax(0,0.9fr)_minmax(0,1.2fr)] md:grid-cols-[1fr_1fr_1fr]";

  return (
    <section id="benefits" className="px-4 py-28 md:px-6">
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto max-w-6xl"
      >
        <div className="mb-12 text-center">
          <span className="text-xs tracking-[0.2em] text-[var(--accent)] uppercase">
            A different way to fly
          </span>

          <h2 className="font-heading mt-5 text-4xl font-light tracking-[-0.03em] md:text-6xl">
            Travel on your terms.
          </h2>
        </div>

        <div className="overflow-hidden rounded-[24px] border border-[var(--border)] bg-[var(--surface)]">

          <div className={`grid ${gridCols} border-b border-white/10`}>
            <div className="break-words p-3 text-xs leading-snug text-[var(--muted)] md:p-7 md:text-sm">
              Experience
            </div>

            <div className="break-words border-l border-white/10 p-3 text-xs leading-snug text-[var(--muted)] md:p-7 md:text-sm">
              Traditional Travel
            </div>

            <div className="break-words border-l border-white/10 bg-[rgba(234,251,123,0.05)] p-3 text-xs font-medium leading-snug text-[var(--accent)] md:p-7 md:text-sm">
              Eagle Aviation
            </div>
          </div>

          {rows.map((row, index) => (
            <div
              key={row[0]}
              className={`grid ${gridCols} ${
                index !== rows.length - 1
                  ? "border-b border-white/10"
                  : ""
              }`}
            >
              <div className="break-words p-3 text-xs leading-snug text-[var(--text)] md:p-7 md:text-sm">
                {row[0]}
              </div>

              <div className="break-words border-l border-white/10 p-3 text-xs leading-snug text-[var(--muted)] md:p-7 md:text-sm">
                {row[1]}
              </div>

              <div className="flex items-start gap-1.5 border-l border-white/10 bg-[rgba(234,251,123,0.03)] p-3 text-xs leading-snug text-[var(--text)] md:items-center md:gap-2 md:p-7 md:text-sm">
                <Check
                  size={14}
                  className="mt-[1px] shrink-0 text-[var(--accent)] md:mt-0 md:h-4 md:w-4"
                />

                <span className="min-w-0 break-words">
                  {row[2]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

/* =========================================================
   BENEFITS
========================================================= */

function Benefits() {
  const cards = [
    {
      icon: Clock3,
      title: "Your time matters.",
      text: "Reduce airport waiting and spend more time where it matters.",
    },

    {
      icon: ShieldCheck,
      title: "Private by nature.",
      text: "Your aircraft, your people and your space from departure to arrival.",
    },

    {
      icon: Zap,
      title: "Move without limits.",
      text: "Build journeys around your schedule instead of fitting into someone else's.",
    },
  ];

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-4 md:grid-cols-3"
        >
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="premium-card rounded-[22px] bg-[var(--surface)] p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3E5450] text-[var(--accent)]">
                  <Icon
                    size={21}
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="font-heading mt-12 text-3xl font-light">
                  {card.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                  {card.text}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   TESTIMONIAL / VIDEO
========================================================= */

function Testimonial() {
  return (
    <section className="px-6 py-28">
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto grid max-w-7xl overflow-hidden rounded-[24px] border border-[var(--border)] bg-[var(--surface)] md:grid-cols-2"
      >
        <div className="relative min-h-[400px] overflow-hidden">
          <img
            src={images.destination}
            alt="Luxury travel destination"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[#0F2421]/35" />

          <button
            type="button"
            className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--bg)] shadow-[0_0_40px_rgba(234,251,123,0.25)] transition hover:scale-105"
            aria-label="Play testimonial video"
          >
            <span className="ml-1 text-xl">
              ▶
            </span>
          </button>

          <span className="absolute bottom-6 left-6 rounded-full border border-white/15 bg-black/20 px-4 py-2 text-xs text-white backdrop-blur-md">
            Client Stories
          </span>
        </div>

        <div className="flex flex-col justify-center p-8 md:p-14 lg:p-20">
          <div className="flex gap-1 text-[var(--accent)]">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={15}
                fill="currentColor"
              />
            ))}
          </div>

          <blockquote className="font-heading mt-8 text-3xl font-light leading-tight tracking-[-0.02em] md:text-4xl">
            “The entire journey felt effortless. Eagle took care of the
            details while we focused on the reason for the trip.”
          </blockquote>

          <div className="mt-9">
            <p className="text-sm font-medium text-white">
              Alexander Morgan
            </p>

            <p className="mt-1 text-xs text-[var(--muted)]">
              Private Aviation Client
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* =========================================================
   STATS
========================================================= */

function Stats() {
  const stats = [
    ["20+", "Years of aviation experience"],
    ["50+", "Global destinations"],
    ["24/7", "Dedicated support"],
    ["100%", "Journey focused on you"],
  ];

  return (
    <section className="border-y border-white/10">
      <div className="mx-auto grid max-w-7xl md:grid-cols-4">
        {stats.map(([number, label], index) => (
          <div
            key={number}
            className={`px-6 py-12 text-center ${
              index !== 0
                ? "border-t border-white/10 md:border-l md:border-t-0"
                : ""
            }`}
          >
            <p className="font-heading text-4xl font-light text-[var(--accent)]">
              {number}
            </p>

            <p className="mx-auto mt-2 max-w-[180px] text-xs leading-5 text-[var(--muted)]">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   CTA
========================================================= */

function CTA() {
  return (
    <section id="contact" className="px-6 py-32">
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[28px] bg-[var(--accent)] px-7 py-16 text-center md:px-12 md:py-24"
      >
        <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full border border-[#0F2421]/10" />

        <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full border border-[#0F2421]/10" />

        <span className="relative text-xs font-medium tracking-[0.2em] text-[#39504a] uppercase">
          Ready when you are
        </span>

        <h2 className="font-heading relative mx-auto mt-5 max-w-3xl text-5xl font-light leading-[0.95] tracking-[-0.04em] text-[var(--bg)] md:text-7xl">
          Where will you
          <br />
          fly next?
        </h2>

        <p className="relative mx-auto mt-6 max-w-xl text-sm leading-7 text-[#39504a] md:text-base">
          Tell us where you want to go and we'll take care of the journey.
        </p>

        <a
          href="mailto:hello@eagleaviation.com"
          className="white-button relative mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-medium text-[var(--bg)]"
        >
          Start Your Journey
          <ArrowUpRight size={17} />
        </a>
      </motion.div>
    </section>
  );
}

/* =========================================================
   NEWSLETTER
========================================================= */

function Newsletter() {
  return (
    <section className="px-6 pb-20">
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto flex max-w-7xl flex-col justify-between gap-8 rounded-[22px] border border-[var(--border)] bg-[var(--surface)] p-7 md:flex-row md:items-center md:p-10"
      >
        <div>
          <p className="font-heading text-2xl font-light md:text-3xl">
            Stay close to the journey.
          </p>

          <p className="mt-2 text-sm text-[var(--muted)]">
            Receive occasional travel inspiration and Eagle updates.
          </p>
        </div>

        <form
          className="flex w-full max-w-md gap-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <label
            htmlFor="email"
            className="sr-only"
          >
            Email address
          </label>

          <input
            id="email"
            type="email"
            placeholder="Your email address"
            required
            className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/35 focus:border-[var(--accent)] focus:outline-none"
          />

          <button
            type="submit"
            className="lime-button shrink-0 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-medium text-[var(--bg)]"
          >
            Join
          </button>
        </form>
      </motion.div>
    </section>
  );
}

/* =========================================================
   FOOTER
========================================================= */

function Footer() {
  const columns = [
    {
      title: "Explore",
      links: [
        "About",
        "Destinations",
        "Experiences",
        "How It Works",
      ],
    },

    {
      title: "Services",
      links: [
        "Private Charters",
        "Corporate Travel",
        "Group Travel",
        "Special Requests",
      ],
    },

    {
      title: "Connect",
      links: [
        "Instagram",
        "LinkedIn",
        "Contact",
        "Request a Quote",
      ],
    },
  ];

  return (
    <footer className="border-t border-white/10 px-6 pb-8 pt-20">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">

          <div>
            <a
              href="#"
              className="flex items-center gap-2.5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--bg)]">
                <PlaneTakeoff size={19} />
              </span>

              <span className="font-heading text-xl font-medium">
                EAGLE
                <span className="text-[var(--accent)]">
                  .
                </span>
              </span>
            </a>

            <p className="mt-6 max-w-xs text-sm leading-7 text-[var(--muted)]">
              Private aviation designed around your time, your destination and
              your way of travelling.
            </p>

            <div className="mt-6">
              <p className="text-xs text-[var(--muted)]">
                1 Aviation Way
              </p>

              <p className="mt-1 text-xs text-[var(--muted)]">
                London, United Kingdom
              </p>
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-xs font-medium tracking-[0.15em] text-white uppercase">
                {column.title}
              </h3>

              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-[var(--muted)] transition hover:text-[var(--accent)]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-7 text-xs text-[var(--muted)] md:flex-row">
          <p>
            © 2026 Eagle Aviation. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a
              href="#"
              className="hover:text-white"
            >
              Privacy
            </a>

            <a
              href="#"
              className="hover:text-white"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* =========================================================
   FLOATING CHAT BUTTON
========================================================= */

function ChatButton() {
  return (
    <a
      href="#contact"
      aria-label="Contact Eagle Aviation"
      className="chat-pulse fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--bg)] shadow-xl transition hover:scale-105"
    >
      <MessageCircle size={21} />
    </a>
  );
}

/* =========================================================
   APP
========================================================= */

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <Navbar />

      <main>
        <Hero />

        <About />

        <Experiences />

        <HowItWorks />

        <Comparison />

        <Stats />

        <Benefits />

        <Testimonial />

        <CTA />

        <Newsletter />
      </main>

      <Footer />

      <ChatButton />
    </div>
  );
}