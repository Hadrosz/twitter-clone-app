import Image from "next/image";
import Link from "next/link";
import {
  BellSVG,
  HomeSVG,
  PremiumSVG,
  ProfileSVG,
  SearchSVG,
} from "@/components/Icons";
export const Navigation = () => {
  return (
    <aside className="h-screen flex flex-col justify-between pb-4">
      <section>
        <ul className="flex justify-start flex-col gap-3">
          <li>
            <Link
              href={"/"}
              className="p-2 rounded-full  transition duration-500 hover:bg-gray-200 hover:duration-500  w-14 h-14 flex justify-center items-center"
            >
              <Image
                src="https://seeklogo.com/images/T/twitter-logo-1DEF94C339-seeklogo.com.png"
                width={30}
                height={30}
                alt="Twitter Logo"
              />
            </Link>
          </li>
          <li className="w-auto">
            <Link
              href={"/"}
              className="p-2 rounded-full transition duration-500 hover:bg-gray-200 hover:duration-500  flex justify-start items-center gap-4 text-lg"
            >
              <HomeSVG />
              <span>Inicio </span>
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className="p-2 rounded-full transition duration-500 hover:bg-gray-200 hover:duration-500  flex justify-start items-center gap-4 text-lg"
            >
              <SearchSVG />
              <span>Explorar </span>
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className="p-2 rounded-full transition duration-500 hover:bg-gray-200 hover:duration-500  flex justify-start items-center gap-4 text-lg"
            >
              <BellSVG />
              <span>Notificaciones </span>
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className="p-2 rounded-full transition duration-500 hover:bg-gray-200 hover:duration-500  flex justify-start items-center gap-4 text-lg"
            >
              <PremiumSVG />
              <span>Premium </span>
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className="p-2 rounded-full transition duration-500 hover:bg-gray-200 hover:duration-500  flex justify-start items-center gap-4 text-lg"
            >
              <ProfileSVG />
              <span>Perfil </span>
            </Link>
          </li>
        </ul>
      </section>
      <div className="flex justify-start">
        <Image
          src={""}
          width={50}
          height={50}
          alt="Logged User"
          className="rounded-full w-12 h-12 img object-cover mr-2"
        />
        <div className="flex flex-col">
          <span className="font-bold">Name</span>
          <span className="text-sm text-gray-500">@Username</span>
        </div>
      </div>
    </aside>
  );
};
