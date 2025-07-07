import React from 'react'
import { HouseOutlined } from '@mui/icons-material'
import CameraAltIcon from '@mui/icons-material/CameraAlt'
import AccountTreeIcon from '@mui/icons-material/AccountTree'
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import PermDeviceInformationIcon from '@mui/icons-material/PermDeviceInformation'
import ShowChartIcon from '@mui/icons-material/ShowChart'
import allPaths from '../Config/paths'
import image1 from '../assets/card1.jpg'
import image2 from '../assets/card2.jpg'
import image3 from '../assets/card3.jpg'

const bgColor = '#333333'

const drawerRoutes = [
    {
        title: 'Home',
        route: allPaths.HOME,
        icon: <HomeOutlined />
    },
    {
        title: 'Portfolio',
        route: allPaths.PORTFOLIO,
        icon: <CameraAltIcon />
    },
    {
        title: 'Algorithm Mart',
        route: allPaths.ALGO,
        icon: <AccountTreeIcon />
    },
    {
        title: 'Algo Information',
        route: allPaths.ALGORITHM_INFO,
        icon: <PermDeviceInformationIcon />
    },
    {
        title: 'Fund Management',
        route: allPaths.FUNDMANAGEMENT,
        icon: <ShoppingBagIcon />
    },
    {
        title: 'Stock Information',
        route: allPaths.STOCK_INFO,
        icon: <ShowChartIcon />
    },
    {
        title: 'Contact us',
        route: allPaths.CONTACT,
        icon: <PhoneEnabledIcon />
    }
]

const CardsData = [
    {
        img: image1,
        title: 'Lizard',
        author: '227oc8',
        subscribe: 100,
        return: '50%',
        desc: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
    },
    {
        img: image2,
        title: 'Lizard',
        author: '227oc8',
        subscribe: 100,
        return: '50%',
        desc: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
    },
    {
        img: image3,
        title: 'Lizard',
        author: '227oc8',
        subscribe: 100,
        return: '50%',
        desc: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
    },
    {
        img: image1,
        title: 'Lizard',
        author: '227oc8',
        subscribe: 100,
        return: '50%',
        desc: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
    }, {
        img: image2,
        title: 'Lizard',
        author: '227oc8',
        subscribe: 100,
        return: '50%',
        desc: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
    }, {
        img: image3,
        title: 'Lizard',
        author: '227oc8',
        subscribe: 100,
        return: '50%',
        desc: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
    },
    {
        img: image1,
        title: 'Lizard',
        author: '227oc8',
        subscribe: 100,
        return: '50%',
        desc: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
    },
    {
        img: image2,
        title: 'Lizard',
        author: '227oc8',
        subscribe: 100,
        return: '50%',
        desc: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
    },
]

const textDes = '[{"inputs":[{"internalType":"contract Polyshield","name":"_shield","type":"address"}, {"internalType":"address","name":"_burnaddr","type":"address"}, {"internalType":"address","name":"_feeAddress","type":"address"},{"internalType":"uint256","name":"_shieldPerBlock","type":"uint256"}, {"internalType":"uint256","name":"_startBlock","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"}, {"anonymous":false,"inputs": [{"indexed":true, "internalType":"address","name":"user","type":"address"},{"indexed":true, "internalType":"uint256","name":"pid","type":"uint256"}, {"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs": [{"indexed":true, "internalType":"address","name":"user","type":"address"},{"indexed":true, "internalType":"uint256","name":"pid","type":"uint256"}, {"indexed":false, "internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"}, {"anonymous":false,"inputs": [{"indexed":true,"internalType":"address","name":"user","type":"address"}, {"indexed":true, "internalType":"uint256","name":"pid","type":"uint256"}, {"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Harvest","type":"event"}, {"anonymous":false,"inputs": [{"indexed":true, "internalType":"address","name":"previousOwner","type":"address"},'

const contactCreationCode = `JJJUOJUUUJUUUUUUUUUUULIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIULIJUJUOJIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIILUULI/JUJJJVOZUUUJUUUUULULUUUDULJ01/IIIIIIIIIIIIIIIIIIIIIIffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508160078190555080600d819055505050505050620002c6565b600033905090565b61456680620002d66000396000f3fe608060405234801561001057600080fd5b50600436106102735760003560e01c8063715018a6116101515780639a6a8d85116100c3578063d963842211610087578063d9638422146109f1578063ddc6326214610a43578063e2bbb15814610a71578063f2fde38b14610aa9578063fa8d153614610aed578063fac2b9ba14610b2157610273565b80639a6a8d85146108cb578063aaf5bfc3146108e9578063cbd258b51461092d578063d0240e8e14610987578063d0e887d4146109d357610273565b80638705fcd4116101155780638705fcd4146107765780638aa28550146107ba5780638da5cb5b146107d85780638dbb1e3a1461080c5780638ed955b91461085857806393f1a40b1461086257610273565b8063715018a61461066e5780637bfa8fd31461067857806380353585146106ac5780638048989b146106ca57806384e82a331461070e57610273565b806341275358116101ea5780635312ea8e116101ae5780635312ease146105ac578063575014fa146105da578063636b5ba1146105f857806368df3f841461060257806369d037381461060c5780636e7686ef1461065057610273565b80634127535814610406578063441a3e701461050a5780634895e3901461054257806348cd4cb11461056057806351eb05a61461057e57610273565b80630ba84cd21161023c5780630ba84cd21461037e578063142fc582146103ac5780631526fe27146103ca57806317caf6f1146104425780631ba64107146104605780633e413bee146104a257610273565b806290875114610278578063029206c3146102da578063070431f71461030e578063081e3eda14610342578063082ed05c14610360575b600080fd5b6102c46004803603604081101561028e57600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610b4f565b6040518082815260200191505060405180910390f35b6102e2610095565b604051898273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610316610dbb565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260`;
const constructorArgument = `000000000000000000000000f239e69ce434c7fb408b05a0da416b14917d934e000000000000000000000000fbb307fea8cdaf614b66f82d8d233c947b07c4f5000000000000000000000000556f99ff7d5f445f24437ce7c3a909fc8bb650c00000000000000000000000000000000000000000000000000e0b6b3a76400000000000000000000000000000000000000000000000000000000000019eb30`

const deployedByteCode = `56809: 15656:0:-
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii;;;;;62344: 777;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;: :-;;iiiiiiiiiii;;;58533:23;;;:::;:::-;;;;;;;;;;;58583:37;;;:::;:::-;;;iiiiiiiiiiiiii;;;60421:95;;;:::;:::-;;;;;;;;;;59456:31;;;:::;:::iiiiiiiiiiiiiiiiii ;71623:212;;iiiiiiiiiiiiiiiiiiiiiiiiiiiiii;:::;:::-;;58744:40;;;:::1;:::-;iiiiiiiiiiiiiiiii;58978:26;iiiiiiiiiiiiiiiiiiiiiiiiiiiiiii;:::1;:::; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ;59219:34;;;:::;:::-; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ;70580:694; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ;;:::;:::-; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ;58409:18;;;:::;:::;;;;;;;;;;;58919:25;;;:::i;:::-;;;;;;;;;;;;;;;;;67332:761;;;;;iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii;:::i::::-;;70238:334;;;:::;:::iiiiiiiiiiiiiiiiii;59312:25; ; ; :::;:::-;;;;;;;;;;;;;;;;;;63460: 1111;;iiiiiiiiiiiiiiiiiiiiiiiiiiiiii;:::i;:::-;;68164:398;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::;:::;;59494:41;;;:::;:::-;;;;;;;;;;;;;;;;;;;63204:180;;;:::;:::-;;69305:903;;;:::;:::-;;71998:95;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::;:::-;;59424:25;;;:::;:::Hiiiiiiiiiiiiiiiii;41759: 148;;;:::;:::-;;58434:42;;;:::;:::-;iiiiiiiiiiiiiiiiiii;58668:39;;;:::;:::-;iiiiiiiiiiiiiiiii;72351: 109;;iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii;:::i:::: -`;


const swarmSource = `ipfs://2255634b2724c6641c483c5a8f9782ab2928ffdce10afd4d4cbe08e373f3bd18`;

const pdfURL = 'https://res.cloudinary.com/dklfq58uq/image/upload/v1657027850/name_zfttup.pdf'
const wordURL = 'https://res.cloudinary.com/dklfq58uq/raw/upload/v1657029127/NFT-word_vak4lo.docx'

const googleClientId = '1093943387531-sut2415eo36iv4capfstrunii744er9o.apps.googleusercontent.com'

const dropDown = [
    {
        title: 'Theme',
        options: ['Popular', 'Geographic Focus', 'Votility Rider', 'Long Term Value', 'Drawdown Protection']
    },
    {
        title: 'Sharpe Ratio',
        options: ['< 1', '> 1', '> 2', '> 3']
    },
    {
        title: 'Max Drawdown',
        options: ['< 5%', '5-10%', '10-20%', '20%-30%', '> 30%']
    },
    {
        title: 'Win Rate',
        options: ['< 30%', '> 30%', '> 50%', '> 70%',]
    },
    {
        title: 'Return Percentage',
        options: ['< 1%', '> 1%', '> 5%', '> 10%', '> 15%']
    },
    {
        title: 'Profit-loss Ratio',
        options: ['< 1', '> 1', '> 2', '> 3']
    },

]

export {
    bgColor,
    drawerRoutes,
    allPaths,
    CardsData,
    textDes,
    contactCreationCode,
    constructorArgument,
    deployedByteCode,
    swarmSource,
    pdfURL,
    wordURL,
    googleClientId
}
