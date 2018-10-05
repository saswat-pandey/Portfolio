
var getlnk=document.querySelector(".initial-profile h4");
getlnk.addEventListener("click", function () {
  var navs=document.getElementById('navs').style.display = "block";
  getlnk.style.display="none";
});

var btn=document.getElementById('submitbtn');
btn.addEventListener("click",function(){
  var form=document.getElementById("myform").style.display="block";
  window.scrollTo(0,document.body.scrollHeight);
});

var btn=document.getElementById('cancelMail');
btn.addEventListener("click",function(){
  var form=document.getElementById("myform").style.display="none";
  window.scrollTo(0,0);

});

var btn=document.getElementById('sendMail');
btn.addEventListener("click",function(){
  var link = "mailto:saswat1701@gmail.com"
  + "?subject=" + escape(document.getElementById('subject').value)
  + "&body=" + escape(document.getElementById('body').value);
  window.open(link,'_blank');
});
