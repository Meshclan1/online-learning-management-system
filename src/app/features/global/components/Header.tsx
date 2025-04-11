import React from "react";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="border bottom-1">
      <nav className="bg-white border-gray-200 px-4 py-2.5">
        <div className="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Button variant="ghost" className="w-32 text-2xl">
                Home
              </Button>
            </Link>
          </div>
          <Link href="/courses" className="flex items-center">
            <Button variant="ghost" className="w-32 text-2xl">
              Courses
            </Button>
          </Link>
          <Link href="/dashboard" className="flex items-center">
            <Button variant="ghost" className="w-32 text-2xl">
              Dashboard
            </Button>
          </Link>
          <Link href="/admin" className="flex items-center">
            <Button variant="ghost" className="w-32 text-2xl">
              Admin
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
