import styled, { css } from 'styled-components';
import { animated } from 'react-spring';
import colors from '../../../styles/colors';

interface ContaienrProps {
  type?: 'success' | 'error' | 'info';
  hasDescription: number;
}

const toastTypeVariation = {
  info: css`
    background: ${colors.infoSoft};
    color: ${colors.info};
  `,
  success: css`
    background: ${colors.successSoft};
    color: ${colors.success};
  `,
  error: css`
    background: ${colors.errorSoft};
    color: ${colors.error};
  `,
};

export const Container = styled(animated.div)<ContaienrProps>`
  width: 360px;
  padding: 16px 16px;
  position: relative;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0,0,0,0.2);

  display: flex;

  background: ${colors.infoSoft};
  color: ${colors.info};
  /* dar espaço de tiver outro atrás */
  & + div {
    margin-top: 8px;
  }

  ${(props) => toastTypeVariation[props.type || 'info']}

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 19px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }

  ${(props) => !props.hasDescription && css`
    align-items: center;

    svg {
      margin-top: 0;
    }
  `}
  `;
