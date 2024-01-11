import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { HomePage } from "../../containers/HomePage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterContainer = styled.div`
  background-color: #1d2124;
  ${tw`
        flex
        flex
        min-w-full
        pt-10
        md:pt-16
        items-center
        justify-center
    `};
`;

const InnerContainer = styled.div`
  ${tw`
        flex
        flex-wrap
        max-w-screen-2xl
        h-full
        min-w-full
    `};
`;


const AboutContainer = styled.div`
  ${tw`
        flex
        flex-col
        md:mr-16
        mr-2
        pl-10
        pr-10
    `};
`;

const AboutText = styled.p`
  ${tw`
        text-white
        text-sm
        font-normal
        max-w-xs
        leading-5
        mt-2
    `};
`;

const SectionContainer = styled.div`
  ${tw`
        flex
        flex-col
        mr-2
        w-full
        md:w-auto
        pl-10
        pr-10
        md:mr-16
        md:pl-3
        md:pr-3
        mt-7
        md:mt-0
    `};
`;

const LinksList = styled.ul`
  ${tw`
        outline-none
        list-none
        flex
        flex-col
        
    `};
`;

const ListItem = styled.li`
  ${tw`
    mb-3
    `};

  & > a {
    ${tw`
            text-sm
            text-white
            transition-all
            hover:text-gray-200
        `};
  }
`;

const HeaderTitle = styled.h3`
  ${tw`
    text-2xl
    font-bold
    text-white
    mb-3
    `};
`;

const RedIcon = styled.span`
  ${tw`
    w-9
    h-9
    rounded-full
    flex
    items-center
    justify-center
    text-white
    text-base
    bg-red-500
    mr-2
  `};
`;

const HorizontalSection = styled.div`
  ${tw`
    flex
    items-center

  `};
`;

const SmallText = styled.h6`
  ${tw`
    text-sm
    text-white
  `};
`;

export function Footer() {
  return (
    <FooterContainer>
      <InnerContainer>
        <AboutContainer>
          <Logo color="white" bgColor="dark" />
          <AboutText>
            Your car is car renting and selling company located in many
            countries across the world which has high quality cars and top rated
            service.
          </AboutText>
        </AboutContainer>
        <SectionContainer>
          <HeaderTitle>Our Links</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="#">Home</a>
            </ListItem>
            <ListItem>
              <a href="#">About Us</a>
            </ListItem>
            <ListItem>
              <a href="#">Services</a>
            </ListItem>
            <ListItem>
              <a href="#">Models</a>
            </ListItem>
            <ListItem>
              <a href="#">Blog</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Other Links</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="#">FAQ</a>
            </ListItem>
            <ListItem>
              <a href="#">Contact Us</a>
            </ListItem>
            <ListItem>
              <a href="#">Support</a>
            </ListItem>
            <ListItem>
              <a href="#">Privacy</a>
            </ListItem>
            <ListItem>
              <a href="#">Term & Conditions</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Call Now!</HeaderTitle>
          <HorizontalSection>
            <RedIcon>
              <FontAwesomeIcon icon={faPhoneAlt} />
            </RedIcon>
            <SmallText>+91 555-244-9422</SmallText>
          </HorizontalSection>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Mail</HeaderTitle>
          <HorizontalSection>
            <RedIcon>
              <FontAwesomeIcon icon={faEnvelope} />
            </RedIcon>
            <SmallText>info@yourcar.com</SmallText>
          </HorizontalSection>
        </SectionContainer>
      </InnerContainer>
    </FooterContainer>
  );
}
