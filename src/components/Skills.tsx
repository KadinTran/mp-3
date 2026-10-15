import Gopher from '../assets/gopher.jpeg'
import Ocaml from '../assets/ocaml.jpeg'
import Web from '../assets/web.jpeg'

export default function Skills() {
    return (
        <main>
            <img src={Gopher} alt="Golang's Logo"/>
            <img src={Ocaml} alt="OCaml's Logo"/>
            <img src={Web} alt="HTML, CSS and JavaScript's Logo"/>
            <ul>
                <li> Intermediate knowledge of Python, Java, C, OCaml, HTML, CSS, and Golang coding</li>
                <li> Proficient in Google Suite</li>
                <li> Proficient in MacOS and Windows OS</li>
                <li> Introductory knowledge of Adobe Photoshop</li>
                <li> Organized, efficient, productive</li>
            </ul>
        </main>
    )
}