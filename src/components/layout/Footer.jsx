import { useLocation } from "react-router-dom";
import pkg from "../../../package.json";
import logoShort from "../../assets/logo/logo-text-short.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();

  if (pathname.indexOf("/bet/") === -1) {
    return (
      <footer className="my-auto mb-6">
        <div className="w-1/2 bg-stone-900 container border border-solid border-lime-200 rounded-2xl  mx-auto py-4 px-8">
          <nav className="flex justify-between items-center">
            <Link to={"/Qrcode"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-qrcode"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                <path d="M7 17l0 .01" />
                <path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                <path d="M7 7l0 .01" />
                <path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                <path d="M17 7l0 .01" />
                <path d="M14 14l3 0" />
                <path d="M20 14l0 .01" />
                <path d="M14 14l0 3" />
                <path d="M14 20l3 0" />
                <path d="M17 17l3 0" />
                <path d="M20 17l0 3" />
              </svg>
            </Link>
            <Link to={"/"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-home"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
              </svg>
            </Link>
            <Link to={"/CurrencyConverter"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-calculator"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 3m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                <path d="M8 7m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z" />
                <path d="M8 14l0 .01" />
                <path d="M12 14l0 .01" />
                <path d="M16 14l0 .01" />
                <path d="M8 17l0 .01" />
                <path d="M12 17l0 .01" />
                <path d="M16 17l0 .01" />
              </svg>
            </Link>
          </nav>
        </div>
      </footer>
    );
  }
  return null;
};

export default Footer;
