import React from 'react';
import { FormControl, NativeSelect, InputBase } from '@mui/material';
import { styled } from '@mui/material/styles';

const SearchInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}));

const Search = () => {
    return (
        <FormControl sx={{ m: 1 }} variant="standard">
            <NativeSelect
                defaultValue={''}
                input={<SearchInput />}
            >
                <option value="Search for ticker" />
                <option style={{ background: '#333333' }} value={10}>Ten</option>
                <option style={{ background: '#333333' }} value={20}>Twenty</option>
                <option style={{ background: '#333333' }} value={30}>Thirty</option>
            </NativeSelect>
        </FormControl>
    );
};

export default Search;
