import React, { Component } from 'react';
import Searchbox from './search';
import Profileslist from './Profileslist';
import Filterbutton from './Filterbutton';
import ReactPaginate from 'react-paginate';

import './App.css';



class App extends Component {
    constructor(props){  
        super(props);

        this.state= {
            profiles:[],
            searchfield: '',
            option: '',
            currentPage: 0,
        };

        this.onFilterChange = this.onFilterChange.bind(this);
        this.onChangeSearch = this.onChangeSearch.bind(this);
        this.handlePageClick = this.handlePageClick.bind(this);
    };
    
    componentDidMount(){
        fetch('https://api.enye.tech/v1/challenge/records')
        .then(response=>{
            return response.json();
        })
        .then(users => {
            console.log(users)
            this.setState({profiles:users.records.profiles})
        })
        .catch(e => {
            console.log(e.message);
        });
    };

    onChangeSearch = e => this.setState({searchfield: e.target.value});
    
    onFilterChange = e => {
        this.setState({option: e.target.value});
    };

    handlePageClick=(e)=> {
        let selectedPage=e.selected;
        this.setState({
            currentPage: selectedPage
        })
              
    }
    

    render() { 
        //Destructuring
        const { searchfield, profiles, option,currentPage } = this.state;
             
        const newProfiles = profiles.filter(profile => {
            if(option === ''){
                return true;
            }
            return profile.Gender === option;
        });
     
        const filteredProfiles = newProfiles.filter(profile => profile.FirstName.toLowerCase().includes(searchfield.toLowerCase()));

        const PER_PAGE = 20;
        const offset = currentPage * PER_PAGE;

        const currentPageData = filteredProfiles.slice(offset, offset + PER_PAGE).map((filteredProfiles) => filteredProfiles );
        const pageCount = Math.ceil(filteredProfiles.length / PER_PAGE);
    
        return (
            <div className="tc">
                
                <h1 className="f1" >ENYE PEOPLES RECORDS</h1>
                <div className="center">  
                <Filterbutton filterChange={e => this.onFilterChange(e) } />
                <Searchbox  searchChange={e => this.onChangeSearch(e)}/>
                </div>
                {(profiles.length===0) ? (<h1>LOADING...</h1>):
                    <div>
                      
                <Profileslist profiles={currentPageData}/>
                <ReactPaginate
                previousLabel={"← Previous"}
                nextLabel={"Next →"}
                pageCount={pageCount}
                pageClassName={'page'}
                onPageChange={this.handlePageClick}
                containerClassName={"pagination"}
                previousLinkClassName={"previous"}
                nextLinkClassName={"next"}
                disabledClassName={"pagination__link--disabled"}
                activeClassName={"active"} />
                </div>}
            </div>
        );
    };
};




export default App;