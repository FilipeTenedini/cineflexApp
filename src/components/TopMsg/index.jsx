import {MsgSpace, MsgText} from './style';

export default function TopMsg({text}){
    return (
        <MsgSpace>
            <MsgText> {text} </MsgText>
        </MsgSpace>
    );
}