import BrooklineLogo from '../assets/brookline.jpeg'

export default function Volunteering() {
    return (
        <main>
            <img src={BrooklineLogo} alt="Brookline Food Pantry's Logo"/>
            <ul>
                <li className="list"> Volunteer | Chinatown Main Street
                    <p className="desc"> Packed and carried groceries to be sold every other Saturday </p>
                </li>
                <li className="list"> Student Praefect | Boston Latin School Praefecting
                    <p className="desc"> Helped school faculty with any administrative tasks during study periods </p>
                </li>
                <li className="list"> Volunteer | Brookline Food Pantry
                    <p className="desc"> Packing and carrying groceries in a food pantry every Friday </p>
                </li>
            </ul>
        </main>
    )
}