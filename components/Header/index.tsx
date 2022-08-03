import Image from "next/image"

const Header = () => {
  return (
    <header className="flex flex-row mx-20 py-5 w-full items-center justify-evenly my-0 mx-auto relative bg-slate-200">
      <Image
        src={"/images/logo-challenge.png"}
        width={"40"}
        height={"40"}
        quality={"100"}
        alt={"header image"}
      />
      <nav className='flex gap-x-10'>
        <button >
          Users
        </button>
        <button>
          Contact-me
        </button>

      </nav>
    </header>
  )
}

export { Header }
