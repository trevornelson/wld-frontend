/*
 *
 * Affirmations
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { get } from 'lodash';
import ReactS3Uploader from 'react-s3-uploader';
import api from 'services/wld-api';
import makeSelectAffirmations from './selectors';
import makeSelectAuthentication from 'containers/Authentication/selectors';
import {
  addAffirmation,
  editAffirmation,
  deleteAffirmation,
  uploadToS3,
  uploadToS3Error,
  addVisualization,
  editVisualization,
  deleteVisualization
} from './actions';

import Title from 'components/DashboardInner/Title';
import ListCard from 'components/ListCard';
import FeedImage from 'components/FeedImage';
import ListCardWrapper from './ListCardWrapper';

export class Affirmations extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  startUpload(file, next) {
    const { onUploadToS3 } = this.props;

    onUploadToS3();
    next(file);
  }

  s3UploadComplete(signedResponse, file) {
    const {
      onAddVisualization,
      onUploadToS3Error
    } = this.props;
    const { signedUrl } = signedResponse;

    if (signedUrl) {
      const parsedUrl = signedUrl.replace(/\?.*/, '');

      onAddVisualization(parsedUrl);
    } else {
      onUploadToS3Error();
    }
  }

  render() {
    const {
      onAddAffirmation,
      onEditAffirmation,
      onDeleteAffirmation,
      onUploadToS3Error,
      onEditVisualization,
      onDeleteVisualization
    } = this.props;
    const {
      affirmations,
      visualizations,
      uploading,
      error
    } = this.props.Affirmations;
    const { user } = this.props.Authentication;
    const userId = get(user, 'id');

    return (
      <div>
        <Title>Daily Affirmations</Title>
        <ListCardWrapper>
          <ListCard
            isListEditable={ false }
            canAddItems={ affirmations.length <= 10 }
            items={ affirmations }
            itemPlaceholder="Add an affirmation..."
            onAddItem={ onAddAffirmation }
            onEditItem={ onEditAffirmation }
            onDeleteItem={ onDeleteAffirmation }
          />
        </ListCardWrapper>
        <div>
          <ReactS3Uploader
            accept="image/*"
            server={ api.baseURL }
            signingUrl={ `/users/${userId}/presigned_url` }
            signingUrlMethod="GET"
            preprocess={ (file, next) => this.startUpload(file, next) }
            onError={ () => onUploadToS3Error() }
            onFinish={ (signedResponse, file) => this.s3UploadComplete(signedResponse, file) }
          />
          { uploading ? <div>Uploading...</div> : null }
          { error ? <div>{ error }</div> : null }
          <div>
            { visualizations.map((v) => (
                <FeedImage
                  key={ v.id }
                  { ...v }
                  onEdit={ onEditVisualization }
                  onDelete={ onDeleteVisualization }
                />
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

Affirmations.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Affirmations: makeSelectAffirmations(),
  Authentication: makeSelectAuthentication()
});

function mapDispatchToProps(dispatch) {
  return {
    onAddAffirmation: (_, content) => dispatch(addAffirmation(content)),
    onEditAffirmation: (_, id, content) => dispatch(editAffirmation(id, content)),
    onDeleteAffirmation: (_, id) => dispatch(deleteAffirmation(id)),
    onUploadToS3: () => dispatch(uploadToS3()),
    onUploadToS3Error: () => dispatch(uploadToS3Error()),
    onAddVisualization: (url) => dispatch(addVisualization(url)),
    onEditVisualization: (_, id, caption) => dispatch(editVisualization(id, caption)),
    onDeleteVisualization: (_, id) => dispatch(deleteVisualization(id)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Affirmations);
