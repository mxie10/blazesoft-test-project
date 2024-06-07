'use client'

import Container from '@/app/components/Container';
import Listings from '@/app/components/Listings';
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
      <div className='w-full lg:w-4/5'>
        <Listings />
      </div>
    </Container>
  )
}

