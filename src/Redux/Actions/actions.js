import {
    ADD_TASK,
    UPDATE_TASK,
    UPDATE_DONE_TASK,
    DELETE_TASK,
  } from "../Constants/actionType";
  
  export let Add_tASK = (payload) => {
    return {
      type: ADD_TASK,
      payload,
    };
  };
  export let update_task = (payload) => {
    return {
      type: UPDATE_TASK,
      payload,
    };
  };
  export let done_task = (payload) => {
    return {
      type: UPDATE_DONE_TASK,
      payload,
    };
  };
  export let delete_task = (payload) => {
    return {
      type: DELETE_TASK,
      payload,
    };
  };