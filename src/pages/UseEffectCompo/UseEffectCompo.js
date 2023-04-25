import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';

class UseEffectCompo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    console.log('mon composant est monte');
    axios
      .get('https://sabik-5af023.appdrag.site/api/getAllArticles', {
        params: {
          AD_PageNbr: '1',
          AD_PageSize: '500',
        },
      })
      .then((response) => {
        console.log(response.data.Table);
        this.setState({
          data: response.data.Table,
        });
      });
  }

  render() {
    const { data } = this.state;
    return (
      <>
        <Layout>
          <div className="container">
            <h1>hello Use effect</h1>
            {data.map((row) => (
              <div key={row.id} className="bg-secondary shadow-lg rouned m-3 p-3">
                <h2>{row.title}</h2>
                <p>{row.articles}</p>{' '}
              </div>
            ))}

            <Link to="/">
              <button className="btn btn-primary">retourner a la page initial</button>{' '}
            </Link>
          </div>
        </Layout>
      </>
    );
  }
}

export default UseEffectCompo;


