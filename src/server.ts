import express, { Request, Response, NextFunction }  from 'express'
const logger = require('./services/logger')

// const cors = require("cors")
const port = process.env.PORT || '8080';

const app = express();
app.use(express.json());
// app.use(cors())

// app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
//     if (err instanceof Error) {
//       return res.status(400).json({
//         error: err.message,
//       });
//     }
// }

const server = app.listen(3000, () => logger.info("Server is running"));