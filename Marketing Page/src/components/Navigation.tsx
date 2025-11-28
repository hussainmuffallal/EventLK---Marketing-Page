import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import logoImage from "figma:asset/e02f88a3b8bf59ba0bb9c3910e389d0e6ec48abf.png";

export function Navigation() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <img src={logoImage} alt="eventlk logo" className="w-10 h-10" />
            <span className="text-xl dark:text-white">EventLK</span>
          </a>
          
          <div className="flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
              Features
            </a>
            <a href="#plans" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
              Plans
            </a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
              Contact
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              ) : (
                <Sun className="w-5 h-5 text-gray-300" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}