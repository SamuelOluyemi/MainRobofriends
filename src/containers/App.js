import React, {Component} from 'react';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/scroll';
import './App.css';

//smart components
class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }


    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response=> {
    //         return response.json();
    //     })
    //     .then(users => {
    //         this.setState({robots: users})
    //     })
        
    // }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users => this.setState({robots: users}))
    }
    
        
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        
    }
    render() {
        let {robots, searchfield} = this.state;
        let filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robots.length ?
         <h1 className='tc'>Loading</h1> :
            (
                <div className='tc'>
                    <h1 className='f1'>Robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <Cardlist robots={filteredRobots} />
                    </Scroll>
                    
                </div>
            );
    }
}

    
export default App;

//lifecycle methods/ hooks in react
// constructor()
//componentWillMount()
//render()
//componentDidMount()


// if (robots.length === 0) {
//     return <h1 className='tc'>Loading</h1>
// } else {
//     return (
//         <div className='tc'>
//             <h1 className='f1'>Robofriends</h1>
//             <SearchBox searchChange={this.onSearchChange}/>
//             <Scroll>
//                 <Cardlist robots={filteredRobots} />
//             </Scroll>
            
//         </div>
//     );
// }