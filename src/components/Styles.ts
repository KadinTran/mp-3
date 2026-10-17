import styled from "styled-components";

export const StyledUl = styled.ul`
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
`;
export const MainUlLi = styled.li`
    padding: 5%;
`;
export const Lists = styled.li`
    padding: 5%;
    margin: 1%;
    font-weight: bold;
    @media screen and (max-width: 750px){
        font-size: calc(2px + 2.5vw);
    }
`;
export const Desc = styled.div`
    font: normal calc(2px + 1vw) 'Krub';
    margin: 0;
    padding: 1%;
    line-height: 150%;
    @media screen and (max-width: 750px){
        font-size: calc(2px + 2.5vw);
    }
`;

export const StyledMain = styled.main`
    width: 70%;
    background-color: #76C0EC;
    text-align: center;
    padding: 1%;
    font-size: calc(2px + 1.3vw);
    @media screen and (max-width: 750px){
        font-size: calc(2px + 2.5vw);
    }
    @media screen and (max-width: 1000px){  
        width: 100%;
    }
`;
export const StyledH3 = styled.h3`
    padding: 2%
`;
export const StyledP = styled.p`
    line-height: 150%;
`

export const StyledImg = styled.img`
    max-width: 30%;
    display: inline;
    margin: 0;
    @media screen and (max-width: 750px){
        margin: 0;
    }
`;