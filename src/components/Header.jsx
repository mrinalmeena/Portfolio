import React from "react";

const navItems = [
  { name: "About", href: "#WhoAmI" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#edece7]/80 backdrop-blur-md border-b border-[#d8d3ca]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 py-5">

        {/* Logo */}
        <a
          href="#hero"
          className="font-hand text-4xl text-[#2d2520] hover:scale-105 transition-transform"
        >
          MM
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="
                text-[15px]
                font-medium
                tracking-wide
                text-[#433730]
                hover:text-[#8b5b47]
                transition-colors
                relative
                after:absolute
                after:left-0
                after:-bottom-1
                after:h-[2px]
                after:w-0
                after:bg-[#8b5b47]
                after:transition-all
                hover:after:w-full
              "
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          target="/Mrinal-Meena-Resume.pdf"
          rel="noopener noreferrer"
          className="
            hidden
            md:inline-flex
            items-center
            rounded-full
            border
            border-[#8b5b47]
            px-5
            py-2
            text-sm
            font-medium
            text-[#8b5b47]
            transition-all
            hover:bg-[#8b5b47]
            hover:text-white
          "
        >
          Resume
        </a>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-[#2d2520]"
          aria-label="Open menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.8}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

      </div>

 

    </header>
  );
}