export default class Response {
  static success(res, data, status = 200) {
    res.status(status);
    if (data && data.docs) {
      return res.json({
        success: true,
        data: data.docs,
        total: data.total,
        limit: data.limit,
        page: data.page,
        pages: data.pages
      });
    }
    return res.json({
      success: true,
      data: data
    });
  }

  static error(res, error, status = 400) {
    res.status(status);
    return res.json({
      success: false,
      error: {
        message: error.message,
        code: error.code,
        errors: error.errors
      },
    });
  }

  static message(res, message, status = 400){
    res.status(status);
    return res.json({
      success: false,
      message
    });
  }
}
