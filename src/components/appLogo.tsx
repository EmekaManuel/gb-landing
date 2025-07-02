import Image from "next/image";
import Link from "next/link";

import React from "react";

const AppLogo = () => {
  return (
    <Link href="/" className="main-logo flex items-center shrink-0">
      <Image
        className=" "
        src="/logos/logo.png"
        width={34}
        height={40}
        alt="logo"
      />
      <span className="text-2xl ltr:ml-1.5 rtl:mr-1.5  font-mono  align-middle hidden md:inline dark:text-white-light transition-all duration-300">
        globalpay
      </span>
    </Link>
  );
};

export default AppLogo;
