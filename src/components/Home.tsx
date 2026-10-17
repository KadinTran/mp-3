import wu from '../assets/with_wu2.jpeg'
import {StyledH3, StyledMain, StyledP} from "./Styles.ts";
import styled from "styled-components";

const WuImg = styled.img`
    max-width: 90%;
    display: inline;
    margin: 0;
    @media screen and (max-width: 750px){
        margin: auto;
    }
`;
export default function Home() {

    return (
        <StyledMain>
                <StyledH3> Home  </StyledH3>
                <WuImg id = "withwu" src = {wu}
                     alt = "Me with Mellissa Gilliam and Mayor Wu at the Community Scholars Awards Ceremony">
                </WuImg>
                <StyledP> Hello, I am Kadin (or Kabrandin) Tran! I am currently a BU student getting a Bachelor of Arts in
                    Computer Science for Computer Science. I enjoy coding, model kit building, cooking, and of
                    course eating. Some CS classes that I have taken or am taking at BU are CS 320: Intro to Programming
                    Languages and CS 303: Web App Development. This is a digital website for my resume made for CS303!
                </StyledP>
        </StyledMain>
    )
}