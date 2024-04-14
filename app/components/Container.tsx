import React from 'react';

interface ContainerProps {
    children?:React.ReactNode
}

const Container:React.FC<ContainerProps> = ({children}) => {
  return (
    <div className='min-h-screen p-2 md:p-20 flex flex-col items-center justify-center'>
        {children}
    </div>
  )
}

export default Container;

