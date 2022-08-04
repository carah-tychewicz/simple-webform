import Form from './components/Form';
import ThankYou from './components/ThankYou';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Form />} />
        <Route path="thank-you" element={<ThankYou />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
