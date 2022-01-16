import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from 'react-bootstrap-CardGroup'
import axios from "axios"; 
import './Searchbar.css'


class Searchbar extends React.Component{
        state = {
        persons:[]
        } 
        getShowall = (e) => {
            e.preventDefault();
            axios.get('http://karanza.ir:8080/getall').then(res => {
                const persons=res.data
                this.setState({persons})
                console.log(res.data)
            }).catch(err => {
                console.log(err)
            })
        }    
        render() {
            return(
                <div id='searchbar'>
                <form>
                 <button type="submit" id="showall" onClick={(e) => this.getShowall(e)} >ShowAll</button>
                 <input type="text" name='search' id='searchInput' placeholder="Search "/>
                 <button type="submit" id="filter">filter</button>
                </form>
                <ul>
                    {
                    this.state.persons.map( users => {
                            return (
                                <div id="card__profile">
                                    <CardGroup>
                                            <Card>
                                                <Card.Img variant="top" src="holder.js/100px160" />
                                                <Card.Body>
                                                <Card.Title>Card title</Card.Title>
                                                <Card.Text>
                                                    This is a wider card with supporting text below as a natural lead-in to
                                                    additional content. This content is a little bit longer.
                                                </Card.Text>
                                                </Card.Body>
                                                <Card.Footer>
                                                <small className="text-muted">Last updated 3 mins ago</small>
                                                </Card.Footer>
                                            </Card>
                                            <Card>
                                                <Card.Img variant="top" src="holder.js/100px160" />
                                                <Card.Body>
                                                <Card.Title>Card title</Card.Title>
                                                <Card.Text>
                                                    This card has supporting text below as a natural lead-in to additional
                                                    content.{' '}
                                                </Card.Text>
                                                </Card.Body>
                                                <Card.Footer>
                                                <small className="text-muted">Last updated 3 mins ago</small>
                                                </Card.Footer>
                                            </Card>
                                            <Card>
                                                <Card.Img variant="top" src="holder.js/100px160" />
                                                <Card.Body>
                                                <Card.Title>Card title</Card.Title>
                                                <Card.Text>
                                                    This is a wider card with supporting text below as a natural lead-in to
                                                    additional content. This card has even longer content than the first to
                                                    show that equal height action.
                                                </Card.Text>
                                                </Card.Body>
                                                <Card.Footer>
                                                <small className="text-muted">Last updated 3 mins ago</small>
                                                </Card.Footer>
                                            </Card>
                                </CardGroup>
                                    {/* <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={users.profile_image} />
                                        <Card.Body>
                                            <Card.Title>اسم : {users.name}</Card.Title>
                                            <Card.Text>
                                            نام خانوادگی : {users.family}
                                            </Card.Text>
                                            <Card.Text>
                                                سن :{users.age}
                                            </Card.Text>
                                            <Card.Text>شغل : {users.work}</Card.Text>
                                            </Card.Body>
                                        </Card> */}
                                        {/* <li>{users.name}</li>
                                        <li>{users.family}</li>
                                        <li>{users.age}</li>
                                        <li><img src={users.profile_image}></img></li> */}
                                    
                                </div>
                            )
                        })

                    }
               </ul>

            </div>
        )
    }
}   
    
    export default Searchbar