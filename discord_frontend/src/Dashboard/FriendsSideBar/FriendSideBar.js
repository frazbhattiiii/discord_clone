import React from 'react'
import { styled } from '@mui/system';
import AddFriendButton from './AddFriendButton';
import FriendsTitle from './FriendsTitle';
import FriendsList from './FriendsList/FriendsList';
import PendingInvitations from './PendingInivitations/PendingInvitations';
const MainContainer = styled('div')({
  display: 'flex',
  width: '224px',
  height  : '100%',
  backgroundColor: '#2F3136',
  alignItems: 'center',
  flexDirection: 'column',

})
function FriendSideBar() {
  return (
    <MainContainer>
<AddFriendButton/>
<FriendsTitle title='Private Messages'/>
<FriendsList/>
<FriendsTitle title='Invtations'/>
<PendingInvitations/>
    </MainContainer>
  )
}

export default FriendSideBar