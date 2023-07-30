import { styled } from 'styled-components';

export const HackerNewsFormWrapper = styled.div`
  padding: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #f6f7f6;
`;

export const HackerNewsFormError = styled.h1`
  left: 25%;
  top: 40%;
  position: absolute;
  background: linear-gradient(to right, #7953cd 20%, #00affa 30%, #0190cd 70%, #764ada 80%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  background-size: 500% auto;
  animation: textShine 5s ease-in-out infinite alternate;
  @keyframes textShine {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 100% 50%;
    }
  }
`;
