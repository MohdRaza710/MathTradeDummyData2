import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import Avatar from '@mui/material/Avatar'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import word from '../../assets/word.png'
import PrincipleBehindPdf from './PrincipleBehindPdf'
import PrincipleTable from './PrincipleTable'
import Pdf from '../../assets/pdfs.png'
import { pdfURL, wordURL } from '../../utils/constants'
import fileDownload from 'js-file-download'
import axios from 'axios'

function createData(name, DateTime, HistoricalGraph, AverageDailyReturn, Volatility, WinRate, AnnualReturn, SharpRatio
) {
    return {
        name, DateTime, HistoricalGraph, AverageDailyReturn, Volatility, WinRate, SharpRatio, AnnualReturn
    }
}

const AlgorithmPrinciple = (props) => {

    function download(url, filename) {
        axios.get(url, {
            responseType: 'blob',
        }).then(res => {
            fileDownload(res.data, filename)
        })
    }
    return (
        <>
            <div className='Algo-info'>

                <div className='Algo-info-header'>
                    Ultimate Buy and Hold Strategy
                </div>
                <PrincipleTable />

            </div>

            <div className='info'>

                <div className='PrincipleBehindLeft'>
                    <div className='Principleheader'>Principle Behind</div>
                    <div>
                        <PrincipleBehindPdf {...props} />
                    </div>
                </div>

                <div className='PrincipleBehindRight'>
                    <div className='PrincipleBehindRightCards'>
                        <div className='engineer_info'>Engineer Information</div>
                        <div className='details details1'>
                            <Avatar alt='Travis Howard' src='' />
                            <div className='engineer_info_text'>
                                <h5>Gray Bredhen</h5>
                                <h6>M .Sc Finance</h6>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Quos molestias officia dolore eum, dicta deserunt delectus omnis iusto unde quas facere doloremque.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='PrincipleBehindRightCards'>
                        <div className='engineer_info'>Supporting Documents</div>
                        <div className='details_file details2'>
                            <div className='engineer_info_img'>
                                <div>
                                    <img style={{ cursor: 'pointer' }} onClick={() => { download(pdfURL, 'nft.pdf') }} src={Pdf} className='img' alt='Pdf Logo' />
                                    <p>Name.pdf </p>
                                </div>
                                <div>
                                    <img style={{ cursor: 'pointer' }} onClick={() => { download(wordURL, 'nft.docs') }} src={word} className='img' alt='Docs Logo' />
                                    <p>Name.docx</p>
                                </div>
                                <div>
                                    <img style={{ cursor: 'pointer' }} onClick={() => { download(pdfURL, 'nft.pdf',) }} src={Pdf} className='img' alt='Pdf Logo' />
                                    <p>Name.pdf </p>
                                </div>
                                <div>
                                    <img style={{ cursor: 'pointer' }} onClick={() => { download(wordURL, 'nft.docs') }} src={word} className='img' alt='Docs Logo' />
                                    <p>Name2.docx </p>
                                </div>
                                <div>
                                    <img style={{ cursor: 'pointer' }} onClick={() => { download(pdfURL, 'nft.pdf',) }} src={Pdf} className='img' alt='Pdf Logo' />
                                    <p>Name.pdf </p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='PrincipleBehindRightCards'>
                        <div className='engineer_info'>Explanation Video</div>
                        <div className='details-video'>
                            <video width="100%" controls>
                                <source src="mov_bbb.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bottom-container'>
                <div className='icon'>
                    <ArrowDropUpIcon />
                </div>
                <div className='trade'>
                    <div>Trade Log</div>
                </div>
            </div>
        </>
    )
}

export default AlgorithmPrinciple