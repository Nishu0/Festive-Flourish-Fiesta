import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'

export default function Layout({ children }) {
    return (
      <>
        <Header />
        <main>{children}</main>
        <Sidebar />
      </>
    )
  }