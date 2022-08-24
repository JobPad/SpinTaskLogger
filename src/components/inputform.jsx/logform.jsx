import React from 'react'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const LogForm=({initialState})=>{
    const [logValue , setLogValue] = React.useState(initialState)

    const handleChange = (event) =>
    {
        setLogValue((prevState)=> ({...prevState,[event.target.label]:event.target.value}))
    }

return (<div>
    <div>
    <FormControl variant="standard" sx={{ m:1, minWidth:9/10}}>
        <InputLabel id="demo-simple-select-standard-label">Task</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={logValue.task}
          onChange={handleChange}
          label="Age"
          name="task_id"
        >
          <MenuItem value={10}>Task1</MenuItem>
          <MenuItem value={20}>Task2</MenuItem>
          <MenuItem value={30}>Task3</MenuItem>
        </Select>
      </FormControl>
      </div>
    <div>
    <FormControl variant="standard" sx={{ m: 2, minWidth: 9/10 }}>
    <TextField id="standard-basic" label="Date (DD-MM-YYYY)"  name="log_date"value={logValue.tdate} placeholder='DD-MM-YYYY' variant="standard" /> 
    </FormControl>
    </div>
    <div>
    <FormControl variant="standard" sx={{ m: 2, minWidth: 9/10}}>
    <TextField id="standard-basic" label="Time Taken (HH:MM)" name="log_time" placeholder='HH:MM' variant="standard" />
    </FormControl>
    </div>
   
 
    <div>
    <FormControl variant="standard" sx={{ m: 2, minWidth: 9/10 }}>
    <TextField
          id="filled-multiline-flexible"
          label="Comment"
          name="log_comment"
          multiline
          maxRows={4}
          value={logValue.comment}
          onChange={handleChange}
          variant="filled"
        />
     
    </FormControl>
    <FormControl variant="standard" sx={{ m: 2, minWidth: 9/10 }}>
    <input type="file" id="myFile" name="filename"></input>
    </FormControl>
    </div>
    </div>)
}

export default LogForm;