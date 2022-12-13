const React = require('react');
const DefaultLayout = require('./layout/Default.jsx')

class Edit extends React.Component{
  render() {
    return (
      <DefaultLayout title="Edit This Pokemon">      
      <form action={`/pokemon/${this.props.pokemon._id}?_method=PUT`} method="POST">
          Name: <input type="text" name="name" defaultValue={this.props.pokemon.name}/><br/>
          Image URL: <input type='text' name='image' /><br/>
          <br/>
          <input type="submit" value="Submit Changes"/>
      </form>
      </DefaultLayout>
    )
  }
}
module.exports= Edit