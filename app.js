// submit
let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

	// keywaord
  let keyword = document.getElementById("keyword").value;
  let site = document.getElementById("site").value;
  let file = document.getElementById("file").value;
  let after = document.getElementById("after").value;
  let before = document.getElementById("before").value;
  
  let blog = document.getElementById("blog").value;
  let url = document.getElementById("url").value;
  let title = document.getElementById("tit").value;
  let body = document.getElementById("bd").value;



  let snippet = document.getElementById("snippet").value;


  let qry = [] ;


  // console.log(keyword)
  if (keyword != "") {
    qry.push(keyword)
  }
  if (site != "") {
    qry.push(`site:${url}`)
  } 
  if (file != "") {
    qry.push(`filetype:${file}`)
  } 
  if (before != "") {
    qry.push(`before:${before}`)
  } 
  if (after != "") {
    qry.push(`after:${after}`)
  }
  if (blog != "") {
    qry.push(`blogurl:"${blog}"`)
  } 
  if (url != "") {
    qry.push(`inurl:"${url}"`)
  } 
  if (title != "") {
    qry.push(`intitle:"${title}"`)
  } 
  if (body != "") {
    qry.push(`intext:"${body}"`)
  } 
  if (snippet != "") {
    qry.push(`"${snippet}"`)
  } 
    // else {
  //   // perform operation with form input
  //   alert("This form has been successfully submitted!");
  //   console.log(
  //     `This form has a username of ${username.value} and password of ${password.value}`
  //   );

  //   username.value = "";
  //   password.value = "";
  // }
  
  // let qry1 = `${keyword}`
  // let qry2 = `${keyword} site:"${url}"`
  // let qry3 = `${keyword} site:"${url}"`

  // let target = `${keyword}`
  console.log(qry)
  let surf = qry.join(' ')
  window.open('http://google.com/search?q=' + surf );
});

