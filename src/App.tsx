import BackgroundHeading from "./Components/BackgroundHeading.tsx";
import Footer from "./Components/Footer.tsx";
import Header from "./Components/Header.tsx";
import Todolist from "./Components/Todolist.tsx";
import Sidebar from "./Components/Sidebar.tsx";




function App() {

  return (
    <div
        className='flex flex-col justify-center items-center font-sans bg-[#F1B4B3] min-h-screen'
    >
      <BackgroundHeading />

      <main className='w-[972px] h-[636px] bg-white rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,.08)] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden z-10  ' >

        <Header    />

        <Todolist  />

        <Sidebar />
      </main>

      <Footer/>
    </div>
  )
}

export default App
