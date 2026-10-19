import {useState} from "react";
import Neutral from "../../assets/neutral.jpeg";
import Cheer from "../../assets/cheer.jpeg";
import Beast from "../../assets/beast.jpeg";
import Nervous from "../../assets/nervous.jpeg";
import Sad from "../../assets/sad.jpeg";
import Happy from "../../assets/happy.jpeg";
import {StyledH3, StyledMain, StyledP} from "../Styles.ts";
import styled from "styled-components";

const Judgement = styled.img`
    display: flex;
    margin: auto;
    max-width: 40%;
`;
const StyledButtons = styled.button`
    font-size: calc(2px + 1vw);
    padding: 2% 2%;
    margin: 1% 0.5%;
    border: solid #76C0EC 2px;
    border-radius: 1.5vw;
    @media screen and (max-width: 750px){
        font-size: calc(2px + 2vw);
    }
`;
const Calculator = styled.div`
    width: 70%;
    border: solid #3368A0 4px;
    border-radius: 1.5vw;
    background-color: #EAE2D6;
    margin: 2% auto;
    padding: 1% 1%;
`;
const Output = styled.h3`
    font-size: calc(2px + 2.5vw);
    line-height: 150%;
`;
const InputTitle = styled.p`
    font-size: calc(2px + 1.5vw);
    line-height: 170%;
    @media screen and (max-width: 750px) {
        padding: 0;
        margin: 1% 0;
        font-size: calc(2px + 1.9vw);
    }
`;
const InputBox = styled.input`
    font-size: calc(2px + 1.5vw);
    @media screen and (max-width: 750px) {
        display: inline;
        margin: 0;
    }
`;
const InputLabel = styled.label`
    @media screen and (max-width: 750px) {
        margin: 0;
    }
`;
export default function Projects() {
    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const [res, setRes] = useState("");
    const [judgement, setJudgement] = useState(Neutral);
    const [alt, setAlt] = useState("a blue emoji with a neutral smile");
    const [negative, setNegative] = useState(false);

    function doMath(operator:string) {
        const f = Number(first);
        const s = Number(second);
        let output = 0;

        switch (operator){
            case "+":
                output = f + s;
                break;
            case "-":
                output = f - s;
                break;
            case "*":
                output = f * s;
                break;
            case "/":
                output = f / s;
                break;
            case "**":
                {
                    output = 1;
                    const abs = Math.abs(s);
                    for(let i = 0; i < abs; i++){
                        output *= f;
                    }
                    output = s < 0 ? (1 / output) : output;
                }
                break;
        }
        display(output);
    }
    function clear(){
        setFirst("");
        setSecond("");
        setRes("");
        setJudgement(Neutral);
        setAlt("a blue emoji with a neutral smile");
        setNegative(false);
    }
    function display(output: number){
        setRes(String(output));

        if (output > 1000) {
            setJudgement(Cheer);
            setAlt("a blue cheering emoji");
        } else if (output === 67) {
            setJudgement(Beast);
            setAlt("a blue angry beast emoji");
        } else if (output === 0) {
            setJudgement(Nervous);
            setAlt("a blue nervous emoji");
        } else if (output < 0) {
            setNegative(true);
            setJudgement(Sad);
            setAlt("a blue sad emoji");
        } else {
            setNegative(false);
            setJudgement(Happy);
            setAlt("a blue emoji with thumbs up");
        }
    }

    return (
        <StyledMain>
            <StyledH3> Reactive Calculator </StyledH3>
            <StyledP> A calculator that will react to your output</StyledP>
            <Calculator>
                <StyledH3> <Output className={negative ? "negative" : ""}> Result: {res} </Output> </StyledH3>
                <InputTitle>First Number:
                    <InputLabel htmlFor = "first_number"> </InputLabel>
                    <InputBox
                        id="first_number"
                        type="text"
                        value = {first}
                        onChange = {(e) => setFirst(e.target.value)}
                    />
                </InputTitle>
                <InputTitle> Second Number:
                    <InputLabel htmlFor="second_number"> </InputLabel>
                    <InputBox
                        id="second_number"
                        type="text"
                        value={second}
                        onChange={(e) => setSecond(e.target.value)}
                    />
                </InputTitle>
                <StyledButtons onClick={() => doMath("+")}>+</StyledButtons>
                <StyledButtons onClick={() => doMath("-")}>-</StyledButtons>
                <StyledButtons onClick={() => doMath("*")}>*</StyledButtons>
                <StyledButtons onClick={() => doMath("/")}>/</StyledButtons>
                <StyledButtons onClick={() => doMath("**")}>Power</StyledButtons>
                <StyledButtons onClick={() => clear()}>Clear</StyledButtons>

                <Judgement src={judgement} alt={alt}/>

            </Calculator>
        </StyledMain>
    )
}