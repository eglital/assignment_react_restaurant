import React from "react";

const Form = () => {
  return (
    <div className="col-xs-6">
      <div className="panel panel-default">
        <div className="panel-heading">Reservations</div>
        <div className="panel-body">
          <form id="reservations">
            <div className="form-group row">
              <label className="col-sm-4 col-form-label">Name</label>
              <div className="col-sm-8">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-form-label">Date</label>
              <div className="col-sm-8">
                <input type="date" name="date" className="form-control" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-form-label">Time</label>
              <div className="col-sm-8">
                <input type="time" name="time" className="form-control" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-form-label">
                Number of guests
              </label>
              <div className="col-sm-8">
                <input
                  type="number"
                  name="guestsNumber"
                  className="form-control"
                  placeholder="0"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-form-label">Phone Number</label>
              <div className="col-sm-8">
                <input
                  type="tel"
                  name="phone"
                  className="form-control"
                  placeholder="111-111-1111"
                />
              </div>
            </div>
            <button className="btn btn-primary pull-right" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
