import { useState } from "react";
import {
  HiMenuAlt3,
  HiX,
} from "react-icons/hi";
import {
  Link,
  useLocation,
} from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const location = useLocation();

  const navLinks = [
    {
      name: "Features",
      path: "/features",
    },
    {
      name: "How It Works",
      path: "/how-it-works",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <nav
        className="
          fixed
          left-0
          top-0
          z-50
          w-full
          border-b
          border-white/10
          bg-slate-950/80
          backdrop-blur-xl
        "
      >

        <div
          className="
            mx-auto
            flex
            h-20
            max-w-7xl
            items-center
            justify-between
            px-8
          "
        >

          {/* ================= LOGO ================= */}

          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="shrink-0"
          >

            <h1
              className="
                text-4xl
                font-extrabold
                tracking-tight
                text-white
              "
            >
              Resume<span className="text-cyan-400">
                IQ
              </span>
            </h1>

            <p className="mt-1 text-xs text-slate-400">
              AI Career Assistant
            </p>

          </Link>


          {/* ================= DESKTOP MENU ================= */}

          <ul
            className="
              hidden
              items-center
              gap-10
              text-slate-300
              lg:flex
            "
          >

            {navLinks.map((link) => (
              <li key={link.path}>

                <Link
                  to={link.path}
                  className={`
                    relative
                    text-sm
                    font-medium
                    transition
                    ${
                      isActive(link.path)
                        ? "text-cyan-400"
                        : "text-slate-300 hover:text-cyan-400"
                    }
                  `}
                >
                  {link.name}

                  {isActive(link.path) && (
                    <span
                      className="
                        absolute
                        -bottom-2
                        left-0
                        h-[2px]
                        w-full
                        rounded-full
                        bg-cyan-400
                      "
                    />
                  )}

                </Link>

              </li>
            ))}

          </ul>


          {/* ================= DESKTOP BUTTONS ================= */}

          <div
            className="
              hidden
              items-center
              gap-5
              lg:flex
            "
          >

            {/* Login */}

            <Link
              to="/login"
              className="
                text-sm
                font-medium
                text-slate-300
                transition
                hover:text-white
              "
            >
              Login
            </Link>


            {/* Get Started */}

            <Link
              to="/signup"
              className="
                rounded-xl
                bg-cyan-400
                px-6
                py-3
                font-semibold
                text-slate-900
                shadow-lg
                shadow-cyan-500/20
                transition
                hover:bg-cyan-300
              "
            >
              Get Started
            </Link>

          </div>


          {/* ================= MOBILE BUTTON ================= */}

          <button
            type="button"
            className="
              text-3xl
              text-white
              transition
              hover:text-cyan-400
              lg:hidden
            "
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <HiX /> : <HiMenuAlt3 />}
          </button>

        </div>

      </nav>


      {/* ================= MOBILE MENU ================= */}

      {open && (
        <div
          className="
            fixed
            left-0
            top-20
            z-40
            w-full
            border-b
            border-white/10
            bg-slate-950/95
            backdrop-blur-xl
            lg:hidden
          "
        >

          <div
            className="
              flex
              flex-col
              items-center
              gap-5
              px-8
              py-7
            "
          >

            {/* Mobile Navigation */}

            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`
                  w-full
                  rounded-xl
                  px-4
                  py-3
                  text-center
                  text-sm
                  font-medium
                  transition
                  ${
                    isActive(link.path)
                      ? "bg-cyan-400/10 text-cyan-400"
                      : "text-slate-300 hover:bg-white/5 hover:text-cyan-400"
                  }
                `}
              >
                {link.name}
              </Link>
            ))}


            {/* Mobile Login */}

            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="
                w-full
                rounded-xl
                border
                border-white/10
                px-6
                py-3
                text-center
                font-semibold
                text-white
                transition
                hover:border-cyan-400/40
                hover:text-cyan-400
              "
            >
              Login
            </Link>


            {/* Mobile Get Started */}

            <Link
              to="/signup"
              onClick={() => setOpen(false)}
              className="
                w-full
                rounded-xl
                bg-cyan-400
                px-6
                py-3
                text-center
                font-semibold
                text-slate-900
                transition
                hover:bg-cyan-300
              "
            >
              Get Started
            </Link>

          </div>

        </div>
      )}

    </>
  );
};

export default Navbar;