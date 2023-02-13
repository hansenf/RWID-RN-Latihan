import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import moment from "moment";

const CurrentForecast = ({ currentWeather, name }) => {
  return (
    <CurrentView>
      <Timezone>{currentWeather.timezone}</Timezone>  
      <Text> {name} </Text>
      <DateContainer>{moment().format("dddd, MMM DD, YYYY")}</DateContainer> 
      <MainInfoContainer>
        <CurrentTempView>
          {currentWeather.current && (
            <WeatherIcon
              source={{
                uri: `http://openweathermap.org/img/wn/${currentWeather.current.weather[0].icon}@2x.png`,
              }}
              resizeMode={"contain"}
            />
          )}
          <CurrentDegrees>
            {currentWeather.current && currentWeather.current.temp}
            °C
          </CurrentDegrees>
        </CurrentTempView>
        <Description>
          {currentWeather.current &&
            currentWeather.current.weather[0].description}
        </Description>
      </MainInfoContainer>
      <SecondaryInfoContainer>
        <Row>
          <DetailsBox>
            {<WeatherIcon
              source={{
                uri: `http://openweathermap.org/img/wn/10d@2x.png`,
              }}
              resizeMode={"contain"}
            />}
            <Details>
              {currentWeather.current && currentWeather.current.humidity}%
            </Details>
            <Label>Humidity</Label>
          </DetailsBox>
          <DetailsBox>
            {<WeatherIcon
              source={{
                uri: `http://openweathermap.org/img/wn/10d@03d.png`,
              }}
              resizeMode={"contain"}
            />}
            <Details>
              {currentWeather.daily > 0 ? currentWeather.daily[0].rain : "0"} MM
            </Details>
            <Label>Pressure</Label>
          </DetailsBox>
          <DetailsBox>
            {<WeatherIcon
              source={{
                uri: `http://openweathermap.org/img/wn/03d@2x.png`,
              }}
              resizeMode={"contain"}
            />}
            <Details>
              {currentWeather.daily > 0 ? currentWeather.daily[0].rain : "0"} MM
            </Details>
            <Label>Cloudiness</Label>
          </DetailsBox>
          <DetailsBox>
          {<WeatherIcon
              source={{
                uri: `http://openweathermap.org/img/wn/10d@2x.png`,
              }}
              resizeMode={"contain"}
            />}
            <Details>
              {currentWeather.current && currentWeather.current.wind_speed} m/s
            </Details>
            <Label>Wind</Label>
          </DetailsBox>
        </Row>
      </SecondaryInfoContainer>
    </CurrentView>
  );
};

const CurrentView = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const CurrentTempView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const MainInfoContainer = styled.View`
  display: flex;
  align-items: center;
`;

const Description = styled.Text`
  color: white;
  font-size: 15px;
  text-transform: capitalize;
`;

const SecondaryInfoContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 10px;
  width: 95%;
  max-width: 478px;
`;

const WeatherIcon = styled.Image`
  width: 50px;
  height: 50px;
  
`;

const Timezone = styled.Text`
  color: white;
  display: flex;
  justify-content: center;
  margin-top: 5px;
  font-size: 24px;
`;

const CurrentDegrees = styled.Text`
  color: white;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  font-size: 60px;
`;

const Row = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  color: black;
  padding: 10px 30px;
`;

const DetailsBox = styled.View`
  display: flex;
`;

const Label = styled.Text`
  font-size: 18px;
  text-align: center;
`;

const Details = styled.Text`
  color: black;
  font-size: 15px;
  text-transform: capitalize;
  text-align: center;
`;

const DateContainer = styled.Text`
  color: white;
  display: flex;
  justify-content: center;
  font-size: 15px;
`;

export default CurrentForecast;
