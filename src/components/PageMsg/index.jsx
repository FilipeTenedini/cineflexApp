import {MsgSpace, MsgText} from './style';

export default function PageMsg({text}){
    return (
        <MsgSpace>
            <MsgText> {text} </MsgText>
        </MsgSpace>
    );
}