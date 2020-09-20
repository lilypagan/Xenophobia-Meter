import React from 'react';
import { AllStyles } from '../style/GeneralStyles';
import { FeedbackStyles } from '../style/GeneralStyles';
import Moment from 'react-moment';
import { Button } from '@material-ui/core';

class TweetAndScoring extends React.Component {

  constructor() {
    super();
    this.state = {showButtons : true}
    this.handlePosToggle = this.togglePosFeedback.bind(this);
    this.handleNegToggle = this.toggleNegFeedback.bind(this);
    this.handleNeuToggle = this.toggleNeuFeedback.bind(this);
    this.baseState = this.state;
  }

  findRating(score) {
    if (score == 0){
      return 'Neutral';
    } else if (score < 0){
      return 'Negative';
    } else {
      return 'Positive';
    }
  }

  togglePosFeedback() {
    this.setState({showButtons : false})
    console.log("positive", this.props.id)
  }

  toggleNegFeedback() {
    this.setState({showButtons : false})
    console.log("neg", this.props.id)

  }

  toggleNeuFeedback() {
    this.setState({showButtons : false})
    console.log("neu", this.props.id)

  }

  render() {
    const rating = this.findRating(this.props.score)
    
    const showButtons = this.state.showButtons
    let buttons;
    if (showButtons) {
      buttons =              
      <div>
        <Button onClick={this.handlePosToggle} className="positive rating-button" variant="outlined" size="small">positive</Button>
        <Button onClick={this.handleNegToggle} className="negative rating-button" variant="outlined" size="small">negative</Button>
        <Button onClick={this.handleNeuToggle} className="neutral rating-button" variant="outlined" size="small">neutral</Button>
      </div>
    } else {
      buttons = 
      <div className="score-section">
        <p className= {`italic-text tweet ${this.props.id}`}>Thanks for the feedback!</p>
      </div>
    }
    console.log(this.props.id, this.state.showButtons)
    this.state = this.baseState
    return (
      <AllStyles>
        <FeedbackStyles>
          <div className="tweet-and-scoring-container">
            <div className="tweet-container text-left">
              <img alt="location icon" className="icon" src={require('../assets/location.png')} />
              <p className="tweet-region bold-text">{this.props.region} </p>
              <p className="tweet-date light-text grey-text">            
                <Moment format='MMMM Do YYYY'>
                  {this.props.date}
                </Moment></p>
              <p className="tweet">{this.props.content}</p>
            </div>

            <div className="scoring-container">
              <div className="score-section">
                <p className="bold-text text-left tweet-rating">{rating} Tweet</p>
                <p className="tweet-score"> | scored {this.props.score}</p>
              </div>
              <br></br>
              <br></br>
              <div className="feedback-section text-left">
                <p className="rate-header ">Rate this content</p>
                
                {buttons}
              </div>
            </div>
          </div>
        </FeedbackStyles>
      </AllStyles>
    );
  }
}

export default TweetAndScoring;