import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="bg-primary_light text-white pt-[4rem] ">
      <div className="mx-auto my-[0] max-w-[750px] border-b-2 border-text_grey ">
        <input placeholder="search" className="font-italic text-[2rem] p-2 bg-transparent " />
      </div>
      <div className="flex justify-between">
        <Link
          href="/jobs"
          className={router.pathname == "/jobs" ? "active" : "nav-link"}
        >
          Jobs
        </Link>
        <Link
          href="/events"
          className={router.pathname == "/events" ? "active" : "nav-link"}
        >
          Events
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
