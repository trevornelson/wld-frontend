/**
*
* QuarterlyHelp
*
*/

import React from 'react';


class QuarterlyHelp extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
    	<div>
    		<h2>Quarterly Priorities Help</h2>
        <p>There is a reason why great companies do quarterly planning. Most of us cannot plan for more than 90 days at a time, making this the ideal interval to check in on your longer term objectives and recalibrate if necessary.</p>
        <p>Your quarterly priorities are the 5-10 things you must get done this quarter and should be outside of your regular, ongoing responsibilities. In our business, we call our quarterly priorities “rocks”. So for your work, your quarterly goals would first include the rocks you have set. When setting other quarterly priorities, scan your one year goals and then your long-term 3,5, and 10 year goals. Try to not have more than 5-7. If everything is a priority, then nothing is a priority.</p>
        <p>You will keep these quarterly priorities in one of four columns:
        <ul>
          <li>Open: Still to be completed</li>
          <li>Done: Ones that are finished, move anything that is done in this input tab.</li>
          <li>Ongoing Responsibilities (Top 5):  In addition to our quarterly priorities, we have ongoing responsibilities that don’t change. These are the regular things that are expected of you in life and business. For business, list the top 3-5 ongoing responsibilities of your role or what will be on your performance review (check in). If you don’t know what these are, now is the time to find out. You should also add items from your personal or family life. An example might be, “Getting the kids to school on time each day”. We don’t want to ignore what we need to do well each day. Rather, we want to identify opportunities to actively improve so we aren’t on autopilot.</li>
          <li>Hold: The hold column gives you a place to put those ideas that come up for next quarter’s goals/objectives during your daily review. You might often have a new idea but realize that it’s going to have to come later.</li>
        </ul>
        </p>
    	</div>
    );
  }
}

QuarterlyHelp.propTypes = {

};

export default QuarterlyHelp;
