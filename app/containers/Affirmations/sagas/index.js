import {
  addAffirmationSaga,
  editAffirmationSaga,
  deleteAffirmationSaga
} from './affirmations';

import {
  addVisualizationSaga,
  editVisualizationSaga,
  deleteVisualizationSaga
} from './visualizations';

export default [
  addAffirmationSaga,
  editAffirmationSaga,
  deleteAffirmationSaga,
  addVisualizationSaga,
  editVisualizationSaga,
  deleteVisualizationSaga,
];
