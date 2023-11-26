import { ReactNode } from 'react'

interface SliderSmallItemProps {
    children: ReactNode
}

const SliderSmallItem = ({ children }: SliderSmallItemProps) => {
  return (
    <div className='slide'>
        {children}
    </div>
  )
}

export default SliderSmallItem