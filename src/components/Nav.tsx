import {Link} from "react-router-dom";
import './index.css'
import styled from "styled-components";

const StyledNav = styled.nav`
    width: 30%;
    background-color: #3368A0;
    @media screen and (max-width: 750px) {
        display: flex;
        flex-direction: row;
        box-sizing: border-box;
        width: 100%;
        justify-content: center;
    }
`;
const NavUl = styled.ul`
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 750px) {
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
`;
const NavLi = styled.li`
    background-color: #F2EFE7;
    border: solid #F2EFE7 2px;
    text-align: center;
    margin: 20%;
    @media screen and (max-width: 750px) {
        border: solid #49A4BB 2px;
        margin: .5vw ;
        display: inline;
        padding: 1.5%;
        text-align: center;
    }
`;
const NavLink = styled(Link)`
    font: bold calc(2px + 1.5vw) 'Krub';
    color: black;
    text-decoration: none;
    @media screen and (max-width: 750px) {
        text-decoration: none;
        font-size: calc(2px + 1.5vw);
        font-weight: bold;
    }
`;

export default function Nav() {
    return(
        <StyledNav>
            <NavUl>
                <NavLi>
                    <NavLink to='/'> Home </NavLink>
                </NavLi>
                <NavLi>
                    <NavLink to='/education'> Education </NavLink>
                </NavLi>
                <NavLi>
                    <NavLink to='/professional'> Professional Experience </NavLink>
                </NavLi>
                <NavLi>
                    <NavLink to='/volunteering'> Volunteering Experience </NavLink>
                </NavLi>
                <NavLi>
                    <NavLink to='/skills'> Skills </NavLink>
                </NavLi>
                <NavLi>
                    <NavLink to='/projects'> Projects </NavLink>
                </NavLi>
            </NavUl>
        </StyledNav>
    )
};