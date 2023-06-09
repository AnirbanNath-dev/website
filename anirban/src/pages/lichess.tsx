import { useRouter } from 'next/router';
import { useEffect } from 'react';

function MyPage() {
  const router = useRouter();

  // redirect to another website after the component has mounted
  useEffect(() => {
    router.push('https://lichess.org/@/mannu_vilasara');
  }, []);

  return <div className='nsfw'></div>;
}

export default MyPage;
