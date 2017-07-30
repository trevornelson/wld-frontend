/**
*
* ShortTermHelp
*
*/

import React from 'react';


class ShortTermHelp extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
    	<div>
    		<h2>Short Term Goals Help</h2>
        <p>When setting your one year goals, it is essential that they map to your longer-term goals and objectives. Use your one year planning as an opportunity to work towards those goals. Note that there are two types of goals: input goals and output goals.</p>
        <p>Input Goals: An input goal is where repetitive, short-term action is the goal or gets you to the goal (i.e. I want to work out 200 days this year). Therefore, the objective is just to keep the momentum going. For input goals, it’s important to not assume perfection 100% of the time, i.e. that. The reason is that, as soon as it seems unrealistic and unobtainable –when you fall short of perfection-- your motivation will fade.  So it may be better to word you input goal along the lines of “I want to cook dinner 5 days a week” or “I want to exercise for 20 minutes, 5 days a week</p>
        <p>Output Goals: These are more traditional goals where you want to achieve something in the longer term that will require different inputs in the shorter term. Using the marathon example from above, if that is my one year goal, I am going to need quarterly and daily goals around training, registration, etc. This is where alignment will come into play on a quarterly and daily basis to get there.</p>
    	</div>
    );
  }
}

ShortTermHelp.propTypes = {

};

export default ShortTermHelp;
