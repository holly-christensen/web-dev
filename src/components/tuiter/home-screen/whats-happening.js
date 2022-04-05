import React, {useState} from "react";
import {useDispatch} from "react-redux";

const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening]
      = useState("What's Happening?");
  const dispatch = useDispatch();
  const tuitClickHandler = () => {
       dispatch({type: 'create-tuit',
         tuit: whatsHappening
       });
  }
  return (
    <>
    <div class="form-group wd-whats-happening">
        <textarea
            className="form-control border-0"
            rows="3"
            value={whatsHappening}
            onChange={(event) => setWhatsHappening(event.target.value)}>
        </textarea>
      </div>
      <div className="mt-2">
            <i class="far fa-image text-primary pe-3"></i>
            <i class="fa fa-chart-line text-primary pe-3"></i>
            <i class="far fa-smile text-primary pe-3"></i>
            <i class="far fa-calendar text-primary pe-3"></i>
      </div>
      <div className={"py-5 position-relative"}>
            <button onClick={tuitClickHandler} className={"btn btn-primary btn-block rounded-pill position-absolute end-0 top-0"}>
              Tuit
            </button>
      </div>

    </>
  );
}
export default WhatsHappening;