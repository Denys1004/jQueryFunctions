// hide description and show when method name is clicked
$('.method_container .hideDiv').hide();
$('.method_container .method_name').click(function(){
    $(this).siblings().toggle();
})

// hide(), show()
$('#hideBtn').click(function(){
    $('#hide_show img').hide();
})
$('#showBtn').click(function(){
    $('#hide_show img').show();
})

// addClass(), removeClass()
$('#addClass button').click(function(){
    if($('#addClass p').hasClass('red')){
        $('#addClass button').html('Add Class');
        $('#addClass p').removeClass('red');
    }else{
        $('#addClass button').html('Remove Class');
        $('#addClass p').addClass('red');
    }
})

// slideToggle()
$('#slideToggle button').click(function(){
    $('#slideToggle img').slideToggle('slow'); 
    if ($("#slideToggle button").html() == 'Hide Image'){
        $("#slideToggle button").html('Show Image');
    }else{
        $("#slideToggle button").html('Hide Image');
    }
})

// append(), remove()
$('#append button#add').click(function(){
    for(i=0; i<$('#append ul').length; i++){
        newItemNum = $('#append ul li').length+1;
        $('#append ul').append('<li>Item ' + newItemNum + '</li>');
        newItemNum++;
    } 
})
$('#append button#remove').click(function(){
    $('#append ul li:last-child').remove();
})

// fadeIn(), fadeOut()
$('#fadeDiv button').click(function(){
    if ($("#fadeDiv button").html() == 'Hide Image'){
        $('#fadeDiv img').fadeOut('slow'); 
        $("#fadeDiv button").html('Show Image');
    }else{
        $('#fadeDiv img').fadeIn('slow'); 
        $("#fadeDiv button").html('Hide Image');
    }
})

// before()
$('#before button#add').click(function(){
        $('#before ul li:first-child').before('<li>New Item</li>')
})
$('#before button#remove').click(function(){
    $('#before ul li:first-child').remove();
})

// attr()
$('#attr img').click(function(){
    let img_1_Path = $(this).attr('alternative_src');
    let img_2_Path = $(this).attr('src');

    $(this).attr('src', img_1_Path);
    $(this).attr('alternative_src', img_2_Path); 
})

// val()
$( "input" )
  .keyup(function() {
    var value = $( this ).val();
    $( "#val p" ).text( value );
  })
.keyup();


// slideUp(), slideDown()
$('#slide_down_Btn').click(function(){
    $('#slide_up_down img').slideUp();
})
$('#slide_up_Btn').click(function(){
    $('#slide_up_down img').slideDown();
})

// getAttribute(), setAttribute()
$('#get_attr button').click(function(){
    let attrImg = document.querySelector('#get_attr img');
    if(attrImg.getAttribute('SRC') == "images/1.jpg"){
        attrImg.setAttribute('src','images/2.jpg' )
    }else{
        attrImg.setAttribute('src','images/1.jpg' )
    }
})








// slideToggle() Show All Categories
$('#slideToggle #show_all').click(function(){
    $('#slideToggle #hidden_categories').slideToggle('slow'); 
    if ($("#slideToggle #show_all").html() == 'Hide all'){
        $("#slideToggle #show_all").html('Show all');
    }else{
        $("#slideToggle #show_all").html('Hide all');
    }
})