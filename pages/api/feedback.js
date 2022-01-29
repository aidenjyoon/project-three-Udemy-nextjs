import fs from "fs";
import path from "path";

const getFilePath = () => {
  return path.join(process.cwd(), "data", "feedback.json");
};

const handler = (req, res) => {
  if (req.method === "POST") {
    const email = req.body.email;
    const feedbackText = req.body.text;

    const newFeedback = {
      id: new Date().toISOString(),
      email: email,
      text: feedbackText,
    };

    // store feedback data to db or in a file
    const filePath = getFilePath();
    const fileData = fs.readFileSync(filePath);

    // receives the feedback array to add it with the newFeedback data
    const data = JSON.parse(fileData);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));

    res.status(201).json({ message: "Success!", feedback: newFeedback });
  } else {
    const filePath = getFilePath();
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    res.status(200).json({ feedback: data });
  }
};

export default handler;
