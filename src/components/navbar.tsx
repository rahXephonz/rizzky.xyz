export function Navbar() {
  return (
    <header className="px-5 py-6 max-w-3xl mx-auto">
      <nav className="flex justify-between items-center">
        <ul className="flex items-center space-x-7">
          <li className="text-base hover:text-orange-600 duration-300 ease-in-out transition-all">
            <a href="/">About</a>
          </li>
          <li className="text-base flex space-x-1">
            <a
              href="/projects"
              className="text-base hover:text-orange-600 duration-300 ease-in-out transition-all"
            >
              Projects
            </a>
            <span className="text-sm">
              <small>5</small>
            </span>
          </li>
        </ul>
        <button className="bg-black px-3 text-white py-0.5 hover:bg-orange-600 duration-300 ease-in-out transition-all">
          <a href="https://www.linkedin.com/in/mrizkyy/" target="_blank">
            Let's connect
          </a>
        </button>
      </nav>
    </header>
  );
}
