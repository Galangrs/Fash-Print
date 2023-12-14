import NavBarPage from "./components/NavBarPage.jsx";
import { Outlet } from 'react-router-dom'

function App() {
    return (
        <>
            <NavBarPage></NavBarPage>
            <Outlet></Outlet>
        </>
    );
}

export default App;
