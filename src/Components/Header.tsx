import Logo from "./Logo.tsx";
import Counter from "./Counter.tsx";



const Header = () => {
  return (
      <header
          className='flex justify-between items-center px-[28px] col-[1/3] row-[1/2] bg-[#FBF5ED] border-b border-black-[0.08] '
      >
        <Logo />

       <Counter  />
      </header >
  );
};

export default Header;