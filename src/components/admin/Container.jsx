import React from 'react'
import Header from '../admin/Header'

const Container = ({children, title, subtitle}) => {
  return (
    <>
        <Header title={title} subtitle={subtitle} />
        <div className="content">
            {children}
        </div>
    </>
  )
}

export default Container