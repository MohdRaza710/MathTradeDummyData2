import { useEffect, useState, useRef } from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { CardsData } from '../../utils/constants';
import { PORTFOLIO } from '../../utils/apis';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { allPaths } from '../../utils/constants';
import { getAlgoInfoPageData, fetchCardsData } from '../../utils/helpers';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Empty } from '../../Components/Index';
import AlgotradingData from '../../dummyData/AlgotradingData.json';
import { useNavigate } from 'react-router-dom';
import './AlgoTradingCard.css'

const AlgotradingCard = (props) => {
    const {
        setMartPage = () => { },
        searchBar = "",
        titleRef,
        userActions,
        myState,
        setMystate,
        history
    } = props;

    const [cardsData, setCardsData] = useState(AlgotradingData);
    const [empty, setEmpty] = useState(false);
    const [geoFocus, setGeoFocus] = useState(false);
    const [popular, setPopular] = useState(true);
    const [votilityRider, setVotilityRider] = useState(false);
    const [drawDownProtection, setDrawdownProtection] = useState(false);
    const [longTermValue, setLongTermValue] = useState(false);
    const scrollRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchCardsData(userActions);
    }, [userActions]);

    const getCardsData = () => {
        setEmpty(true);
        axios.get(PORTFOLIO?.GET?.ALL_TRADING_CARDS)
            .then((res) => {
                const { data } = res;
                setCardsData([...data?.data]);
                userActions?.setAlgotradingCards(data?.data || []);
                setEmpty(false);
            })
            .catch((e) => {
                setEmpty(false);
                console.error('Error fetching cards data:', e);
            });
    };

    const safeFilterCards = (data, searchTerm) => {
        return data?.filter((val) => {
            const strategyName = val?.strategyName || "";
            if (searchTerm === "") {
                return val;
            } else if (strategyName.toLowerCase().includes(searchTerm.toLowerCase().trim())) {
                return Object.keys(val).length > 1;
            }
            return false;
        });
    };

    const handleCardClick = (id) => {
        getAlgoInfoPageData(id, userActions);
        if (typeof setMartPage === 'function') {
            setMartPage();
        }
        // Redirect to algorithm-info page with the card ID
        navigate(`/algorithm-info/`);
        setTimeout(() => {
            window.scrollTo({
                top: 0, left: 0,
                behavior: 'smooth'
            })
        }, 300);
    };

    const renderCards = (data) => {
        return safeFilterCards(data, searchBar)?.map((v, i) => (
            <div style={{ marginTop: 20 }} key={i} className='algo-cards'>
                <Card
                    sx={{ boxShadow: 0 }}
                    className='pointerForCard'
                    onClick={() => handleCardClick(v?._id)}
                >
                    <CardMedia
                        component='img'
                        height='140'
                        image={CardsData[i]?.img || CardsData[0]?.img}
                        alt='trading card'
                    />
                    <div className='avatarContainer'>
                        <Avatar
                            alt='Author'
                            src={CardsData[i]?.img || CardsData[0]?.img}
                        />
                    </div>
                    <CardContent className='scroll_class' sx={{ height: 360 }}>
                        <div style={{ height: 170 }}>
                            <Typography gutterBottom variant='h4' component='div' className='cards-head'>
                                <b>{v?.strategyName || "Unnamed Strategy"}</b>
                            </Typography>
                            <Typography gutterBottom component='div' variant='body1' className='cards-typography'>
                                by {CardsData[i]?.author || CardsData[0]?.author || "Unknown Author"}
                            </Typography>
                            <Typography variant='inherit'>
                                <b>PORTFOLIO</b>-Live <b>Performance</b>(USD Currency)
                            </Typography>
                            <div className='sub'>
                                <Typography variant='inherit'>
                                    <b style={{ color: 'red', background: '#ebb3b3' }}>0.94%</b> &nbsp; 1 Day
                                    &nbsp;&nbsp;
                                    <b style={{ color: 'red', background: '#ebb3b3' }}>1.50%</b> &nbsp; Current Month
                                </Typography>
                            </div>
                        </div>
                        <Typography variant='inherit' className='card-description'>
                            {v?.strategyInitial || "No description available"}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        ));
    };

    return (
        <div className='card-form' ref={titleRef}>
            <div className='tradecardinfo'>
                <h1 className='tradecardHeading'>Explore Trading Card</h1>
            </div>

            <TableContainer sx={{ width: '100%' }} className='scroll_class' component={Paper}>
                <Table sx={{ minWidth: 900 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ fontSize: '1.2em', fontWeight: '700' }} align="right">
                                <button
                                    style={popular ? activeButtonStyle : inactiveButtonStyle}
                                    onClick={() => {
                                        setPopular(true);
                                        setGeoFocus(false);
                                        setLongTermValue(false);
                                        setDrawdownProtection(false);
                                        setVotilityRider(false);
                                    }}
                                >
                                    Popular
                                </button>
                            </TableCell>
                            <TableCell style={{ fontSize: '1.2em', fontWeight: '700' }} align="right">
                                <button
                                    style={geoFocus ? activeButtonStyle : inactiveButtonStyle}
                                    onClick={() => {
                                        setGeoFocus(true);
                                        setPopular(false);
                                        setLongTermValue(false);
                                        setDrawdownProtection(false);
                                        setVotilityRider(false);
                                    }}
                                >
                                    Geographic Focus
                                </button>
                            </TableCell>
                            <TableCell style={{ fontSize: '1.2em', fontWeight: '700' }} align="right">
                                <button
                                    style={votilityRider ? activeButtonStyle : inactiveButtonStyle}
                                    onClick={() => {
                                        setVotilityRider(true);
                                        setGeoFocus(false);
                                        setPopular(false);
                                        setLongTermValue(false);
                                        setDrawdownProtection(false);
                                        setVotilityRider(false);
                                    }}
                                >
                                    Volatility Rider
                                </button>
                            </TableCell>
                            <TableCell style={{ fontSize: '1.2em', fontWeight: '700' }} align="right">
                                <button
                                    style={longTermValue ? activeButtonStyle : inactiveButtonStyle}
                                    onClick={() => {
                                        setLongTermValue(true);
                                        setGeoFocus(false);
                                        setPopular(false);
                                        setDrawdownProtection(false);
                                        setVotilityRider(false);
                                    }}
                                >
                                    Long Term Value
                                </button>
                            </TableCell>
                            <TableCell style={{ fontSize: '1.2em', fontWeight: '700' }} align="right">
                                <button
                                    style={drawDownProtection ? activeButtonStyle : inactiveButtonStyle}
                                    onClick={() => {
                                        setDrawdownProtection(true);
                                        setGeoFocus(false);
                                        setPopular(false);
                                        setLongTermValue(false);
                                        setVotilityRider(false);
                                    }}
                                >
                                    Drawdown Protection
                                </button>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>

            {geoFocus && (
                <div ref={scrollRef} className='card-div x_scroll scroll_class'>
                    {renderCards(cardsData.slice(0, 3))}
                </div>
            )}

            {popular && (
                <div ref={scrollRef} className='card-div x_scroll scroll_class'>
                    {renderCards(cardsData)}
                </div>
            )}

            {votilityRider && (
                <div ref={scrollRef} className='card-div x_scroll scroll_class'>
                    {renderCards(cardsData.slice(2, 6))}
                </div>
            )}

            {longTermValue && (
                <div ref={scrollRef} className='card-div x_scroll scroll_class'>
                    {renderCards(cardsData.slice(2, 5))}
                </div>
            )}

            {drawDownProtection && (
                <div ref={scrollRef} className='card-div x_scroll scroll_class'>
                    {renderCards(cardsData.slice(4, 10))}
                </div>
            )}

            {!empty ? (
                <div
                    style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
                    onClick={() => {
                        history?.push(allPaths?.GEO_FOCUS);
                        setTimeout(() => {
                            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
                        }, 400);
                    }}
                >
                    <h2>MORE<br />
                        <ArrowDropDownIcon style={{ marginTop: 3 }} />
                    </h2>
                </div>
            ) : (
                <Empty />
            )}
        </div>
    );
};

// Style constants
const activeButtonStyle = {
    border: 'none',
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    fontSize: '1.4em',
    fontFamily: 'auto'
};

const inactiveButtonStyle = {
    border: 'none',
    backgroundColor: 'transparent',
    fontWeight: 'bold'
};

export default AlgotradingCard;