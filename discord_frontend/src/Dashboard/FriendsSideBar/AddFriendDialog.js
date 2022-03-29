import Dialog from '@mui/material/Dialog';
import  DialogTitle  from '@mui/material/DialogTitle';
import DialogActions  from '@mui/material/DialogActions';
import DialogContent  from '@mui/material/DialogContent';
import DialogContentText  from '@mui/material/DialogContentText';
import Typography from '@mui/material/Typography';

import React,{useState,useEffect} from 'react';
import InputWithLabel from '../../shared/components/InputWithLabel';
import {validateMail} from '../../shared/utils/validators'
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';

function AddFriendDialog({
  isDialogOpen,
  closeDialogHandler,
  sendFriendInvitation=()=>{}
}) {
const [mail,setMail]=useState('');
const [isFormValid,setIsFormValid]=useState('');
const handleSendInvitaiton=()=>{
  // TODO: send friend invitation
}


const handleCloseDialog=()=>{
  closeDialogHandler();
  setMail('');
}
useEffect(() => {
  setIsFormValid(validateMail(mail));
}, [mail,setIsFormValid])

  return (
    <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
      <DialogTitle>
        <Typography>
          Invite a Friend
        </Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography>
            Enter e-mail address of friend which you would like to invite
          </Typography>
          </DialogContentText>
          <InputWithLabel 
          label='E-mail'
          value={mail}
          setValue={setMail}
          type='text'
          placeholder='Enter e-mail address'
          />
     
      </DialogContent>
      <DialogActions>
        <CustomPrimaryButton
        onClick={handleSendInvitaiton}
        disabled={!isFormValid}
        label='Send Invitation'
        additionalStyles={{
          marginRight:'15px',
          marginLeft:'15px',
          marginBottom:'10px'
        }}
        />
      </DialogActions>
    </Dialog>
  )
}

export default AddFriendDialog;