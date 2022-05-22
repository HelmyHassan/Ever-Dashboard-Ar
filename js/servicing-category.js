$('.maintenance-nav-menu ul li').css('display' , 'block')


function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    var tmppath = URL.createObjectURL(event.target.files[0]);

    reader.onload = function (e) {
      $('#img-uploaded').attr('src', e.target.result);

    }

    reader.readAsDataURL(input.files[0]);
  }
}


$(".uploader").change(function(){
  readURL(this);
});




// function readURL(input) {
//   if (input.files && input.files[0]) {
//     var reader = new FileReader();
//     var tmppath = URL.createObjectURL(event.target.files[0]);

//     reader.onload = function (e) {
//       $('#edit-img-uploaded').attr('src', e.target.result);
      
//     }

//     reader.readAsDataURL(input.files[0]);
//   }
// }


// $(".editUploader").change(function(){
//   readURL(this);
// });


