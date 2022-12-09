const React = require('react')
class Show extends React.Component {
  render() {
      return (
              <div>
                  <h1>Gotta Catch 'Em All</h1>
                  <h2>{this.props.pokemon.name}</h2>
                  <img src={this.props.pokemon.img + '.jpg'}></img>
                  <nav>
                  <a href='/pokemon'>Back to seeing all Pokemon</a>
                  </nav>
              </div>
      )
  }
}
module.exports = Show