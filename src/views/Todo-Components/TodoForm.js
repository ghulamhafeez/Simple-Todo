import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export const TodoForm = ({ todo, onUpdate, onAdd, isEditMode }) => {
  const schema = Yup.object().shape({
    todo: Yup.string().required("Fill Todo Field"),
  });

  const { handleBlur, handleChange, values, handleSubmit, errors } = useFormik({
    initialValues: {
      todo: todo,
    },

    validationSchema: schema,
    onSubmit: (values, { resetForm }) => {
      isEditMode ? onUpdate(values.todo) : onAdd(values.todo);
      resetForm({ todo: "" });
    },
    enableReinitialize: true,
  });

  return (
    <div>
      <h2 className="display">TODO LIST</h2>

      <form onSubmit={handleSubmit}>
        <div className="input">
          <b>Todo: </b>
          <input
            type="text"
            name="todo"
            value={values.todo}
            onBlur={handleBlur}
            onChange={handleChange}
            className={errors.todo ? "input-error" : null}
          ></input>
          {errors.todo ? <div>{errors.todo}</div> : null}
          {isEditMode ? (
            <button data-testid={"UpdateTest"} type="submit">
              UpDate
            </button>
          ) : (
            <button data-testid={"AddTest"} type="submit">
              Add
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
