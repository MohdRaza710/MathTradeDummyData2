import { createTheme, ThemeProvider } from '@mui/material/styles'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import './App.css'
import { AppRoutes } from './Config/routes'
import { store, persistor } from './Redux/store' // Import persistor
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react' // Import PersistGate

AOS.init()

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const theme = createTheme({
  palette: {
    primary: {
      main: '#007aff',
      secondMain: '#1890ff',
    },
  },
});

const App = () => {
  console.log('abc');
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <AppRoutes />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
