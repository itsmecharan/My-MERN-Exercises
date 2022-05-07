let books:any=[];
for(let i=0;i<localStorage.length;i++){
  let bookname=localStorage.key(i);
  let book=JSON.parse(localStorage.getItem(bookname));
  books.push(book);
}

function displayTable(books:any[],table){
  
  table.innerHTML=`<tr>
  <th>Id</th>
  <th>Title</th> 
  <th>Author</th>
  <th>Price</th>
  <th>Rating</th>
  <th>Details</th>
  <th>Action</th>
</tr>`;
  for(let i=0;i<books.length;i++){
    let row =  `<tr id="row-${i+1}">
<td>${books[i].bookid}</td>
<td>${books[i].booktitle}</td>
<td>${books[i].bookauthor}</td>
<td>${books[i].bookprice}</td>
<td>${books[i].bookrating}</td>
<td>${books[i].bookdetails}</td>
<td><button class="delete-button" type="button" 
id="row-${i+1}" onclick="x.deleteRow(${books[i].bookid})">delete</button></td>
</tr>`

if(table != null){
  table.innerHTML+=row;
}
  }
}


if(document.getElementById("displaybooks")){
  document.getElementById("booklist").innerHTML="Book List";
  displayTable(books,document.getElementById("displaybooks"));
}

window.x={deleteRow}


 function deleteRow(bookid:number){
  for(let x=0;x<books.length;x++){
    if(bookid == books[x].bookid){
      let bookname=localStorage.key(x);
      localStorage.removeItem(bookname);
      location.reload();
    }
  }
  displayTable(books,document.getElementById("displaybooks"));
}

//Add Books to Local Storage
let addbooksbtn=document.getElementById("addbooksbtn") as HTMLButtonElement;
if(addbooksbtn != null ){
addbooksbtn.onclick= function (){
    let bookid=document.getElementById("bookid") as HTMLInputElement;
    let booktitle=document.getElementById("booktitle") as HTMLInputElement;
    let bookauthor=document.getElementById("bookauthor") as HTMLInputElement;
    let bookrating=document.getElementById("bookrating") as HTMLInputElement;
    let bookprice=document.getElementById("bookprice") as HTMLInputElement;
    let bookdetails=document.getElementById("bookdetails") as HTMLInputElement;
    if(bookid.value != "" && booktitle.value != "" && bookauthor.value != ""
      && bookrating.value != "" && bookprice.value != "" && bookdetails.value != "")
      {
       let myObj=
       {
            bookid:bookid.value,
            booktitle:booktitle.value,
            bookauthor:bookauthor.value,
            bookrating:bookrating.value,
            bookprice:bookprice.value,
            bookdetails:bookdetails.value
      }
      let myObj_serialized=JSON.stringify(myObj);
           localStorage.setItem(`${booktitle.value}`,myObj_serialized);
           document.getElementById("added").innerHTML="Book Added"
      }
    else
    {
      document.getElementById("error message").innerHTML="Enter the all details!";
    }
}
}

