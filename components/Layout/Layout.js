import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

const Layout = ({ children }) => {
  return (
    <div className="lg:px-24 md:px-16 sm:px-8 xxs:px-4">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout