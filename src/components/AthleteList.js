import React, { useEffect } from "react";
import { connect } from "react-redux";

const AthleteList = props => render(props.atletas);

const render = atletas => (
  <div>
    Cartola Market
    {atletas ? (
      atletas.map(a => <div key={a.atleta_id}>{a.apelido}</div>)
    ) : (
      <div>Loading</div>
    )}
  </div>
);

const mapStateToProps = state => ({ ...state.data });

export default connect(mapStateToProps)(AthleteList);
