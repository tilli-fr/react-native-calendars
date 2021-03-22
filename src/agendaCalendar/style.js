import { StyleSheet } from 'react-native';
import * as defaultStyle from '../style';
import platformStyles from './platform-style';

const STYLESHEET_ID = 'stylesheet.agenda.main';
export const HEADER_HEIGHT = 108 + 30;
export const KNOB_HEIGHT = 24 + 30;

export default function styleConstructor(theme = {}) {
  const appStyle = { ...defaultStyle, ...theme };
  const { knob, weekdays } = platformStyles(appStyle);
  return StyleSheet.create({
    knob,
    weekdays,
    weekNames: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: appStyle.calendarBackground
    },
    header: {
      overflow: 'hidden',
      justifyContent: 'flex-end',
      position: 'absolute',
      height: '100%',
      width: '100%',
    },
    calendar: { // not in use
      flex: 1,
      borderBottomWidth: 1,
      borderColor: appStyle.separatorColor
    },
    knobContainer: {
      position: 'absolute',
      left: 0,
      right: 0,
      height: KNOB_HEIGHT,
      alignItems: 'center',
      backgroundColor: appStyle.calendarBackground
    },
    weekday: {
      width: 32,
      textAlign: 'center',
      color: appStyle.textSectionTitleColor,
      fontSize: appStyle.textDayHeaderFontSize,
      fontFamily: appStyle.textDayHeaderFontFamily,
      fontWeight: appStyle.textDayHeaderFontWeight
    },
    reservations: {
      flex: 1,
      marginBottom: 50,
      backgroundColor: appStyle.backgroundColor,
      position: 'absolute',
      top: 0,
      left: 0,
    },
    ...(theme[STYLESHEET_ID] || {})
  });
}
