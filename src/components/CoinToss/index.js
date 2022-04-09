// Write your code here
import {Component} from 'react'
import './index.css'

const headsImg = ' https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TailsImg = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    headCount: 0,
    tailsCount: 0,
    tossResultImg: headsImg,
  }

  TossTheCoin = () => {
    const {headCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImage = ''
    let updatedHeadCount = headCount
    let updatedTailsCount = tailsCount

    if (toss === 0) {
      tossImage = headsImg
      updatedHeadCount += 1
    } else {
      tossImage = TailsImg
      updatedTailsCount += 1
    }
    this.setState({
      tossResultImg: tossImage,
      headCount: updatedHeadCount,
      tailsCount: updatedTailsCount,
    })
  }

  render() {
    const {headCount, tailsCount, tossResultImg} = this.state
    const totalCount = headCount + tailsCount

    return (
      <div className="app-container">
        <div className="toss-container">
          <h1 className="game-name">Coin Toss Game</h1>
          <p className="title">Heads (or) Tails</p>
          <img src={tossResultImg} className="coin" alt="toss result" />
          <button type="button" className="button" onClick={this.TossTheCoin}>
            Toss Coin
          </button>
          <div className="scoreContainer">
            <p className="counter">{`Total: ${totalCount}`}</p>
            <p className="counter">{`Heads: ${headCount}`}</p>
            <p className="counter">{`Tails: ${tailsCount}`}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
