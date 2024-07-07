import { Link } from "react-router-dom";
import FileIcon from "../FileIcon";

export default function Navbar() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link to="/" className="flex items-center justify-center">
        <FileIcon className="h-6 w-6" />
        <span className="sr-only">Text Sync: Realtime Collaboration</span>
      </Link>
    </header>
  );
}
