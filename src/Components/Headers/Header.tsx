import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200
                    ${isActive ? "text-orange-700" : "text-gray-700"}
                    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <AdvanceReactPattern />
              <li>
                <NavLink
                  to="/BGChanger"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200
                    ${isActive ? "text-orange-700" : "text-gray-700"}
                    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  BGChanger
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/passwordGenerator"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200
                    ${isActive ? "text-orange-700" : "text-gray-700"}
                    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Password Generator
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/currencyConverter"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200
                    ${isActive ? "text-orange-700" : "text-gray-700"}
                    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Currency Converter
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200
                    ${isActive ? "text-orange-700" : "text-gray-700"}
                    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/toggel"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200
                    ${isActive ? "text-orange-700" : "text-gray-700"}
                    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Toggel
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/addTodo"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200
                    ${isActive ? "text-orange-700" : "text-gray-700"}
                    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Redux Todos
                </NavLink>
              </li>
              <DropDown />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

const AdvanceReactPattern = () => {
  return (
    <Menu as="div" className="relative inline-block text-left py-0">
      <div>
        <MenuButton className="items-center inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:text-orange-700 pt-0">
          Advanced React Patterns
          <FaChevronDown
            aria-hidden="true"
            className="-mr-1 text-sm text-gray-400"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <NavLink
              to="/advancedReactPatterns/hoc"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200
                    ${isActive ? "text-orange-700" : "text-gray-700"}
                    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700`
              }
            >
              HOC
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink
              to="/advancedReactPatterns/renderProps"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200
                    ${isActive ? "text-orange-700" : "text-gray-700"}
                    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700`
              }
            >
              Render Props
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink
              to="/advancedReactPatterns/compoundComponent"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200
                    ${isActive ? "text-orange-700" : "text-gray-700"}
                    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700`
              }
            >
              Compound Component
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink
              to="/advancedReactPatterns/controlled"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200
                    ${isActive ? "text-orange-700" : "text-gray-700"}
                    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700`
              }
            >
              Controlled
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink
              to="/advancedReactPatterns/uncontrolled"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200
                    ${isActive ? "text-orange-700" : "text-gray-700"}
                    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700`
              }
            >
              UnControlled
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink
              to="/advancedReactPatterns/errorBondry"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200
                    ${isActive ? "text-orange-700" : "text-gray-700"}
                    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700`
              }
            >
              Error Boundry
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink
              to="/advancedReactPatterns/portals"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200
                    ${isActive ? "text-orange-700" : "text-gray-700"}
                    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700`
              }
            >
              Portals
            </NavLink>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
};

const DropDown = () => {
  return (
    <Menu as="div" className="relative inline-block text-left py-0">
      <div>
        <MenuButton className="items-center inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:text-orange-700 pt-0">
          Tailwind And Props Example
          <FaChevronDown
            aria-hidden="true"
            className="-mr-1 text-sm text-gray-400"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <NavLink
              to="/tailwindAndPropsExample/Counter"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200
                    ${isActive ? "text-orange-700" : "text-gray-700"}
                    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700`
              }
            >
              Counter
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink
              to="/tailwindAndPropsExample/TailwindExample"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200
                    ${isActive ? "text-orange-700" : "text-gray-700"}
                    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700`
              }
            >
              Tailwind Example
            </NavLink>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
};
