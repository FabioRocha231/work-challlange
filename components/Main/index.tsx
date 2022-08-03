import { useContext } from 'react'
import { UserContext } from '../../context/contextApi'
import { UsersHall } from './components'

export const MainContent = () => {
  const { users } = useContext(UserContext)
  return (
    <main className='flex flex-col my-28 justify-center items-center'>
      <UsersHall data={users} />
    </main>
  )
}
