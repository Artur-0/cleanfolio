import { render } from 'react-dom'
import App from './App'
import { ThemeProvider } from './contexts/theme'
import './index.css'
// import axios from 'axios'
// import dotenv from 'dotenv'
// dotenv.config()

// axios.defaults.baseURL = process.env.REACT_APP_API || 'http://localhost:3001'
render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
