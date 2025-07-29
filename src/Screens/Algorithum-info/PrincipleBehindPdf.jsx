import React, { useEffect, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import IconButton from '@mui/material/IconButton'
import { pdfURL } from '../../utils/constants'

export default function PrincipleBehindPdf(props) {
  const { inlineCollapsed } = props

  let [widths, setWidth] = useState(window.innerWidth <= 500 ? window.innerWidth - 100 : window.innerWidth <= 900 ? window.innerWidth - 200 : window.innerWidth - 600)

  // console.log('inlineCollapsed pdf',inlineCollapsed)
  useEffect(() => {
    window.addEventListener('resize', setSiderMargin)
    setSiderMargin()
  }, [inlineCollapsed])

  const setSiderMargin = () => {
    inlineCollapsed ?
      setWidth(window.innerWidth <= 500 ? window.innerWidth - 100 : window.innerWidth <= 900 ? window.innerWidth - 200 : window.innerWidth - 600)
      :
      setWidth(window.innerWidth <= 500 ? window.innerWidth - 100 : window.innerWidth <= 900 ? window.innerWidth - 250 : window.innerWidth <= 1000 ? window.innerWidth - 540 : window.innerWidth <= 1100 ? window.innerWidth - 610 : window.innerWidth - 650)
  }

  pdfjs.GlobalWorkerOptions.workerSrc =
    `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  /*To Prevent right click on screen*/
  document.addEventListener("contextmenu", (event) => {
    event.preventDefault()
  })

  /*When document gets loaded successfully*/
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
    setPageNumber(1)
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset)
  }

  function previousPage() {
    changePage(-1)
  }

  function nextPage() {
    changePage(1)
  }

  return (
    <>
      <div style={{ backgroundColor: '#EEEEEE' }} className="main">
        <CircularProgress style={{ marginTop: 150 }} CircularProgress={numPages ? false : true}>
          <div style={{ paddingTop: '5px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Document
              file={pdfURL}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page width={widths} pageNumber={pageNumber} />
            </Document>
            <div>
              {numPages ?
                <>
                  <div className="pagec">
                    <h5 style={{ fontWeight: 'bolder', marginTop: '17px' }}>
                      Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                    </h5>
                  </div>
                  <div className="buttonc">
                    <Stack direction="row" spacing={3}>
                      <IconButton type="button"
                        disabled={pageNumber <= 1}
                        onClick={previousPage}
                        className="Pre"
                        aria-label="delete">
                        <ArrowBackIosIcon />
                      </IconButton>

                      <IconButton type="button"
                        disabled={pageNumber >= numPages}
                        onClick={nextPage} aria-label="delete">
                        <ArrowForwardIosIcon />
                      </IconButton>
                    </Stack>

                  </div>
                </> : ""}
            </div>
          </div>
        </CircularProgress>
      </div >
    </>
  )
}
