import {MsgSpace, MsgText} from './style';

export default function TopMsg({text, textColor}){
    return (
        <MsgSpace>
            <MsgText textColor={textColor}> {text} </MsgText>
        </MsgSpace>
    );
}