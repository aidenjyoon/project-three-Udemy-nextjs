import { getFilePath, extractFeedback } from "../api/feedback/index";
import { useState } from "react";

const FeedbackPage = (props) => {
  const [feedbackState, setFeedbackState] = useState();

  const loadFeedbackHandler = (feedbackId) => {
    fetch(`/api/feedback/${feedbackId}`)
      .then((response) => response.json())
      .then((data) => {
        setFeedbackState(data.feedback);
        console.log(data.feedback);
      });
  };

  return (
    <>
      {feedbackState && <p>{feedbackState.email}</p>}
      <ul>
        {props.feedbackItems.map((item) => (
          <li key={item.id}>
            {item.text}

            <button onClick={loadFeedbackHandler.bind(null, item.id)}>
              Show more Details
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

const getStaticProps = async () => {
  const filePath = getFilePath();
  const data = extractFeedback(filePath);

  return {
    props: {
      feedbackItems: data,
    },
  };
};

export { getStaticProps };
export default FeedbackPage;
