import { Call, Facebook, Instagram, LocationOn, MailOutline, Pinterest, Twitter } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import payment from "../assets/images/payment.png"

const Container = styled.div`
    display: flex;`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1``
const Description = styled.p`
    margin: 20px 0px;`


const SocialContainer = styled.div`
    display: flex;

`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;    
    justify-content: center;
    margin-right: 20px;
    
`



const Center = styled.div`
    flex: 1;
    padding: 20px;
`

const Title = styled.h3`
    margin-bottom: 20px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`




const Right = styled.div`
    flex: 1;
    padding: 20px;
`
const ContactItem = styled.div``

const Payment = styled.img``

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>FM.</Logo>

                <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor turpis eget est cursus, vel aliquam arcu pharetra. Integer gravida bibendum lectus, eu fermentum elit vehicula ut. Nulla facilisi.</Description>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>

            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Men's Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Whishlist</ListItem>
                    <ListItem>Terms</ListItem>

                </List>

            </Center>
            <Right>
                <Title>
                    Comtact
                </Title>
                <ContactItem>
                    <LocationOn /> 622 Dixie Path, South Tobinchester 98336
                </ContactItem>
                <ContactItem>
                    <Call /> +1 234 56 78
                </ContactItem>
                <ContactItem>
                    <MailOutline />contact@mmfarid.dev
                </ContactItem>
                <Payment src={payment} />
            </Right>
        </Container>
    )
}

export default Footer