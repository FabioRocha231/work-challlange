import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useEffect, useMemo, useState } from 'react'
import {
  AiFillCaretLeft,
  AiFillCaretRight,
  AiOutlinePhone,
  AiOutlineMail
} from 'react-icons/ai'
import { FaUserAlt } from 'react-icons/fa'
import { CarouselGestures } from '../../../core/class/handlers/CarouselGestures'
import { JsonPlaceUserTypes } from '../../../core/types/jsonPlaceUserTypes'
import { UseWidth } from '../../../hooks/UseWidth'
import { carouselVariants, imagesVariants } from './CarouselUtils'


type PropsCarousel = {
  state: JsonPlaceUserTypes[]
}

const Carousel = ({ state }: PropsCarousel) => {
  const router = useRouter()
  const [limit, setLimit] = useState<number>(0)
  const [[page, direction], setPage] = useState([0, 0])
  const { width } = UseWidth()
  const {
    ValidRight,
    ValidLeft,
    CaroulselFormatter,
    CarouselReset
  } = new CarouselGestures()
  const [bounds, setBounds] = useState({
    upper: 0,
    limit: 0
  })

  useEffect(() => {
    return CaroulselFormatter({ state, setBounds, setLimit, width })
  }, [width, state])

  useEffect(() => {
    return CarouselReset({ setPage, direction })
  }, [limit])

  const completeMap = useMemo(
    () =>
      state?.map(
        ({ id, name, phone, email }, i) =>
          i < bounds.upper + bounds.limit * page &&
          i >= 0 + bounds.limit * page && (
            <motion.div
              className="h-fit cursor-pointer bg-transparent"
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 100, duration: 2 }}
              key={i}
              variants={carouselVariants}
              onClick={() => {
                router.push({
                  pathname: '/Todos/[user]',
                  query: { user: name, id: id }
                })
              }}
            >
              <div className="relative flex h-[250px] w-[250px] flex-col items-center justify-evenly gap-y-5 rounded-3xl p-2 text-center">
                <div className="absolute  h-full w-full  rounded-3xl bg-[#4E7AC7]/10 backdrop-blur-sm" />

                <span className="flex flex-row items-center justify-center gap-x-3">
                  <FaUserAlt className='z-[1]' />
                  <p className="z-[1] font-montserrat text-sm font-extrabold">
                    {name}
                  </p>
                </span>

                <span className='flex flex-row items-center justify-center gap-x-3'>
                  <AiOutlinePhone className='z-[1]' />
                  <p className='z-[1] font-montserrat text-sm font-extrabold'>{phone}</p>
                </span>

                <span className='flex flex-row items-center justify-center gap-x-3'>
                  <AiOutlineMail className='z-[1]' />
                  <p className='z-[1] font-montserrat text-sm font-semibold text-neutral-900'>
                    {email}
                  </p>
                </span>

              </div>
            </motion.div>
          )
      ),
    [page, limit, state]
  )

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }

  const iconLeftValidLeft = (
    <AiFillCaretLeft
      onClick={() => paginate(-1)}
      className="relative h-8 w-8 cursor-pointer text-[#5C9DF2] hover:opacity-80"
    />
  )

  const iconRightValidLeft = (
    <AiFillCaretLeft className="relative h-8 w-8 cursor-not-allowed text-[#5C9DF2] hover:opacity-80" />
  )

  const iconLeftValidRight = (
    <AiFillCaretRight
      onClick={() => paginate(1)}
      className="relative h-8 w-8 cursor-pointer text-[#5C9DF2] hover:opacity-80"
    />
  )
  const iconRightValidRight = (
    <AiFillCaretRight className="relative h-8 w-8 text-[#5C9DF2] cursor-not-allowed hover:opacity-80" />
  )

  const validLeft = useMemo(() => {
    return ValidLeft(page, iconLeftValidLeft, iconRightValidLeft)
  }, [page, limit])

  const validRight = useMemo(() => {
    return ValidRight(page, limit, iconLeftValidRight, iconRightValidRight)
  }, [page, limit])

  return (
    <>
      <div className="mt-10 flex min-h-max min-w-fit items-center justify-center gap-4 xsm:gap-2">
        {validLeft}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            variants={imagesVariants}
            custom={direction}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', bounce: 0, velocity: 0.8 },
              opacity: { duration: 0.45 }
            }}
            className="max-w-screen-2xl z-10 flex gap-8"
          >
            {completeMap}
          </motion.div>
        </AnimatePresence>
        {validRight}
      </div>
      <div className="mt-10 mb-20 text-center sm:mb-5">
        <p className="font-montserrat">
          Page <b>{page + 1}</b> of <b>{limit}</b>
        </p>
      </div>
    </>
  )
}

export default Carousel
