import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
//import HooksApp from './HooksApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import MultipleCustomHooks from './03-examples/MultipleCustomHooks';
//import FocusScreen from './04-useRef/FocusScreen';
//import CounterApp from './01-useState/CounterApp';
//import CounterWithCustomHook from './01-useState/CounterWithCustomHook';
//import SimpleForm from './02-useEffect/SimpleForm';
//import FormWithCustomHook from './02-useEffect/FormWithCustomHook';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MultipleCustomHooks />
  </StrictMode>
)
