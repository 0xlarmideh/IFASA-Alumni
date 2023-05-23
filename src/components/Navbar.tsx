import { NextPage } from "next";
import Link from "next/link";

export const Navbar: NextPage = () => {
  return (
    <div className="bg-primary_light text-white">
      <div></div>
      <div className="flex justify-between">
        <Link href="/jobs" className="nav-link">
          Jobs
        </Link>
        <Link href="/jobs" className="nav-link">
          Events
        </Link>
      </div>
    </div>
  );
};
