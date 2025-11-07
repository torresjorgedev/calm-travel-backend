const isAdmin = (req, res, next) => {
  
  // El req.user viene del middleware de verifyToken y verifyToken decodifica el token y lo pone en req.user (IMPORTANTE)

  if (req.user && req.user.role === "admin") {
    next();
  } else {
    return res.status(403).json({ message: "Acceso denegado. Se requiere rol de admin." });
  }
};

export default isAdmin;
