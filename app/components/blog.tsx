"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const posts = [
  {
    src: "/images/post-1.jpg",
    title: "Simple Activities That Boost Senior Mental Health",
    href: "/",
  },
  {
    src: "/images/post-2.jpg",
    title: "Family Involvement in Senior Care: Staying Connected",
    href: "/",
  },
  {
    src: "/images/post-3.jpg",
    title: "Navigating the Costs of Senior Care: What You Need to Know",
    href: "/",
  },
];

// STAGGER CONTAINER
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// CARD ANIMATION
const item = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Blog() {
  return (
    <div className="w-full h-fit mb-24 px-4">

      {/* Header */}
      <div className="flex flex-col items-center justify-center mb-12">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-[#C97B63]" />
          <span className="text-sm text-[#C97B63] italic font-medium">
            Our blog
          </span>
        </div>

        <h1 className="font-jarkata font-bold text-center text-3xl sm:text-4xl lg:text-5xl text-[#2C1810] leading-tight">
          Explore articles that nurture
          <br />
          <span className="font-normal italic">
            educate, and inspire
          </span>
        </h1>
      </div>

      {/* Cards */}
      <motion.div
        className="w-full max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {posts.map((post) => (
          <motion.div
            key={post.title}
            variants={item}
            className="flex flex-col gap-4"
          >

            {/* Image */}
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src={post.src}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col gap-2 px-1">
              
              {/* TYPEWRITER TITLE */}
              <h2 className="font-semibold text-[#2C1810] text-base leading-snug">
                {post.title.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.02 }}
                    viewport={{ once: true }}
                  >
                    {char}
                  </motion.span>
                ))}
              </h2>

              <Link
                href={post.href}
                className="text-sm font-semibold text-[#C97B63] hover:text-[#A85F48] transition-colors flex items-center gap-1"
              >
                Learn More
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  className="w-3.5 h-3.5"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M3 13L13 3M13 3H7M13 3v6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>

          </motion.div>
        ))}
      </motion.div>

    </div>
  );
}