import MenuItem from '@mui/material/MenuItem';

const Dropdown = ({selectDropValues}) => {

  return (
    <>
      { selectDropValues.map((row) => (       
        <MenuItem key={row._id} value={row._id}>{row.subjectName}</MenuItem>        
      ))}
    </>
  );
};

export default Dropdown;
