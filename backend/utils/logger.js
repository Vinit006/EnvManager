import morgan from "morgan";
import chalk from "chalk";

const morganMiddleware = morgan((tokens, req, res) => {
  const method = tokens.method(req, res);
  const url = tokens.url(req, res);
  const status = tokens.status(req, res);
  const responseTime = tokens["response-time"](req, res);

  const statusColor =
    status >= 500
      ? chalk.red(status)
      : status > 400
        ? chalk.yellow(status)
        : chalk.green(status);

  return [
    chalk.blue(method),
    url,
    statusColor,
    chalk.gray(`${responseTime} ms`),
  ].join(" ");
});

export { morganMiddleware };
