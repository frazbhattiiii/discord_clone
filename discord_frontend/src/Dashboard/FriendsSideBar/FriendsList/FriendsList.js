import React from 'react'
import {styled} from '@mui/system';
import FriendListItem from './FriendListItem';

const DummyFriends=[
  {
    id: 1,
  name: 'John Doe',
isOnline:true,
},
  {
    id: 2,
  name: 'Ahmed Fraz',
isOnline:false,
},
  {
    id: 3,
  name: 'Bhatti Bhai',
isOnline:false,
},


]

const MainContainer = styled('div')({
flexGrow:1,
width:'100%'

})
function FriendsList() {
  return (
    <MainContainer>
      {DummyFriends.map(friend=>(
        <FriendListItem
        name={friend.name}
        id={friend.id}
        key={friend.id}
        isOnline={friend.isOnline}
        />
      ))}

    </MainContainer>
  )
}

export default FriendsList