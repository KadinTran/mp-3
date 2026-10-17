import {Link} from "react-router-dom";
import styled from "styled-components";
import {StyledP} from "./Styles.ts";

const StyledFooter = styled.footer`
    background-color: #49A4BB;
    @media screen and (max-width: 750px){
        text-align: center;
    }
`

export default function Footer() {

    return (
        <StyledFooter>
            <StyledP> All Rights Reserved by Kabrandin Tran <Link to = {""}> Credits </Link> &copy; </StyledP>
        </StyledFooter>
    )
}