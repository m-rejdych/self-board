import React from 'react';

import { ReactComponent as TodoSvg } from '../../../assets/TodoSvg.svg';
import PreviewGenerator from '../../../utils/PreviewGenerator';

const TodosPreview = () => (
  <PreviewGenerator
    title="TODO LIST"
    SvgIcon={TodoSvg}
    headerText="DO"
    subHeaderText="what you need to do."
    id="info"
  />
);

export default TodosPreview;
