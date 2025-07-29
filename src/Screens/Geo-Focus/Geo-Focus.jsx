import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Checkbox from '@mui/material/Checkbox';
import InputBase from '@mui/material/InputBase';
import { alpha, styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { CardsData } from '../../utils/constants';
import { getAlgoInfoPageData } from '../../utils/helpers';
import Empty from '../../Components/Empty/Empty';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PropTypes from 'prop-types';

// Constants
const dataTheme = ['Popular', 'Geographic Focus', 'Votility Rider', 'Long Term Value', 'Drawdown Protection'];
const dataSharpRatio = ['< 1', '> 1', '> 2', '> 3'];
const dataMaxDrawDown = ['< 5%', '5-10%', '10-20%', '20%-30%', '> 30%'];
const dataWinRate = ['< 30%', '> 30%', '> 50%', '> 70%'];
const dataReturnPer = ['< 1%', '> 1%', '> 5%', '> 10%', '> 15%'];
const dataProfitLossRatio = ['< 1', '> 1', '> 2', '> 3'];

// Styled Components
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '1em',
    border: '2px solid #c8c1c1',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '25ch'
        }
    }
}));

// Checkbox Group Component
const CheckboxGroup = ({ options, onChange, selectedValues }) => {
    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        onChange((prev) => {
            if (checked) {
                return [...prev, value];
            } else {
                return prev.filter((item) => item !== value);
            }
        });
    };

    return (
        <FormGroup>
            {options.map((option) => (
                <FormControlLabel
                    key={option}
                    control={
                        <Checkbox
                            checked={selectedValues.includes(option)}
                            onChange={handleCheckboxChange}
                            value={option}
                        />
                    }
                    label={option}
                />
            ))}
        </FormGroup>
    );
};

CheckboxGroup.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onChange: PropTypes.func.isRequired,
    selectedValues: PropTypes.arrayOf(PropTypes.string).isRequired,
};

