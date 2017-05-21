import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Form, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import * as actions from '../../actions/index';

class SignIn extends Component {
    constructor(props) {
        super(props);
        console.log("INIT ", props);
        this.onSubmit = this.onSubmit.bind(this);
       
    }
    onSubmit(props) {
        
        this.props.signinUser({ email: props.email, password: props.password });
        // this.props.history.push('/protected');    
         
    }


    render() {
        const { handleSubmit } = this.props;
        return (
            <Form onSubmit={handleSubmit(this.onSubmit)}>
                <h3>Sign In</h3>
                <Field name="email" type="email" component={renderField} label="email" />
                <Field name="password" type="password" component={renderField} label="Password" />
                <button className="btn btn-primary" type="submit">Sign In</button>
                <Link to="/" className="btn btn-danger">Back</Link>
            </Form>

        );
    }
}

const renderField = ({ input, label, type, meta: { touched, invalid, error, warning } }) => (
    <div className={`form-group ${touched && invalid ? 'has-error' : ''}`}>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} className="form-control" />
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
)

function validate(values) {
    const errors = {};

    if (!values.email) {
        errors.email = 'Enter email';
    }
    if (!values.password) {
        errors.password = 'Enter password';
    }
    return errors;
}

//connect arguments(mapState,mapDispatch)
//reduxForm arguements (config, mapState,mapDispatch)

// export default reduxForm({
//     form: 'SignInForm'
// },null,{createPost})(SignIn);

SignIn = reduxForm({
    form: 'signIn',
    validate
})(SignIn)

export default connect(null, actions)(SignIn)

