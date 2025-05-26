import { Route, Routes } from 'react-router';
import App from './App';
import { SignIn, SignUp } from '@clerk/clerk-react';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/sign-in/*" element={<SignIn routing="path" path="/sign-in" />} />
            <Route path="/sign-up/*" element={<SignUp routing="path" path="/sign-up" />} />
        </Routes>
    );
};