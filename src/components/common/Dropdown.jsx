import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMiniChevronDown } from "react-icons/hi2";

const Dropdown = ({ name, items, icon, activePath }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Check if current page matches this dropdown's section
  const isActive = location.pathname.startsWith(activePath);

  return (
    <div>
      <div
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className={`navItem px-4 py-2.5 flex items-center justify-between gap-2 text-sm rounded cursor-pointer transition-colors ${
          isActive || isOpen
            ? "bg-primary text-white"
            : "text-primary hover:bg-primary/10"
        }`}
      >
        <span className="flex items-center gap-2">
          {icon}
          {name}
        </span>
        <HiMiniChevronDown
          size={16}
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </div>

      {isOpen && (
        <div className="bg-white border-x border-b border-gray-200 rounded-b overflow-hidden">
          <ul>
            {items.map((item, index) => {
              const isItemActive = location.pathname === item.path;

              return (
                <li key={index}>
                  <Link
                    to={item.path}
                    className={`block px-4 py-2 text-sm border-b last:border-b-0 border-gray-100 ${
                      isItemActive
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
