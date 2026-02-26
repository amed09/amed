import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-50 py-12 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 md:mb-0">
            <p className="text-center text-sm text-slate-500 dark:text-slate-400 md:text-left">
              &copy; {new Date().getFullYear()} Amed. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/amed09"
              className="text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
            >

              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" />
            </a>

            <a
              href="https://www.linkedin.com/in/amedmohammed/?isSelfProfile=true"
              className="text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
            >




            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
