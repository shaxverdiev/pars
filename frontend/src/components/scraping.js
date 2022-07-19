import axios from "axios";
import React from 'react';  
  

export default class Scraping extends React.Component {
  constructor(props) {
    super(props)
    // get param value
    this.routeParam = props.match.params.search;
    console.log(this.routeParam)

    
    // fetch(`http://localhost:4040/${this.routeParam}`).then(res => res.json()).then(res => console.log(res))

    // constructor for data
    this.state = {
      amazon: [],
      ebay: []
    };
  } 
  componentDidMount() {
    

    // get data
    this.getUsers();  
  } 
  getUsers = async () => {
    // request data from server
    let res = await axios.get(`http://localhost:4040/${this.routeParam}`)
    let { data } = res; 
    // set data
    this.setState({ amazon: data.amazon, ebay: data.ebay });
  };

  render() {
    return (
      <div>
        {/* Message for user */}
        {this.state.amazon.length === 0 ? ( 
          <div className="msg"> 
            <div className="circle"></div>
            {/* <div>Please wait</div> */}
          </div>
        ) : (
        <div className="main"> 
          {/* listing data with map function
          <div className="amazon"> 
            <ul className="list-group">
              {this.state.amazon.map(s => (
                <li className="list-group-item">
                  <img src={`${s.img}`} class="rounded float-right" alt="..."/> 
                  <h1 id="amazon_title">Amazon</h1>
                  <h3>{s.name}</h3>
                  <p>{s.price}</p>
                  <a id="url" href={`${s.url}`} target="_blank" rel="noopener noreferrer"> 
                  <svg className="bi bi-arrow-right-circle-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8.354 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L9.793 7.5H5a.5.5 0 0 0 0 1h4.793l-2.147 2.146z"/>
                  </svg>  Item url
                  </a>
                </li>
              ))}
            </ul> 
          </div> */}

          <div className="ebay"> 
            <ul className="list-group">
                {this.state.ebay.map(s => (
                  <li className="list-group-item"> 
                    <h1 id="ebay_title">Ebay</h1>
                    <img src={`${s.img}`} class="rounded float-right" alt="..."/>
                    <h3>{s.name}</h3>
                    <p>{s.price}</p>
                    <a id="url" href={`${s.url}`}> 
                    <svg className="bi bi-arrow-right-circle-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8.354 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L9.793 7.5H5a.5.5 0 0 0 0 1h4.793l-2.147 2.146z"/>
                    </svg>  Item url
                    </a>
                  </li>
                ))}
            </ul> 
          </div> 
        </div> 
        )}
      </div> 
    );
  }
}
 