import Link from "next/link";

type Props = {};

function Sidebar({}: Props) {
  return (
    <div className="absolute top-0 left-0 bottom-0 w-[10vw] bg-white border border-r-gray-500 px-4">
      <div className="flex flex-col">
        <Link className="" href={"/"}>
          Home
        </Link>
        <Link className="" href={"/burgers"}>
          Burgers
        </Link>
        <Link className="" href={"/gradients"}>
          Gradients
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
