import Gopher from '../../assets/gopher.jpeg'
import Ocaml from '../../assets/ocaml.jpeg'
import Web from '../../assets/web.jpeg'
import {MainUlLi, StyledImg, StyledMain, StyledUl} from '../Styles.ts'

export default function Skills() {
    return (
        <StyledMain>
            <StyledImg src={Gopher} alt="Golang's Logo"/>
            <StyledImg src={Ocaml} alt="OCaml's Logo"/>
            <StyledImg src={Web} alt="HTML, CSS and JavaScript's Logo"/>
            <StyledUl>
                <MainUlLi> Intermediate knowledge of Python, Java, C, OCaml, HTML, CSS, and Golang coding</MainUlLi>
                <MainUlLi> Proficient in Google Suite</MainUlLi>
                <MainUlLi> Proficient in MacOS and Windows OS</MainUlLi>
                <MainUlLi> Introductory knowledge of Adobe Photoshop</MainUlLi>
                <MainUlLi> Organized, efficient, productive</MainUlLi>
            </StyledUl>
        </StyledMain>
    )
}