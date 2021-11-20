function copyText(){
    var salutation;
    var course_code_txt;
    var course_code_num;
    var course_title;
    if(document.getElementById("sir").checked == true){
        salutation = "Sir,";
    }
    else if(document.getElementById("madam").checked == true){
        salutation = "Madam,";
    }

    course_code_txt = document.getElementById("course_code_txt").value;
    course_code_txt = course_code_txt.toUpperCase();

    course_code_num = document.getElementById("course_code_num").value;
    
    course_title = document.getElementById("course_title").value;


    var output_text = salutation + "\nI am W.M.D.I Wijesundara\nMy Index Number: 192153\nMy Email Address: isurujithwijesundara@gmail.com\n\nI have been assigned to you for the " + course_code_txt + " " + course_code_num + " - " + course_title + " online examination.\nThank you.";

    // navigator.clipboard.writeText(output_text);

    const elem = document.createElement('textarea');
   elem.value = output_text;
   document.body.appendChild(elem);
   elem.select();
   document.execCommand('copy');
   document.body.removeChild(elem);

    alert("Text copied to your clipboard :\n" + output_text);

}