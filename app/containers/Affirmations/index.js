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
import styled from 'styled-components';
import { colors } from 'utils/styleHelpers';
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
import HelpView from 'components/HelpView';
import FormView from 'components/FormView';
import AffirmationsHelp from 'components/HelpView/AffirmationsHelp';
import ListCard from 'components/ListCard';
import FeedImage from 'components/FeedImage';
import ListCardWrapper from './ListCardWrapper';

const UploadButtonWrapper = styled.div`
  input[type="file"] {
    color: transparent;
    margin: 15px;
  }

  input[type="file"]::-webkit-file-upload-button {
    visibility: hidden;
  }

  input[type="file"]::before {
    content: 'Upload an image';
    color: ${ colors.darkBlue };
    display: inline-block;
    background: -webkit-linear-gradient(top, #f9f9f9, #e3e3e3);
    border: 1px solid #999;
    border-radius: 3px;
    padding: 5px 8px;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    cursor: pointer;
    text-shadow: 1px 1px #fff;
    font-weight: 700;
    font-size: 10pt;
  }

  input[type="file"]:hover::before {
    border-color: black;
  }

  input[type="file"]:active::before {
    background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
  }
`;

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
        <FormView>
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
            <UploadButtonWrapper>
              <ReactS3Uploader
                accept="image/*"
                server={ api.baseURL }
                signingUrl={ `/users/${userId}/presigned_url` }
                signingUrlMethod="GET"
                preprocess={ (file, next) => this.startUpload(file, next) }
                onError={ () => onUploadToS3Error() }
                onFinish={ (signedResponse, file) => this.s3UploadComplete(signedResponse, file) }
              />
            </UploadButtonWrapper>
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
        </FormView>
        <HelpView>
          <AffirmationsHelp />
        </HelpView>
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
