function Books(title,author,pages,read){
this.title = title
this.author = author
this.pages = pages
this.read = read
this.info = function(){
    return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`

}
}

const theHobbit = new Books('The Hobbit','J.R.R','295','NOT READ')

console.log(theHobbit.info())