import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "motion/react";
import { Code, GraduationCap, MapPin, User } from "lucide-react";

export function About() {
  return (
    <section id="about" className="bg-white py-20 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            About Me
          </h2>
          <div className="mt-4 h-1 w-20 bg-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="col-span-1 md:col-span-2 lg:col-span-1 bg-slate-50 dark:bg-slate-800/50 border-none">
            <CardHeader>
              <CardTitle className="flex items-center text-cyan-600 dark:text-cyan-400">
                <User className="mr-2 h-5 w-5" /> Profile
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600 dark:text-slate-300">
                I'm <strong>Amed</strong>, a dedicated Flutter Developer based in{" "}
                <strong>Kurdistan</strong>. I graduated in 2023 with a degree in
                Computer Network & Information Security.
              </p>
              <p className="text-slate-600 dark:text-slate-300">
                My passion lies in creating seamless mobile experiences using
                Dart and Flutter. I focus on writing clean, maintainable code
                and implementing robust architectures.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-50 dark:bg-slate-800/50 border-none">
            <CardHeader>
              <CardTitle className="flex items-center text-cyan-600 dark:text-cyan-400">
                <GraduationCap className="mr-2 h-5 w-5" /> Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h4 className="font-semibold text-slate-900 dark:text-white">
                Bachelor's Degree
              </h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Computer Network & Information Security
              </p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Graduated 2023
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-50 dark:bg-slate-800/50 border-none">
            <CardHeader>
              <CardTitle className="flex items-center text-cyan-600 dark:text-cyan-400">
                <MapPin className="mr-2 h-5 w-5" /> Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div>
                <span className="font-medium text-slate-900 dark:text-white">
                  Location:
                </span>{" "}
                <span className="text-slate-600 dark:text-slate-300">
                  Kurdistan - Duhok
                </span>
              </div>
              <div>
                <span className="font-medium text-slate-900 dark:text-white">
                  Languages:
                </span>{" "}
                <span className="text-slate-600 dark:text-slate-300">
                  Kurdish, Arabic, English
                </span>
              </div>
              <div>
                <span className="font-medium text-slate-900 dark:text-white">
                  Role:
                </span>{" "}
                <span className="text-slate-600 dark:text-slate-300">
                  Flutter Developer
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-1 md:col-span-2 lg:col-span-3 bg-slate-50 dark:bg-slate-800/50 border-none">
            <CardHeader>
              <CardTitle className="flex items-center text-cyan-600 dark:text-cyan-400">
                <Code className="mr-2 h-5 w-5" /> Career Objective
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 dark:text-slate-300">
                To leverage my skills in mobile application development to build
                innovative solutions that solve real-world problems. I aim to
                work with forward-thinking teams where I can contribute to
                cutting-edge projects while continuously learning and growing as
                a developer.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
