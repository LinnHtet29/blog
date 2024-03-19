import * as Yup from "yup";
import { checkDuplicateCategory } from "../services/category.service";

const isNotDuplicateCategory = async (value) => {
  try {
    const response = await checkDuplicateCategory({ data: { value: value } });
    return response.data.data.isNotExit;
  } catch (error) {
    return false;
  }
};

const baseCategorySchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters")
    .test({
      name: "duplicate",
      exclusive: true,
      message: "Name already exists",
      test: async function (value) {
        const result = await isNotDuplicateCategory(value);
        return result;
      },
    }),
});

export const createCategory = baseCategorySchema;
