import SearchIcon from '@mui/icons-material/Search'
import InputBase from '@mui/material/InputBase'
import { alpha, styled } from '@mui/material/styles'



const SearchMart = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '1em',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  '& .css-1kcggdq-MuiInputBase-root .MuiInputBase-input': {
    width: '20em'
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 0, 1, 0),
    // vertical padding + font size from searchIcon
    //   paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    paddingLeft: `calc(1em + 22px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    // borderRadius: '1em',
    //   [theme.breakpoints.up('md')]: {
    //     width: '25ch',
    //   },
  },
}))
const Search = (props) => {
  
  const { setSearchMart } = props

  const handleChange = (event) => {
    setSearchMart(event.target.value);
  };

  return (
    <SearchMart className=''>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        sx={{ fontSize: '10px' }}
        placeholder="Search for Algorithm"
        inputProps={{ 'aria-label': 'search' }}
        onChange={handleChange}
      />

    </SearchMart>
  )
}

export default Search