// Main Component
const GeoFocus = (props) => {
    const { history, setMartPage, userActions } = props;
    const cardsData = useSelector(state => state?.userReducer?.algoTrdaingCard) || [];
    const [searchValue, setSearchValue] = useState('');
    const [empty, setEmpty] = useState(false);
    const [sharpRatio, setSharpRatio] = useState([]);
    const [maxDrawDown, setMaxDrawDown] = useState([]);
    const [winRate, setWinRate] = useState([]);
    const [returnPer, setReturnPer] = useState([]);
    const [proLossRatio, setProLossRatio] = useState([]);
    const [checkedOpt, setCheckedOpt] = useState({});

    useEffect(() => {
        setEmpty(cardsData.length === 0);
    }, [cardsData]);

    const handleChangeSearch = (event) => {
        setSearchValue(event.target.value);
    };

    const onChangeSharpRatio = (checkedValues) => {
        setSharpRatio(checkedValues);
        setCheckedOpt(opt => ({
            ...opt,
            sharpeRatio: checkedValues
        }));
    };

    const onChangeMaxDrawdown = (checkedValues) => {
        setMaxDrawDown(checkedValues);
        setCheckedOpt(opt => ({
            ...opt,
            maxDrawdown: checkedValues
        }));
    };

    const onChangeWinRate = (checkedValues) => {
        setWinRate(checkedValues);
        setCheckedOpt(opt => ({
            ...opt,
            winRate: checkedValues
        }));
    };

    const onChangeReturnPer = (checkedValues) => {
        setReturnPer(checkedValues);
        setCheckedOpt(opt => ({
            ...opt,
            returnPercentage: checkedValues
        }));
    };

    const onChangeProfitLossRatio = (checkedValues) => {
        setProLossRatio(checkedValues);
        setCheckedOpt(opt => ({
            ...opt,
            profitLossRatio: checkedValues
        }));
    };

    const applyConditions = (cD, d, n) => {
        const conditions = [];
        if (!cD || !d || !n) return conditions;

        try {
            if (cD.slice(-1) === '%') {
                const cDSplitArr = cD.split(" ");
                if (cDSplitArr[0] === '>') {
                    const value = parseFloat(cDSplitArr[1].substring(0, cDSplitArr[1].length - 1));
                    if (n === 'returnPercentage') {
                        conditions.push({ condition: d[n] > value });
                    } else {
                        conditions.push({ condition: (d[n] * 100) > value });
                    }
                } else if (cDSplitArr[0] === '<') {
                    const value = parseFloat(cDSplitArr[1].substring(0, cDSplitArr[1].length - 1));
                    if (n === 'returnPercentage') {
                        conditions.push({ condition: d[n] <= value });
                    } else {
                        conditions.push({ condition: (d[n] * 100) <= value });
                    }
                } else if (cDSplitArr[0].includes('-')) {
                    const rangeArr = cD.split("-");
                    const r1 = parseFloat(rangeArr[0]);
                    const r2 = parseFloat(rangeArr[1].substr(0, rangeArr[1].length - 1));
                    conditions.push({
                        condition: d[n] && (d[n] * 100) >= r1 && (d[n] * 100) <= r2
                    });
                }
            } else {
                const cDSplitInArr = cD.split(" ");
                if (cDSplitInArr[0] === ">") {
                    const value = parseFloat(cDSplitInArr[1]);
                    conditions.push({ condition: d[n] > value });
                } else if (cDSplitInArr[0] === "<") {
                    const value = parseFloat(cDSplitInArr[1]);
                    conditions.push({ condition: d[n] <= value });
                }
            }
        } catch (error) {
            console.error('Error applying conditions:', error);
        }

        return conditions;
    };

    const filterData = (allData, checkedData, entities) => {
        if (!allData || !Array.isArray(allData)) return [];
        if (!checkedData || typeof checkedData !== 'object') return allData;
        if (!entities || !Array.isArray(entities)) return allData;

        const filteredData = [];
        const conditionCount = {};

        entities.forEach((n) => {
            if (checkedData[n] && Array.isArray(checkedData[n])) {
                checkedData[n].forEach((cD) => {
                    allData.forEach((d) => {
                        const conditions = applyConditions(cD, d, n);
                        conditions.forEach((c) => {
                            if (c?.condition) {
                                filteredData.push(d);
                                conditionCount[d._id] = (conditionCount[d._id] || 0) + 1;
                            }
                        });
                    });
                });
            }
        });

        const activeGroups = Object.keys(checkedData).filter(
            key => checkedData[key] && checkedData[key].length > 0
        ).length;

        if (activeGroups > 1) {
            return allData.filter(item => conditionCount[item._id] === activeGroups);
        }

        return filteredData;
    };

    const filteredValue = () => {
        if (!cardsData || !Array.isArray(cardsData)) return [];
        if (!checkedOpt || typeof checkedOpt !== 'object') return cardsData;

        const activeFilters = Object.keys(checkedOpt).filter(
            key => checkedOpt[key] && checkedOpt[key].length > 0
        );

        if (activeFilters.length === 0) {
            return cardsData;
        }

        return filterData(cardsData, checkedOpt, activeFilters);
    };

    const filteredCards = filteredValue()?.filter((val) => {
        if (!val || !val.strategyName) return false;
        if (!searchValue || searchValue.trim() === "") return true;
        return val.strategyName.toLowerCase().includes(searchValue.toLowerCase().trim());
    });

    return (
        <div style={{ backgroundColor: '' }}>
            <div>
                <div className='relative'>
                    <h1 className='bold geofocus-head'>Algorithm Mart</h1>
                </div>
                <div style={{ marginLeft: '50px', marginRight: '30px' }}>
                    <div className='head_panel'>
                        <div>
                            <Search>
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
                        <div className='no_algo'>
                            <p><b>No. of Algorithms</b></p>
                            <p style={{ textAlign: 'right', fontWeight: 'bold' }}>
                                {cardsData?.length || 0}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='algo_panel'>
                <h3 className='bold'>Algorithms</h3>
            </div>
            <div className='properties_panel'>
                <div className={!empty ? 'left_panel' : null}>
                    <p style={{ textTransform: 'uppercase', color: 'grey', fontWeight: 'bold', marginTop: 15 }}>
                        Properties
                    </p>
                    <div className='accordian_panel'>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography className='bold'>Theme</Typography>
                            </AccordionSummary>
                            <CheckboxGroup
                            options={dataTheme}
                            onChange={() => { }}
                            selectedValues={[]}
                            />
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography className='bold'>Sharp Ratio</Typography>
                            </AccordionSummary>
                            <CheckboxGroup
                                options={dataSharpRatio}
                                selectedValues={sharpRatio}
                                onChange={onChangeSharpRatio}
                            />
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography className='bold'>Max Drawdown</Typography>
                            </AccordionSummary>
                            <CheckboxGroup
                                options={dataMaxDrawDown}
                                selectedValues={maxDrawDown}
                                onChange={onChangeMaxDrawdown}
                            />
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography className='bold'>Win Rate</Typography>
                            </AccordionSummary>
                            <CheckboxGroup
                                options={dataWinRate}
                                selectedValues={winRate}
                                onChange={onChangeWinRate}
                            />
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography className='bold'>Return Percentage</Typography>
                            </AccordionSummary>
                            <CheckboxGroup
                                options={dataReturnPer}
                                selectedValues={returnPer}
                                onChange={onChangeReturnPer}
                            />
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography className='bold'>Profit Loss Ratio</Typography>
                            </AccordionSummary>
                            <CheckboxGroup
                                options={dataProfitLossRatio}
                                selectedValues={proLossRatio}
                                onChange={onChangeProfitLossRatio}
                            />
                        </Accordion>
                    </div>
                </div>
                {!empty ? (
                    <div className='card-div-Algo-trading right_panel scroll_class'>
                        {filteredCards?.map((v, i) => (
                            <div style={{ marginTop: 20 }} key={i} className='algo-cards-mart main_card_panel'>
                                <Card
                                    sx={{ boxShadow: 0 }}
                                    onClick={() => {
                                        getAlgoInfoPageData(v?._id, userActions);
                                        setMartPage();
                                        history?.push('/');
                                        setTimeout(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, 300);
                                    }}
                                    className='pointerForCard'
                                >
                                    <CardMedia
                                        component='img'
                                        height='140'
                                        image={CardsData[i]?.img || CardsData[0]?.img}
                                        alt='green iguana'
                                    />
                                    <div className='avatarContainer'>
                                        <Avatar
                                            alt='Travis Howard'
                                            src={CardsData[i]?.img || CardsData[0]?.img}
                                        />
                                    </div>
                                    <CardContent>
                                        <div>
                                            <Typography gutterBottom variant='h4' component='div' className='cards-head'>
                                                <b>{v?.strategyName}</b>
                                            </Typography>
                                            <Typography gutterBottom component='div' variant='body1' className='cards-typography'>
                                                <p style={{ marginBottom: '5px', fontSize: '11px' }} className='bold'>live performance</p>
                                                <p style={{ display: 'flex', justifyContent: 'space-between' }} className='bold'>
                                                    <span style={{ backgroundColor: '#ddd7d7', padding: '3px', borderRadius: '3px' }}>↓ {'0.94%'}</span>
                                                    <b>1 Day</b>
                                                </p>
                                                <p style={{ display: 'flex', justifyContent: 'space-between' }} className='bold'>
                                                    <span style={{ backgroundColor: '#ddd7d7', padding: '3px', borderRadius: '3px' }}>↑ {'1.53%'}</span>
                                                    <b>Current Month</b>
                                                </p>
                                            </Typography>
                                        </div>
                                    </CardContent>
                                </Card>
                                <div className="overlay_card_panel_mart">
                                    <div className="text">SUBSCRIBE NOW</div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className='empty_div'>
                        <Empty />
                    </div>
                )}
            </div>
            <div style={{ marginLeft: '50px', marginRight: '30px' }}>
                <h3 className='bold'>Forum</h3>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div className='forum_panel'>
                        <h4 className='bold'>Anyone know about Aggressive Global Income strategy?</h4>
                        <h5 className='bold'>I am interested in the principle behind, anyone familiar with or heard of it before? I think it is quite interesting and would love to talk about it together. It is aggressive but in a way also quite safe in my opinion, that's why I find it fascinating. However, there are still some parts that make me doubt...</h5>
                        <h6 className='bold user'>by User777</h6>
                    </div>
                    <div className='forum_panel space marginBtm'>
                        <h4 className='bold'>Tips for trading</h4>
                        <h5 className='bold'>Okay so i just started exploring on algo trading and there realy are a lot to discover. I feel like I am getting a bit lost in the ocean, there are just too many things going on and I can't quite catch up. Are there any tips or guides on algo trading? I would really appreciate the help thanks.</h5>
                        <h6 className='bold user'>by User127</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

GeoFocus.propTypes = {
    history: PropTypes.object.isRequired,
    setMartPage: PropTypes.func.isRequired,
    userActions: PropTypes.object.isRequired,
};

export default GeoFocus;