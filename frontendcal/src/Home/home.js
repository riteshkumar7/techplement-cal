import "./home.css"
import React from 'react'
import { Icon } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';
const Home=()=>{
const navigate=useNavigate();

const homeNavigation=()=>{
    navigate("/calculate")
}
    return(
        <div>
            <nav className="cal-container">
                <p className="para1">
                    <img src="./think.png" className="think"/>Team Project
                </p>
                <h1 className="heading">Calculator</h1>
                <ul className="icon">
                <Icon name='twitter' size='large' color='blue'/>
                <Icon name='mail' size='large' color='red'/>
                <Icon name='instagram' size='large' color='orange'/>
                <Icon name='facebook' size='large' color='blue'/>
                </ul>
            </nav>
            <div className="fff">
            <div>
                <table border={0} className="tableimage">
                    <tr>
                        <td>
                            <div>
                                <img src="./first.png" className="t-img"/>
                                <p className="tab-d">Ritesh kushwaha(TL)</p>
                            </div>
                        </td>
                        <td>
                        <div>
                                <img src="./second.png" className="t-img"/>
                                <p className="tab-d">Vedant Dubey</p>
                            </div>
                        </td>
                        <td>
                        <div>
                                <img src="./third.png" className="t-img"/>
                                <p className="tab-d">Uday kumar</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <div>
                                <img src="./fourth.png" className="t-img"/>
                                <p className="tab-d">Ahad khan</p>
                            </div>
                        </td>
                        <td>
                        <div>
                                <img src="./fifth.png" className="t-img"/>
                                <p className="tab-d">Akash rohit</p>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
            <div className="introduction">
            <h3>"Celebrate being part of the Calculator Team Project with a warm welcome!"</h3>
            <p className="para2">
            "The Calculator Team Project aims to develop a versatile and user-friendly calculator application. Our goal is 
            to create a tool that simplifies complex mathematical calculations while offering a sleek and intuitive user 
            interface. Through collaborative efforts and innovative design, we aspire to deliver a reliable and efficient 
            calculator that meets the diverse needs of users across various domains."<br/>Thank you.<br/>Team Web-12
            </p>
            <div className="btn">
            <button className="button" onClick={homeNavigation}>Let's Calculate</button>
            </div>
            </div>

            </div>
        </div>
    )
}
export default Home;