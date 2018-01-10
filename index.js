fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, iteratee) {
      for (i in collection) {
        iteratee(i)
      }
      return collection
    },

    map: function(collection, iteratee) {
      let a;
      switch (collection.constructor){
      case Object:
        a = {}
        break

        case Array:
        a = []
        break;
        default:
        throw "Must be object or array"
      }
      let newCollection = Object.assign(a, collection)
      for (i in newCollection) {
        newCollection[i] = iteratee(newCollection[i])
      }
      return newCollection
    },

    reduce: function(collection, iteratee, acc) {
      let counter = acc;
      for (let i in collection){
        counter = iteratee(counter,collection[i],collection)
      }
      return counter
    },

    find: function(collection, predicate) {
      for (let i in collection) {
        if (predicate(collection[i]) === true) {
          return collection[i]
        }
      }
    },

    filter: function(collection, predicate) {
      let newCollection;
      switch (collection.constructor){
      case Object:
        newCollection = {}
        break

        case Array:
        newCollection = []
        break;
        default:
        throw "Must be object or array"
      }
      for (i in collection) {
        if (predicate(collection[i]) === true) {
          newCollection[i] = collection[i]
        }
      }
      return newCollection
    },

    size: function(collection) {
      let counter = 0
      for (i in collection){
        counter++
      }
      return counter
    },

    first: function(array, n) {
      n ? n : n = 1
      return array.slice(0,n)
    },

    last: function(array, n) {
      n ? n : n = 1
      return array.slice(-n)
    },

    compact: function(array) {
      let newArray = [];
      for (i in array) {
        if (Boolean(array[i])) {
          newArray.push(array[i])
        }
      }
      return newArray
    },

    sortBy: function(array, iteratee) {
      let newArray = Object.assign([],array)
      newArray.sort(iteratee)
      return newArray
    },

    flatten: function(array, shallow) {


      let newArray = []
      for (i in array) {
        while (array[i].constructor === Array)
          [].concat(...array)
      }
    },

    functions: function() {

    },

    functions: function() {

    },

    functions: function() {

    },

    functions: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
