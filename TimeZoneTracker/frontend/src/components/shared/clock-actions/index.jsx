import { useState } from "react";
import ClockForm from "../clock-form";
import classes from './index.module.css'

const index = ({ local = false, clock, updateClock, createClock, deleteClock }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isCreate, setIsCreate] = useState(false)

  const handleClock = (values) => {
    createClock(values);
  };

  return (
    <div className={classes.card}>
      <button onClick={() => setIsEdit(!isEdit)}>Edit</button>
      {local ? <button onClick={() => setIsCreate(!isCreate)}>Create</button> : <button onClick={() => deleteClock(clock.id)}>Delete</button>}
      {isEdit && (
        <>
        <p>Edit Clock</p>
        <ClockForm
          values={clock}
          handleClock={updateClock}
          edit={true}
        />
        </>
      )}
      {isCreate && (
        <>
        <p>Create a new Clock</p>
        <ClockForm
          handleClock={handleClock}
        />
        </>
      )}
    </div>
  );
};

export default index;
