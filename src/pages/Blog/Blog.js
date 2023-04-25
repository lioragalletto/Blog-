import React, { Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    axios
      .get('https://sabik-5af023.appdrag.site/api/getallBlog', {
        params: {
          AD_PageNbr: '1',
          AD_PageSize: '500'
        }
      })
      .then((response) => {
        console.log(response.data);
        this.setState({ data: response.data.Table });
      });
  }

  render() {
    const { data } = this.state;
    return (
      <>
        <Layout>
          <div className='container'>
            <h1 className='titre'> Mon Blog </h1>
            {data?.map((row) => (
              <Link
                className='text-decoration-none text-dark'
                to={`/article/${row.id}`}
                key={row.id}
              >
                <div className='bg-secondary shadow-lg rouned m-3 p-3'>
                  <h2>{row.tittle} </h2>
                  <img src={row.image} className='img-fluid' alt='' />
                  <p> {row.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </Layout>
      </>
    );
  }
}

export default Blog;

