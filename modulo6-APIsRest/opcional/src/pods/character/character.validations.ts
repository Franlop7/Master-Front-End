import { ValidationSchema, Validators } from '@lemoncode/fonk';
import { createFormikValidation } from '@lemoncode/fonk-formik';

const validatorType = 'ACCEPTED_VALUES_VALIDATOR';
export const acceptedValuesValidator = (fieldValidatorArgs) => {
  const { value, customArgs } = fieldValidatorArgs;
  const validationResult = {
    succeeded: false,
    type: validatorType,
    message: `El valor debe ser igual a algunos de ellos: ${customArgs.join(', ')}`,
  };
  if (customArgs.includes(value)) {
    validationResult.succeeded = true;
    validationResult.message = '';
  }
  return validationResult;
};

const StatusList = ['Alive', 'Dead', 'unknown'];
const GenderList = ['Male', 'Female', 'Genderless', 'unknown'];

const validationSchema: ValidationSchema = {
  field: {
    name: [Validators.required],
    status: [
      {
        validator: acceptedValuesValidator,
        customArgs: StatusList,
      },
    ],
    gender: [
      {
        validator: acceptedValuesValidator,
        customArgs: GenderList,
      },
    ],
    species: [Validators.required],
    origin: [Validators.required],
  },
};

export const formValidation = createFormikValidation(validationSchema);
