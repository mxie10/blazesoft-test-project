/*
* Dashboard is rendered on server
*/

import Container from '@/app/components/Container';
import Listings from '@/app/components/Listings';

export default async function Dashboard() {

  console.log('server side rendering');

  return (
    <Container>
      <div className='w-full lg:w-4/5'>
        <Listings />
      </div>
    </Container>
  )
}

