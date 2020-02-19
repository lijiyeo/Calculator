$(
    function () {
        var $width=$("#width");
        var $height=$("#height");
        var $btnCal=$("#calculate");
        var $perimeter=$("#perimeter");
        var $area=$("#area");
        
        $btnCal.click(function () {
            var w=Number($width.val());
            var h=Number($height.val());

            var p=2*(w+h);
            var a=w*h;
            
            $perimeter.val(p);
            $area.val(a);
            console.log(w*h);
          });
      });