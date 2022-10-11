import React from "react";
import './css/pr.css';
class ApplyJob extends React.Component {
    // Constructor
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false
        };
    }


    // ComponentDidMount is used to
    // execute the code
    componentDidMount() {
        // fetch("https://jsonplaceholder.typicode.com/users")
        fetch("http://localhost:4000/apply")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> wait some time.... </h1> </div>;

        return (
            <div className="App">
                <h1> Fetch data from an api in react </h1> {
                    items.map((item) => (
                        <ol key={item.id} >
                            User_Name: {item.cname},<br />
                            Phone: {item.jp},<br />
                            Phone: {item.rq},<br />
                            Phone: {item.skill},<br />
                            User_Email: {item.rl}<br /><br />
                            <button>Ok</button>
                        </ol>
                    ))
                }
            </div>
        );
    }
}

export default ApplyJob;