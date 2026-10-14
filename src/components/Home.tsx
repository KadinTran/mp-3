import wu from '../assets/with_wu2.jpeg'

export default function Education() {
    return (
        <body>
            <div id ="page-wrapper">
                <header>
                    <h1>Kadin Tran</h1>
                    <p> Resume Page </p>
                </header>

                <main>
                    <h3> Home  </h3>
                    <img id = "withwu" src = {wu}
                         alt = "Me with Mellissa Gilliam and Mayor Wu at the Community Scholars Awards Ceremony">
                    </img>
                    <p> Hello, I am Kadin (or Kabrandin) Tran! I am currently a BU student getting a Bachelor of Arts in
                        Computer Science for Computer Science. I enjoy coding, model kit building, cooking, and of
                        course eating. Some CS classes that I have taken or am taking at BU are CS 320: Intro to Programming
                        Languages and CS 303: Web App Development. This is a digital website for my resume made for CS303!
                    </p>
                    <footer>
                        <p> All Rights Reserved by Kabrandin Tran <a href = ""> Credits </a> &copy; </p>
                    </footer>
                </main>
            </div>
        </body>

    )
}