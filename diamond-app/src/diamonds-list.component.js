import React, { Component } from 'react';
import axios from 'axios';

const Diamond = props => (
    <tr>
        <td>{props.diamond.diamond_carat}</td>
        <td>{props.diamond.diamond_color}</td>
        <td>{props.diamond.diamond_cut}</td>
        <td>{props.diamond.diamond_clarity}</td>
        <td>{props.diamond.diamond_price}</td>
    </tr>
)

export default class DiamondList extends Component {
    constructor(props) {
        super(props);
        this.state = {diamonds: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/diamonds/')
            .then(response => {
                this.setState({ diamonds: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    diamondList() {
        return this.state.diamonds.map(function(currentDiamond, i){
            return <Diamond diamond={currentDiamond} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Diamonds List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Carat</th>
                            <th>Color</th>
                            <th>Cut</th>
                            <th>Clarity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.diamondList() }
                    </tbody>
                </table>
            </div>
        )
    }
}