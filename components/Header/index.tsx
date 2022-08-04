import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
    <header className="flex flex-row mx-20 py-5 w-full items-center justify-evenly my-0 mx-auto relative bg-slate-200">
      <Link href={"/"}>
        <a>
          <Image
            src={"/images/logo-challenge.png"}
            width={"40"}
            height={"40"}
            quality={"100"}
            alt={"header image"}
          />
        </a>
      </Link>
      <nav className='flex gap-x-10'>
        <Link href={"/"}>
          <a>
            Users
          </a>
        </Link>
        <Link href={"/Contact"}>
          <a>Contact-me</a>
        </Link>
      </nav>
    </header>
  )
}

export { Header }
