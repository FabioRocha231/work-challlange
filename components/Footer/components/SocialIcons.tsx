import { BsLinkedin, BsGithub, BsMailbox2 } from "react-icons/bs";

export const SocialIcons = () => {
  return (
    <div className="flex flex-row gap-x-5">
      <button onClick={() => {
        window.open("https://github.com/FabioRocha231", "_blank", "noreferrer")
      }}>
        <BsGithub className='relative text-black h-8 w-8 hover:opacity-80' />
      </button>

      <button onClick={() => {
        window.open("https://www.linkedin.com/in/fhrfilho/", "_blank", "noreferrer")
      }}>
        <BsLinkedin className='relative text-black h-8 w-8 hover:opacity-80' />
      </button>

      <a href='mailto:fabioharoldo1@gmail.coom' className='no-underline'>
        <BsMailbox2 className='relative text-black h-8 w-8 hover:opacity-80' />
      </a>
    </div>
  )
}
