import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import InfoIcon from "@mui/icons-material/Info";
import FolderIcon from "@mui/icons-material/Folder";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const MobileNavItem = ({ to, icon: Icon, label }: any) => (
    <button
      onClick={() => scrollToSection(to)}
      className="text-gray-200 hover:text-blue-400 transition-colors"
      aria-label={label}
    >
      <Icon />
    </button>
  );

  return (
    <>
      <header className="w-full px-4 py-4 bg-gray-800/30 shadow-md font-mono font-extrabold text-md md:text-lg lg:text-xl top-0 z-50 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => scrollToSection("home")} className="cursor-pointer">
            <h1 className="text-gray-200 px-4 hover:text-blue-400 transition-colors">
              John Bytes
            </h1>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex rounded-xl p-2 justify-center items-center">
            <NavigationMenu className="hidden md:block">
              <NavigationMenuList className="flex gap-6">
                

                <NavigationMenuItem>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-gray-400 hover:text-gray-200 transition-colors text-xl"
                    aria-label="About"
                  >
                    <InfoIcon />
                  </button>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="text-gray-400 hover:text-gray-200 transition-colors text-xl"
                    aria-label="Projects"
                  >
                    <FolderIcon />
                  </button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Navigation and Burger Button */}
          <div className="flex md:hidden items-center gap-4">
            {/* Navigation items on the left */}
            <nav
              className={`
                overflow-hidden
                transition-all
                duration-300
                ease-in-out
                flex flex-row gap-4 items-center
                ${isOpen ? "max-h-10 opacity-100" : "max-h-0 opacity-0"}
              `}
            >
              <MobileNavItem to="home" icon={HomeRoundedIcon} label="Home" />
              <MobileNavItem to="about" icon={InfoIcon} label="About" />
              <MobileNavItem to="projects" icon={FolderIcon} label="Projects" />
            </nav>

            {/* Burger button on the right */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
              aria-label="Menu"
            >
              {isOpen ? (
                <CloseIcon className="text-gray-200" />
              ) : (
                <MenuIcon className="text-gray-200" />
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}