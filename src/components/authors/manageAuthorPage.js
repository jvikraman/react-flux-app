"use strict";

var React = require('react');
var Router = require('react-router');
var AuthorForm = require('./authorForm');
var AuthorApi = require('../../api/authorApi');
var toastr = require('toastr');

var ManageAuthorPage = React.createClass({

	//required to do custom route transitions
	mixins: [
		Router.Navigation
	],

	//setting up initial state
	getInitialState: function() {
		return {
			author: {id: '', firstName: '', lastName: ''},
			errors: {}
		};
	},

	//custom fn to keep the state in sync
	setAuthorState: function(event) {
		var field = event.target.name;
		var value = event.target.value;
		this.state.author[field] = value;
		return this.setState({author: this.state.author});
	},

	//custom validation routine
	authorFormIsValid: function() {
		var formIsValid = true;
		this.state.errors = {}; //clear out any previous errors

		//validate both the first & last name fields
		if(this.state.author.firstName.length < 3) {
			this.state.errors.firstName = 'First name must be at least 3 characters!';
			formIsValid = false;
		}

		if(this.state.author.lastName.length < 3) {
			this.state.errors.lastName = 'Last name must be at least 3 characters!';
			formIsValid = false;
		}

		this.setState({errors: this.state.errors});
		return formIsValid;
	},

	//custom fn to save the author
	saveAuthor: function(event) {
		event.preventDefault(); //to prevent the default submit event

		//do some validation before saving author data
		if(!this.authorFormIsValid()) {
			return;
		}

		AuthorApi.saveAuthor(this.state.author);
		toastr.success("Author saved!"); //display a toastr message
		this.transitionTo('authors'); //transition to the named route after the save
	},

	render: function() {
		return (			
			<AuthorForm 
			author={this.state.author}
			onChange={this.setAuthorState}
			onSave={this.saveAuthor}
			errors={this.state.errors}/>
		);
	}
});

module.exports = ManageAuthorPage;