import React, { Component } from 'react';
require('dotenv').config()
const axios = require('axios');
const RiotAPI = process.env.REACT_APP_RIOT_API;

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: {},
            query: ""
         }
    }

    searched = (e) => {
        
        axios.get(`https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${this.state.query}?api_key=${RiotAPI}`)
        .then((res) =>{
            this.setState({ data: res.data})
             console.log("DATA STATE", this.state.data)
        })
        .catch((err) => {
            console.log("summoner get request error", err);
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            query: this.input.value
        }, () => {
            if(this.state.query !== "") {
                console.log("QUERY STATE", this.state.query)
                this.searched()
            }
        })
    }    
    componentDidMount() {
        
    }
    render() {
     
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                    placeholder="Summoner's name"
                    type="text" ref={(element) => { this.input = element }}
                    >
                    </input>
                    <button type="submit">Submit</button>
                </form>
            </div>
         );
    }
}
 

//{id: "nxBrj_zaYWSLqxppalAC2R3DySOM4oROGX0jGiESjDRH5EQ", accountId: "typyV4j-h-O89u36Sm8bwnVaeCqiRV7mOVBfbkANF0YIRg", puuid: "-WEPZjr0LYWO5wOpUYfZSZRiSd4VLDv6HTRQvVEsl1RIfChf2AfIPJdg5VLI-LmzFptTuIcVPHxi3w", name: "Rengu", profileIconId: 3796, …}
// accountId: "typyV4j-h-O89u36Sm8bwnVaeCqiRV7mOVBfbkANF0YIRg"
// id: "nxBrj_zaYWSLqxppalAC2R3DySOM4oROGX0jGiESjDRH5EQ"
// name: "Rengu"
// profileIconId: 3796
// puuid: "-WEPZjr0LYWO5wOpUYfZSZRiSd4VLDv6HTRQvVEsl1RIfChf2AfIPJdg5VLI-LmzFptTuIcVPHxi3w"
// revisionDate: 1550957977000
// summonerLevel: 170
export default Search;