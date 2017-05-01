import React from "react";

const Info = () => {
  return (
    <div className="col-xs-6" id="reservation-info">
      <p>
        Book online or give us a call on 020 3375 1515 between 9.30am–6pm on weekdays, and between 12pm–5pm on weekends.
      </p>
      <br />
      <p>
        Your feedback is important to us. Tell us what you think at feedback@sixteen.net.
      </p>
      <br />
      <table>
        <tbody>
          <tr>
            <td>LUNCH</td>
          </tr>
          <tr>
            <td>Mon to Sun</td>
            <td>12:00 to 15:00</td>
          </tr>
        </tbody>
      </table>
      <br />
      <table>
        <tbody>
          <tr>
            <td>DINNER</td>
          </tr>
          <tr>
            <td>Mon to Thur</td>
            <td>18:00 to 22:00</td>
          </tr>
          <tr>
            <td>Fri & Sat</td>
            <td>17:30 to 22:00</td>
          </tr>
          <tr>
            <td>Sun</td>
            <td>18:00 to 21:30</td>
          </tr>
        </tbody>
      </table>
      <br />
      <p>
        {" "}
        If you would like to make any changes to your reservation please email us on reservations@fifteen.net
      </p>
    </div>
  );
};

export default Info;
