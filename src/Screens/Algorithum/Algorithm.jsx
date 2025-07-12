import uppimg2 from '../../assets/images (1).jpg'
import uppimg1 from '../../assets/images.jpg'
import lowimg1 from '../../assets/lowerimg1.jpg'
import lowimg2 from '../../assets/lowerimg2.jpg'
import AlgotradingCard from './AlgoTradingCards'
const Algorithm = (props) => {
  return (
    <div className='card-form'>
      <div className='Top-cards'>
        <div className='upper'>
          <img
            src={uppimg1}
            alt='img'
          />
        </div>
        <div className='lower'>
          <img
            src={uppimg2}
            alt='img'
          />
        </div>
        <div className='upper'>
          <img
            src={lowimg1}
            alt='img'
          />
        </div>
        <div className='lower'>
          <img
            src={lowimg2}
            alt='image'
          />
        </div>
      </div>

      <AlgotradingCard />
    </div>
  )
}

export default Algorithm
