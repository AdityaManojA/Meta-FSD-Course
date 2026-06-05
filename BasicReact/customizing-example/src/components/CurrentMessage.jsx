import React from 'react';

function Workdays() {
  return (
    <div className="message-box workday">
      <h2>Welcome to Little Lemon!</h2>
      <p>We are open today from 11:00 AM to 10:00 PM. Come try our weekday lunch specials!</p>
    </div>
  );
}

function Weekends() {
  return (
    <div className="message-box weekend">
      <h2>Happy Weekend! 🎉</h2>
      <p>Join us for our special Weekend Brunch from 9:00 AM to 4:00 PM!</p>
    </div>
  );
}

function ErrorComponent() {
  return (
    <div className="message-box error">
      <h2>Oops!</h2>
      <p>Something went wrong identifying the current day.</p>
    </div>
  );
}


function CurrentMessage({ day }) {
  const weekday = (day >= 1 && day <= 5);
  const weekend = (day === 0 || day === 6);
  let message;

  if (weekday) {
    message = <Workdays />;
  } else if (weekend) {
    message = <Weekends />;
  } else {
    message = <ErrorComponent />;
  }

  return (
    <div>
      {message}
    </div>
  );
}

export default CurrentMessage;