import React from "react";

import app from "./app.module.scss";
import { connect } from "react-redux";
import * as actions from "./redux/starwars-actions";

class App extends React.Component {
  render() {
    return (
      <>
        <button onClick={this.props.pStarwarsData}>Get The People</button>
        <section className={app.people}>
          <ul>
            {/* {this.props.characters}
            {this.props.characters.results.map((result, i) => (
              <li onClick={() => this.props.pStarwarsData(result.url)} key={i}>
                {result.name}
              </li>
            ))} */}
          </ul>

          <div className={app.person}>
            {/* {Object.keys(this.state.person).map((key, i) => (
              <div key={i}>
                <span>{key}:</span>
                <span>{this.state.person[key]}</span>
              </div>
            ))} */}
          </div>
        </section>
      </>
    );
  }
  componentDidMount() {
    this.props.pStarwarsData("").then(() => console.log(this.props.characters));
  }
}

const mapStoreStateToProps = state => ({
  characters: state.characters
});

const mapDispatchToProps = dispatch => ({
  pStarwarsData: name => dispatch(actions.requestStarwarsData(name))
});

export default connect(
  mapStoreStateToProps,
  mapDispatchToProps
)(App);
