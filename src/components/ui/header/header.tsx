import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineShoppingCart } from "react-icons/md";
import AvatarImg from "/images/image-avatar.png";

export default function Header() {
  return (
    <header className="p-5 h-[4.7rem] flex items-center justify-between border-none">
      <div className="flex items-center gap-x-3">
        <GiHamburgerMenu className="text-gray-600 text-2xl leading-0" />
        <h3 className="text-slate-800 text-3xl font-bold leading-0 m-0">
          sneakers
        </h3>
      </div>

      <div className="flex items-center gap-x-3">
        <MdOutlineShoppingCart className="text-gray-600 text-xl" />
        <img
          src={AvatarImg}
          className="h-6 w-6 rounded-full"
          alt="avatar image"
        />
      </div>
    </header>
  );
}
