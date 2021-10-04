import React from 'react'
import styled from 'styled-components'
import Section from './Section'
const Home = () => {
    return (
        <Container>
            <Box>
                <Section title="Model S" subTitle="Order Online for Touchless Delivery" leftBtnText="Custom Order" rightBtnText="Existing Inventory" backgroundImg="model-s.jpg" />
            </Box>
            <Box>
                <Section title="Model Y" subTitle="Order Online for Touchless Delivery" leftBtnText="Custom Order" rightBtnText="Existing Inventory" backgroundImg="model-y.jpg" />
            </Box>
            <Box>
                <Section title="Model 3" subTitle="Order Online for Touchless Delivery" leftBtnText="Custom Order" rightBtnText="Existing Inventory" backgroundImg="model-3.jpg" />
            </Box>
            <Box>
                <Section title="Model X" subTitle="Order Online for Touchless Delivery" leftBtnText="Custom Order" rightBtnText="Existing Inventory" backgroundImg="model-x.jpg" />
            </Box>
            <Box>
                <Section title="Solar Panels" subTitle="Lowest Cost Solar Panels in America" leftBtnText="Order Now" rightBtnText="Learn More" backgroundImg="solar-panel.jpg" />
            </Box>
            <Box>
                <Section title="Solar Roof" subTitle="Produce Clean Energy From Your Roof" leftBtnText="Order Now" rightBtnText="Learn More" backgroundImg="solar-roof.jpg" />
            </Box>
            <Box>
                <Section title="Accessories" subTitle="" leftBtnText="Shop Now" rightBtnText="" backgroundImg="accessories.jpg" />
            </Box>


        </Container>
    )
}

const Container = styled.div`
    height: 100vh;
    scroll-snap-type: y mandotary;
    overflow-y: scroll;
`
const Box = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    scroll-snap-align: start;
`
export default Home;
