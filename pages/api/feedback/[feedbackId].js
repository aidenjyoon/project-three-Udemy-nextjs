import { getFilePath, extractFeedback } from ".";

const handler = (req, res) => {
  const { feedbackId } = req.query;

  const filePath = getFilePath();
  const data = extractFeedback(filePath);

  const filteredData = data.filter((feedback) => feedback.id === feedbackId);

  res.status(200).json({ feedback: filteredData[0] });
};

export default handler;
