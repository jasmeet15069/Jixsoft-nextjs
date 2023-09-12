import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <>
      <div className="h-16 px-5 bg-red-500 flex items-center justify-between">
        <h2>JixSoft</h2>
        <div className="flex gap-8">
          <Link href="/Components/layout/About">About</Link>
          <Link href="/Components/layout/Courses">Courses</Link>
          <Link href="/Components/layout/Product">Product</Link>
          <Link href="/Components/layout/Product">Account</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
