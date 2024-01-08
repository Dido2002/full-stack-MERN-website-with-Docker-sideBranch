import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { Marginer } from "../marginer";
import { Button } from "../button";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
  faCalendarAlt,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import { SCREENS } from "../responsive";

const CardContainer = styled.div`
  min-height: 4.3em;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
        flex
        justify-center
        items-center
        rounded-md
        bg-white
        pt-1
        pb-1
        pr-2
        pl-2
        md:pt-2
        md:pb-2
        md:pl-10
        md:pr-10
        
    `};
`;

const ItemContainer = styled.div`
  ${tw`
        flex    
        relative
    `};
`;

const Icon = styled.span`
  ${tw`
        text-red-500
        fill-current
        text-xs
        md:text-base
        mr-1
        md:mr-3

    `};
`;

const Name = styled.span`
margin-top:0.1rem;
  ${tw`
        text-gray-500
        text-xs 
        md:text-sm
        cursor-pointer
        select-none
    `};
`;

const SmallIcon = styled.span`
    padding-left:0.5rem;
    ${tw`
        text-gray-700
        fill-current
        text-xs
        md:text-base
        ml-1
    `}
`;

const LineSeparator = styled.span`
  width: 2px;
  height: 45%;
  ${tw`
        bg-gray-300
        mr-2
        ml-2
        md:mr-5
        md:ml-5
    `};
`;

const DateCalendar = styled(Calendar)`
  position: absolute;
  user-select:none;
  border-radius: 5px;
  max-width: none;
  top: 4em;
  left: -4rem;
  border: unset;
  -webkit-box-shadow: 10px 10px 5px 0px rgba(224, 58, 58, 1);
  -moz-box-shadow: 10px 10px 5px 0px rgba(224, 58, 58, 1);
  box-shadow: 0px 2px 12px -1px rgba(224, 58, 58, 1);


  @media(min-width: ${SCREENS.md}){
    top:3.5em;
    left:-2.4em;
  }
`;

export function BookCard() {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [startCalendarOpen, setStartCalendarOpen] = useState(false);
  const [returnDate, setReturnDate] = useState<Date>(new Date());
  const [isReturnCalendarOpen, setReturnCalendarOpen] = useState(false);

  const toggleStartDateCalendar = () => {
    setStartCalendarOpen(!startCalendarOpen);
    if(isReturnCalendarOpen) setReturnCalendarOpen(false);
  };


  const toggleReturnDateCalendar = () => {
    setReturnCalendarOpen(!isReturnCalendarOpen);
    if(startCalendarOpen) setStartCalendarOpen(false);
  };

  return (
    <CardContainer>
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt}></FontAwesomeIcon>
        </Icon>
        <Name onClick={toggleStartDateCalendar}>Pick Up Date</Name>
        <SmallIcon>
            <FontAwesomeIcon icon={startCalendarOpen ? faCaretUp : faCaretDown}/>
        </SmallIcon>
        {startCalendarOpen && (
          <DateCalendar value={startDate} onChange={setStartDate as any} />
        )}
      </ItemContainer>
      <LineSeparator></LineSeparator>
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt}></FontAwesomeIcon>
        </Icon>
        <Name onClick={toggleReturnDateCalendar}>Return Date</Name>
        <SmallIcon>
            <FontAwesomeIcon icon={isReturnCalendarOpen ? faCaretUp : faCaretDown}/>
        </SmallIcon>
        {isReturnCalendarOpen && (
          <DateCalendar value={returnDate} onChange={setReturnDate as any} />
        )}
      </ItemContainer>
      <Marginer margin="2em" direction="horizontal" />
      <Button text="Book Your Ride" />
    </CardContainer>
  );
}
