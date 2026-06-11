import type { MouseEventHandler } from "react";

interface ButtonProps {
  label: string;
  to?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ label, to, onClick }: ButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (to && to.startsWith("#")) {
      e.preventDefault();
      const element = document.getElementById(to.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
    >
      {label}
    </button>
  );
}