export default async function schemaValidator(values, Schema, option) {
  try {
    await Schema.validate(values, { abortEarly: false });
    return {};
  } catch (errors) {
    return errors.inner.reduce((acc, error) => {
      acc[error.path] = error.message;
      return acc;
    }, {});
  }
}
