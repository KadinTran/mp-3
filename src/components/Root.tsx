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
import styled from "styled-components";

const PageWrapper = styled.div`
    background-color: #76C0EC;
    width: 80%;
    margin: 0 auto;
`;

const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    height: 150vh;
    flex-grow: 1;
    @media screen and (max-width: 750px){
        flex-direction: column;
        height: 150vh;
        margin: 0;
    }
`;


export default function Root() {

    return (
        <PageWrapper>
            <Header />
            <Content>
                <Nav/>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/education'} element={<Education/>}/>
                    <Route path={'/professional'} element={<Professional/>}/>
                    <Route path={'/volunteering'} element={<Volunteering/>}/>
                    <Route path={'/skills'} element={<Skills/>}/>
                    <Route path={'/projects'} element={<Projects/>}/>
                </Routes>
            </Content>
            <Footer />
        </PageWrapper>
    )
}