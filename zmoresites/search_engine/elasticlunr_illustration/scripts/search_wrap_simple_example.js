console.log("start the script, go...")

//Elasticlunr.js === Simple initialization
//[1] A very simple search index can be created using the following scripts:
var index = elasticlunr(function () {
  this.addField('title');
  this.addField('body');
  this.setRef('id');
});

//[2] Adding documents to the index is as simple as:
var doc1 = {
  "id": 1,
  "title": "Oracle released its latest database Oracle 12g",
  "body": "Yestaday Oracle has released its new database Oracle 12g, this would make more money for this company and lead to a nice profit report of annual year."
}

var doc2 = {
  "id": 2,
  "title": "Oracle released its profit report of 2015",
  "body": "As expected, Oracle released its profit report of 2015, during the good sales of database and hardware, Oracle's profit of 2015 reached 12.5 Billion."
}

index.addDoc(doc1);
index.addDoc(doc2);

// //[3] Then searching is as simple:
// var returnVar = index.search("Oracle database profit");

//[3] could do query-time boosting by passing in a configuration.
var returnVar = index.search("Oracle database profit", {
  "fields": {
      "title": {"boost": 2},
      "body": {"boost": 1}
  },
  "boolean": "OR"
});

console.log(returnVar)

// => This returns a list of matching documents with a score of how closely they match the search query:
// [{
//   "ref": 1,
//   "score": 0.5376053707962494
// },
// {
//   "ref": 2,
//   "score": 0.5237481076838757
// }]

//If user do not want to store the original JSON documents, they could use the following setting:
// var index = elasticlunr(function () {
//   this.addField('title');
//   this.addField('body');
//   this.setRef('id');
//   this.saveDocument(false);
// });


console.log("end the script, done...")