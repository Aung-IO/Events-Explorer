import Header from './components/core/Header'
import Footer from './components/core/Footer'
import { Outlet } from 'react-router'

export default function AppLayout() {
    return (
        <>
            <Header />
            <div className="flex min-h-svh flex-col items-center justify-center">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}
