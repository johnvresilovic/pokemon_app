const React = require("react")

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>Make a New Pokemon</h1>
        <form action='/pokemon' method='POST'>
          Name: <input type='text' name='name' />
          Image URL: <input type='text' name='image' />
          <input type='submit' name='' value='Create' />
        </form>
      </div>
    );
  }
}

module.exports = New