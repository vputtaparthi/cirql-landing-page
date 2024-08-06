import NavMenuItems from "./NavMenuItems";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="wrapper py-6 max-sm:py-4 flex items-center justify-between ">
      <Logo />

      <nav className="max-md:hidden">
        <NavMenuItems />
      </nav>

      <a href="#waitlist" className="max-md:hidden">
        <Button>
          <span>Join the waitlist</span>
        </Button>
      </a>

      <MobileNav />
    </header>
  );
};

export default Header;
