import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className=" navbar text-gray-800 px-[10%] py-3 flex justify-between items-center border-b-[2px] border-solid border-pink-700 bg-[url(/Header-image.jpg)] bg-contain sticky z-10 w-[100%] top-[0rem] max-[450px]:px-[4%]">
        <Link to="/" className="text-4xl text-blue-200 font-bold"><img src="/Logo.png" alt="logo" className="w-[13rem] brightness-200 max-[450px]:w-[8rem]" /></Link>
        <div className="flex gap-10 max-[450px]:gap-2">
          <Link to="/login" className="text-[21px] font-[600] bg-cyan-500 px-[1.5rem] leading-[2.5rem] rounded-3xl border-[1px] borde-solid border-cyan-300 shadow-sm shadow-cyan-300 max-[450px]:text-[12px] max-[450px]:h-[2rem] max-[450px]:leading-[2rem] max-[450px]:px-[0.7rem] max-[450px]:rounded-[5px]">Login</Link>
          {/* <Link to="/register">Register</Link> */}
          <Link to="/register" className="text-[21px] text-white font-[600] bg-orange-500 px-[1rem] leading-[2.5rem] rounded-3xl border-[1px] borde-solid border-orange-300 shadow-sm shadow-orange-300 max-[450px]:text-[12px] max-[450px]:h-[2rem] max-[450px]:leading-[2rem] max-[450px]:px-[0.7rem] max-[450px]:rounded-[5px]">Register</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
