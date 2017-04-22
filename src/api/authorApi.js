//mock web api

"use strict";

var authors = require('./authorData').authors;
var _ = require('lodash');

//helper methods
var _generateId = function(author) {
    return author.firstName.toLowerCase() + "-" + author.lastName.toLowerCase();
};

var AuthorApi = {

    getAllAuthors: function() {       
        return authors;
    },

    getAuthorById: function(id) {        
        return _.find(authors, {id: id});
    },

    saveAuthor: function(author) {
        if(!author.id) {
            author.id = _generateId(author);
            authors.push(author);
        }
        return author;        
    },

    deleteAuthor: function(id) {
        _.remove(authors, {id: id});        
    }
};

module.exports = AuthorApi;