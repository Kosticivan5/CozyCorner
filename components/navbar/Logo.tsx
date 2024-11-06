import Image from "next/image";
// import { Button } from "../ui/button";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href={"/"}
      className="bg-slate-800 p-2 rounded-tl-[65%] rounded-br-[65%] w-12"
    >
      <Image
        src={"/images/cozycornerlogo.png"}
        width={40}
        height={40}
        alt="logo"
      />
    </Link>
  );
};
export default Logo;
