var React = require('react');

var Preferences = require('../repository/Preferences.jsx');

module.exports = React.createClass({
  render: function () {
    return (
      <section className="Preferences">
        <p>Preferences</p>
        <Themes/>
      </section>
    );
  }
});

var Themes = React.createClass({
  getInitialState: function () {
    return {selected: Preferences.getThemeNameOrDefault('light')};
  },
  onSelected: function (name) {
    this.setState({selected: name});
    Preferences.setTheme(name);
  },
  render: function () {
    return (
      <div>
        <ThemeItem name="light" title="Light Theme" href="/theme/light.css"
          selected={this.state.selected}
          onSelected={this.onSelected}/>
        <ThemeItem name="dark" title="Dark Theme" href="/theme/dark.css"
          selected={this.state.selected}
          onSelected={this.onSelected}/>
      </div>
    );
  }
});

var ThemeItem = React.createClass({
  onClick: function () {
    this.props.onSelected(this.props.name);
  },
  render: function () {
    if (this.props.selected == this.props.name) {
      var loader = <link rel="stylesheet" href={this.props.href}/>;
      var className = 'selected';
    }
    return (
      <span>
        <button onClick={this.onClick} className={className}>{this.props.title}</button>
        {loader}
      </span>
    );
  }
});
