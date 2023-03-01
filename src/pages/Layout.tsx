import { Outlet } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";

function Layout() {
    return (
        <section className="flex h-screen flex-col">
            <Header />
            <main className="flex flex-grow flex-col items-center justify-start gap-2 overflow-y-scroll scroll-smooth py-4">
                <Outlet />
            </main>
            <Footer />
        </section>
    );
}

export default Layout;
