import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { AppLayout } from './components/layout/AppLayout'
import AccountScreen from './pages/AccountScreen'
import CartScreen from './pages/main/CartScreen'
import CategoryScreen from './pages/main/CategoryScreen'
import ExploreScreen from './pages/main/ExploreScreen'
import FavouritesScreen from './pages/main/FavouritesScreen'
import FilterScreen from './pages/main/FilterScreen'
import HomeScreen from './pages/main/HomeScreen'
import LocationScreen from './pages/auth/LocationScreen'
import LoginScreen from './pages/auth/LoginScreen'
import NumberScreen from './pages/auth/NumberScreen'
import OnboardingScreen from './pages/auth/OnboardingScreen'
import OrderFailureScreen from './pages/OrderFailureScreen'
import OrderSuccessScreen from './pages/checkout/OrderSuccessScreen'
import ProductDetailScreen from './pages/main/ProductDetailScreen'
import SearchScreen from './pages/main/SearchScreen'
import SignInScreen from './pages/auth/SignInScreen'
import SignUpScreen from './pages/auth/SignUpScreen'
import SplashScreen from './pages/auth/SplashScreen'
import VerificationScreen from './pages/auth/VerificationScreen'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/onboarding" element={<OnboardingScreen />} />
        <Route path="/signin" element={<SignInScreen />} />
        <Route path="/number" element={<NumberScreen />} />
        <Route path="/verification" element={<VerificationScreen />} />
        <Route path="/otp" element={<VerificationScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/location" element={<LocationScreen />} />
        <Route path="/home" element={<AppLayout><HomeScreen /></AppLayout>} />
        <Route path="/explore" element={<AppLayout><ExploreScreen /></AppLayout>} />
        <Route path="/category/:id" element={<AppLayout><CategoryScreen /></AppLayout>} />
        <Route path="/product/:id" element={<AppLayout><ProductDetailScreen /></AppLayout>} />
        <Route path="/search" element={<AppLayout><SearchScreen /></AppLayout>} />
        <Route path="/cart" element={<AppLayout><CartScreen /></AppLayout>} />
        <Route path="/favourites" element={<AppLayout><FavouritesScreen /></AppLayout>} />
        <Route path="/account" element={<AppLayout><AccountScreen /></AppLayout>} />
        <Route path="/filters" element={<FilterScreen />} />
        <Route path="/order-success" element={<OrderSuccessScreen />} />
        <Route path="/order-failure" element={<OrderFailureScreen />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
