import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send, Ghost, Eye } from "lucide-react";

const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showMessage, setShowMessage] = useState(false);
  const [currentMessage, setCurrentMessage] = useState<any>(null);
  const [confetti, setConfetti] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "mannipratap@gmail.com",
      href: "mailto:mannipratap@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9739832481",
      href: "tel:+919739832481",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Bengaluru, Karnataka, India",
      href: "",
    },
  ];

  const lazyDeveloperMessages = [
    {
      icon: Ghost,
      title: "Oops! Developer Too Lazy!",
      message:
        "This form is fancy but useless. Please email me directly instead.",
      action: "Email Me",
      actionHref: "mailto:mannipratap@gmail.com",
    },
    {
      icon: Ghost,
      title: "Backend? Missing!",
      message: "Frontend magic only. Backend is TBD!",
      action: "Send Real Email",
      actionHref: "mailto:mannipratap@gmail.com",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomMessage =
      lazyDeveloperMessages[
        Math.floor(Math.random() * lazyDeveloperMessages.length)
      ];
    setCurrentMessage(randomMessage);
    setShowMessage(true);
    setConfetti(true);
    setTimeout(() => setConfetti(false), 2000);
    setTimeout(
      () => setFormData({ name: "", email: "", subject: "", message: "" }),
      1000
    );
  };

  return (
    <section
      ref={ref}
      className="section-padding bg-black text-white min-h-screen relative overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-pink-600 via-purple-600 to-orange-500 opacity-10 blur-3xl"
        style={{ zIndex: 0 }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-orange-400 mb-4">
            Get In{" "}
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
              Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full shadow-lg"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Reach out to Mani for collaborations, questions, or just a friendly
            hello!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {contactInfo.map((info, idx) => (
              <motion.a
                key={idx}
                href={info.href || "#"}
                whileHover={{
                  scale: 1.03,
                  x: 5,
                  boxShadow: "0 0 20px #FFA500",
                }}
                transition={{ type: "spring", stiffness: 250 }}
                className="flex items-center gap-4 p-4 rounded-lg border border-gray-700 bg-gray-900 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-orange-600/20 flex items-center justify-center rounded-lg">
                  <info.icon className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h4 className="font-medium text-orange-400">{info.title}</h4>
                  <p className="text-gray-300">{info.value}</p>
                  <p className="text-xs text-green-400">Actually works!</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-900 p-8 rounded-xl shadow-lg relative overflow-hidden"
          >
            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                />
              </div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 transition-all duration-300"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Message"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 transition-all duration-300 resize-none"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03, rotate: [0, 2, -2, 0] }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-orange-500 text-black font-medium rounded-lg shadow hover:bg-orange-600 transition-all duration-300"
              >
                <Send size={20} />
                <span>Send</span>
                <Ghost className="w-4 h-4" />
              </motion.button>
            </form>

            {/* Confetti sparkles */}
            {confetti && (
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-pink-400 rounded-full absolute"
                    style={{
                      top: Math.random() * 100 + "%",
                      left: Math.random() * 100 + "%",
                    }}
                    animate={{
                      y: [0, -100, 0],
                      x: [0, 50, -50, 0],
                      opacity: [1, 0, 1],
                    }}
                    transition={{ duration: 1 + Math.random(), repeat: 1 }}
                  />
                ))}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {showMessage && currentMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -100 }}
            className="fixed inset-4 md:top-4 md:right-4 md:w-96 bg-gray-900 text-white rounded-xl shadow-2xl p-6 z-50 border border-red-500"
          >
            <div className="text-center">
              <currentMessage.icon className="w-16 h-16 text-red-500 mx-auto mb-3 animate-bounce" />
              <h3 className="text-xl font-bold text-red-500 mb-2">
                {currentMessage.title}
              </h3>
              <p className="text-gray-300 mb-4">{currentMessage.message}</p>
              <motion.a
                href={currentMessage.actionHref}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-orange-500 text-black rounded-lg font-medium inline-block"
              >
                {currentMessage.action}
              </motion.a>
              <motion.button
                onClick={() => setShowMessage(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-3 px-4 py-2 bg-gray-700 text-white rounded-lg"
              >
                <Eye className="w-4 h-4 inline mr-1" />
                Close
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
