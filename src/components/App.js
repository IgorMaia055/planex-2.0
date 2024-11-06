import '../css/App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './Sidebar.js';
import Home from './Home.js';
import Docs from './Docs.js';
import Timestamp from './Timestamp.js';
import Login from './Login.js';
import NotFound from './NotFound.js';
import { checkCookie } from '../js/cookie.js';

function App() {

    if (checkCookie('username') && checkCookie('password')) {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={
                        <>
                            <Sidebar activeRouter={'home'} />
                            <Home />
                        </>
                    } />
                    <Route path="/docs" element={
                        <>
                            <Sidebar activeRouter={'docs'} />
                            <Docs />
                        </>
                    } />
                    <Route path="/timestamp" element={
                        <>
                            <Sidebar activeRouter={'timestamp'} />
                            <Timestamp />
                        </>
                    } />
                    <Route path="/login" element={
                        <>
                            <Login />
                        </>
                    } />

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        )
    } else {
        return (
            <Router>
                <Routes>
                    <Route path="/login" element={
                        <>
                            <Login />
                        </>
                    } />

                    <Route path="/" element={<Navigate to="/login" replace />} />
                    <Route path="/docs" element={<Navigate to="/login" replace />} />
                    <Route path="/timestamp" element={<Navigate to="/login" replace />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        )
    }

}

export default App;
