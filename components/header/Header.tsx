"use client";

import { useRange } from "@/utils/useRange";
import { useWindowScroll } from "@mantine/hooks";
import { clsx } from "clsx";

type Props = {};

function Header({}: Props) {
  const [scroll, scrollTo] = useWindowScroll();
  const mappedValue = useRange(scroll.y, 50, 100, 0, 1);
  return (
    <header
      className={clsx(
        "z-10 flex flex-wrap text-white sticky transition-all top-0  sm:justify-start sm:flex-nowrap py-6 w-full text-sm dark:bg-neutral-800",
        scroll.y > 200 && "py-2"
      )}
    >
      <div
        className="absolute inset-0 bg-slate-900 transition-all sm:opacity-1"
        style={{ opacity: mappedValue }}
      ></div>
      <nav
        className="max-w-[85rem] z-10  w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <a className="flex-none text-xl font-semibold dark:text-white" href="#">
          Brand
        </a>
        <div className="flex flex-row items-center gap-5 mt-1 sm:justify-end sm:mt-0 sm:ps-5">
          <a className="font-medium text-blue-500" href="#" aria-current="page">
            Landing
          </a>
          <a className="font-medium" href="#">
            Account
          </a>
          <a className="font-medium" href="#">
            Work
          </a>
          <a className="font-medium" href="#">
            Blog
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
