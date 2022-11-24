import styled from "styled-components";

const sizes = {
  mobileXS: "300px",
  mobileS: "375px",
  mobileM: "768px",
  mobileL: "1024px",

  desktopS: "1200px",
  desktopM: "1440px",
  desktopL: "1600px",
};

export const device = {
  mobileXS: `(min-width: ${sizes.mobileXS})`,
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  desktopS: `(min-width: ${sizes.desktopS})`,
  desktopM: `(min-width: ${sizes.desktopM})`,
  desktopL: `(min-width: ${sizes.desktopL})`,
};

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
