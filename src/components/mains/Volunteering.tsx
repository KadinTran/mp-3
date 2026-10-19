import BrooklineLogo from '../../assets/brookline.jpeg'
import {Lists, StyledImg, StyledMain, StyledP, StyledUl} from '../Styles.ts'

export default function Volunteering() {
    return (
        <StyledMain>
            <StyledImg src={BrooklineLogo} alt="Brookline Food Pantry's Logo"/>
            <StyledUl>
                <Lists className="list"> Volunteer | Chinatown Main Street
                    <StyledP className="desc"> Packed and carried groceries to be sold every other Saturday </StyledP>
                </Lists>
                <Lists className="list"> Student Praefect | Boston Latin School Praefecting
                    <StyledP className="desc"> Helped school faculty with any administrative tasks during study periods </StyledP>
                </Lists>
                <Lists className="list"> Volunteer | Brookline Food Pantry
                    <StyledP className="desc"> Packing and carrying groceries in a food pantry every Friday </StyledP>
                </Lists>
            </StyledUl>
        </StyledMain>
    )
}