const React = require("react")
const DefaultLayout = require("./layout/Default")
class Index extends React.Component {
  render() {
    return (
      <DefaultLayout title={"Here are the Pokemon!"}>
        <ul>
          {this.props.pokemon.map((pokemon, i) => {
            return (
              <li>
                <a href={`/pokemon/${pokemon.id}`}>{pokemon.name}</a> <br />
                <a href={`/pokemon/${pokemon._id}/edit`}>Edit this Pokemon</a> <br />
                <form action={`/pokemon/${pokemon._id}?_method=DELETE`} method="POST">
                  <input type="submit" value="DELETE" />
                </form>
              </li>
            )
          })}
        </ul>
        <nav>
          <a href="/pokemon/new">Create a Pokemon</a>
        </nav>
      </DefaultLayout>
    );
  }
}
module.exports = Index
