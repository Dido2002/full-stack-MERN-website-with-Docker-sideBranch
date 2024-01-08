import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faCarSide,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`]
    ${tw`
        w-full 
        flex
        flex-col
        items-center
        pt-3
        pb-3
        lg:pt-6
        lg:pb-6

    `}
`;

const Title = styled.h2`
  ${tw`
        text-3xl
        lg:text-5xl
        text-black
        font-extrabold
        text-center
    `};
`;

const StepsContainer = styled.div`
  ${tw`
        flex
        justify-evenly
        flex-wrap
        mt-7
        lg:mt-16
    `};
  
`;

const StepContainer = styled.div`
  -webkit-box-shadow: 10px 10px 5px 0px rgba(224, 58, 58, 1);
  -moz-box-shadow: 10px 10px 5px 0px rgba(224, 58, 58, 1);
  box-shadow: 0px 2px 12px -1px rgba(224, 58, 58, 1);
  ${tw`
        w-72
        rounded-md
        flex
        flex-col
        h-48
        md:w-80
        items-center
        transition-colors
        hover:text-red-500
        m-3
    `};
`;

const Step = styled.div`
  ${tw`
        flex
        rounded-lg
        items-center
        justify-center
        p-6
    `};
`;

const StepTitle = styled.h4`
  ${tw`
        text-black
        text-lg
        font-semibold
        mt-1
    `};
`;

const StepDescription = styled.p`
  ${tw`
        w-10/12
        text-xs
        md:text-sm
        text-center
        text-gray-600
    `};
`;

const StepIcon = styled.span`
  ${tw`
        text-red-500
        text-5xl
    `};
`;

export function BookingSteps() {
  return (
    <Container>
      <Title>Our Working Steps</Title>
      <StepsContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faMapMarkedAlt}></FontAwesomeIcon>
            </StepIcon>
          </Step>
          <StepTitle>Choose Location</StepTitle>
          <StepDescription>
            Find the nearest Yourcar point and book your car.
          </StepDescription>
        </StepContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faCalendarAlt}></FontAwesomeIcon>
            </StepIcon>
          </Step>
          <StepTitle>Pick-Up Date</StepTitle>
          <StepDescription>
            Pickup the best date to rent a car for you.
          </StepDescription>
        </StepContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faCarSide}></FontAwesomeIcon>
            </StepIcon>
          </Step>
          <StepTitle>Book Your Car</StepTitle>
          <StepDescription>
            Book your nice car with ease in one single click.
          </StepDescription>
        </StepContainer>
      </StepsContainer>
    </Container>
  );
}
