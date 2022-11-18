import styled, { css } from "styled-components";
import React from "react";
import { ReactComponent as DotIcon } from "../images/dot-svgrepo-com.svg";

export const StyledElement = styled.li`
  display: grid;
  position: relative;
  border-radius: var(--offer-border-radius);
  /* box-shadow: 0 10px 30px -20px var(--primary-txt); */
  box-shadow: var(--box-shadow);
  padding: calc(var(--inner-padding) * 2) var(--inner-padding)
    var(--inner-padding);
  background-color: white;
`;

export const StyledBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 5px;
  border-top-left-radius: var(--offer-border-radius);
  border-bottom-left-radius: var(--offer-border-radius);
  background-color: var(--primary-txt);
`;

export const StyledBorder = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--secondary-txt);
  margin: var(--inner-padding) 0;
`;

export const StyledLogoContainer = styled.div`
  position: absolute;
  left: var(--inner-padding);
  top: calc(var(--logo-size) * (-0.5));
  height: var(--logo-size);
  width: var(--logo-size);

  img {
    height: 100%;
    width: 100%;
  }
`;

export const StyledInfo = styled.div`
  float: left;
  color: var(--filter-tablets);
  font-size: 1.3em;
  line-height: 1.5;
`;

export const StyledCompanyName = styled.h3`
  display: inline-block;
  margin-right: var(--inner-padding);
  color: var(--primary-txt);
  font: var(--h3-font-size);
  font-weight: 700;
  font-size: var(--h3-font-size);
`;

export const StyledPosition = styled.h2`
  color: var(--titles);
  font-size: var(--h2-font-size);
  line-height: 2.2;
`;

const AttributeStyles = css`
  padding: 5px 7px;
  margin: 0 3px;
  border-radius: calc((var(--h3-font-size) + 10px) / 2);
  text-transform: uppercase;
  font-weight: 700;
`;

export const StyledFeatured = styled.span`
  ${AttributeStyles}
  background-color: var(--titles);
`;

export const StyledNew = styled.span`
  ${AttributeStyles}
  background-color: var(--primary-txt);
`;

export const StyledDetailsContainer = styled.div`
  color: var(--secondary-txt);
`;

export const StyledDetail = styled.span`
  font-size: var(--span-font-size);
`;

export const StyledDotIcon = () => {
  const style = {
    fill: "var(--secondary-txt)",
    height: "2px",
    width: "2px",
    margin: "2px 3px",
  };
  return <DotIcon style={style} />;
};

export const StyledFiltersContainer = styled.div`
  display: flex;
  row-gap: calc(var(--filter-margin) * 1.5);
  flex-wrap: wrap;
`;

export const StyledFilter = styled.span`
  height: var(--close-btn-size);
  margin: 0 var(--filter-margin);
  padding: 0 10px;
  border-radius: var(--filter-border-radius);
  background-color: var(--filter-tablets);
  color: var(--primary-txt);
  font-size: var(--span-font-size);
  font-weight: 700;
  line-height: var(--close-btn-size);
`;