//Search Books
let searchbtn=document.getElementById("searchbtn") as HTMLButtonElement;
if(searchbtn != null)
{
    searchbtn.onclick=(() =>{
        if(document.getElementById("displaybooks")){
        document.getElementById("displaybooks").style.display="none";
            }
        if(document.getElementById("booklist")){
        document.getElementById("booklist").style.display="none";
            }
        if(document.getElementById("searchedbooks")){
        document.getElementById("searchedbooks").style.display="inline-block";
            }
        if(document.getElementById("displaySearchedBooks")){
        document.getElementById("displaySearchedBooks").style.display="inline-block";
            }
        if(document.getElementById("notfound")){
        document.getElementById("notfound").style.display="none";
            }

        let searchedinput=document.getElementById("searchedtxt") as HTMLInputElement;
        let opt = (document.getElementById("select1")as HTMLSelectElement).selectedIndex;
        let s=document.getElementsByTagName("option")[opt].text;
        if(searchedinput.value != "")
          {
            let books=[];
            if(s == "Id Search"){
              books=searchBooksByValue(searchedinput.value,s);
              displaySearchedBooks(books);
              }
            if(s == "Title Search"){
              books=searchByText(searchedinput.value,s);
              displaySearchedBooks(books);
              }
            if(s == "Book by Author"){
              books=searchByText(searchedinput.value,s);
              displaySearchedBooks(books);
              }
            if(s == "Min Rating"){
              books=searchBooksByValue(searchedinput.value,s);
              displaySearchedBooks(books);
              }
            if(s == "Min Price"){
              books=searchBooksByValue(searchedinput.value,s);
              displaySearchedBooks(books);
              }
            if(s == "Max Price"){
              books=searchBooksByValue(searchedinput.value,s);
              displaySearchedBooks(books);
              }
          }
        else
          {
            if(document.getElementById("displaybooks")){
              document.getElementById("displaybooks").style.display="block";
              }
            if(document.getElementById("booklist")){
             document.getElementById("booklist").style.display="block";
              }
          }

          });
}
function displaySearchedBooks(temp:any[])
{
  if(temp.length != 0)
  {
    const table=document.getElementById("displaySearchedBooks");
    document.getElementById("searchedbooks").innerHTML="Searched Books:"
    if(document.getElementById("displaySearchedBooks"))
    {
      displayTable(temp,document.getElementById("displaySearchedBooks"));
    }
  
  }
  else
  {
    document.getElementById("notfound").innerHTML="No records found!";
    if(document.getElementById("notfound"))
    {
      document.getElementById("notfound").style.display="block";
    }
    if(document.getElementById("searchedbooks"))
    {
      document.getElementById("searchedbooks").style.display="none";
    }
    if(document.getElementById("displaySearchedBooks"))
    {
      document.getElementById("displaySearchedBooks").style.display="none";
    }
  }
}

//search books by title search, book by author
function searchByText(text:string,searchby:string)
{
  let searchedBooks=[];
  // let isthere:boolean;
  let searchedtext=text.toLowerCase()
  
    for(let i=0;i<books.length;i++)
    {
      if(searchby === "Title Search")
        {
          let title=books[i].booktitle.toLowerCase()

          let isthere=textSearcher(title,searchedtext);
          if(isthere)
            {
              searchedBooks.push(books[i]);
            }
        }
  
      if(searchby == "Book by Author")
        {
          let author=books[i].bookauthor.toLowerCase()
          let isthere=textSearcher(author,searchedtext);
          if( isthere)
            {
              searchedBooks.push(books[i]);
            }
        }
  }
  return searchedBooks;

}

//Search Books by min rating, maximum price, minimum price,Book Id
function searchBooksByValue(value:string,searchby:string)
{
  let searchedbooks =[];
  for(let i=0;i<books.length;i++)
  {
    if(searchby == "Id Search")
    {
      let id=books[i].bookid;
      if(id == JSON.parse(value))
      {
        searchedbooks.push(books[i]);
      }
    }
    if(searchby == "Min Rating")
    {
      let minimumRating=books[i].bookrating;
      if(minimumRating >= JSON.parse(value))
      {
          searchedbooks.push(books[i]);
      }
    }

    if(searchby == "Min Price")
    {
      let minimumPrice=books[i].bookprice;
      if(minimumPrice >= JSON.parse(value))
      {
          searchedbooks.push(books[i]);
      }
    }
    if(searchby == "Max Price")
    {
      let maximumPrice=books[i].bookprice;
      if(maximumPrice <= JSON.parse(value))
      {
          searchedbooks.push(books[i]);
      }
    }
  }
  return searchedbooks;
}

function textSearcher(fulltext,searchedtext){
  let p= fulltext.length;         
  let q = searchedtext.length;         
  let count = 0; 
  
  for (let i = 0; i <= p - q; i++) { 
      let j;             
      for (j = 0; j < q; j++) { 
          if (fulltext.charAt(i + j) != searchedtext.charAt(j)) { 
              break; 
          } 
      } 
      if (j == q) {                 
          count++;                 
          j = 0;                 
      }             
  }  
  
  if(count>0){
    return true;
  }
  else{
    return false;
  }
  
}



    
 
