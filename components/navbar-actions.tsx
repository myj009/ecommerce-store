"use client";
import React from "react";
import Button from "./ui/button";
import { ShoppingBag } from "lucide-react";

const NavbarActions = () => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button className="flex items-center rounded-full bg-black px-4 py-2">
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-start font-medium text-white">0</span>
      </Button>
    </div>
  );
};

export default NavbarActions;
