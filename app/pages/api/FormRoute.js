import { connectToDatabase } from "../../utils/mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { fullName, email, message } = req.body;

    const { db } = await connectToDatabase();
    const collection = db.collection("formData");

    try {
      await collection.insetOne({ fullName, email, message });
      res.status(201).json({ message: "Data stored successfully" });
    } catch (error) {
      res.status(500).json({ message: "An error occured" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
