import styled from "@emotion/styled";

const PreloaderContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

const Spinner = styled.div`
  border: 0 solid transparent;
  border-radius: 50%;
  width: 250px;
  height: 250px;
`;

const Loader = styled.div`
  width: inherit;
  height: inherit;
  position: absolute;

  &::before, &::after {
    content: '';
    border: 8px solid #fff;
    border-radius: 50%;
    width: inherit;
    height: inherit;
    position: absolute;
    opacity: 1;
  }

  &.l1 {
    &::before, &::after {
      animation: clockwiseZ 2.5s infinite;
    }
  }

  &.l2 {
    &::before, &::after {
      animation: anticlockwiseZ 2.5s infinite;
    }
  }

  @keyframes clockwiseZ {
    0%, 100% {
      transform: rotateY(0);
    }

    50% {
      transform: rotateY(180deg) skew(-10deg, -5deg);
    }
  }

  @keyframes anticlockwiseZ {
    0%, 100% {
      transform: rotateX(0);
    }

    50% {
      transform: rotateX(-180deg) skew(10deg, 5deg);
    }
  }

`;

export {PreloaderContainer, Spinner, Loader}