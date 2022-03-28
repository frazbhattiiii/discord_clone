import React from 'react'
import {styled} from '@mui/system';

import MainPageButton from './MainPageButton';
const MainContainer = styled('div')({
  display: 'flex',
  width: '72px',
  height  : '100%',
  backgroundColor: '#202225',
  alignItems: 'center',
  flexDirection: 'column',

})
function Sidebar() {
  return (
    <MainContainer>
      <MainPageButton/>
    </MainContainer>
  )
}

export default Sidebar