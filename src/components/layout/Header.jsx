import { Link } from "react-router-dom";
import ConnectLink from "../qubic/connect/ConnectLink";
import logo from "../../assets/logo/HM25.svg";

const Header = () => {
  return (
    <header className="w-full h-16 flex items-center justify-between px-8 sm:px-16 md:px-32 py-auto">
      <nav className="flex h-auto items-center">
        <ul className="sm:flex-col md:flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
        </ul>
      </nav>
      <div className="bg-stone-900 border border-solid border-lime-200 w-48 h-8 rounded-2xl flex items-center gap-4 px-6">
        <span className="w-2 h-2 rounded-2xl bg-red-400 "></span>
        <span className="text-amber-50">Disconnected</span>
      </div>
      <div className="flex items-center gap-4">
        <ConnectLink />
      </div>
    </header>
  );
};

export default Header;
