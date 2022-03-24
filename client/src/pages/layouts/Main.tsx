import { FC } from 'react'
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer'
import Header from '../../components/Header'

const Main: FC = () => {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Main;