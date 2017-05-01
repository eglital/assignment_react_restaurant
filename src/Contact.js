import React from "react";

const Contact = () => {
  return (
    <div className="row">
        <h1 className="text-center">Find us!</h1>
        <hr/>
        <div className="col-xs-5 embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item"
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d11460.758221114615!2d-70.1685989431763!3d44.10008055792814!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1493675065173"
            frameBorder="0"
            />
        </div>
        <div className="col-xs-7">
            <h3>Address: 123 Trashcan Lane, Dumpster, TX 88888</h3>
            <h3>Phone Number: 1-800-YUM-FOOD</h3>
        </div>
    </div>
  );
};

export default Contact;
