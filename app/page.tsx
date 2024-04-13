import Listings from './components/Listings';
import Container from '@/app/components/Container';

const Dashboard = () => {

  return (
    <Container>
      <div className='w-4/5'>
        <Listings/>
      </div>
    </Container>
  )
}

export default Dashboard;
