import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
    background-color: #49A4BB;
    @media screen and (max-width: 750px){
        text-align: center;
    }
`;
const HeaderH1 = styled.h1`
    margin: 0 1%;
`;
const HeaderP = styled.p`
    margin: 0 1%;
`;

export default function Header(){
    // Found useLocation function to find what path I am on: https://reactrouter.com/api/hooks/useLocation
    // Needs to be rendered inside a router so Header is a child of Root
    const location = useLocation();
    let page = "";
    let blurb = "";

    switch (location.pathname){
        case "/":
            page = "Home";
            blurb = "Resume Page for Kadin Tran";
            break;
        case "/education":
            page = "Education";
            blurb = "Resume Page";
            break;
        case "/professional":
            page = "Professional Experience";
            blurb = "Previous and Current Employment";
            break;
        case "/volunteering":
            page = "Volunteering Experience";
            blurb = "Volunteering I Have Done";
            break;
        case "/skills":
            page = "Skills";
            blurb = "Technical Knowledge";
            break;
        case "/projects":
            page = "Projects";
            blurb = "Projects I've Completed";
            break;
    }
    // change the <title> tag based on the page we are on
    useEffect(() => {
        document.title = `${page} | Kadin Resume`;
    }, [page])

    return(
        <StyledHeader>
            <HeaderH1> {page} </HeaderH1>
            <HeaderP> {blurb} </HeaderP>
        </StyledHeader>
    )
}
