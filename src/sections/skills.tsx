import { motion } from "motion/react";

const skills = [
  {
    category: "Mobile Development",
    items: [
      { name: "Flutter", level: 90 },
      { name: "Dart", level: 90 },
      { name: "Responsive UI", level: 95 },
      { name: "State Management (Bloc, Provider, Riverpod , GetX)", level: 80 },
      { name: "Payment Gateway Integration (Stripe, FIB, PayPal, ZainCash,)", level: 90 },
      { name: "REST API Integration", level: 100 },
      { name: "Testing", level: 90 },
      { name: "Firebase Integration", level: 85 },

    ],
  },
  {
    category: "Backend & Database",
    items: [
      { name: "Firebase", level: 80 },
      { name: "Supabase", level: 60 },
      { name: "Rest API", level: 100 },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git & GitHub", level: 85 },
      { name: "Postman", level: 80 },
      { name: "Sentry", level: 75 },
      { name: "OneSignal", level: 80 },
      { name: "Shorebird", level: 70 },
      { name: "Firebase Analytics", level: 75 },


    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="bg-slate-50 py-20 dark:bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Technical Skills
          </h2>
          <div className="mt-4 h-1 w-20 bg-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl bg-white p-6 shadow-sm dark:bg-slate-900"
            >
              <h3 className="mb-6 text-xl font-semibold text-cyan-600 dark:text-cyan-400">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex justify-between">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-slate-500 dark:text-slate-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
