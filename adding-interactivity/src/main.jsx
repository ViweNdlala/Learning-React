import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
// import Form from './Form.jsx'
import Form from './Artwork.jsx'
import List from './List.jsx'
import ShapeEditor from './Shapes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Form /> */}
    {/* <List /> */}
    <ShapeEditor />
    </StrictMode>,
)
