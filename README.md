# CustomFormValidations

import this file

#example

#react

import {onlyValidatePassword, onlyValidateEmail} from './common/customValidations';

const email = 'example@mail.com';

const password = 'qwerty1';

cosnt errors={};

error.email = onlyValidateEmail(email);

error.password = onlyValidateEmail(password);
