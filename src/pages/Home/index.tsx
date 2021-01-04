/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { geolocated } from 'react-geolocated';
import moment from 'moment';
import Geocode from 'react-geocode';
import { useToast } from '../../hooks/toast';
import { api } from '../../services/api';
import { setApp } from '../../store/actions';
import underContruction from '../../assets/Images/under-construction.png';

import {
  Container,
  Body,
  SideColumn,
  BackgroundCard,
  MainColumn,
  Header,
  Title,
  DayOfWeek,
  DayCard,
  DayTitle,
  CardRow,
  Card,
  CardTitle,
  Reload,
} from './styles';

interface RootState {
  loading: boolean,
  weatherData: any,
}

const IURL = process.env.REACT_APP_API_ICONS;
Geocode.setApiKey(process.env.REACT_APP_DEMO_GOOGLE_KEY || '');

export const Home = (props: any) => {
  const { addToast } = useToast();
  const {
    appStore, coords, isGeolocationAvailable, isGeolocationEnabled,
  } = props;
  const [data, setData] = useState<any>(undefined);
  const [city, setAddress] = useState<any>('buscando...');

  const searchForecast = () => {
    appStore({
      loading: true, coords, isGeolocationAvailable, isGeolocationEnabled,
    });

    Geocode.fromLatLng(coords.latitude, coords.longitude).then(
      (response: any) => {
        const address = response.results[0].formatted_address;
        setAddress(address);
      },
    );

    api.get('', {
      params: {
        lat: coords.latitude,
        lon: coords.longitude,
        appid: process.env.REACT_APP_API_ID,
        units: 'metric',
      },
    }).then((response) => {
      setData(response.data);
      appStore({ loading: false, weatherData: response.data });
      addToast({
        type: 'info',
        title: 'Localização',
        description: 'Busca pela previsão realizada.',
      });
    });
  };

  useEffect(() => {
    if (coords?.latitude) {
      searchForecast();
    }
  }, [coords]);

  const handleReload = () => {
    setData(undefined);
    searchForecast();
  };

  return (
    <Container id="Container">
      <Body id="Body">
        <SideColumn id="SideColumn">
          <img src={`${IURL}/${data?.current.weather[0].icon || '03d'}@4x.png`} alt="" height={250} width={250} />
          <div>
            <h1>
              {data ? `${data?.current.temp.toFixed(0)}º` : 0}
              <span>c</span>
            </h1>
            <h3>
              {'Hoje, '}
              <span>{moment().format('HH:mm')}</span>
            </h3>
          </div>

          <div>
            <Reload disabled={!data} type="button" onClick={() => handleReload()}>Recarregar</Reload>
          </div>

          <div>

            <BackgroundCard id="BackgroundCard">
              <span>{city}</span>
            </BackgroundCard>
          </div>

        </SideColumn>
        <MainColumn id="MainColumn">
          <div>
            <Header id="Header_1">
              <Title id="Title_1">Dias da Semana</Title>
            </Header>
            <DayOfWeek id="DayOfWeek">
              {!data && (<div>Buscando previsão...</div>)}
              {data && data.daily.map((day:any) => {
                if (moment(day.dt * 1000).date() === moment().date()) return null;
                return (
                  <DayCard id="DayCard_1">
                    <div><img src={`${IURL}/${day.weather[0].icon}@2x.png`} alt="" /></div>
                    <div>
                      <DayTitle id="DayTitle_1">{`${moment(day.dt * 1000).format('ddd, DD')}`.toUpperCase()}</DayTitle>
                      <div>
                        <h1>{`${day.temp.max.toFixed(0)}º`}</h1>
                        <span>{` ${day.temp.min.toFixed(0)}º`}</span>
                      </div>
                    </div>
                  </DayCard>
                );
              })}
            </DayOfWeek>
          </div>

          <div>
            <Header id="Header_2">
              <Title id="Title_2">Detalhes do Dia</Title>
            </Header>

            <CardRow id="CardRow_1">
              <Card id="Card_1">
                <CardTitle>UV Index</CardTitle>
                <img src={underContruction} alt="" height={75} width={75} />
              </Card>
              <Card id="Card_2">
                <CardTitle>Força do Vento</CardTitle>
                <img src={underContruction} alt="" height={75} width={75} />
              </Card>
              <Card id="Card_3">
                <CardTitle>Nascer/Por do Sol</CardTitle>
                <img src={underContruction} alt="" height={75} width={75} />
              </Card>
            </CardRow>
            <CardRow id="CardRow_2">
              <Card id="Card_4">
                <CardTitle>Humidade</CardTitle>
                <img src={underContruction} alt="" height={75} width={75} />
              </Card>
              <Card id="Card_5">
                <CardTitle>Visibilidade</CardTitle>
                <img src={underContruction} alt="" height={75} width={75} />
              </Card>
              <Card id="Card_6">
                <CardTitle>Qualidade do Ar</CardTitle>
                <img src={underContruction} alt="" height={75} width={75} />
              </Card>
            </CardRow>
          </div>
        </MainColumn>
      </Body>
    </Container>
  );
};

const mapStateToProps = (state: RootState) => ({
  loading: state.loading,
});

const mapDispatchToProps = {
  appStore: setApp,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Home));
