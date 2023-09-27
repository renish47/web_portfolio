"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import toast from "react-hot-toast";

import SectionHeading from "../SectionHeading";
import SubmitButton from "../SubmitButton";
import { sendEmail } from "@/actions/sendEmail";

export default function Contact() {
  const ref = useSectionInView({ sectionName: "Contact" });
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 w-[min(100%,38rem)] scroll-mt-28 text-center sm:mb-28 "
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="-mt-6 text-gray-700 dark:text-white/80">
        Please contact me directly at{" "}
        <a
          className="text-[#b4aaff] underline"
          href="mailto:renishkar47@gmail.com"
        >
          renishkar47@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        ref={formRef}
        className="mt-10 flex flex-col dark:text-white"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }
          formRef.current?.reset();
          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="borderBlack h-14 rounded-lg px-4  outline-none transition-all focus:border-2 focus:border-black  dark:bg-white/10 dark:shadow-md dark:focus:border-white/20"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="borderBlack my-3 h-52 rounded-lg p-4 outline-none transition-all focus:border-2 focus:border-black dark:bg-white/10 dark:shadow-md  dark:focus:border-white/20"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
}
