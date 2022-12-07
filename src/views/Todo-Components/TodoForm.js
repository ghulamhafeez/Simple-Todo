import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { onAdd, onUpdate } from "../../reducers/TodoReducer";

export const TodoForm = ({ id, todo, isEditMode }) => {
  const schema = Yup.object().shape({
    todo: Yup.string().required("Name is required"),
  });
  const dispatch = useDispatch();

  const { handleBlur, handleChange, values, handleSubmit, errors } = useFormik({
    initialValues: {
      todo: todo,
    },

    validationSchema: schema,
    onSubmit: (values, { resetForm }) => {
      if (isEditMode) {
        dispatch(onUpdate({ todovalue: values.todo, id: id }));
      } else {
        dispatch(onAdd(values.todo));
      }
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
