import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Form, Field } from 'redux-form';
import { Link,Redirect } from 'react-router-dom';
import * as actions from '../../actions/index';

class SignUp extends Component{
     constructor(props) {
         super(props);
         console.log('props', props); 
        this.onSubmit = this.onSubmit.bind(this);
        this.renderAlert = this.renderAlert.bind(this);
    }
       onSubmit(props) {
       this.props.signupUser({ email: props.email, password: props.password },this.props.history);   
    }

    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong> Oops</strong> {this.props.errorMessage}
                </div>
            )
        }
       }
    
        render() {
        const { handleSubmit } = this.props;
        return (
            <Form onSubmit={handleSubmit(this.onSubmit)}>
                <h3>Sign Up</h3>
                <Field name="email" type="email" component={renderField} label="email" />
                <Field name="password" type="password" component={renderField} label="Password" />
                <Field name="confirmpassword" type="password" component={renderField} label="Confirm Password" />
                {this.renderAlert()}
                <button className="btn btn-primary" type="submit">Sign Up</button>
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
            {touched &&  ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
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
    if (values.password != values.confirmpassword) {
        errors.password = 'Passwords donot match';
    }
    return errors;
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.error };
}
 
SignUp = reduxForm({
    form: 'signUp',
    validate
})(SignUp)

export default connect(mapStateToProps, actions)(SignUp)
