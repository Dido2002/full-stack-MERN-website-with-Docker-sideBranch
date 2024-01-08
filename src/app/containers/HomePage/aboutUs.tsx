import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive";
import JeepImg from "../../../assets/images/jeep.png";

const AboutUsContainer = styled.div`
  ${tw`
        w-full
        flex
        flex-wrap
        items-center
        pt-4
        pb-4
        pr-7
        pl-7
        pr-7
        md:pl-0
        md:pr-0
        bg-white
    `};
`;

const CarContainer = styled.div`
  width: auto;
  height: 15em;
  margin-left: 2em;
  img {
    width: auto;
    height: 100%;
  }

  @media (min-width: ${SCREENS.md}) {
    height: 28em;
  }

  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
  }
`;

const InfoContainer = styled.div`
  ${tw`
        md:w-1/2
        flex
        flex-col
        md:ml-20
    `};
`;

const Title = styled.h1`
  ${tw`
        text-black
        text-2xl
        md:text-5xl
        font-extrabold
        md:font-black
        md:leading-normal
    `}
`;

const InfoText = styled.p`
  ${tw`
        md:max-w-2xl
        text-sm
        md:text-base
        text-gray-500
        mt-4
        font-normal
    `};
`;

export function AboutUs() {
  return (
    <AboutUsContainer>
      <CarContainer>
        <img src={JeepImg} />
      </CarContainer>
      <InfoContainer>
        <Title>Fell The Best Experience With Our Rental Deals</Title>
        <InfoText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum tempora
          distinctio similique quibusdam, sint ullam corporis facilis illum
          sequi nesciunt animi molestiae quod laudantium molestias, veniam earum
          odio aperiam dolores ducimus esse. Vel aut officia modi, natus minus
          error harum fuga et maiores assumenda iste neque labore doloribus id
          velit? odio aperiam dolores ducimus esse. Vel aut officia modi, natus
          minus error harum fuga et maiores assumenda iste neque labore
          doloribus id velit? odio aperiam dolores ducimus esse. Vel aut officia
          modi, natus minus error harum fuga et maiores assumenda iste neque
          labore doloribus id velit?
        </InfoText>
      </InfoContainer>
    </AboutUsContainer>
  );
}
