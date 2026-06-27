"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

/**
 * Counts up to the numeric portion of `value` when scrolled into view,
 * preserving any prefix/suffix (e.g. "100K+", "6+"). Non-numeric values
 * (e.g. "iOS · Android · Web") render as-is.
 */
export default function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const match = value.match(/^(\D*)(\d+)(.*)$/);
  const target = match ? parseInt(match[2], 10) : 0;
  const prefix = match ? match[1] : "";
  const suffix = match ? match[3] : "";

  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => `${prefix}${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (inView && match) {
      const controls = animate(count, target, {
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1],
      });
      return controls.stop;
    }
  }, [inView, match, target, count]);

  if (!match) return <span ref={ref}>{value}</span>;

  return <motion.span ref={ref}>{rounded}</motion.span>;
}
