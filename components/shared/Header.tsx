import React from 'react'

const Header = ({title,subtitle}:{title:string,subtitle?:string}) => {
  return (<>
    <div>{title}</div>
    <div>{subtitle?subtitle:'np'}</div>
  </>
  )
}

export default Header