import React from 'react'
import { hot } from 'react-hot-loader/root'
import AOS from 'aos'
import { Routes } from './Config/routes'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import './App.css'
import 'aos/dist/aos.css'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import { pdfjs } from 'react-pdf'

AOS.init()

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

const theme = createTheme({
  palette: {
    primary: {
      main: '#007aff',
      secondMain: '#1890ff'
    }
  }
})

const App = () => {

  return (
    <div>
      <ThemeProvider theme={theme} >
        <Routes />
      </ThemeProvider>
    </div>
  )
}

export default hot(App)