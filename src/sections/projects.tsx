import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "motion/react";
import { Play, Bus, Car, Store, Building2, Lock } from "lucide-react";

const projects = [
  {
    title: "Shahan Living",
    description: "Manage property payments, services, and installments.",
    tags: ["Flutter", "Dart", "Laravel", "RestApi", "pushsher"],
    image: "https://play-lh.googleusercontent.com/pr9-HqdqbD6n-81aIlUm7mSSY0ea_7RUOTT5d8Yx4LT4xBBx4AwZnhP80EKPhTu5B2rUtQ8FM8e_rQoTF_d8aAY",
    playStore: "https://play.google.com/store/apps/details?id=com.shahanpropertymanagement.shahanpropertymanagement",
    appStore: "https://apps.apple.com/us/app/shahan-living/id6749612622"
  },
  {
    title: "Shahan Manager",
    description: "View company data and charts for Shahan Company easily with Shahan Manager.",
    tags: ["Flutter", "Dart", "Laravel", "RestApi"],
    image: "https://play-lh.googleusercontent.com/oHgVJWniH_MB4XZebg9bfdTM2qOgKR_YJ0TepTuRSllngeBaJVzTNUftH1w_aNwakljbTdRhs34_ZDmKqenJ",
    playStore: "https://play.google.com/store/apps/details?id=com.shahanmanager.shahanmanager"
  },
  {
    title: "Shahan Properties",
    description: "Find your dream property with Shahan Properties your ultimate real estate.",
    tags: ["Flutter", "Dart", "Laravel", "RestApi"],
    image: "https://play-lh.googleusercontent.com/DLuoKY29JUVjV8p5D8sH_GLgeNdQ2cAaJ0kuQPEotaOEuNiiWxd6rCOxamVtMeDXJNo",
    playStore: "https://play.google.com/store/apps/details?id=com.ShahanProperties.app",
    appStore: "https://apps.apple.com/us/app/shahan-properties/id6743683385"
  },
  {
    title: "Property Manager",
    description: "Admin guide for configuring and maintaining Shahan services.",
    tags: ["Flutter", "Dart", "Laravel", "RestApi"],
    image: "https://play-lh.googleusercontent.com/5swK4CTv5XmAJgTOCWycwYPMzD6NyXSDXKVwmWmwmN3JneZ43qNUQjRwfgJ8D7uIwUflAOvIBp0Lg2TXeTPYuw",
    playStore: "https://play.google.com/store/apps/details?id=com.shahan.admin_property_management"
  },
  {
    title: "Cavalli Tower - Luxury Living",
    description: "Luxury residential services for Cavalli Tower residents",
    tags: ["Flutter", "Dart", "Firebase", "Socket.io"],
    image: "https://play-lh.googleusercontent.com/O4X6naLbgTOvs4RIq6kzoYx4qhuEtClvB4EIjO4lPhJfBXky-wXOYTpUqu1cKV3YBttg",
    playStore: "https://play.google.com/store/apps/details?id=com.cavallitower.luxuryhomes"
  },
  {
    title: "ConnectGate",
    description: "Exclusive research tool. Connect with communities and participants.",
    tags: ["Flutter", "Dart", "Firebase"],
    image: "https://play-lh.googleusercontent.com/gB05T34ZxUrvL45NPbDOtz3wuSWhA_Xx9IAw7PscW-GYQE9cz_T3dKKQ9um5zBdbohA",
    playStore: "https://play.google.com/store/apps/details?id=com.ConnectGate.android"
  }
];

const privateProjects = [
  {
    title: "BusLine",
    description: "Transportation management application for organizing bus lines and routes.",
    tags: ["Flutter", "Dart", "REST API"],
    icon: Bus
  },
  {
    title: "Valet",
    description: "Application for managing valet parking services and operations efficiently.",
    tags: ["Flutter", "Dart", "Firebase"],
    icon: Car
  },
  {
    title: "Duhok Industry POS System",
    description: "Comprehensive Point of Sale system tailored for industrial businesses in Duhok.",
    tags: ["Flutter", "Dart", "Sqlite"],
    icon: Store
  },
  {
    title: "Construction Application",
    description: "Management system for construction projects, tracking progress, and resources.",
    tags: ["Flutter", "Dart", "Firebase"],
    icon: Building2
  },
  {
    title: "Ecommerce Application",
    description: "Ecommerce application for online shopping.",
    tags: ["Flutter", "Dart", "supabase"],
    icon: Store

  }

];

export function Projects() {
  return (
    <section id="projects" className="bg-white py-20 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Featured Projects
          </h2>
          <div className="mt-4 h-1 w-20 bg-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950 transition-all hover:shadow-lg hover:-translate-y-1">

                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-slate-900 dark:text-white">
                    {project.title}
                  </CardTitle>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-cyan-100 text-cyan-800 hover:bg-cyan-200 dark:bg-cyan-900 dark:text-cyan-300 dark:hover:bg-cyan-800"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>

                <CardContent className="flex-grow">
                  <CardDescription className="text-slate-600 dark:text-slate-400">
                    {project.description}
                  </CardDescription>
                </CardContent>

                <CardFooter className="mt-auto flex flex-wrap gap-2">
                  <Button
                    size="sm"
                    className="bg-cyan-600 hover:bg-cyan-700 text-white"
                    asChild
                  >
                    <a
                      href={project.playStore}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Play className="h-4 w-4 fill-current" />
                      Play Store
                    </a>
                  </Button>
                  {project.appStore && (
                    <Button
                      size="sm"
                      className="bg-slate-800 hover:bg-slate-900 text-white dark:bg-slate-700 dark:hover:bg-slate-600"
                      asChild
                    >
                      <a
                        href={project.appStore}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                        </svg>
                        App Store
                      </a>
                    </Button>
                  )}
                </CardFooter>

              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Private & Unlisted Applications
          </h2>
          <div className="mt-4 h-1 w-20 bg-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {privateProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950 transition-all hover:shadow-lg hover:-translate-y-1">

                <div className="flex flex-col items-center justify-center p-8 bg-slate-100 dark:bg-slate-900/50">
                  <project.icon className="h-16 w-16 text-slate-400 dark:text-slate-500 mb-4" />
                  <Badge variant="outline" className="border-slate-300 dark:border-slate-700 text-slate-500">
                    <Lock className="mr-1 h-3 w-3" /> Private
                  </Badge>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-slate-900 dark:text-white">
                    {project.title}
                  </CardTitle>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-cyan-100 text-cyan-800 hover:bg-cyan-200 dark:bg-cyan-900 dark:text-cyan-300 dark:hover:bg-cyan-800"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>

                <CardContent className="flex-grow">
                  <CardDescription className="text-slate-600 dark:text-slate-400">
                    {project.description}
                  </CardDescription>
                </CardContent>

              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
