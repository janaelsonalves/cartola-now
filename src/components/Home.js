import React, { Component } from "react";
import { connect } from "react-redux";
import Axios from "axios";

class Home extends Component {
  state = {
    atletas: [],
    clubes: {},
    posicoes: {},
    status: {}
  };

  componentDidMount() {
    Axios.get("http://localhost:4000/api/cartola")
      .then(res => {
        this.setState(res.data);
        console.log(this.state);
      })
      .catch(err => console.error(err));
  }

  render() {
    const { atletas, clubes, posicoes, status } = this.state;
    return (
      <div>
        <h1>Informações do Mercado Cartola</h1>
        {atletas.map(atleta => (
          <div
            className="row"
            key={atleta.atleta_id}
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              zIndex: 500,
              background: "#c0c0c0",
              margin: "0 0 0.2em 0"
            }}
          >
            <div className="column">
              <div>
                <img
                  src={""}
                  alt={"Foto de atleta"}
                  style={{ width: 48, height: 48 }}
                />
                {/* {clubes[atleta.clube_id].nome} */}
              </div>
            </div>
            <div className="column" style={{ width: 120 }}>
              <div>{clubes[atleta.clube_id].nome}</div>
            </div>
            <div className="column" style={{ width: 240 }}>
              {status[atleta.status_id].id != 7 ? (
                <div style={{ textDecorationLine: "line-through" }}>
                  <div>
                    {atleta.apelido}({status[atleta.status_id].nome})
                  </div>
                </div>
              ) : (
                <div>
                  {atleta.apelido}({status[atleta.status_id].nome})
                </div>
              )}
              {/* <div>{clubes[atleta.clube_id].nome}</div> */}
              <div>{posicoes[atleta.posicao_id].abreviacao.toUpperCase()}</div>
            </div>
            <div className="column" style={{ width: 45 }}>
              <div>{atleta.jogos_num}</div>
            </div>
            <div className="column" style={{ width: 45 }}>
              <div>{atleta.media_num}</div>
            </div>
            <div className="column" style={{ width: 45 }}>
              <div>{atleta.pontos_num}</div>
            </div>
            <div className="column" style={{ width: 45 }}>
              {(atleta.jogos_num * atleta.media_num).toPrecision(3)}
            </div>
            <div className="column" style={{ width: 45 }}>
              {atleta.scout["A"]}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default connect()(Home);
