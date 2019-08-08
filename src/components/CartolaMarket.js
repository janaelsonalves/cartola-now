import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { fetchData } from "../actions";

class CartolaMarket extends Component {
  componentDidMount() {
    this.props.loadData();
  }

  render() {
    let { atletas } = this.props;

    return (
      <div>
        Cartola Market
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        {atletas ? (
          atletas.map(a => <div key={a.atleta_id}>{a.apelido}</div>)
        ) : (
          <div>Loading</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.data });
const mapDispatchToProps = dispatch => ({
  loadData: () => dispatch(fetchData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartolaMarket);
