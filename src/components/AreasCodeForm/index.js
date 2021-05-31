import React, { Component } from 'react';
import './styles.scss';

import FormInput from './../Forms/FormInput';
import Button from './../Forms/Button';

const initialState = {
    areaCode: '',
    errors: []
};

class AreasCodeForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            ...initialState
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        const { name, value } = e.target;

        this.setState({
            [name]: value
        });
    }

    handeleFormSubmit = async event => {
        event.preventDefault();

        const { areaCode } = this.state;

        //Use for validation -- if areas code is only numbers
        // if(80 == 40){
        //     const err = ['Enter only numbers.'];
        //     this.setState({
        //         errors: err
        //     });

        //     return;
        // }

        try {
            //Creating new user in firebase firestore
            // const { user } = await auth.createUserWithEmailAndPassword(email, password);

            // await handleUserProfile( user, {displayName });

            this.setState({
                ...initialState
            });
        } catch(err) {
            
        }
    }

    render() {
        const {areaCode, errors} = this.state;

        return (
            <div className="formWrap">
                {errors.length > 0 && (
                    <ul>
                        {errors.map((err, index) => {
                            return (
                                <li key={index}>
                                    {err}
                                </li>
                            );
                        })}
                    </ul>
                )}
                <form onSubmit={this.handeleFormSubmit}>
                    <FormInput
                        type="text"
                        name="areaCode"
                        value={areaCode}
                        placeholder="Enter Area Code"
                        onChange={this.handleChange}
                    />

                    <Button type="submit">
                        Continue
                    </Button>
                </form>
            </div>
        
        )
    }
}

export default AreasCodeForm;