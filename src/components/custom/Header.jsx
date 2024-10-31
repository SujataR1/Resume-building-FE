import React from 'react';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';
import { UserButton, useUser } from '@clerk/clerk-react';

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className='header-container'>
      <img src='/logo.svg' alt="Logo" className='logo' />

      {isSignedIn ?
        <div className='flex gap-2 items-center'>
           <Link to={'/dashboard'}>
           <Button variant="outline" className="dashboard-button">Dashboard</Button>
           </Link>
          <UserButton className="user-button-margin" />
        </div> :

        <Link to={'/auth/sign-in'}>
          <Button className='get-started-button'>Get started</Button>
        </Link>
      }
    </div>

  );
}

export default Header;