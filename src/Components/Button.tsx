import {PropsWithChildren} from "react";

type ButtonProps = PropsWithChildren<{
  buttonType?: 'Secondary'
  handleClick?: () => Promise<void>
}>

const Button = ({buttonType, handleClick, children}: ButtonProps) => {
  return (
      <button
          className={`h-[45px] bg-[#47312B] hover:bg-[#322618] w-full text-white rounded-[5px] cursor-pointer ${buttonType === 'Secondary' ? 'opacity-[85%]' : ''}`}
          type='submit'
          onClick={handleClick}
      >
        {children}
      </button >
  );
};

export default Button;