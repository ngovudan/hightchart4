import React from 'react';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: `${theme.spacing(3)}px 0`,
      minWidth: 120,
    },
}));

function Selector({ value, handleOnChange }) {
    const classes = useStyles();
    return (
        <FormControl className={classes.formControl}>            
            <NativeSelect
                value={value}
                onChange={handleOnChange}
                inputProps={{
                    name: 'country',
                    id: 'country-selector',
                }}
            >
            <option value={`1`}>Data 1</option>
            <option value={`2`}>Data 2</option>
            </NativeSelect>
        <FormHelperText>Lựa chọn</FormHelperText>
      </FormControl>
    )
}

export default Selector
