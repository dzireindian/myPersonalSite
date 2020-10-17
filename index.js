
function Intro() {
$(".nav-in-wrap").remove();
$(".nav-item-wrap").append("<div class = \"nav-in-wrap\"><p>I am a determined and dedicated graduate looking forward to work in a firm with a professional work driven environment where I can utilize and apply my knowledge, skills which would enable me as a fresh graduate to grow while fulfilling organizational goals.</p>");
// $("navbar-nav").append("<a class=\"nav-item nav-link\" href=\"#\">Qualifications</a><a class=\"nav-item nav-link\" href=\"#\">IT Proficiency</a><a class=\"nav-item nav-link\" href=\"#\">Achievements</a><a class=\"nav-item nav-link\" href=\"#\">Contact</a>");
}

function Qual() {
$(".nav-in-wrap").remove();
$(".nav-item-wrap").append("<div class = \"nav-in-wrap\"> <table class=\"table table-dark table-striped\"> <tr> <th>Qualification</th> <th>Board/Institue</th> <th>year</th> <th>percentage</th> </tr> <tr> <td>B.tech</td> <td>S.V University</td> <td>2015-2019</td> <td>65.3%</td> </tr> <tr> <td>Intermediate</td> <td>Narayana Junior College</td> <td>2013-2015</td> <td>77.3%</td> </tr> <tr> <td>SSC</td> <td>Keshava Reddy Concept School</td> <td>2013</td> <td>65.3%</td> </tr> </table></div>");
// $("#nav-item-wrap").load("qual.html");
// $.get('qual.html',function(response){
//     $('#nav-item-wrap').html(response);
//    });
// $(document).ready(function(){
//
//    $('#nav-item-wrap').load("qual.html");
//
// });
// $(".nav-item-wrap").append("<div class = \"nav-in-wrap\"></div>");
}

// function rotateback(mailer){
//   // var element = document.getElementById("submission");
//   console.log(mailer);
//   if(mailer != null)
//   {
//     $(".submission").remove();
//     $("#prof").css({"transform":"rotateY(360deg)","-webkit-transform-style":"preserve-3d","-webkit-transition" : "-webkit-transform 1s"});
//     $(".card").append("<img src=\"https://drudqa.dm.files.1drv.com/y4mQwnEnKt8hit_hCcwNFQzQCz4l1WhTfxdBz3RXiDEkn7On1yknZGcM1l8aHyb8rgm13mdK4Oi3_oG_F7QDmZHvnrgW8-Ynd-WZ448bUKQNkEsC4UN7ZNhEutDs0nPeqXF5PYEjZMsw-Q9degmVXS8NJzO8AV2HMVc7veyx5GZiucyF_830uwA1nQJDdqPkSTCi7DGTwNJMPRu0zQr2GFlBQ?width=480&height=660&cropmode=none\" id=\"myImage\" class=\"card-img-top mx-auto d-block rounded-circle\" alt=\"...\"> <div class=\"card-body w-80 mx-auto\"> <h5><b>Contact Details</b></h5> <p class=\"card-text\"> K.Rohith <br>rohithkalluru@gmail.com <br>Contact No:+91 8686567431 <br>S.V University, Tirupati - 517505</p> </div>");
//   }
// }

function rotate(mail){
  // var element = document.getElementById("submission");
  // console.log(mail);
  // if(mail == null)
  // {
    $("#prof").css({"text-align":"center","transform":"rotateY(360deg)","-webkit-transform-style":"preserve-3d","-webkit-transition" : "-webkit-transform 1s"});
    // $("#myImage").remove();
    // $(".card-body").remove();
    // $(".card").append("<div id=\"submission\" title=\"mail\"><ul>Thanks for visiting my profile website <br>(Use navigation bar to explore more)</ul></div>");
  // }
  // $("#submission").css("transform":"rotateY(180deg)");
}

function facebook()
{
  window.location.href = "https://www.facebook.com/rohith.kalluru";
}

function linkedin()
{
  window.location.href = "https://www.linkedin.com/in/rohith-k-3ab141b0";
}

function github()
{
  window.location.href = "https://github.com/dzireindian";
}

function elevate()
{
  $("#prof").addClass("mdc-elevation--z24");
}

function Prof() {
$(".nav-in-wrap").remove();
$(".nav-item-wrap").append("<div class = \"nav-in-wrap\"><p><b>IT Proficiency :</b></p><ul> <li>Microsoft Office Word</li> <li>Microsoft Office Power Point</li> <li>Internet Browsing</li> <li><b>Coding skills :</b></li> <table class=\"table table-dark\" border=\"1px\"> <tr> <th>Programming Language</th> <th>Proficiency</th> </tr> <tr> <td>C</td> <td>Intermediate</td> </tr> <tr> <td>C++</td> <td>Intermediate</td> </tr> <tr> <td>Java</td> <td>Intermediate</td> </tr> </table> <li><b>Languages Known :</b></li> <table class=\"table table-dark\" border=\"1px\"> <tr> <th>Language</th> <th>Proficiency</th> </tr> <tr> <td>Telugu</td> <td>Expert</td> </tr> <tr> <td>Hindi</td> <td>Intermediate</td> </tr> <tr> <td>English</td> <td>Intermediate</td> </tr> <tr> <td>Tamil</td> <td>Intermediate</td> </tr> <tr> <td>Spanish</td> <td>Beginner</td> </tr> </table></ul></div>");
}

function Achieve() {
$(".nav-in-wrap").remove();
$(".nav-item-wrap").append("<div class = \"nav-in-wrap\"><p><b>ACHIEVEMENTS :</b></p><ul> <li>Published an article in an international Journal (IJERECE - Vol 4,Issue 3,March 2017), ISSN (Online) 2394-6849</li> <li>Qualified in the Jio Digital Champions program and selected as an intern</li> <li>Actively participated in Telecom Essentials Course offered by Ericsson India Global Services Pvt. Ltd</li> <li>Actively participated in BSNL inplant training program</li> <li>Completed a 2-day project based training program on 3D Printing conducted by Skyfi Labs Center, Banglore</li></ul></div>");
}

function Contacts() {
$(".nav-in-wrap").remove();
$(".nav-item-wrap").append("<div class = \"nav-in-wrap\"><p>Test Contacts</p></div>");
}
