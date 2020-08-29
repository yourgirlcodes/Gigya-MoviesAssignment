import styled from "styled-components";

export const MovieList = styled.div`
  display: flex;
  width: 85vw;
  height: 70vh;
  flex-wrap: wrap;
  overflow-y: scroll;
  margin-left: auto;
  margin-right: auto;
  top: 15vh;
  position: relative;
`;

export const MovieContainer = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  height: 25vw;
  width: 15vw;
  margin: 0.5vw;
  box-shadow: 5px 8px 8px #000033;
`;

export const TooltipActiveArea = styled.div`
  height: 200px;
  width: 100%;
`;

export const ReleaseDate = styled.div`
width: 100%;
font-size: smaller;
height: 1.5vw;
margin-top:0.2vw;
color: white;
backdrop-filter: blur(10px);;
`;