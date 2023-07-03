import React, { useContext } from 'react';
import { Authcontext } from '../../../Context/UserContext';

const Banner = () => {
  const {user} = useContext(Authcontext);
  console.log('context' , user);
  return (
    <div className='bg-black text-white text-center'>
      {user?.email && <span>Welcome,{user.email}</span>}
    </div>
  );
};

export default Banner;