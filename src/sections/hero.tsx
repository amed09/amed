import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Download, Mail } from "lucide-react";
import { Link } from "react-scroll";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center overflow-hidden bg-slate-50 pt-32 pb-16 dark:bg-slate-950"
    >
      {/* Background Gradients */}
      <div className="absolute -left-4 top-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl filter dark:bg-cyan-500/10" />
      <div className="absolute -right-4 bottom-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl filter dark:bg-blue-500/10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >






            <h2 className="mb-4 text-lg font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
              Hello, I'm Amed
            </h2>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl">
              <span className="block">I build</span>
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent dark:from-cyan-400 dark:to-blue-500">
                <TypeAnimation
                  sequence={[
                    "Mobile Apps",
                    2000,
                    "Flutter Solutions",
                    2000,
                    "Clean Architecture",
                    2000,
                    "Smooth UI/UX",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
              Flutter Developer. I specialize in
              building high-performance, cross-platform mobile applications with
              clean code and modern design.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
              <Link to="projects" smooth={true} duration={500} offset={-70}>
                <Button size="lg" className="w-full sm:w-auto">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="contact" smooth={true} duration={500} offset={-70}>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Contact Me <Mail className="ml-2 h-4 w-4" />
                </Button>
              </Link>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
