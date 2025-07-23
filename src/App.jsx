import { createTheme, ThemeProvider } from '@mui/material/styles'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import './App.css'
import { AppRoutes } from './Config/routes'

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
console.log('abc')
  return (
    <div>
      <ThemeProvider theme={theme} >
        <AppRoutes />
      </ThemeProvider>
    </div>
  )
}

export default App