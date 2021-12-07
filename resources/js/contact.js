$(() => {
  'use strict';

  $('#contact-form').on('submit', function(event){
    event.preventDefault();

    isEmpty($('#name').val(), $('#name').attr('id'), $('#name').attr('name'));
    var email = isEmpty($('#email_address').val(), $('#email_address').attr('id'), $('#email_address').attr('name'));
    email ? '' : validateEmail($('#email_address').val());
    isEmpty($('#subject').val(), $('#subject').attr('id'), $('#subject').attr('name'));
    isEmpty($('#message').val(), $('#message').attr('id'), $('#message').attr('name'));

  });

  $('#btn-reset').on('click', function(){
    $('.form-control').removeClass('is-invalid');
    $('.invalid-feedback').html('');
  });

  function isEmpty(input, id, name){
    let newName = name.replace('_', ' ');
    if  (input == "" || input == null || input == undefined){
      $('#'+id).addClass('is-invalid');
      $('#validate-'+id).addClass('d-block');
      $('#validate-'+id).html('The ' + newName + ' is a required field.');

      return true;
    }else{
      $('#'+id).removeClass('is-invalid');
      $('#validate-'+id).removeClass('d-block');

      return false;
    }
  }

  function validateEmail(email) {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(regexEmail)) {
      $('#email_address').addClass('is-invalid');
      $('#validate-email_address').addClass('d-block');
      $('#validate-email_address').html('Invalid email address.');

      return true;
    }else{
      $('#validate-email_address').removeClass('d-block');

      return false;
    }
  }
});