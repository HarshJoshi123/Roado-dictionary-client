import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {createWord,fetchWord} from "./apiPost.js"
import Alert from '@material-ui/lab/Alert';
export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [wordValue,setWord]=React.useState("");
  const [msg,setMsg]=React.useState("");
//console.log(addWord);
  const handleClickOpen = () => {
    setOpen(true);
  };

const handleClick=()=>{
  createWord(wordValue).then(resp=>{
   if(resp.error){
    setMsg(resp.error);
    return;
   }
    setMsg("");
    setOpen(false);
  }).catch(err=>setMsg(err));
 // console.log("word Add handle click"+wordValue);
  
}
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add New Word
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add a new word</DialogTitle>
        <DialogContent>
          <DialogContentText>
           {msg=="" ? "":(<Alert severity="error">{msg}</Alert>)}
          Add a new word to your dictionary!!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Word"
            fullWidth
            value={wordValue}
            onChange={(e)=>setWord(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClick} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}