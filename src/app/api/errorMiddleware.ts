import { NextApiRequest, NextApiResponse } from "next";

export default function errorMiddleware(
  handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void>
) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      await handler(req, res);
    } catch (error: any) {
      // Specify the error type as `any` or a more specific type
      console.error("An error occurred:", error);
      res.status(500).json({ message: `From Test ${error.message}` });
    }
  };
}
