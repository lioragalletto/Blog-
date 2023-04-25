
import React, { Component } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout/Layout';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    console.log('Mon composant est monté');
    axios
      .get('https://sabik-5af023.appdrag.site/api/getAllProjects', {
        params: {
          AD_PageNbr: '1',
          AD_PageSize: '500',
        },
      })
      .then((response) => {
        console.log(response.data.Table);
        this.setState({ data: response.data.Table });
      });
  }

  render() {
    const { data } = this.state;
    return (
      <>
        <Layout>
          <div className="container">
            <h1 className="titre">Mes projets</h1>
            {data?.map((row) => (
              <div key={row.id} className="bg-secondary shadow-lg rouned m-3 p-3">
                <h2>{row.tittle}</h2>
                <img src={row.image} className="img-fluid" alt="" />
                {row.lien && (
                  <a href={row.lien} target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
                    Clique ici pour le lien
                  </a>
                )}
                <p>{row.description}</p>
              </div>
            ))}
          </div>
        </Layout>
      </>
    );
  }
}

export default Portfolio;
