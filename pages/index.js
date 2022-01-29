import { useRef } from "react";

const HomePage = () => {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    const reqBody = { email: enteredEmail, text: enteredFeedback };

    fetch("/api/feedback", {
      // will be _sending_ data to server
      method: "POST",

      // JSON.stringify to convert javascript object into json
      body: JSON.stringify(reqBody),

      //  to inform the backend that we are sending json data (required for nextjs api route)
      headers: {
        // content type wrapped in quotes since im using special character '-'
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log("THIS IS IN INDEX: ", data));
  };

  return (
    <>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your Feedback</label>
          <textarea id="feedback" rows="5" ref={feedbackInputRef}></textarea>
        </div>
        <div>
          <button>Send Feedback</button>
        </div>
      </form>
    </>
  );
};

export default HomePage;
