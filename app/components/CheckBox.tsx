import React from 'react'

// interface CheckboxProps {
//   index: number;
//   onChange: () => void;
// }

type CheckboxPropsTypes = {
  index: number;
  onChange: () => void;
}

const CheckBox:React.FC<CheckboxPropsTypes> = (props) => {

  const {index,onChange} = props;

  return (
    <div className='flex flex-row gap-2 w-28'>
      <label className='w-3/4'>checkbox {index}</label>
      <input className='w-1/4' type='checkbox'/>
    </div>
  )
}

export default CheckBox;
