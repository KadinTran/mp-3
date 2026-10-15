import {Routes, Route} from 'react-router-dom';
import Home from './Home.tsx'
import Education from './Education.tsx';
import Professional from './Professional.tsx';
import Volunteering from './Volunteering.tsx';
import Skills from './Skills.tsx';
import Projects from './Projects.tsx';
import Nav from "./Nav.tsx";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";


export default function Root() {

    return (
        <div id ="page-wrapper">
            <Header />
            <div id="content">
                <Nav/>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/education'} element={<Education/>}/>
                    <Route path={'/professional'} element={<Professional/>}/>
                    <Route path={'/volunteering'} element={<Volunteering/>}/>
                    <Route path={'/skills'} element={<Skills/>}/>
                    <Route path={'/projects'} element={<Projects/>}/>
                </Routes>
            </div>
            <Footer />
        </div>
    )
}