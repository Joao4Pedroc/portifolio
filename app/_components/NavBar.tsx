function NavBar() {
  return (
    <nav className="lg:flex flex-col hidden">
      <ul>
        <li className="my-2">
          <a href="#experiences" className="group inline-flex items-center">
            <span className="w-12 group-hover:w-20 border-t-2 border-zinc-400 mr-2 group-hover:border-zinc-300 transition-all motion-reduce:transition-none"></span>
            <span className="transition-all motion-reduce:transition-none group-hover:text-amber-300">
              Experiences
            </span>
          </a>
        </li>
        <li className="my-2">
          <a href="#projects" className="group inline-flex items-center">
            <span className="w-12 group-hover:w-20 border-t-2 border-zinc-400 mr-2 group-hover:border-zinc-300 transition-all motion-reduce:transition-none"></span>
            <span className="transition-all motion-reduce:transition-none group-hover:text-amber-300">
              Projects
            </span>
          </a>
        </li>
        <li className="my-2">
          <a href="#skills" className="group inline-flex items-center">
            <span className="w-12 group-hover:w-20 border-t-2 border-zinc-400 mr-2 group-hover:border-zinc-300 transition-all motion-reduce:transition-none"></span>
            <span className="transition-all motion-reduce:transition-none group-hover:text-amber-300">
              Skills
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
