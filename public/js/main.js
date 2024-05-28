$(function () {
  $('.frm-contact .txt-phone').inputmask("(99) 99999-9999", { "placeholder": "" });


  $('.frm-contact .btn-send').click(function (e, i) {
    e.preventDefault();
    var payload = getContactPayload();
    var $this = $(this);
    if (payload) {
      $this.prop("disabled", true);
      $.post("/contact", payload, function (data) {
        $.growl.notice({ title: "Mensagem enviada", message: "Seu contato foi enviado com sucesso." });
        $('.frm-contact')[0].reset();
      })
        .fail(function () {
          $.growl.error({ title: "", message: 'Não foi possivel enviar seu contato.<br />Tente novamente mais tarde.' });
        })
        .always(function () {
          $this.prop("disabled", false);
        });
    }
  });

  function getContactPayload() {
    var $form = $('.frm-contact');
    if (!$form.valid())
      return null;

    return {
      action: 'contact',
      'name.full': $form.find('.txt-name').val(),
      email: $form.find('.txt-email').val(),
      phone: $form.find('.txt-phone').val(),
      message: $form.find('.txt-message').val(),
    };
  }

  var options = {
    onsubmit: false,
    onfocusout: false,
    onkeyup: false,
    onclick: false,
    showErrors: function (map, list) {
      $(list).each(function (i, m) {
        $.growl.error({ title: "", message: m.message });
      });
    }
  };
	
  $('.frm-contact').validate(options);
  
});
