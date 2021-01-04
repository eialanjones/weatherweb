import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import Colors from '../../styles/colors';
import Px2Vw from '../../utils/Px2Vw';

export const Container = styled.div`
  text-align: -webkit-center;
`;

export const Body = styled.div`
  border-radius: 25px;
  background-color: ${Colors.primary};
  display: flex;
  flex-direction:column;
  width: ${Px2Vw(310)};
  min-height: ${Px2Vw(320)};
  margin: ${Px2Vw(5)} 0 ${Px2Vw(5)} 0;

  @media (min-width: 768px) {
    width: ${Px2Vw(600, 768)};
    min-height: ${Px2Vw(300, 768)};
    height: 100%;
    flex-direction:row;
    margin: ${Px2Vw(30, 768)} 0 ${Px2Vw(30, 768)} 0;
  }
`;

export const SideColumn = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.secundary};
  border-radius: 0 0 25px 25px;
  padding: 0 0 ${Px2Vw(20)} 0;
  font-size: 10px;
  flex: 1;

  img {
    align-self: center;
  }

  > div {
    flex: 1;

    > h1 {
      justify-content: center;
      display: flex;
      flex-direction: row;
      font-size: ${Px2Vw(40)};

      > span {
        line-height: ${Px2Vw(40)};
        font-size: ${Px2Vw(30)};
      }
    }

    > div {
      display: flex;
      flex-direction: row;
      padding-left: 20px;

      > h4 {
        align-self: center;
      }
    }

    > h3 {
        font-size: ${Px2Vw(10)};

        span {
          opacity: 0.5;
        }
      }
  }

  @media (min-width: 768px) {
    border-radius: 25px 0 0 25px;
    padding: 0 ${Px2Vw(20, 768)};
    flex: 1;

    > div {
      > h1 {
        font-size: ${Px2Vw(40, 768)};

        > span {
          line-height: ${Px2Vw(40, 768)};
          font-size: ${Px2Vw(30, 768)};
        }
      }
      > h3 {
        font-size: ${Px2Vw(10, 768)};
      }
    }
  }
`;

export const BackgroundCard = styled.div`
  background-color: #f2f2f2;
  height: ${Px2Vw(60, 320)};
  width: ${Px2Vw(250, 320)};
  border-radius: 10px;
  font-size: 20px;
  padding-left: 0 !important;
  align-self: center;
  justify-content: center;
  margin-bottom: ${Px2Vw(20)};

  span {
    align-self: center;
  }

  @media (min-width: 768px){
    height: ${Px2Vw(60, 768)};
    width: ${Px2Vw(140, 768)};
    margin-bottom: ${Px2Vw(20, 768)};

    span {
      font-size: 20px;
    }
  }
`;

export const MainColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
`;
export const Header = styled.div`
  display: flex;
  margin-bottom: 20px;

  > div {
    flex: auto;
  }

  @media (min-width: 768px){
    margin-bottom: ${Px2Vw(20, 768)};
  }
`;
export const Title = styled.h1`
  font-size: 15px;

  @media (min-width: 768px){
    padding-right: ${Px2Vw(20, 768)};
    font-size: ${Px2Vw(10, 768)};
  }
`;

export const DayOfWeek = styled.div`
  margin-bottom: 20px;
  min-height: 170px;

  > div {
    display: flex;
    flex: 1;
    margin-bottom: ${Px2Vw(20, 768)};

    img {
      height: ${Px2Vw(70)};
      width: ${Px2Vw(70)};
    }
  }

  @media (min-width: 768px){
    display: flex;

    > div {
      flex: 1;
      display: block;
      & + div {
        margin-left: ${Px2Vw(5, 768)};
      }

      img {
      height: ${Px2Vw(40, 768)};
      width: ${Px2Vw(40, 768)};
    }
    }
  }
`;
export const DayTitle = styled.div`
  place-content: center;
`;
export const CardRow = styled.div`
  > div {
    & {
      margin-bottom: ${Px2Vw(20)};
    }
  }

  @media (min-width: 768px){
    display: flex;
    flex-direction: row;
    & + div {
      margin-top: ${Px2Vw(10, 768)};
    }

    > div {
      flex: 1;

      & {
        margin-bottom: 0;
      }

      & + div {
        margin-left: ${Px2Vw(10, 768)};
      }
    }
  }

`;
export const Card = styled.div`
  height: 150px;
  width: 180px;
  background-color: ${Colors.secundary};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: 10px;
    opacity: 0.3;
    align-self: center;
  }
`;
export const CardTitle = styled.div`
    margin-top: 20px;
    font-size: 14px;
    color: #00000055;
`;
export const DayCard = styled.div`
  background-color: ${Colors.secundary};
  border-radius: 10px;
  padding-top: 15px;
  padding-bottom: 15px;
  align-items: center;
  place-content: center;
  margin-left: 25px;
  margin-right: 25px;

  > div {
    flex: 1;

    div {
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
      font-size: ${Px2Vw(12)};

      > span {
        opacity: 0.5;
        line-height: 30px;
        margin-left: 5px;
      }
    }
  }

  @media (min-width: 768px){
    margin-left: 0;
    margin-right: 0;
    > div {
        div {
          display: flex;
          justify-content: center;
          align-items: flex-end;
          font-size: ${Px2Vw(8, 768)};

          > span {
          opacity: 0.5;
          line-height: 30px;
          margin-left: 5px;
        }
      }
    }
  }
`;

export const Reload = styled.button`
  height: 45px;
  border: 0;
  background-color: orange;
  margin-top: 25px;
  color: white;
  border-radius: 10px;
  width: ${Px2Vw(250)};
  margin-bottom: ${Px2Vw(20)};

  @media (min-width: 768px){
    width: ${Px2Vw(140, 768)};
    margin-bottom: 0;
    span {
      font-size: 20px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1s;


form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1, h2 {
      margin-bottom: 24px;
    }

    a {
      color: ${Colors.fontColor};
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, Colors.fontColor)}
      }
    }
  }
  a {
    color: ${Colors.primary};
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, Colors.primary)}
    }
  }
`;

export const Background = styled.div`
  flex:1;
`;
