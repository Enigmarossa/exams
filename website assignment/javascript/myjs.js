<!--using javascript to make remphoto for homapage-->
let remphoto = 0;
function changePicture(){

  if (remphoto == 0){
    document.getElementById('myImg').src="image/blender.jpeg";
    remphoto = 1;
  }
  else if (remphoto == 1){
    document.getElementById('myImg').src="image/table gas.jpeg";
    remphoto =2;
  }
  else if (remphoto == 2){
    document.getElementById('myImg').src="image/fridge.jpeg";
    remphoto =3;
  }
  else if (remphoto == 3){
    document.getElementById('myImg').src="image/cylinder.jpeg";
    remphoto =4;
  }
  else if (remphoto == 4){
    document.getElementById("myImg").src="image/grill.jpeg";
    remphoto = 0;
  }
}
