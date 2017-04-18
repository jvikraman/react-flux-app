//mock web api

"use strict";

var authors = require('./authorData').authors;
var _ = require('lodash');

//helper methods
var _generateId = function(author) {
    return author.firstName.toLowerCase() + "-" + author.lastName.toLowerCase();
};

var _clone = function(item) {
    return JSON.parse(JSON.stringify(item));
};

var AuthorApi = {

    getAllAuthors: function() {
        return _clone(authors);
    },

    getAuthorById: function(id) {
        var author = _.find(authors, {id: id});
        return _clone(author);
    },

    saveAuthor: function(author) {
        if(author.id) {
            var existingAuthorIdx = _.indexOf(authors, _.find(authors, {id: id}));
            authors.splice(existingAuthorIdx, 1, author);
        } else {
            author.id = _generateId(author);
            authors.push(author);
        }
        console.log("Author saved!");
        return _clone(author);
    },

    deleteAuthor: function(id) {
        _.remove(authors, {id: id});
        console.log("Author deleted!");
    }
};

module.exports = AuthorApi;