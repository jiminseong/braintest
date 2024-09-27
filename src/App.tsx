import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import TestContentPage from './pages/test-content/TestContentPage';
import CautionPage from './pages/caution/CautionPage';
import TestResultPage from './pages/test-result/TestResultPage';

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/caution" element={<CautionPage />} />
            <Route path="/test/content" element={<TestContentPage />} />
            <Route path="/test/result" element={<TestResultPage />} />
        </Routes>
    );
}

export default App;
