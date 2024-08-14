"use client";

import { motion } from "framer-motion";

export default function TestimonyClient({ children }) {
  return (
    <motion.div
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      initial={{ scale: [0], opacity: 0 }}
      whileInView={{ scale: [1, 1.079, 1], opacity: 1 }}
      className="flex w-full border hover:border-red-400/35 hover:scale-105 duration-200 border-zinc-800 md:max-w-sm py-2 bg-zinc-950/75 rounded-xl flex-col px-5 justify-center"
    >
      {children}
    </motion.div>
  );
}
