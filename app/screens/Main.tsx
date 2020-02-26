import React, {FC, memo, useEffect} from 'react';
import {StyleSheet, ScrollView, RefreshControl, Text, View} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import {StackNavigationProp} from '@react-navigation/stack';
import {BannerAd, BannerAdSize} from '@react-native-firebase/admob';
import {ad, colors, other} from '../constants';
import MainInfo from '../components/MainInfo';
import CardsContainer from '../components/CardsContainer';
import WeekForecast from '../components/WeekForecast';
import DailyScroll from '../components/DailyScroll';
import {RootStackParamList} from '../navigation/types';
import AppBackground from '../components/Background';
import {useMainData, useWeather} from '../hooks';

type Props = {navigation: StackNavigationProp<RootStackParamList, 'Main'>};

const Main: FC<Props> = memo(() => {
  const {getMainData, isFetching, positionError} = useMainData();
  const {weather} = useWeather();

  useEffect(() => {
    RNBootSplash.hide({duration: 250});
    getMainData();
  }, [getMainData]);

  return (
    <AppBackground>
      <ScrollView
        refreshControl={
          <RefreshControl
            tintColor={colors.text_1}
            refreshing={isFetching}
            onRefresh={getMainData}
          />
        }
      >
        <View>
          {!!positionError && <Text style={styles.errorText}>{positionError}</Text>}
          {!positionError && weather?.currently && <MainInfo />}
        </View>
        {weather?.currently && <CardsContainer />}
        <View style={styles.ad}>
          <BannerAd
            unitId={other.isIOS ? ad.mainIosBanner : ad.mainAndroidBanner}
            size={BannerAdSize.FULL_BANNER}
            requestOptions={{
              requestNonPersonalizedAdsOnly: true,
              // location: location.lat && location.lon && [location.lat, location.lon],
              keywords: ['weather'],
            }}
          />
        </View>
        {weather?.hourly && <DailyScroll />}
        {weather?.daily && <WeekForecast />}
      </ScrollView>
    </AppBackground>
  );
});

const styles: any = StyleSheet.create({
  ad: {
    marginTop: 24,
  },
  errorText: {
    color: colors.text_1,
    fontSize: 18,
    textAlign: 'center',
    zIndex: 2,
  },
});

export default Main;
