import {useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectAutoWidth() {
  const [favorite, setFavorite] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 200 }} style={{backgroundColor: 'var(--background-color)', borderColor: 'var(--text-color)' }} >
        <InputLabel
          id="demo-simple-select-autowidth-label"
          style={{ fontFamily: 'inherit', color: 'var(--text-color)'}}>
          Favorite
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={favorite}
          onChange={handleChange}
          autoWidth
          label="Favorite"
          
          style={{fontFamily: 'inherit'}}
        >
          <MenuItem value="" style={{fontFamily: 'inherit', color: 'var(--text-color)'}}>
            <em>None</em>
          </MenuItem>
          <MenuItem value={'Characters'} style={{fontFamily: 'inherit', color: 'var(--text-color)'}}>Characters</MenuItem>
          <MenuItem value={'Locations'} style={{fontFamily: 'inherit', color: 'var(--text-color)'}}>Locations</MenuItem>
          <MenuItem value={'Episodes'} style={{fontFamily: 'inherit', color: 'var(--text-color)'}}>Episodes</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}