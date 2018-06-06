function UploadImage()
{
    var fReader = new FileReader();
    fReader.readAsDataURL(document.getElementById("profile-img").files[0]);
    fReader.onloadend = function(event){
        var img = document.getElementById("user-image");
        img.src = event.target.result;
    }


}