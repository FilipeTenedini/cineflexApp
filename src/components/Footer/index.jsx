import { FooterArea, FilmImage, FilmPic, FilmInfos } from "./style";

export default function Footer({picture, name, hours}){
    return (
        <FooterArea>
            <FilmImage>
                <FilmPic src={picture} alt={name} />
            </FilmImage>
            <FilmInfos>
                <span>
                {name}
                </span>
                {hours && 
                    <div>
                        {hours}
                    </div>
                }
            </FilmInfos>
        </FooterArea>
    );
}