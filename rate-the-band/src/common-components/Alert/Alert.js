import styled, { keyframes } from 'styled-components';
import {
  FontFamilies,
  Colors,
  FontSizes,
  Spaces,
} from '../../shared/DesignTokens';

const colorMapper = {
  info: {
    color: Colors.GRAY_700,
    backgroundColor: Colors.GRAY_200,
  },
  success: {
    color: Colors.NEUTRAL_WHITE,
    backgroundColor: Colors.NEUTRAL_PURPLE1,
  },
  error: {
    color: Colors.NEUTRAL_WHITE,
    backgroundColor: Colors.RED_800,
  },
};

const SlideDown = keyframes`
  0% {
    transform: translate(-50%, -250%);
    opacity: 1;
  }
  5% {
    transform: translate(-50%, -50%);
  }
  90% {
    transform: translate(-50%, -50%);
  }
  95% {
    transform: translate(-50%, 30%);
  }
  100% {
    transform: translate(-50%, -550%);
    opacity: 1;
  }
`;

export const Alert = styled.div`
  position: fixed;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -550%);
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 50px;
  border-radius: 12px;
  color: ${(props) => colorMapper[props.type].color};
  font-family: ${FontFamilies.PRIMARY};
  background-color: ${(props) => colorMapper[props.type].backgroundColor};
  padding: ${(props) => (props.small ? Spaces.ONE : Spaces.ONE_HALF)};
  font-size: ${(props) =>
    props.small ? FontSizes.ONE_QUARTER : FontSizes.TWO};
  animation-name: ${SlideDown};
  animation-duration: 5s;
  animation-timing-function: ease-out;
`;
