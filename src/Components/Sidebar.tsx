import AddTodoForm from "./AddTodoForm.tsx";
import Button from "./Button.tsx";
import {useKindeAuth} from "@kinde-oss/kinde-auth-react";



const Sidebar = () => {
  const {login, register, isAuthenticated, isLoading, user, logout} = useKindeAuth()
  return (
      <section
          className=' flex flex-col col-[2/3] row-[2/3] bg-[#FFFCF9] border-l border-black-[0.08] px-[25px] pt-[18px] pb-[28px]'
      >
        <AddTodoForm />

        <div className='mt-auto space-y-2' >
          { isLoading ? null :
            isAuthenticated ? (
                <>
                  <p>Logged in as {user?.email}</p>
                  <Button buttonType='Secondary' handleClick={logout} >LogOut</Button>
                </>
            ) : (
                <>
                  <Button buttonType='Secondary' handleClick={login} >Log in</Button >
                  <Button buttonType='Secondary' handleClick={register} >Register</Button >
                </>
            )
          }

        </div>
      </section >
  );
};

export default Sidebar;