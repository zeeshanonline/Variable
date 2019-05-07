console.log("1");
var Book = {
    Name: "The Odyssey",
    Author: "Homer",
    Published: "1842",
    Category: "Epic Poetry",

    Book: function(){
        console.log("Name: "+ this.Name +"\n"+ "Author: "+ this.Author +"\n"+ "Published: "+ this.Published +"\n"+ "Category: "+  this.Category)
    }

}
Book.Book();