import styled from "styled-components";
import { StyledFilterBtn } from "../JobOffer/style";

export const StyledFilterPanel = styled.div`
  transform: translateY(-25px);
  width: calc(100% - 2 * var(--outer-margin));
  display: grid;
  grid-template-columns: 1fr auto;
  margin: 0 var(--outer-margin);
  border-radius: var(--offer-border-radius);
  box-shadow: var(--box-shadow);
  padding: var(--inner-padding);
  background-color: #fff;
`;

export const StyledFilterList = styled.ul`
  display: flex;
  row-gap: 10px;
  flex-wrap: wrap;
`;

export const StyledElement = styled.li`
  display: flex;
  align-items: center;
  margin: 0 10px 0 0;
`;

export const StyledRemoveBtn = styled.button`
  position: relative;
  display: block;
  height: var(--close-btn-size);
  width: var(--close-btn-size);
  background-color: var(--primary-txt);
  border: none;
  border-bottom-right-radius: var(--filter-border-radius);
  border-top-right-radius: var(--filter-border-radius);
  transition: 0.2s;
  :hover {
    cursor: pointer;
    background-color: var(--titles);
  }

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const StyledActiveFilter = styled(StyledFilterBtn)`
  height: var(--close-btn-size);
  margin: 0;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  line-height: var(--close-btn-size);
  font-size: var(--span-font-size);
`;

export const StyledClearBtn = styled.button`
  grid-area: 0/1/1/2;
  align-self: center;
  height: fit-content;
  padding: 2px;
  border: none;
  background-color: transparent;
  color: var(--secondary-txt);
  font-size: var(--span-font-size);
  font-weight: 700;
  transition: 0.2s;
  :hover {
    cursor: pointer;
    color: var(--primary-txt);
    text-decoration: underline;
  }
`;
