import React from 'react';
import { AllStyles } from '../style/GeneralStyles';
import { FeedbackStyles } from '../style/GeneralStyles';
import TweetAndScoring from './TweetAndScoring';
import testerTweets from '../data/testerTweets';
import Pagination from '@material-ui/lab/Pagination';

class UserFeedback extends React.Component {

  constructor() {
    super();
    this.handlePageChange = this.handlePageChange.bind(this);

    this.state = {
      tweets: testerTweets.tweets.slice(0, 3),
      currentPage: 1,
      count: testerTweets.tweets.length/3
    }
  }

  componentDidMount() {
    this.retrieveTweets()
  }

  handlePageChange(event, value) {
    this.setState(
      {
      currentPage: value,
      },
      () => {
        this.retrieveTweets();
      }
    )
  }

  retrieveTweets() {
    const currentPage = this.state.currentPage;
    const firstShownTweet = (currentPage - 1)*3
    const currentTweets = testerTweets.tweets.slice(firstShownTweet, firstShownTweet + 3)
    this.setState(
      {
        tweets: currentTweets
      }
    )
    console.log(this.state.tweets)
  }
  
  render() {
    
    const tweets = this.state.tweets
    .map((d, i) => {
      const date = d.date

      return (
      <TweetAndScoring region={d.region} date={date} content={d.content} score={d.score} id={d.id}/>
      )
    })
    let page;
    
    return (
      <AllStyles>
        <FeedbackStyles>
          <div className="feedback-container">
            <div className="text-center">
              <h4 className="semi-bold-text">What are people saying?</h4>
              <p className="feedback-description">Help us in the fight against xenophobia by providing your feedback on our sentiment analysis scoring.</p>
              <div className="tweets-container">
                {tweets}
              </div>
              <div className="item-center">
                
                <Pagination  page={page} count={this.state.count} onChange={this.handlePageChange} />
              </div>

            </div>
            <p className="italic-text section-notes footer-notes">Showing the most influential tweets (highest total count of likes and retweets) that have extremely negative or positive sentiments.</p>
          </div>
          
          
        </FeedbackStyles>
      </AllStyles>
    );
  }
}

export default UserFeedback;