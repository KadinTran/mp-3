import {useLocation} from "react-router-dom";
// Found useLocation function to find what path I am on https://reactrouter.com/api/hooks/useLocation

export default function Header(){
    const location = useLocation();
    let page = "";
    let blurb = "";

    switch (location.pathname){
        case "/":
            page = "Kadin Tran";
            blurb = "Resume Page";
            break;
        case "/education":
            page = "Education";
            blurb = "Resume Page";
            break;
        case "/professional":
            page = "Professional Experience";
            blurb = "Previous and Current Employment";
            break;
        case "/volunteering":
            page = "Volunteering Experience";
            blurb = "Volunteering I Have Done";
            break;
        case "/skills":
            page = "Skills";
            blurb = "Technical Knowledge";
            break;
        case "/projects":
            page = "Projects";
            blurb = "Projects I've Completed";
            break;
    }
    return(
        <header>
            <h1> {page} </h1>
            <p> {blurb} </p>
        </header>
    )
}
