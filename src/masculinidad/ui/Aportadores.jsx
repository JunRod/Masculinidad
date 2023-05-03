import styled from "styled-components"
import { devices } from "../global/valores"

const Title = styled.h3`
    font-family: ${props => props.theme.fontBoldItalic};
    font-weight: ${props => props.theme.weightBoldItalic};
    font-style: ${props => props.theme.styleBoldItalic};
    font-size: 4vh;
    color: ${props => props.theme.secundario};
    margin: 0;
    letter-spacing: 2vh;
    text-align: center;

   @media ${devices.mobileS} {
    font-size: 20px;
    text-align: center;
    word-wrap: break-word;
    width: 320px;
    letter-spacing: 1.7vh;
  }
  
  @media ${devices.tablet} {
    font-size: 4vh;
    width: initial;
    letter-spacing: 2vh;
  }

  @media ${devices.laptop} {
    font-size: 4vh;
    width: initial;
    letter-spacing: 2vh;
  }

  @media ${devices.laptopL} {
    font-size: 4vh;
    width: initial;
    letter-spacing: 2vh;
  }
`

const PositionsFlex = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    gap: 6vh;
    font-family: ${props => props.theme.fontMediumItalic};
    font-weight: ${props => props.theme.weightMediumItalic};
    font-style: ${props => props.theme.styleMediumItalic};
    align-items: center;

    @media ${devices.mobileS} {
    flex-direction: column;
    gap: 0px;
  }
  
  @media ${devices.tablet} {
    flex-direction: row;
    gap: 6vh;
  }

  @media ${devices.laptop} {
    flex-direction: row;
    gap: 6vh;
  }

  @media ${devices.laptopL} {
    flex-direction: row;
    gap: 6vh;
  }


`

const PositionOne = styled.div`
    margin-top: 3vh;

    @media ${devices.mobileS} {
        order: 1;
        margin-top: 0;
  }
  
  @media ${devices.tablet} {
    order: 0;
  }

  @media ${devices.laptop} {
    margin-top: 3vh;
  }

  @media ${devices.laptopL} {
    margin-top: 3vh;
  }


`

const MarcadorOne = styled.i`
    z-index: 10;
    position: relative;
    font-size: 3.5vh;
    color: ${props => props.theme.secundario};
    font-family: ${props => props.theme.fontRegular};
    font-weight: ${props => props.theme.weightRegular};
    font-style: ${props => props.theme.styleRegular};
    background-color: ${props => props.theme.primario};
    border-radius: 2vh;
    padding: 1.5vh 2.5vh;
    top: 5vh;
    left: 17vh;
`

const ContainerImgOne = styled.div`
    position: relative;
    height: 35vh;
    width: 25vh;
`

const ImageOne = styled.img`
    height: 100%;
    border-radius: 2vh;
    width: 100%;
`

const DescripcionOne = styled.div`
    margin-top: 1.2vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 0.8vh;
    color: ${props => props.theme.secundario};
    font-family: ${props => props.theme.fontMediumItalic};
    font-weight: ${props => props.theme.weightMediumItalic};
    font-style: ${props => props.theme.styleMediumItalic};
`

const NameOne = styled.div`
    font-size: 2.7vh;
    letter-spacing: 1.2vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    &::after {
        position: absolute;
        content: "";
        padding: 2vh 10vh;
        background-color: ${props =>  {
            if(props.active) return props.theme.secundario
        }};
        mix-blend-mode: difference;
        border-radius: 1vh;
    }
`

const AportacionesOne = styled.div`
    font-size: 2.5vh;
    font-family: ${props => props.theme.fontRegular};
    font-weight: ${props => props.theme.weightRegular};
    font-style: ${props => props.theme.styleRegular};
`

const MarcadorTwo = styled.i`
    z-index: 10;
    position: relative;
    font-size: 4vh;
    color: ${props => props.theme.secundario};
    font-family: ${props => props.theme.fontRegular};
    font-weight: ${props => props.theme.weightRegular};
    font-style: ${props => props.theme.styleRegular};
    background-color: ${props => props.theme.primario};
    border-radius: 2vh;
    padding: 2vh 3vh;
    top: 5vh;
    left: 22vh;
`

const ContainerImagenTwo = styled.div`
    position: relative;
    height: 40vh;
    width: 30vh;
`

const ImagenTwo = styled.img`
    height: 100%;
    border-radius: 2vh;
    width: 100%;
`

const PositionThree = styled.div`
    margin-top: 7vh;

    @media ${devices.mobileS} {
        margin-top: 0;

        order: 2;
  }
  
  @media ${devices.tablet} {
    order: 0;
    margin-top: 3vh;

  }

  @media ${devices.laptop} {
    margin-top: 3vh;

  }

  @media ${devices.laptopL} {
    margin-top: 3vh;

  }
  
`

const MarcadorThree = styled.i`
    z-index: 10;
    position: relative;
    font-size: 3vh;
    color: ${props => props.theme.secundario};
    font-family: ${props => props.theme.fontRegular};
    font-weight: ${props => props.theme.weightRegular};
    font-style: ${props => props.theme.styleRegular};
    background-color: ${props => props.theme.primario};
    border-radius: 2vh;
    padding: 1.5vh 2.5vh;
    top: 4.2vh;
    left: 13vh;
`

const ContainerImgThree = styled.div`
    position: relative;
    height: 28vh;
    width: 20vh;
`

const ImageThree = styled.img`
    height: 100%;
    border-radius: 2vh;
    width: 100%;
`


export const Aportadores = () => {
    return (
        <>
            <Title>TOP APORTADORES</Title>

            <PositionsFlex>
                <PositionOne >
                    <MarcadorOne>2 °</MarcadorOne>
                    <ContainerImgOne >
                        <ImageOne
                            src="/images/photo2.png" 
                            alt="photo2.jpg"
                        />
                    </ContainerImgOne>
                    <DescripcionOne >
                        <NameOne>
                            Steve Jobs
                        </NameOne>
                        <AportacionesOne>
                            7 Aportaciones
                        </AportacionesOne>
                    </DescripcionOne>
                </PositionOne>

                <div>
                    <MarcadorTwo>
                        1 °
                    </MarcadorTwo>
                    <ContainerImagenTwo>
                        <ImagenTwo
                            className="image_one"
                            src="/images/photo1.png" alt="photo1.jpg"
                        />
                    </ContainerImagenTwo>
                    <DescripcionOne>
                        <NameOne
                             active={true}
                        >
                            JuNRod
                        </NameOne>
                        <AportacionesOne>
                            7 Aportaciones
                        </AportacionesOne>
                    </DescripcionOne>
                </div>

                <PositionThree>
                    <MarcadorThree>3 °</MarcadorThree>
                    <ContainerImgThree>
                        <ImageThree 
                        src="/images/photo3.jpg" alt="photo3.jpg"
                         />
                    </ContainerImgThree>

                    <DescripcionOne>
                        <NameOne >
                            Bill Gates
                        </NameOne>
                        <AportacionesOne>
                            4 Aportaciones
                        </AportacionesOne>
                    </DescripcionOne>
                </PositionThree>
            </PositionsFlex>
        </>
    )
}
