import React from 'react'
import styled from 'styled-components';
import { Fade } from 'react-reveal';
const Section = ({ title, subTitle, leftBtnText, rightBtnText, backgroundImg }) => {
    return (
        <Container backgroundImg={backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{subTitle}</p>
                </ItemText>
            </Fade>

            <FooterBox>
                <ButtonContainer>
                    <Fade left>
                        {leftBtnText !== "" && <LeftBtn>
                            {leftBtnText}
                        </LeftBtn>}
                    </Fade>
                    <Fade right>
                        {rightBtnText !== "" && <RightBtn>
                            {rightBtnText}
                        </RightBtn>}
                    </Fade>
                </ButtonContainer>
                <DownArrow src="/images/down-arrow.svg"></DownArrow>
            </FooterBox>

        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    ${'' /* background: red; */}
    background-size: cover; 
    background-position: center;
    background-image: ${({ backgroundImg }) => `url('/images/${backgroundImg}')`};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`
const FooterBox = styled.div``
const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    @media(max-width: 768px){
        flex-direction: column;
    }
`
const LeftBtn = styled.div`
    background-color: #171A20CC;
    color: #FFFFFF;
    text-transform: uppercase;
    height: 40px;
    border-radius: 25px;
    width: 250px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 10px;
    @media(max-width: 768px){
        flex-direction: column;
        width: 65vw;
    }
`
const RightBtn = styled(LeftBtn)`
    background-color: #FFFFFFA6;
    color: #393c41;
`
const DownArrow = styled.img`
    height: 40px;
    ${'' /* overflow-x: hidden; */}
    animation: moveArrow infinite 1.5s;

`
export default Section
