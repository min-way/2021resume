$(document).ready(function(){
    //   const paths = $("#svgWrap").find("path");
    //   const pathsLength = paths.length;

    //   console.log(pathsLength);

    //   for(let i = 0;i<pathsLength;i++){
    //     const total_length = paths.get(i).getTotalLength();
    //     console.log(total_length);
    //     paths.get(i).style.strokeDasharray = total_length;
    //     paths.get(i).style.strokeDashoffset = total_length;

    //     $(paths.get(i)).animate({"strokeDashoffset":0},2000);
    //   }
      
      $(".card").hover(function(){
          $(this).find(".card-footer").removeClass("hide-card");
          $(this).find(".card-footer").addClass("show-card");
          $(this).find(".card-img-top").addClass("bright50");
        },function(){
            $(this).find(".card-footer").removeClass("show-card");
            $(this).find(".card-footer").addClass("hide-card");
            $(this).find(".card-img-top").removeClass("bright50");
      });
    });
