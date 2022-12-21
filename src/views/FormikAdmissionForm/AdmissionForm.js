import React from "react";
import { Formik, useFormik } from "formik";
import { CourseOptions, SubjectOptions } from "./constant";
export const AdmissionForm = () => {
  const {
    handleBlur,
    handleChange,
    setFieldValue,
    values,
    handleSubmit,
  } = useFormik({
    initialValues: {
      date: "",
      name: "",
      fatherName: "",
      cnic: "",
      mobileNo: "",
      email: "",
      gender: "",
      courseSelect: "",
      subjectSelect: "",
      file: "",
      check: false,
    },

    onSubmit: (values) => {
      console.log("values", values);
    },
  });

  return (
    <Formik>
      <form onSubmit={handleSubmit}>
        <div>
          <h2>Student Info</h2>
          <div>
            {" "}
            <label>
              <b>Date</b>
            </label>
            <input
              type="date"
              name="date"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.date}
            />
          </div>

          <label>
            <b>Full Name:</b>
          </label>
          <input
            type="text"
            name="name"
            value={values.name}
            onBlur={handleBlur}
            onChange={handleChange}
          ></input>
          <label>
            <b>Father Name:</b>
          </label>
          <input
            type="text"
            name="fatherName"
            value={values.fatherName}
            onBlur={handleBlur}
            onChange={handleChange}
          ></input>
          <label>
            <b>CNIC:</b>
          </label>
          <input
            type="number"
            name="cnic"
            value={values.cnic}
            onBlur={handleBlur}
            onChange={handleChange}
          ></input>
          <div>
            <label>
              <b>Mobile No:</b>
            </label>
            <input
              type="number"
              name="mobileNo"
              value={values.mobileNo}
              onBlur={handleBlur}
              onChange={handleChange}
            ></input>
            <label>
              <b>Email:</b>
            </label>
            <input
              type="email"
              name="email"
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
            ></input>
          </div>
          <br></br>
          <hr></hr>

          <div id="my-radio-group">
            <b>Gender:</b>
          </div>
          <div role="group" aria-labelledby="my-radio-group">
            <label for="male">Male</label>
            <input
              type="radio"
              id="Male"
              name="gender"
              value="Male"
              onChange={(e) => {
                handleChange(e);
                setFieldValue(e.target.value);
              }}
            />
              <label for="female">Female</label> {" "}
            <input
              type="radio"
              id="Female"
              name="gender"
              value="Female"
              onChange={(e) => {
                handleChange(e);
                setFieldValue(e.target.value);
              }}
            />
              <label for="other">Other</label> {" "}
            <input
              type="radio"
              id="Other"
              name="gender"
              value="Other"
              onChange={(e) => {
                handleChange(e);
                setFieldValue(e.target.value);
              }}
            />
             {" "}
          </div>

          <div>
            <b>Course Select: </b>
            <select
              name="courseSelect"
              value={values.courseSelect}
              onChange={handleChange}
            >
              {CourseOptions.map((x) => {
                <option> Select</option>;
                return <option value={x.value}>{x.name}</option>;
              })}
            </select>
            <b>Subject Select: </b>
            <select
              name="subjectSelect"
              value={values.subjectSelect}
              onChange={handleChange}
            >
              {SubjectOptions.map((x) => {
                <option> Select</option>;
                return <option value={x.value}>{x.name}</option>;
              })}
            </select>
          </div>
          <div>
            {" "}
            <label>
              <b>Attected document</b>
            </label>
            <input
              id="file"
              name="file"
              type="file"
              onChange={(event) => {
                setFieldValue("file", event.currentTarget.files[0]);
              }}
            />
          </div>
          <label>Ready to Click on Submit Button</label>
          <input
            type="checkbox"
            onChange={(e) => {
              handleChange(e);
              setFieldValue(e.target.checked);
            }}
          ></input>

          <div>
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </Formik>
  );
};
