import React from 'react';

import { ReactComponent as CalendarSvg } from '../../../assets/CalendarSvg.svg';
import PreviewGenerator from '../../../utils/PreviewGenerator';

const CalendarPreview = () => (
  <PreviewGenerator
    title="CALENDAR"
    SvgIcon={CalendarSvg}
    headerText="BE"
    subHeaderText="where you need to be."
  />
);

export default CalendarPreview;
