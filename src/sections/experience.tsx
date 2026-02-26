import { motion } from "motion/react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "BusLine",
    company: "Private Transportation Platform",
    period: "2025",
    description:
      "Designed and developed a transportation management application for organizing bus lines and routes. Implemented real-time data handling, route management, backend API integration, role-based logic, and optimized performance for scalable user access."
  },
  {
    title: "Senior Flutter Developer",
    company: "Freelance & Private Projects",
    period: "2023 - Present",
    description:
      "Developing scalable cross-platform mobile applications using Flutter & Dart. Implementing clean architecture principles with Bloc/Cubit state management. Integrated Firebase (Authentication, Firestore), real-time chat using Socket.io with Laravel backend APIs, and advanced routing using GoRouter."
  },
  {
    title: "Building Management App",
    company: "Private Residential Platform",
    period: "2024 - 2025",
    description:
      "Designed and developed a full-featured residential building management application. Features include service requests (cleaning, complaints), parking booking system, gym subscription payments, admin permission management, transaction dashboard, and real-time notifications."
  },
  {
    title: "Shahan Property Management",
    company: "Shahan Property Management",
    period: "2025 - Present",
    description:
      "Building a property management platform with advanced filtering, REST API integration (Laravel), real-time messaging, role-based admin permissions, Mapbox location integration, PDF & media handling, and optimized chat synchronization system."
  }
  ,
];

export function Experience() {
  return (
    <section id="experience" className="bg-slate-50 py-20 dark:bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Work Experience
          </h2>
          <div className="mt-4 h-1 w-20 bg-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative mx-auto max-w-3xl">
          {/* Vertical Line */}
          <div className="absolute left-0 top-0 h-full w-0.5 bg-slate-200 dark:bg-slate-800 md:left-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
              >
                {/* Dot */}
                <div className="absolute left-[-5px] top-0 h-3 w-3 rounded-full bg-cyan-500 ring-4 ring-white dark:ring-slate-950 md:left-1/2 md:-ml-1.5" />

                <div className="ml-8 md:ml-0 md:w-1/2 md:px-8">
                  <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-slate-900">
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {exp.title}
                      </h3>
                    </div>
                    <div className="mb-4 flex flex-col space-y-1 text-sm text-slate-500 dark:text-slate-400 sm:flex-row sm:space-x-4 sm:space-y-0">
                      <span className="flex items-center">

                        {exp.company}

                      </span>
                      <span className="flex items-center">
                        <Calendar className="mr-1 h-4 w-4" /> {exp.period}
                      </span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
