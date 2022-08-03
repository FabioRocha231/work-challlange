import Image from 'next/image'

export const LogoAndRigth = () => {
  return (
    <div className='flex flex-row gap-x-10 mx-20 justify-center items-center sm:py-5 sm:gap-x-5'>
      <div className='w-10 h-10 border-2'>
        <Image
          src={'/images/logo-challenge.png'}
          width={40}
          height={40}
          alt={'footer logo'}
        />
      </div>
      <div className='flex flex-col'>
        <p className="font-montserrat text-lg sm:text-sm">
          Copyright &copy; 2022 All rights reserved
        </p>
        <p className="font-montserrat text-lg sm:text-sm">
          Designed by{' '}
          <span className="animate-pulse text-base text-[#CA0002] sm:text-sm">
            Fabio HR Filho
          </span>
        </p>
      </div>
    </div>
  )
}
