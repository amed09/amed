import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin, Send } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    alert("Message sent! (This is a demo)");
  };

  return (
    <section id="contact" className="bg-white py-20 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Get In Touch
          </h2>
          <div className="mt-4 h-1 w-20 bg-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="mb-6 text-2xl font-semibold text-slate-900 dark:text-white">
              Contact Information
            </h3>
            <p className="mb-8 text-lg text-slate-600 dark:text-slate-300">
              I'm currently available for freelance work or full-time
              opportunities. If you have a project that needs some creative
              touch, feel free to contact me!
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h4 className="text-base font-medium text-slate-900 dark:text-white">
                    Email
                  </h4>
                  <p className="mt-1 text-slate-600 dark:text-slate-300">
                    contact@amed.dev
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h4 className="text-base font-medium text-slate-900 dark:text-white">
                    WhatsApp
                  </h4>
                  <p className="mt-1 text-slate-600 dark:text-slate-300">
                    +964 750 XXX XXXX
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h4 className="text-base font-medium text-slate-900 dark:text-white">
                    Location
                  </h4>
                  <p className="mt-1 text-slate-600 dark:text-slate-300">
                    Kurdistan
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-slate-50 p-8 shadow-sm dark:bg-slate-800/50"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-900 dark:text-white"
                >
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your Name"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-sm text-red-500">Name is required</span>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-900 dark:text-white"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    Email is required
                  </span>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-900 dark:text-white"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="How can I help you?"
                  rows={4}
                  {...register("message", { required: true })}
                />
                {errors.message && (
                  <span className="text-sm text-red-500">
                    Message is required
                  </span>
                )}
              </div>

              <Button type="submit" className="w-full">
                Send Message <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
