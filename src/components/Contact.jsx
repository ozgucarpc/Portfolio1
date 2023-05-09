import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const email = "ozgucarpaci@gmail.com";

  const socialMediaLinks = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/ozgucarpc/",
    },
    {
      name: "GitHub",
      link: "https://github.com/ozgucarpc",
    },

    {
      name: "Twitter",
      link: "https://twitter.com/ozgucarpc",
    },
  ];

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}></p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className="contact">
          {/* Diğer iletişim bilgileri burada */}
          <div className="email mb-8">
            <h3 className="mb-2 mt-14">Email</h3>
            <p>
              <a href={`mailto:${email}`}>{email}</a>
            </p>
          </div>
          <div className="social-media ">
            <ul>
              {socialMediaLinks.map((link) => (
                <li className="mb-14" key={link.name}>
                  <a href={link.link} target="_blank" rel="noreferrer">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
