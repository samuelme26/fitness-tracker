const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');

// Register User
exports.register = async (req, res, next) => {
  try {
    const { name, email, password, height, weight, goals } = req.body;
    const user = await User.create({ name, email, password, height, weight, goals });
    const token = user.generateAuthToken();
    res.status(201).json({ success: true, token });
  } catch (err) {
    next(err);
  }
};

// Login User
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select('+password');
    if (!user) throw new ErrorResponse('Invalid credentials', 401);
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new ErrorResponse('Invalid credentials', 401);
    
    const token = user.generateAuthToken();
    res.status(200).json({ success: true, token });
  } catch (err) {
    next(err);
  }
};

// Get Current User
exports.getMe = async (req, res, next) => {
  res.status(200).json({ success: true, data: req.user });
};

// Update user profile
exports.updateProfile = async (req, res, next) => {
  try {
    const { height, weight, goals } = req.body;
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { height, weight, goals },
      { new: true }
    );
    res.status(200).json({ success: true, data: user });
  } catch (err) {
    next(err);
  }
};