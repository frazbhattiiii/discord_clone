import { Button, Typography } from '@mui/material'
import React from 'react'
import Avatar from '../../../shared/components/Avatar'
import OnlineIndicator from './OnlineIndicator'
function FriendListItem({name,id,isOnline}) {
  return (
    <Button style={{
      width: '100%',
      height: '42px',
      marginTop:'10px',
      display:'flex',
      alignItems:'center',
      justifyContent:'flex-start',
      textTransform:'none',
      color:'black',
      position: 'relative',

    }}>
        <Avatar username={name}/>
        <Typography style={{
            marginLeft:'7px',
            fontWeight:700,
            color:'#8e9297',

        }}
        variant='subtitle1'
        align='left'>
      {name}
        </Typography>
        {isOnline && <OnlineIndicator/>}
    </Button>

  )
}

export default FriendListItem