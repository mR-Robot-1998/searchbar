import React from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import './Searchbar.css';

class Searchbar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            persons:[],
            currentPage:1,
            postPerpage:3,
        };
        this.handleClick = this.handleClick.bind(this);
    }    
        // create Search and Filter
        getShowall = (e) => {
            e.preventDefault();
            axios.get('http://karanza.ir:8080/getall').then(res => {
                const persons=res.data
                this.setState({persons})
                // console.log(res.data)
            }).catch(err => {
                // console.log(err)
            })
        }
        nameFind = (e) =>{
            let val=e.target.value;
            console.log(val)
            if (val.length > 2){
            axios.get(`http://karanza.ir:8080/search?name=${val}`,{
                headers: {
                    'Content-Type' : "text/html",
                    'charset':"utf-8"

                },
            }).then( res => {
                const persons=res.data
                this.setState({persons})
            })
        }
    }
        familyFind = (e) => {
            let val=e.target.value;
            if (val.length > 2){
                axios.get(`http://karanza.ir:8080/search?family=${val}`,{
                    headers: {
                        'Content-Type' : "text/html",
                        'charset':"utf-8"
    
                    },
                }).then( res => {
                    const persons=res.data
                    this.setState({persons})
                })        }
            }
        
        ageFind = (e) =>{
            let val=e.target.value;
                axios.get(`http://karanza.ir:8080/search?age=${val}`).then( res => {
                    const persons=res.data
                    this.setState({persons})
                })
            
            
        }
        workFind = (e) => {
            let val=e.target.value;
            if (val.length > 2){
                axios.get(`http://karanza.ir:8080/search?work=${val}`).then( res => {
                    const persons=res.data
                    this.setState({persons})
                })
        }
    } 
    // function id page
    handleClick(event) {
        this.setState({
          currentPage: Number(event.target.id)
        });
      }
        render() {
        // create handle pagination
        const  pepole= this.state.persons;
        const currentPage =this.state.currentPage;
        const postPerpage = this.state.postPerpage;

        const indexOfLastTodo = currentPage * postPerpage;
        const indexOfFirstTodo = indexOfLastTodo - postPerpage;
        const currentPersons = pepole.slice(indexOfFirstTodo, indexOfLastTodo);

        const renderPersons = currentPersons.map((todo, index) => {
            return <li key={index}>{todo}</li>;
        });
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(pepole.length / postPerpage); i++) {
            pageNumbers.push(i);
            }
             const renderPageNumbers = pageNumbers.map(number => {
                return (
                  <li
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                  >
                    {number}
                  </li>
                );
              });
            return(
                <div id='searchbar'>
                <form>
                 <button type="submit" id="showall" onClick={(e) => this.getShowall(e)} >نمایش</button>
                 <input type="text"  id='Fname' placeholder="Search Name " onChange={(e)=> this.nameFind(e)}/>
                 <input type="text"  id='Flastname' placeholder="Search last " onChange={(e)=> this.familyFind(e)}/>
                 <input type="text"  id='Fage' placeholder="Search Age " onChange={(e)=>this.ageFind(e)}/>
                 <input type="text"  id='Fwork' placeholder="Search Work " onChange={(e)=>this.workFind(e)}/>
                </form>
                <div id='cont'>
                    {
                        this.state.persons.map( users => {
                            return (
                                
                                    <Card  id='profile' style={{ width: '24rem' }}>
                                        <Card.Img variant="top" src={users.profile_image}/>
                                        <Card.Body>
                                        <Card.Title>نام :  <span>{users.name}</span></Card.Title>
                                        <Card.Text>
                                        <span>نام خانوادگی : </span> {users.family}
                                        </Card.Text>
                                        <Card.Text>
                                        <span>سن  :{users.age}</span>
                                        </Card.Text>
                                        <Card.Text>
                                        <span>شغل :{users.work}</span>
                                        </Card.Text>
                                        </Card.Body>
                                    </Card>
                            )
                        })
                    }
                    {renderPersons}
                    {renderPageNumbers}
                    </div>
            </div>
        )
    }
}   
    
    export default Searchbar