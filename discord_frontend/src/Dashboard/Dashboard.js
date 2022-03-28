import React from 'react'
import { styled } from '@mui/system';
import Sidebar from './SideBar/Sidebar';
import FriendSideBar from './FriendsSideBar/FriendSideBar';
import Messenger from './Messenger/Messenger';
import AppBar from './Appbar/AppBar';
const Wrapper = styled('div')({
  display: 'flex',
  width: '100%',
  height: '100vh',

});
export default function Dashboard() {
  return (
 <Wrapper>
   <Sidebar/>
   <FriendSideBar/>
   <Messenger/>
   <AppBar/>
 </Wrapper>
  )
}
