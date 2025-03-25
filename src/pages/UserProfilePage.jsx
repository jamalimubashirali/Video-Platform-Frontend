import React from 'react'
import { UserChannelProfile } from '../components';
import { useParams } from 'react-router-dom';

const UserProfilePage = () => {
  const {userId} = useParams();
  return (
    <div>
      <UserChannelProfile userId={userId}/>
    </div>
  )
}

export default UserProfilePage;
