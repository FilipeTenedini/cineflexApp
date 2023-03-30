import Caption from "../../components/Caption";
import { c } from "../../constants/colors";
import { CaptionArea } from "./style";

export default function Captions(){
    return(
        <CaptionArea>
            <Caption 
                bgColor={c.selectedBtn}
                borderColor={c.selectedBtnContour}
                text={'Selecionado'}
            />
            <Caption 
                bgColor={c.fullLightColor}
                borderColor={c.midLightColor}
                text={'Disponível'}
            />
            <Caption 
                bgColor={c.unavailableBtn}
                borderColor={c.unavailableBtnCountour}
                text={'Indisponível'}
            />
        </CaptionArea>
    );
}