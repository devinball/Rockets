import React from 'react'
import Link from 'gatsby-link'

import sputnick from '../images/sputnik.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="history" className={`${this.props.article === 'history' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">history</h2>
          <span className="image main"><img src={sputnick} alt="" /></span>
          <p>The first satellite sputnik 1 was launched on the sputnik launch vehicle, an adapted r-7 rocket. But the first rocket date back almost to 2000 bc when the chinese put gunpowder in tubes and launched them.
            In 1926 robert goddard made the first liquid fuel powered rocket to demonstrate the use of rockets.
          </p>
          {close}
        </article>

        <article id="how to" className={`${this.props.article === 'how to' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">how to</h2>
          <div className="image main">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/LCbekWlV1Qo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
          <p>You can make many rockets at home on the estes rockets website you can find many rocket kits, 
          also a match rocket can be easily (shown above)</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>Rockets are used for many things from launching satellites to hobbies. rockets would not work if 
            there where no nozzel htis is important because it creates a high velocity an pressure to propel the rocket. 
            There are three basic types of rockets, solid, liquid, and, hybrid.</p>
          {close}
        </article>

        <article id="types" className={`${this.props.article === 'types' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">types</h2>
          <p>There are many kinds of rockets such as 
            <a href="">Saturn V</a>
          </p>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: React.PropTypes.object,
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool
}

export default Main