import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
    return (
        <>
            <header>
                <Header />
            </header>
            <main>{<Outlet/>}</main>
            <footer>Footer</footer>
        </>    
    )

}