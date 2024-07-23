import { Link } from "react-router-dom";
import FileIcon from "../FileIcon";
import { v4 as uuidV4 } from "uuid";

export default function Navbar() {
  return (
    <header className="m-4 w-full md:w-1/2 sm:px-4 lg:px-6 h-12 flex items-center justify-center gap-16 outline outline-offset-0 ring-2 ring-neutral-100 outline-neutral-100 border border-neutral-300 rounded-full">
      <Link to="/" className="flex items-center justify-center">
        <FileIcon className="h-7 w-7" />
      </Link>
      <Link to={`d/${uuidV4()}`}>
        <button className="md:p-1 hover:bg-primary hover:text-white hover:rounded-badge">
          Try It!!
        </button>
      </Link>
      <Link to="signup">
        <button className="md:p-1 hover:bg-primary hover:text-white hover:rounded-badge">
          Sign Up
        </button>
      </Link>
      <Link to="login">
        <button className="md:p-1 hover:bg-primary hover:text-white hover:rounded-badge">
          Log In
        </button>
      </Link>
    </header>
  );
}
