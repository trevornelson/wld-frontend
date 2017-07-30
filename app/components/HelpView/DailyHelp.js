/**
*
* DailyHelp
*
*/

import React from 'react';


class DailyHelp extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
    	<div>
    		<h2>Daily Priorities Help</h2>
        <p>The Daily Grid is where it all comes together day in and day out and you will fill out on your WLD.  The first part of the Daily Grid is the “Top Three” things you must get done today. These should be the most important things you can do for the day; if nothing else gets done besides these three things, it will have been a productive day. These should come from a quick look at both your one year goals and your Quarterly Priorities. These are your daily immovable “rocks”.</p>
        <p>Again, make them SMART and make them things you can control through your own action. This will come through some trial and error. For example, writing “present final contract to client to sign” is in your control, whereas  “get signed contract from client” is not.</p>
        <p>When you wake up in the morning, try to get your Top 3 things accomplished first -- or at least by noon. It won’t always be possible, but that great feeling you’ll get when they are done is a positive motivator.</p>
        <p>There are four other blank columns on the Daily Grid for other things you want to make sure you do each day. One that I use is the SAVERS routine from the Miracle Morning. Other ideas are exercise, number of glasses of water to drink, etc. These are things that you want to be part of your routine that should be the same each day.  Science shows that once you do something for approximately 21 days, it becomes a habit.</p>
        <p>These variable items can change each quarter and can be part of helping you meet a mid-term or long-term goal. Each day you’ll want to mark all items as DONE or NOT DONE. There is no partial credit. This discipline will teach you to word and design your tasks better.</p>
    	</div>
    );
  }
}

DailyHelp.propTypes = {

};

export default DailyHelp;
