import React, { Component } from 'react';
import './Dropdown.css'
import axios from 'axios';
import {CSVLink} from 'react-csv';

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [{
                label: '',
                value: ''
            }], 
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        let name = event.target.name;
        let id = event.target.id;
        console.log(name);
        let value = event.target.value;
        let options = [...this.state.options];
        if (name === 'label')
            options[id].label = value;
        else
            options[id].value = value;
        this.setState({ options });
    }

   
    handleSubmit(e) {
        e.preventDefault();
        let { options } = this.state;
        let formData ={
            options
        }
        axios.post('http://localhost:5000/app/options',formData)
                    .then( response => {
                            console.log(response);
                            alert("data inserted")
                    } )
                    .catch( error => {
                       console.log(error);
                    } );
    }

    addInputField() {
        let { options } = this.state;
        options.push({ label: '', value: '' });
        this.setState({ options });
    }
    deleteInputField() {
        let { options } = this.state;

        if (options.length > 1) {
            options.splice(-1, 1);
        }
        this.setState({ options });
    }


    render() {
        console.log(this.state);
        return (

            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <form className="form-signin" onSubmit={this.handleSubmit}>


                            <div className="form-group row">
                                <label className="col-sm-12 col-form-label">Dropdown Options</label>
                                <div className="col-sm-12">
                                    <div >
                                        {this.state.options.map((field, index) => {
                                            return (
                                                <div className="row" key={index}>
                                                    {/* <div className="col-sm-"> */}
                                                    <div className="col-sm-5">
                                                        <input key={index} type="text" className="form-control form-control-sm mb-2" name='label' value={field.label} id={index} onChange={this.handleChange} />
                                                    </div>
                                                    <div className="col-sm-5">

                                                        <input key={index} type="text" className="form-control form-control-sm mb-2" name='value' value={field.value} id={index} onChange={this.handleChange} />
                                                    </div>
                                                    <div className="col-sm-2">
                                                        <input type="button" className="btn btn-outline-secondary btn-sm" onClick={this.deleteInputField.bind(this)} value="remove" />
                                                    </div>
                                                </div>
                                            );

                                        })}
                                    </div>
                                    <input type="button" className="btn btn-outline-secondary btn-sm" onClick={this.addInputField.bind(this)} value="Add option" />
                                </div>
                            </div>
                            <CSVLink  data={this.state.options}   className="btn btn-outline-secondary btn-sm mr-2" filename={"test.csv"} >Export</CSVLink>
                            {/* <input type="button" className="btn btn-outline-secondary btn-sm mr-2" onClick={()=>this.convertCSV()} value="Export" /> */}
                            <input className="btn btn-outline-info btn-sm" type="submit" value="Save" />

                        </form>
                    </div>
                </div>
            </div>


        );
    }
}



export default Dropdown