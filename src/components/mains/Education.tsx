import BUlogo from '../../assets/Boston-University-Logo.jpeg'
import BLSlogo from '../../assets/bls_logo.jpeg'
import {Desc, Lists, StyledImg, StyledMain, StyledUl} from '../Styles.ts'

export default function Education() {
    return (
        <StyledMain>
                <StyledImg src={BUlogo} alt="Boston University's Logo"/>
                <StyledImg src={BLSlogo} alt="Boston Latin School's Logo"/>
                <StyledUl>
                    <Lists > Boston Latin School
                        <Desc> College preparatory curriculum </Desc>
                        <Desc> AP Classes include: </Desc>
                        <StyledUl>
                            <Desc> AP Computer Science</Desc>
                            <Desc> AP Calculus BC</Desc>
                            <Desc> AP Physics Mechanics</Desc>
                            <Desc> AP Psychology</Desc>
                        </StyledUl>
                    </Lists>
                    <Lists> University of Massachusetts Boston
                        <Desc> 2024 Fall and 2025 Spring Semester </Desc>
                    </Lists>
                    <Lists> Boston University
                        <Desc> Expected Graduation 2028 </Desc>
                        <Desc> Pursuing a Bachelor of Arts in Computer Science </Desc>
                    </Lists>
                </StyledUl>
            </StyledMain>
    )
}