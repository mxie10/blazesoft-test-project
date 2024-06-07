'use client'

import Container from '@/app/components/Container';
import Listings from '@/app/components/Listings';
import CheckBox from './components/checkBox';
import { useRef, useState } from 'react';

export default function Dashboard() {

  const countRef = useRef(0);
  const [countState, setCountState] = useState(0);

  const [checkStatus, setCheckState] = useState<boolean[]>([false, false, false, false]);

  console.log(countRef);

  const selectAll = () => {
    const newStatus = checkStatus.map((status)=>!status);
    setCheckState(newStatus);
  }

  const selectAllStatus = () => {
    return checkStatus.every(item=>item); 
  }

  const handleIndividual = () => {

  }

  return (
    <Container>
      {/* <div className='w-full lg:w-4/5'>
        <Listings />
      </div> */}

      {/* <div>
        <p>countRef: {countRef.current}</p>
        <button
          onClick={() => {countRef.current += 1; console.log(countRef.current)}}
        >
          Ref button
        </button>
      </div> */}

      <div className='flex flex-row gap-2'>
        <label>select all</label>
        <input 
          type='checkbox' 
          checked={(selectAllStatus())} 
          onChange={selectAll}
        />
      </div>
      {checkStatus.map((status, index) => {
        return (
          <div className='flex flex-row gap-2'>
            <label>checkbox {index + 1}</label>
            <input 
              type='checkbox' 
              checked={status} 
              onChange={() => handleIndividual()}
            />
          </div>
        )
      })}

    </Container>
  )
}

