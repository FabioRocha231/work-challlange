import { LogoAndRigth } from './components/LogoAndRigth'
import { SocialIcons } from './components/SocialIcons'


const Footer = () => {
  return (
    <footer className='flex bg-slate-200 w-full h-48 flex-row justify-evenly items-center hd:flex-col'>
      <LogoAndRigth />
      <SocialIcons />
    </footer>
  )
}

export { Footer }
