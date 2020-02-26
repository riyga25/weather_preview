import React, {FC, memo} from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useHeaderHeight} from '@react-navigation/stack';
import {useTheme} from '../hooks';

type Props = {
  children: React.ReactNode;
};

const AppBackground: FC<Props> = memo(({children}) => {
  const headerHeight = useHeaderHeight();
  const theme = useTheme();

  return (
    <LinearGradient
      colors={theme.gradient}
      locations={[0.1, 0.5]}
      style={[styles.container, {paddingTop: headerHeight}]}
    >
      {children}
    </LinearGradient>
  );
});

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppBackground;
