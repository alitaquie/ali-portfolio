import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaLinkedin } from "react-icons/fa";

import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

const INITIAL_STATE = Object.fromEntries(
  Object.keys(config.contact.form).map((input) => [input, ""])
);

const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  accessToken: import.meta.env.VITE_EMAILJS_ACCESS_TOKEN,
};


const Contact = () => {
  const formRef = useRef<React.LegacyRef<HTMLFormElement> | undefined>();
  const [form, setForm] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
  ) => {
    if (!e) return;
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | undefined) => {
    if (!e) return;
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          form_name: form.name,
          to_name: config.html.fullName,
          from_email: form.email,
          to_email: config.html.email,
          message: form.message,
        },
        emailjsConfig.accessToken
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm(INITIAL_STATE);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Something went wrong.");
        }
      );
  };

  const linkedinUrl = "https://www.linkedin.com/in/ali-taquie-82481b17a/";

  return (
    <div className="flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-gradient-to-br from-[#020a17] to-[#050f1f] backdrop-blur-lg flex-[0.75] rounded-2xl p-8 border border-[#2f80ed]/10 hover:border-[#2f80ed]/20 transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        {/* Section header */}
        <Header useMotion={false} {...config.contact} />

        {/* LinkedIn icon */}
        <div className="mt-4 mb-6">
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white hover:opacity-80"
          >
            <FaLinkedin className="h-6 w-6" />
            <span className="underline">Connect on LinkedIn</span>
          </a>
        </div>

        {/* Contact form */}
        <form
          // @ts-expect-error
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-6 flex flex-col gap-8"
        >
          {Object.keys(config.contact.form).map((input) => {
            const { span, placeholder } =
              config.contact.form[input as keyof typeof config.contact.form];
            const Component = input === "message" ? "textarea" : "input";

            return (
              <label key={input} className="flex flex-col">
                <span className="mb-4 font-medium text-white">{span}</span>
                <Component
                  type={input === "email" ? "email" : "text"}
                  name={input}
                  value={form[input]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="bg-[#0a192f]/50 placeholder:text-[#2f80ed]/50 rounded-lg border border-[#2f80ed]/10 px-6 py-4 font-medium text-white outline-none focus:border-[#2f80ed]/30 transition-all duration-300"
                  {...(input === "message" && { rows: 7 })}
                />
              </label>
            );
          })}
          <button
            type="submit"
            className="bg-gradient-to-r from-[#2f80ed] to-[#2f80ed]/80 hover:from-[#2f80ed]/90 hover:to-[#2f80ed]/70 w-fit rounded-xl px-8 py-3 font-bold text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
