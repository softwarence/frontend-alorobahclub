import Image from "next/image";
import Link from "next/link";
import React from "react";
import export_box_icon from "@/public/assets/export_box_icon.svg";

const GetRightSideButton = () => {
  return (
    <div className="hidden md:flex items-center gap-6">
      {/* STORE */}
      <Link
        href="/store"
        className="flex items-center gap-2 text-white font-semibold hover:text-[#FFE000]"
      >
        STORE
        <Image src={export_box_icon} alt="export" width={16} height={16} className="opacity-90" />
      </Link>

      {/* TICKETS */}
      <Link
        href="#"
        className="flex items-center gap-2 text-white font-semibold hover:text-[#FFE000]"
      >
        TICKETS
        <Image src={export_box_icon} alt="export" width={16} height={16} className="opacity-90" />
      </Link>
    </div>
  );
};

export default GetRightSideButton;
