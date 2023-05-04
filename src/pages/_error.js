const ErrorHandler = async (err, res) => {
  console.log({ err });
  res.status(403).json({
    err: err.message,
    message: "This error is coming from a global error handler",
  });
};
export default ErrorHandler;
