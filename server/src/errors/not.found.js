class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = 'CastError';
    this.status = 404;
  }
}

module.exports = NotFoundError;