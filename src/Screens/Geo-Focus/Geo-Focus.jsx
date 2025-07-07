import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import Avatar from '@mui/material/Avatar'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import InputBase from '@mui/material/InputBase'
import { alpha, styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { CardsData } from '../../utils/constants'
import { getAlgoInfoPageData } from '../../utils/helpers'
import Checkbox from '@mui/material/Checkbox'
import { Accordion } from '@mui/material'
import Empty from '../../Components/Index'

const dataTheme = ['Popular', 'Geographic Focus', 'Votility Rider', 'Long Term Value', 'Drawdown Protection']
const dataSharpRatio = ['< 1', '> 1', '> 2', '> 3']
const dataMaxDrawDown = ['< 5%', '5-10%', '10-20%', '20%-30%', '> 30%']
const dataWinRate = ['< 30%', '> 30%', '> 50%', '> 70%',]
const dataReturnPer = ['< 1%', '> 1%', '> 5%', '> 10%', '> 15%']
const dataProfitLossRatio = ['< 1', '> 1', '> 2', '> 3']

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '1em',
    border: '2px solid #c8c1c1',
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
    justifyContent: 'center'
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        // borderRadius: '1em',
        [theme.breakpoints.up('md')]: {
            width: '25ch'
        }
    }
}))

const { Panel } = Accordion

const GeoFocus = () => {
    const { history, setMartPage, userAction} = props
    const cardsData= useSelector(state => state.userReducer?.algoTradingCard)
    const [searchValue, setSearchValue] = useState('')
    const [empty, setEmpty] = useState(true)
    const [sharpRatio, setSharpRatio] = useState({
        '< 1': false,
        '< 1': false,
        '< 2': false,
        '< 3': false
    })
    const [maxDrawdown, setMaxDrawDown] = useState([])
    const [winRate, setWinRate] = useState([])
    const [returnPer, setReturnPer] = useState([])
    const [proLossRatio, setProLossRatio] = useState([])
    const [checkedOpt, setCheckedOpt] = useState([])


    useEffect(() => {},[returnPer, winRate, ])

}


export default GeoFocus