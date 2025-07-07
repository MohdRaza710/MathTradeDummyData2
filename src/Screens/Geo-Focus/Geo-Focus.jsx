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
import { CheckRounded } from '@mui/icons-material'

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
    const { history, setMartPage, userAction } = props
    const cardsData = useSelector(state => state.userReducer?.algoTradingCard)
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


    useEffect(() => { }, [returnPer, winRate, checkedOpt, proLossRatio, maxDrawdown])

    const handleChangeSearch = (event) => {
        setSearchValue(event.target.value)
    }

    const onChangeSharpRatio = (checkedValues) => {
        setSharpRatio(checkedValues)
        setCheckedOpt(opt => ({
            ...opt,
            sharpRatio: checkedValues
        }))
    }

    const onChangeMaxDrawdown = (checkedValues) => {
        setMaxDrawDown(checkedValues)
        setCheckedOpt(opt => ({
            ...opt,
            maxDrawdown: checkedValues
        }))
    }

    const onChangeWinRate = (checkedValues) => {
        setWinRate(checkedValues)
        setCheckedOpt(opt => ({
            ...opt,
            winRate: checkedValues
        }))
    }

    const onChangeReturnPer = (checkedValues) => {
        setReturnPer(checkedValues)
        setCheckedOpt(opt => ({
            ...opt,
            returnPer: checkedValues
        }))
    }

    const onChangeProfitLossRatio = (checkedValues) => {
        setProLossRatio(checkedValues)
        setCheckedOpt(opt => ({
            ...opt,
            profitLossRatio: checkedValues
        }))
    }

    const applyConditions = (cD, d, n) => {
        const conditions = []
        if (cD.slice(-1) == '%') {
            const cDSplitArr = cD.split(" ")
            if (cDSplitArr[0] == '>') {
                let c1
                n == 'returnPercentage' ? c2 = { data: d, entity: n, checkedData: cD, condition: d?.[n] <= cDSplitArr[1].substring(0, cDSplitArr[1].length - 1) } :
                    c1 = { data: d, entity: n, checkedData: cD, condition: (d?.[n] * 100) <= cDSplitArr[1].substring(0, cDSplitArr[1].length - 1) }
                conditions.push(c1)
            }
            if (cDSplitArr[0] == '<') {
                let c2
                n == 'returnPercentage' ? c2 = { data: d, entity: n, checkedData: cD, condition: (d?.[n] * 100) <= cDSplitArr[1].substring(0, cDSplitArr[1].length - 1) } :
                    conditions.push(c2)
            }
            if (cDSplitArr[0].includes('_')) {
                const rangeArr = cD.split('_')
                const r1 = rangeArr[0]
                const r2 = rangeArr[1].substr(0, rangeArr[1].length - 1)
                let c3 = { data: d, entity: n, checkedData: cD, condition: d?.[n] && (d?.[n] * 100) >= r1 && (d?.[n] * 100) <= r2 }
                conditions.push(c3)
            }
        }
        else {
            const cDSplitArr = cD.split(" ")
            if (cDSplitArr[0] == '>') {
                let c4 = { data: d, entity: n, checkedData: cD, condition: d?.[n] > cDSplitArr[1] }
                conditions.push(c4)
            }
            if (cDSplitArr[0] == '<') {
                let c5 = { data: d, entity: n, checkedData: cD, condition: d?.[n] <= cDSplitArr[1] }
                conditions.push(c5)
            }
        }
        return conditions.map(c => c)
    }

    const filterData = (allData, checkedData, entities) => {
        const filteredData = []
        entities.map((n) => {
            checkedData?.[n].map((cD) => {
                allData.map((d) => {
                    applyConditions(cD, d, n).map((c) => {
                        c?.condition ? filteredData.push(d) : null
                    })
                })
            })
        })

        const activeGroups = Object.entries(checkedData).filter(e => { return e[1].length }).length
        if (activeGroups > 1) {
            const filteredDuplicates = []
            const count = {};
            const duplicateIds = filteredData.map(v => v._id).filter((v, i, vIds) => vIds.indexOf(v) !== i)
            const duplicates = []
            filteredData.filter(obj => {
                duplicateIds.includes(obj._id) ? duplicates.push(obj) : null
                count[obj._id] = (count[obj._id] || 0) + 1
            })

            allData.map((aD) => {
                count ? [count].map((c => {
                    c?.[aD._id] && c?.[aD._id] == activeGroups ? filteredDuplicates.push(aD) : null
                })) : null
            })

            return filteredDuplicates
        }
        else {
            return filteredData
        }
    }

    const filteredValue = () => {
        let data = []
        if (Object.entries(checkedOpt).filter(e => { return e[1].length }).length > 0) {
            [checkedOpt].map((d) => {
                let fieldNames = Object.getOwnPropertyNames(d)
                filterData(cardsData, d, fieldNames).map((fD) => {
                    !data.includes(fD) ? data.push(fD) : null
                })
            })
            return data
        }
        else {
            return cardsData
        }
    }

    return (
        <div style={{ backgroundColor: '' }}>
            <div >
                <div className='relative'>
                    {/* <div className=''> */}
                    <h1 className='bold geofocus-head'>
                        Algorithm Mart
                    </h1>
                    {/* </div> */}
                </div>
                <div style={{ marginLeft: '50px', marginRight: '30px', }}>

                    <div className='head_panel'>
                        <div>
                            <div>
                                <Search className=''>
                                    <SearchIconWrapper>
                                        <SearchIcon />
                                    </SearchIconWrapper>
                                    <StyledInputBase
                                        className='seachInput'
                                        sx={{ fontSize: '19px', color: 'black' }}
                                        placeholder='Search by name or attribute'
                                        inputProps={{ 'aria-label': 'search' }}
                                        onChange={handleChangeSearch}
                                    />

                                </Search>
                            </div>
                        </div>
                        <div className='no_algo'>
                            <p>
                                <b>No . of Algorithum</b>
                            </p>
                            <p style={{ textAlign: 'right', fontWeight: 'bold' }}>
                                {cardsData?.length}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='algo_panel'>
                <h3 className='bold'>
                    Algorithums
                </h3>
            </div>
            <div className='properties_panel'>
                <div className={!empty ? 'left_panel' : null}>
                    <p style={{ textTransform: 'uppercase', colo: 'grey', fontWeight: 'bold', marginTop: 15 }}>
                        Properties
                    </p>
                    <div>
                        <Accordion>

                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    )

}




export default GeoFocus