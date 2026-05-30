import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { AppLayout } from './components/layout/AppLayout'
import { AuthLayout } from './components/layout/AuthLayout'
import AccountScreen from './pages/AccountScreen'
import CartScreen from './pages/CartScreen'
import CategoryScreen from './pages/CategoryScreen'
import ExploreScreen from './pages/ExploreScreen'
import FavouritesScreen from './pages/FavouritesScreen'
import HomeScreen from './pages/HomeScreen'
import LocationScreen from './pages/LocationScreen'
import LoginScreen from './pages/LoginScreen'
import NumberScreen from './pages/NumberScreen'
import OnboardingScreen from './pages/OnboardingScreen'
import OrderFailureScreen from './pages/OrderFailureScreen'
import OrderSuccessScreen from './pages/OrderSuccessScreen'
import ProductDetailScreen from './pages/ProductDetailScreen'
import SearchScreen from './pages/SearchScreen'
import SignInScreen from './pages/SignInScreen'
import SignUpScreen from './pages/SignUpScreen'
import SplashScreen from './pages/SplashScreen'
import VerificationScreen from './pages/VerificationScreen'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/onboarding" element={<OnboardingScreen />} />
        <Route path="/signin" element={<AuthLayout><SignInScreen /></AuthLayout>} />
        <Route path="/number" element={<AuthLayout><NumberScreen /></AuthLayout>} />
        <Route path="/verification" element={<AuthLayout><VerificationScreen /></AuthLayout>} />
        <Route path="/login" element={<AuthLayout><LoginScreen /></AuthLayout>} />
        <Route path="/signup" element={<AuthLayout><SignUpScreen /></AuthLayout>} />
        <Route path="/location" element={<AuthLayout><LocationScreen /></AuthLayout>} />
        <Route path="/home" element={<AppLayout><HomeScreen /></AppLayout>} />
        <Route path="/explore" element={<AppLayout><ExploreScreen /></AppLayout>} />
        <Route path="/category/:id" element={<AppLayout><CategoryScreen /></AppLayout>} />
        <Route path="/product/:id" element={<AppLayout><ProductDetailScreen /></AppLayout>} />
        <Route path="/search" element={<AppLayout><SearchScreen /></AppLayout>} />
        <Route path="/cart" element={<AppLayout><CartScreen /></AppLayout>} />
        <Route path="/favourites" element={<AppLayout><FavouritesScreen /></AppLayout>} />
        <Route path="/account" element={<AppLayout><AccountScreen /></AppLayout>} />
        <Route path="/order-success" element={<OrderSuccessScreen />} />
        <Route path="/order-failure" element={<OrderFailureScreen />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
