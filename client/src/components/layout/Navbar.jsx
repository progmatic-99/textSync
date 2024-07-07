import { Link } from "react-router-dom";
import FileIcon from "../FileIcon";

export default function Navbar() {
  return (
    <header className="mt-4 w-full sm:w-2/3 md:w-1/2 px-4 lg:px-6 h-14 flex items-center justify-center gap-12 outline outline-offset-0 ring-2 ring-neutral-100 outline-neutral-100 border border-neutral-300 rounded-full">
      <Link to="/" className="flex items-center justify-center">
        <FileIcon className="h-7 w-7" />
      </Link>
      <Link to="/signup">Just Try It!!</Link>
      <Link to="signup">Sign Up</Link>
      <Link to="login">Log In</Link>
    </header>
  );
}
