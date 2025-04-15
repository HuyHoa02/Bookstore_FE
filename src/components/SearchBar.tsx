import SearchIcon from '@mui/icons-material/Search';
import { InputBase, styled } from '@mui/material';

const Search = styled('div')(() => ({
    position: 'relative',
    borderRadius: '4px',
    backgroundColor: '#fff',
    width: '40%',
}));

const SearchIconWrapper = styled('div')(() => ({
    padding: '10px',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'var(--primary-color)',
    borderTopLeftRadius: '4px',
    color: '#fff'
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    width: '100%',
    paddingLeft: "20px"
}));
const SearchBar = () => {
    return (
        <Search>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
            />
        </Search>
    )
}

export default SearchBar
