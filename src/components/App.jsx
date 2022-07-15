// import { Component } from 'react';
import { Section } from 'components/Section';
import { Notification } from 'components/Notification/Notification';
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/Feedbackoptions';


import { useState } from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedbackClick = ({ option }) => {
    switch (option) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;

      default:
        return;
    }
  };
  const handleCount = () => good + bad + neutral;

  const countPositiveFeedbackPercentage = () =>
    handleCount() && Math.round((good / handleCount()) * 100);

  const optionStates = ['good', 'neutral', 'bad'];
  const total = handleCount();
  const percentage = countPositiveFeedbackPercentage();

  return (
    <div>
      <Section title="Please leave your feedback">
        <FeedbackOptions
          options={optionStates}
          onLeaveFeedback={handleFeedbackClick}
        />
      </Section>
      <Section title="Statistics">
        {handleCount() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={percentage}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

export default App;

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handekFeedbackClick = ({ option }) => {
//     this.setState(prevState => ({ [option]: prevState[option] + 1 }));
//   };

//   countTotalFeedback = () =>
//     Object.values(this.state).reduce((total, item) => total + item, 0);

//   countPositiveFeedbackPercentage = () =>
//     this.countTotalFeedback() &&
//     Math.round((this.state.good / this.countTotalFeedback()) * 100);

//   render() {
//     return (
//       <div>
//         <Section title="Please leave your feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.handekFeedbackClick}
//           />
//         </Section>
//         <Section title="Statistics">
//           {this.countTotalFeedback() > 0 ? (
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             ></Statistics>
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }
