import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "motion/react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-scroll";

const navItems = [
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Experience", to: "experience" },
  { name: "Contact", to: "contact" },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.9]);
  const backdropBlur = useTransform(scrollY, [0, 100], [0, 12]);

  return (
    <motion.nav
      style={{
        backgroundColor: `rgba(${theme === "dark" ? "15, 23, 42" : "255, 255, 255"
          }, ${bgOpacity})`,
        backdropFilter: `blur(${backdropBlur}px)`,
      }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-transparent transition-colors duration-300"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="cursor-pointer text-2xl font-bold text-cyan-500"
            >
              Amed<span className="text-slate-900 dark:text-white">.dev</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:text-cyan-500 dark:text-slate-300 dark:hover:text-cyan-400 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={toggleTheme}
                className="ml-4 rounded-full p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 focus:outline-none dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white transition-colors"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-slate-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-800"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800"
        >
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setIsOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-cyan-500 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => {
                toggleTheme();
                setIsOpen(false);
              }}
              className="flex w-full items-center rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-cyan-500 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              {theme === "dark" ? (
                <>
                  <Sun className="mr-2 h-5 w-5" /> Light Mode
                </>
              ) : (
                <>
                  <Moon className="mr-2 h-5 w-5" /> Dark Mode
                </>
              )}
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
