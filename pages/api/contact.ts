import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, error: "Method not allowed" });
  }
  const { name, contact, email, message } = req.body || {};
  if (
    !name?.trim() ||
    !contact?.trim() ||
    !/^\d{7,15}$/.test(contact.trim()) ||
    !email?.trim() ||
    !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim()) ||
    !message?.trim()
  ) {
    return res.status(400).json({ success: false, error: "Invalid input" });
  }
  // Simulate success (no DB/email integration)
  return res.status(200).json({ success: true });
}
