import React from 'react';
import './mentorFormDialog.scss';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const MentorDialog = (props) => {
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title" className="addMentorDialog" >
      
      <div className="addMentor" >Add User</div>
        <div className="fullDialog" >
        <DialogContent>
        <TextField
          label="Name"
          variant="outlined"
          margin="dense"
          fullWidth
        />
        <TextField
          label="Address"
          variant="outlined"
          margin="dense"
          fullWidth
        />
        <TextField
          label="E-mail"
          variant="outlined"
          margin="dense"
          fullWidth
        />
        <TextField
          label="Phone"
          variant="outlined"
          margin="dense"
          fullWidth
        />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} id="cancel" >
            Cancel
          </Button>
          <Button onClick={props.handleClose} id="addBtn" >
            ADD
          </Button>
        </DialogActions>
        </div>
    </Dialog>

  );
}
export default MentorDialog;