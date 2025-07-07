import React, { useEffect, useState, useRef } from 'react'
import Avatar from '@mui/material/Avatar'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import axios from 'axios'
import { CardsData } from '../../utils/constants'
import { PORTFOLIO } from '../../utils/apis'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { allPaths } from '../../utils/constants'
import { getAlgoInfoPageData, fetchCardsData } from '../../utils/helpers'
import { DownOutlined } from '@ant-design/icons'
import Lottie from 'react-lottie'
import AlgotradingData from '../../dummyData/AlgotradingData.json'
const AlgotradingCard = (props) => {
  const { setMartPage, searchBar, titleRef, userActions, myState, setMystate, history } = props
  const [cardsData, setCardsData] = useState(AlgotradingData)
  const [empty, setEmpty] = useState(false)
  const [geoFocus, setGeoFocus] = useState(false)
  const [popular, setPopular] = useState(true)
  const [votilityRider, setVotilityRider] = useState(false)
  const [drawDownProtection, setDrawdownProtection] = useState(false)
  const [longTermValue, setLongTermValue] = useState(false)
  const scrollRef = useRef(null)
  useEffect(() => {
    fetchCardsData(userActions)
  })
  // useEffect(() => {
  //     getCardsData()
  // }, [])

  // SCROLLING
  const element = document.querySelector('.x_scroll')

  element?.addEventListener('wheel', (event) => {
    event?.preventDefault();

    element?.scrollBy({
      left: event.deltaY < 0 ? -30 : 30,

    })
  })
  const scroll = (scrollOffset) => {
    scrollRef.current.scrollLeft += scrollOffset
  }

  const getCardsData = () => {
    axios.get(PORTFOLIO?.GET?.ALL_TRADING_CARDS)
      .then((res) => {
        const { data } = res
        setCardsData([...data?.data])
        userActions?.setAlgotradingCards(data?.data || [])
      })
      .catch((e) => {
        console.log('e', e)
      })
  }


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
                <button style={popular ? { border: 'none', backgroundColor: 'transparent', fontWeight: 'bold', fontSize: '1.4em', fontFamily: 'auto' } : { border: 'none', backgroundColor: 'transparent', fontWeight: 'bold' }} onClick={() => {
                  setPopular(true)
                  setGeoFocus(false)
                  setLongTermValue(false)
                  setDrawdownProtection(false)
                  setVotilityRider(false)
                }}>Popular</button>
              </TableCell>
              <TableCell style={{ fontSize: '1.2em', fontWeight: '700' }} align="right" >
                <button style={geoFocus ? { border: 'none', backgroundColor: 'transparent', fontWeight: 'bold', fontSize: '1.4em', fontFamily: 'auto' } : { border: 'none', backgroundColor: 'transparent' }} onClick={() => {
                  setGeoFocus(true)
                  setPopular(false)
                  setLongTermValue(false)
                  setDrawdownProtection(false)
                  setVotilityRider(false)
                }}>Geogarphic Focus</button>
              </TableCell>
              <TableCell style={{ fontSize: '1.2em', fontWeight: '700' }} align="right">
                <button style={votilityRider ? { border: 'none', backgroundColor: 'transparent', fontWeight: 'bold', fontSize: '1.4em', fontFamily: 'auto' } : { border: 'none', backgroundColor: 'transparent' }} onClick={() => {
                  setVotilityRider(true)
                  setGeoFocus(false)
                  setPopular(false)
                  setLongTermValue(false)
                  setDrawdownProtection(false)
                }}>Votility Rider</button>
              </TableCell>
              <TableCell style={{ fontSize: '1.2em', fontWeight: '700' }} align="right">
                <button style={longTermValue ? { border: 'none', backgroundColor: 'transparent', fontWeight: 'bold', fontSize: '1.4em', fontFamily: 'auto' } : { border: 'none', backgroundColor: 'transparent' }} onClick={() => {
                  setLongTermValue(true)
                  setGeoFocus(false)
                  setPopular(false)
                  setDrawdownProtection(false)
                  setVotilityRider(false)
                }}>Long Term Value</button>
              </TableCell>
              <TableCell style={{ fontSize: '1.2em', fontWeight: '700' }} align="right">
                <button style={drawDownProtection ? { border: 'none', backgroundColor: 'transparent', fontWeight: 'bold', fontSize: '1.4em', fontFamily: 'auto' } : { border: 'none', backgroundColor: 'transparent' }} onClick={() => {
                  setDrawdownProtection(true)
                  setGeoFocus(false)
                  setPopular(false)
                  setLongTermValue(false)
                  setVotilityRider(false)
                }}>Drawdown Protection</button>
              </TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
      {/* <button id="slideLeft" type="button" onClick={() => scroll(-20)}>Slide left</button>
            <button id="slideRight" type="button" onClick={() => scroll(20)}>Slide right</button> */}
      {
        geoFocus &&
        <div ref={scrollRef} className='card-div x_scroll scroll_class'>
          {cardsData.slice(0, 3)?.filter((val) => {
            if (searchBar === "") {
              return val
            } else if (val.strategyName.toLowerCase().includes(searchBar.toLowerCase().trim())) {
              if (Object.keys(val).length > 1) {
                return val
              }
            }
          })?.map((v, i) =>
            <div
              style={{ marginTop: 20 }}
              key={i}
              className='algo-cards'
            >
              <Card key={i}
                sx={{ boxShadow: 0 }}
                className='pointerForCard'
                onClick={() => {
                  getAlgoInfoPageData(v?._id, userActions)
                  setMartPage()
                  setTimeout(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, 300)
                }
                }
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
                    image={CardsData[i]?.img || CardsData[0]?.img}
                  />
                </div>
                <CardContent className='scroll_class' sx={{ height: 360 }}>
                  <div style={{ height: 170 }}>
                    <Typography
                      gutterBottom
                      variant='h4'
                      component='div'
                      className='cards-head'
                    >
                      <b>{v?.strategyName}</b>
                    </Typography>
                    <Typography
                      gutterBottom
                      component='div'
                      variant='body1'
                      className='cards-typography'
                    >
                      by {CardsData[i]?.author || CardsData[0]?.author}
                    </Typography>
                    <Typography variant='inherit' >
                      <b>PORTFOLIO</b>-Live <b>Performance</b>(USD Currency)
                    </Typography>
                    <div className='sub'>
                      <Typography variant='inherit' >
                        <b style={{ color: 'red', background: '#ebb3b3' }}>0.94%</b>  &nbsp; 1 Day
                        {/* </Typography> */}
                        &nbsp;&nbsp;
                        <b style={{ color: 'red', background: '#ebb3b3' }}>1.50%</b>  &nbsp; Current Month
                      </Typography>
                    </div>
                  </div>

                  <Typography
                    variant='inherit'
                    className='card-description'
                  >
                    {v?.strategyInitial}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      }
      {
        popular &&
        <div ref={scrollRef} className='card-div x_scroll scroll_class'>
          {cardsData?.filter((val) => {
            if (searchBar === "") {
              return val
            } else if (val.strategyName.toLowerCase().includes(searchBar.toLowerCase())) {
              if (Object.keys(val).length > 1) {
                return val
              }
            }
          })?.map((v, i) => {
            return (
              <div
                style={{ marginTop: 20 }}
                key={i}
                className='algo-cards'
              >
                <Card key={i}
                  sx={{ boxShadow: 0 }}
                  className='pointerForCard'
                  onClick={() => {
                    getAlgoInfoPageData(v?._id, userActions)
                    setMartPage()
                    setTimeout(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, 300)
                  }
                  }
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
                      image={CardsData[i]?.img || CardsData[0]?.img}
                    />
                  </div>
                  <CardContent className='scroll_class' sx={{ height: 360 }}>
                    <div style={{ height: 170 }}>
                      <Typography
                        gutterBottom
                        variant='h4'
                        component='div'
                        className='cards-head'
                      >
                        <b>{v?.strategyName}</b>
                      </Typography>
                      <Typography
                        gutterBottom
                        component='div'
                        variant='body1'
                        className='cards-typography'
                      >
                        by {CardsData[i]?.author || CardsData[0]?.author}
                      </Typography>
                      <Typography variant='inherit' >
                        <b>PORTFOLIO</b>-Live <b>Performance</b>(USD Currency)
                      </Typography>
                      <div className='sub'>
                        <Typography variant='inherit' >
                          <b style={{ color: 'red', background: '#ebb3b3' }}>0.94%</b>  &nbsp; 1 Day
                          {/* </Typography> */}
                          &nbsp;&nbsp;
                          <b style={{ color: 'red', background: '#ebb3b3' }}>1.50%</b>  &nbsp; Current Month
                        </Typography>
                      </div>
                    </div>

                    <Typography
                      variant='inherit'
                      className='card-description'
                    >
                      {v?.strategyInitial}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>
      }
      {
        votilityRider &&
        <div ref={scrollRef} className='card-div x_scroll scroll_class'>
          {cardsData?.slice(2, 6).filter((val) => {
            if (searchBar === "") {
              return val
            } else if (val.strategyName.toLowerCase().includes(searchBar.toLowerCase())) {
              if (Object.keys(val).length > 1) {
                return val
              }
            }
          })?.map((v, i) => {
            console.log('votility')
            return (
              <div
                style={{ marginTop: 20 }}
                key={i}
                className='algo-cards'
              >
                <Card key={i}
                  sx={{ boxShadow: 0 }}
                  className='pointerForCard'
                  onClick={() => {
                    getAlgoInfoPageData(v?._id, userActions)
                    setMartPage()
                    setTimeout(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, 300)
                  }
                  }
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
                      image={CardsData[i]?.img || CardsData[0]?.img}
                    />
                  </div>
                  <CardContent className='scroll_class' sx={{ height: 360 }}>
                    <div style={{ height: 170 }}>
                      <Typography
                        gutterBottom
                        variant='h4'
                        component='div'
                        className='cards-head'
                      >
                        <b>{v?.strategyName}</b>
                      </Typography>
                      <Typography
                        gutterBottom
                        component='div'
                        variant='body1'
                        className='cards-typography'
                      >
                        by {CardsData[i]?.author || CardsData[0]?.author}
                      </Typography>
                      <Typography variant='inherit' >
                        <b>PORTFOLIO</b>-Live <b>Performance</b>(USD Currency)
                      </Typography>
                      <div className='sub'>
                        <Typography variant='inherit' >
                          <b style={{ color: 'red', background: '#ebb3b3' }}>0.94%</b>  &nbsp; 1 Day
                          {/* </Typography> */}
                          &nbsp;&nbsp;
                          <b style={{ color: 'red', background: '#ebb3b3' }}>1.50%</b>  &nbsp; Current Month
                        </Typography>
                      </div>
                    </div>

                    <Typography
                      variant='inherit'
                      className='card-description'
                    >
                      {v?.strategyInitial}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>
      }
      {
        longTermValue &&
        <div ref={scrollRef} className='card-div x_scroll scroll_class'>
          {cardsData?.slice(2, 5).filter((val) => {
            if (searchBar === "") {
              return val
            } else if (val.strategyName.toLowerCase().includes(searchBar.toLowerCase())) {
              if (Object.keys(val).length > 1) {
                return val
              }
            }
          })?.map((v, i) => {
            console.log('long term')
            return (
              <div
                style={{ marginTop: 20 }}
                key={i}
                className='algo-cards'
              >
                <Card key={i}
                  sx={{ boxShadow: 0 }}
                  className='pointerForCard'
                  onClick={() => {
                    getAlgoInfoPageData(v?._id, userActions)
                    setMartPage()
                    setTimeout(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, 300)
                  }
                  }
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
                      image={CardsData[i]?.img || CardsData[0]?.img}
                    />
                  </div>
                  <CardContent className='scroll_class' sx={{ height: 360 }}>
                    <div style={{ height: 170 }}>
                      <Typography
                        gutterBottom
                        variant='h4'
                        component='div'
                        className='cards-head'
                      >
                        <b>{v?.strategyName}</b>
                      </Typography>
                      <Typography
                        gutterBottom
                        component='div'
                        variant='body1'
                        className='cards-typography'
                      >
                        by {CardsData[i]?.author || CardsData[0]?.author}
                      </Typography>
                      <Typography variant='inherit' >
                        <b>PORTFOLIO</b>-Live <b>Performance</b>(USD Currency)
                      </Typography>
                      <div className='sub'>
                        <Typography variant='inherit' >
                          <b style={{ color: 'red', background: '#ebb3b3' }}>0.94%</b>  &nbsp; 1 Day
                          {/* </Typography> */}
                          &nbsp;&nbsp;
                          <b style={{ color: 'red', background: '#ebb3b3' }}>1.50%</b>  &nbsp; Current Month
                        </Typography>
                      </div>
                    </div>

                    <Typography
                      variant='inherit'
                      className='card-description'
                    >
                      {v?.strategyInitial}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>
      }
      {
        drawDownProtection &&
        <div ref={scrollRef} className='card-div x_scroll scroll_class'>
          {cardsData?.slice(4, 10).filter((val) => {
            if (searchBar === "") {
              return val
            } else if (val.strategyName.toLowerCase().includes(searchBar.toLowerCase())) {
              if (Object.keys(val).length > 1) {
                return val
              }
            }
          })?.map((v, i) => {
            console.log('draw down')
            return (
              <div
                style={{ marginTop: 20 }}
                key={i}
                className='algo-cards'
              >
                <Card key={i}
                  sx={{ boxShadow: 0 }}
                  className='pointerForCard'
                  onClick={() => {
                    getAlgoInfoPageData(v?._id, userActions)
                    setMartPage()
                    setTimeout(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, 300)
                  }
                  }
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
                      image={CardsData[i]?.img || CardsData[0]?.img}
                    />
                  </div>
                  <CardContent className='scroll_class' sx={{ height: 360 }}>
                    <div style={{ height: 170 }}>
                      <Typography
                        gutterBottom
                        variant='h4'
                        component='div'
                        className='cards-head'
                      >
                        <b>{v?.strategyName}</b>
                      </Typography>
                      <Typography
                        gutterBottom
                        component='div'
                        variant='body1'
                        className='cards-typography'
                      >
                        by {CardsData[i]?.author || CardsData[0]?.author}
                      </Typography>
                      <Typography variant='inherit' >
                        <b>PORTFOLIO</b>-Live <b>Performance</b>(USD Currency)
                      </Typography>
                      <div className='sub'>
                        <Typography variant='inherit' >
                          <b style={{ color: 'red', background: '#ebb3b3' }}>0.94%</b>  &nbsp; 1 Day
                          {/* </Typography> */}
                          &nbsp;&nbsp;
                          <b style={{ color: 'red', background: '#ebb3b3' }}>1.50%</b>  &nbsp; Current Month
                        </Typography>
                      </div>
                    </div>

                    <Typography
                      variant='inherit'
                      className='card-description'
                    >
                      {v?.strategyInitial}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>

      }
      {
        !empty ?

          <div style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }} onClick={() => {
            history?.push(allPaths?.GEO_FOCUS)
            setTimeout(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, 400)
          }
          }>
            <h2>MORE<br />
              <DownOutlined style={{ marginTop: 3 }} />
            </h2>
          </div>
          : <Empty />
      }
    </div >
  )
}

export default AlgotradingCard