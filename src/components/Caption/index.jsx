import { CircleSpace, CircleColor, CircleText } from "./style";
export default function Caption({bgColor, borderColor, text}){
    return (
        <CircleSpace>
            <CircleColor 
                bgColor={bgColor}
                borderColor={borderColor}
            />
            <CircleText>
                {text}
            </CircleText>
        </CircleSpace>
    );
}