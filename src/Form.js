import React from "react";

const Form = () => {
    return (
        <form id="reservations">
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Email</label>
              <div className="col-sm-10">
                <input type="text" name="name" className="form-control" placeholder="Name" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Date</label>
              <div className="col-sm-10">
                <input type="date" name="date" className="form-control" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Time</label>
              <div className="col-sm-10">
                <input type="time" name="time" className="form-control"/>
              </div>
            </div>
        </form>
        
        
    );
    
    
    
}

export default Form;