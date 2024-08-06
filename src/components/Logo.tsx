import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <img
        src="/images/Logo.png"
        alt="cirql-logo"
        className="w-[120px] h-[40px] object-contain"
      />
    </Link>
  );
};

export default Logo;
