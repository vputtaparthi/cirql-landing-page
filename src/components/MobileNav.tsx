import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "../components/ui/sheet";
import NavMenuItems from "./NavMenuItems";
import { Button } from "./ui/button";
import Logo from "./Logo";

const MobileNav = () => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Menu className="w-8 h-8 cursor-pointer" />
        </SheetTrigger>
        <SheetContent className="">
          <Logo />

          <SheetClose asChild>
            <nav className="mt-[10vh]">
              <NavMenuItems />
            </nav>
          </SheetClose>

          <SheetClose asChild>
            <a
              href="#waitlist"
              className="mt-10 flex items-center justify-center "
            >
              <Button>
                <span>Add to waitlist</span>
              </Button>
            </a>
          </SheetClose>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
