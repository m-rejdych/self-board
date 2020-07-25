import React from 'react';

import { ReactComponent as NewsFeedSvg } from '../../../assets/NewsFeedSvg.svg';
import PreviewGenerator from '../../../utils/PreviewGenerator';

const NewsFeedPreview = () => (
  <PreviewGenerator
    title="NewsFeed"
    SvgIcon={NewsFeedSvg}
    headerText="KNOW"
    subHeaderText="what you need to know."
  />
);

export default NewsFeedPreview;
