/**
*
* HelpView
*
*/

import React, { PropTypes } from 'react';
import { Motion, spring } from 'react-motion';

import HelpWrapper from './HelpWrapper';
import AffirmationsHelp from './AffirmationsHelp';
import DailyHelp from './DailyHelp';
import LongTermHelp from './LongTermHelp';
import PurposeHelp from './PurposeHelp';
import QuarterlyHelp from './QuarterlyHelp';
import RelationshipsHelp from './RelationshipsHelp';
import ShortTermHelp from './ShortTermHelp';
import ValuesHelp from './ValuesHelp';
import WeeklyHelp from './WeeklyHelp';
import {
	CORE_VALUES_FOCUSED,
	CORE_PURPOSE_FOCUSED,
	KEY_RELATIONSHIPS_FOCUSED,
	LONG_TERM_FOCUSED,
	SHORT_TERM_FOCUSED,
	DAILY_PRIORITIES_FOCUSED,
	WEEKLY_PRIORITIES_FOCUSED,
	QUARTERLY_PRIORITIES_FOCUSED,
	AFFIRMATIONS_FOCUSED
} from 'containers/App/constants';


class HelpView extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
  	super(props);
  	this.state = { width: props.width };
  }

  componentDidMount(x, y, z) {
  	this.setState({ width: window.innerWidth });
  }

  renderHelpInnerContent() {
  	switch (this.props.activeHelpView) {
  		case 	CORE_VALUES_FOCUSED:
  			return <ValuesHelp />;
			case CORE_PURPOSE_FOCUSED:
				return <PurposeHelp />;
			case KEY_RELATIONSHIPS_FOCUSED:
				return <RelationshipsHelp />;
			case LONG_TERM_FOCUSED:
				return <LongTermHelp />;
			case SHORT_TERM_FOCUSED:
				return <ShortTermHelp />;
			case DAILY_PRIORITIES_FOCUSED:
				return <DailyHelp />;
			case WEEKLY_PRIORITIES_FOCUSED:
				return <WeeklyHelp />;
			case QUARTERLY_PRIORITIES_FOCUSED:
				return <QuarterlyHelp />;
			case AFFIRMATIONS_FOCUSED:
				return <AffirmationsHelp />;
			default:
				return <div />;
  	}
  }

  render() {
  	const { activeHelpView } = this.props;
  	const { width } = this.state;

    return (
    	<Motion style={ {x: spring(activeHelpView ? 0 : (width / 2))} }>
    		{({ x }) =>
					<div style={ {
						position: 'absolute',
						right: `-${width / 2}px`,
						WebkitTransform: `translate3d(${x}px, 0, 0)`,
						transform: `transform3d(${x}px, 0, 0)`
					} }>
			      <HelpWrapper>
			      	{ this.renderHelpInnerContent() }
			      </HelpWrapper>
			    </div>
    		}
	     </Motion>
    );
  }
}

HelpView.propTypes = {
	activeHelpView: PropTypes.string,
	width: PropTypes.number
};

HelpView.defaultProps = {
	width: 1000
};

export default HelpView;
