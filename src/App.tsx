import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import FFCSHelp from './pages/FFCSHelp';
import Footer from './components/Footer';
import GetResources from './pages/GetResource';
import ToolsPage from './pages/ToolsPage';
import CommunityPage from './pages/CommunityPage';
import MakeContribution from './pages/MakeContribution';
import { AuthProvider } from './pages/AuthContext';
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';
import DiscussionPage from './pages/DiscussionPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ffcs-help" element={<FFCSHelp />} />
            <Route path="/resources" element={<GetResources />} />
            <Route path="/tools" element={<ToolsPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/make-contribution" element={<MakeContribution />} />
            <Route path="/signin" element={<SignInPage />} />
            {/* <Route path="/signup" element={<SignUpPage />} /> */}
            <Route path="/discussion/:id" element={<DiscussionPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;