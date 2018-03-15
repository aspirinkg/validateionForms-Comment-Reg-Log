

$(document).ready(function () {

	//Comment form validation
	; (function () {

	commentFormValidation = {
		init() {
			this._setUpListeners();
			this.createErrorBlock();
		},

		_setUpListeners() {
			$('.button').on('click', this.toggleErorr);
		},

		toggleErorr(e) {
			e.preventDefault();
			const error = $('.error');
			const textarea = $('.textarea').val().trim();

			textarea == '' ? error.fadeIn() : error.fadeOut(() => $('form').submit());


		},

		createErrorBlock() {
			const form = $('form'),
				  textarea = $('textarea.textarea').attr('data-error');
			
			let beforeElem = $('textarea.textarea'),
				error = $('<div class="error">Комментарий не может быть пустым.</div>');

			beforeElem.before(error);

		}//--createErrorBlock()

		


	}//--commentFormValidation()
	// commentFormValidation.init();
	}())
	//---------->

	//login form validation
		; (function () {
			logInFormValidation = {//login obj
				_isValid: true,

				init() {
					this._setUpListeners();
					this.createErrorBlock();

				},//--init()

				_setUpListeners() {
					$('#submit').on('click', this._validate);
				},//--_setUpListeners()

				_validate(e) {

					e.preventDefault();
					let email = $('input[type=text]', 'form').val().trim(),
						password = $('input[type=password]', 'form').val().trim(),
						errorEmail = $('#errorEmail', 'form'),
						errorFormatEmail = $('#errorFormatEmail', 'form'),
						errorPassword = $('#errorPassword', 'form'),
						errorPassEmail = $('#errorPassEmail', 'form'),
						error = $('#error', 'form'),
						valid = true;

					if (email == 'mail@mail.ru' || (email == 'mail@mail.ru' && password == '123')) {
						
						errorPassEmail.fadeIn();
						valid = false;
					}
					else{
						errorPassEmail.fadeOut();
					}





					if (email == '') {
						errorEmail.fadeIn();
						valid = false;
					} else {
						errorEmail.fadeOut();
						let checkEmail = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;

						if (checkEmail.test(email)) {
							errorFormatEmail.fadeOut();
						}
						else{
							errorFormatEmail.fadeIn();
							valid = false;
						}

					}

					if (password == '') {
						errorPassword.fadeIn();
						valid = false;
					} else {
						errorPassword.fadeOut();

					}



					this._isValid = valid;
					if (this._isValid) {
						$('form').submit();
					}

				},//--_validate()

				createErrorBlock() {
					const form = $('form'),
								emailErrorTooltip = $('input[type=text]', 'form').attr('data-error'),
								errorFormatEmailTooltip = $('input[type=text]', 'form').attr('data-notValid'),
								passwordErrorTooltip = $('input[type=password]', 'form').attr('data-pass-error'),
								errorPassEmailTooltip = $('input[type=text]', 'form').attr('data-errorPassEmail');
	
								
					let beforeElem = $('input[type=text]', 'form'),
									errorEmailBlock = $('<div id="errorEmail" class="error">' + emailErrorTooltip + '</div>'),
									errorFormatEmail = $('<div id="errorFormatEmail" class="error">' + errorFormatEmailTooltip + '</div>'),
									errorPassword = $('<div id="errorPassword" class="error">' + passwordErrorTooltip + '</div>'),
									errorPassEmail = $('<div id="errorPassEmail" class="error error--with-desc">'+ errorPassEmailTooltip +'</div>');
									
	
					beforeElem.before(errorEmailBlock, errorFormatEmail, errorPassword,errorPassEmail);

				}//--createErrorBlock()


			}//--login obj

			// logInFormValidation.init(); 
		}());
		//---------->

	(function () {
		const registationFormValidation = {
			_isValid: true,
			init() {
				this._setUpListeners();
				this.createErrorBlock();
			},

			_setUpListeners() {
				$('#submit').on('click', this._validation);
			},

			_validation() {
				let email = $('input[type=text]').val().trim(),
					password = $('input[type=password]').val().trim(),
					errorEmail = $('#errorEmail'),
					errorFormatEmail = $('#emailNotValid'),
					errorPassword = $('#errorPassword'),
					emailIsBusy = $('#emailIsBusy'),
					valid = true;

				//ошибка занятости email
				if (email == 'mail@mail.ru') {
					$('.error-description').fadeIn();
					emailIsBusy.fadeIn();
					valid = false;
				}
				else {
					emailIsBusy.fadeOut();
					$('.error-description').fadeOut();
				}
				//-------->


				// switch (email) {
				// 	case '':
				// 		errorEmail.fadeIn();
				// 		valid = false;


				// }

				// проверка email на заполненость
				if (email == '') {
					errorEmail.fadeIn();
					valid = false;
				}
				else {
					errorEmail.fadeOut();
					let checkEmail = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
					if (checkEmail.test(email)) {
						errorFormatEmail.fadeOut();
					}
					else{
						errorFormatEmail.fadeIn();
						valid = false;
					}

				}
				//------>


				// Проверка пароля
				if (password == '') {
					errorPassword.fadeIn();
					valid = false;
				} else {
					errorPassword.fadeOut();

				}
				// ----->

				//SUBMIT
				this._isValid = valid;
				if (this._isValid) {
					$('form').submit();
				}
				//---->
			},

			createErrorBlock() {
				const form = $('form'),
							emailErrorTooltip = $('input[type=text]', 'form').attr('data-error'),
							emailNotValidTooltip = $('input[type=text]', 'form').attr('data-notValid'),
							passwordErrorTooltip = $('input[type=password]', 'form').attr('data-pass-error');


				let beforeElem = $('.error-description');
								errorEmailBlock = $('<div id="errorEmail" class="error">' + emailErrorTooltip + '</div>');
								emailNotValid = $('<div id="emailNotValid" class="error">' + emailNotValidTooltip + '</div>');
								errorPassword = $('<div id="errorPassword" class="error">' + passwordErrorTooltip + '</div>');
								emailIsBusy = $('<div id="emailIsBusy" class="error error--with-desc">Данный email уже занят</div>');

				beforeElem.after(errorEmailBlock, emailNotValid, errorPassword, emailIsBusy);
			}
		}

		registationFormValidation.init();

		
	}())

});


