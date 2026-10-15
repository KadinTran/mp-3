import BUlogo from '../assets/Boston-University-Logo.jpeg'
import BLSlogo from '../assets/bls_logo.jpeg'


export default function Education() {
    return (
        <main>
                <img src={BUlogo} alt="Boston University's Logo"/>
                <img src={BLSlogo} alt="Boston Latin School's Logo"/>
                <ul>
                    <li className="list"> Boston Latin School
                        <p className="desc"> College preparatory curriculum </p>
                        <p className="desc"> AP Classes include: </p>
                        <ul>
                            <li className="desc"> AP Computer Science</li>
                            <li className="desc"> AP Calculus BC</li>
                            <li className="desc"> AP Physics Mechanics</li>
                            <li className="desc"> AP Psychology</li>
                        </ul>
                    </li>
                    <li className="list"> University of Massachusetts Boston
                        <p className="desc"> 2024 Fall and 2025 Spring Semester </p>
                    </li>
                    <li className="list"> Boston University
                        <p className="desc"> Expected Graduation 2028 </p>
                        <p className="desc"> Pursuing a Bachelor of Arts in Computer Science </p>
                    </li>
                </ul>
            </main>
    )
}