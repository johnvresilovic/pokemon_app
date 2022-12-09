const React = require('react')
    class Index extends React.Component {
      render() {
          return (
                  <div>
                      <h1>Here are the Pokemon!</h1>
                      <ul>
                          {this.props.pokemon.map((pokemon, i) => {
                              return (
                                  <li>
                                      <a href={`/pokemon/${pokemon.id}`}>{pokemon.name}</a>{' '}
                                      <br />
                                  </li>
                              );
                          })}
                      </ul>
                      <nav>
          <a href='/pokemon/new'>Create a Pokemon</a>
        </nav>
                  </div>
          )
      }
    }
    module.exports = Index