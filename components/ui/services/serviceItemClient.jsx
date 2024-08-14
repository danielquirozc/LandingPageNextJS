"use client";

import { motion } from "framer-motion";

export default function ServiceItemClient( { children } ) {
  return (
    <motion.div
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      initial={{ scale: [0], opacity: 0 }}
      whileInView={{ scale: [1, 1.04, 1], opacity: 1 }}
      className="text-center group border border-zinc-800 bg-zinc-900 w-full min-h-[200px] max-w-[300px] place-content-center flex-1 rounded-lg" 
    >
      {children}
    </motion.div>
  );
}