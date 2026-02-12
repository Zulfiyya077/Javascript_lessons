import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Intro from './pages/Intro';
import Types from './pages/Types';
import LetConstVar from './pages/LetConstVar';
import Arrays from './pages/Arrays';
import Objects from './pages/Objects';
import Functions from './pages/Functions';
import ArrayMethods from './pages/ArrayMethods';
import StringMethods from './pages/StringMethods';
import IfElse from './pages/IfElse';
import SwitchCase from './pages/SwitchCase';
import Loops from './pages/Loops';
import Dates from './pages/Dates';
import DOM from './pages/DOM';
import InterviewQuestions from './pages/InterviewQuestions';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Intro />} />
          <Route path="types" element={<Types />} />
          <Route path="let-const-var" element={<LetConstVar />} />
          <Route path="arrays" element={<Arrays />} />
          <Route path="objects" element={<Objects />} />
          <Route path="functions" element={<Functions />} />
          <Route path="array-methods" element={<ArrayMethods />} />
          <Route path="string-methods" element={<StringMethods />} />
          <Route path="if-else" element={<IfElse />} />
           <Route path="switch-case" element={<SwitchCase />} /> 
          <Route path="loops" element={<Loops />} />
          <Route path="dates" element={<Dates />} />
          <Route path="dom" element={<DOM />} />
          <Route path="interview-questions" element={<InterviewQuestions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
