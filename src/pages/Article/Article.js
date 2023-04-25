
import React, { Component} from 'react';
import axios from 'axios';

import Layout from '../../components/Layout/Layout';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    const { pathname } = this.props.location;
    axios
      .get('https://sabik-5af023.appdrag.site/api/getApiID', {
        params: {
          id: pathname?.slice(9),
          AD_PageNbr: '1',
          AD_PageSize: '500'
        }
      })
      .then((response) => {
        console.log(response.data);
        console.log(response.data.Table);
        this.setState({ data: response.data.Table[0] });
      });
  }

  render() {
    const { data } = this.state;
    return (
      <>
        <Layout>
          <div className='container'>
            <div className='row justify-content-center'>
              {data && (
                <div className='col-10 bg-light shadow rounded-4 m-3 p-3'>
                  <div> {data.id}</div>
                  <h1 className='text-center'>{data.tittle}</h1>
                  <img src={data.image} alt='' />
                  <p className='p my-4'> {data.description}</p>
                </div>
              )}
            </div>
          </div>
        </Layout>
      </>
    );
  }
}

export default Article;
