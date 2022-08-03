import { JsonPlaceUserTypes } from '../../../core/types/jsonPlaceUserTypes'
import Carousel from './Carousel'

export type UsersHallParams = {
  data: JsonPlaceUserTypes[]
}

export const UsersHall = ({ data }: UsersHallParams) => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <h1 className="font-montserrat text-3xl text-neutral-900  sm:my-5 sm:text-2xl ">
        Please Select you user
      </h1>

      <div className="w-full overflow-x-hidden">
        <Carousel state={data} />
      </div>
    </div>
  )
}
