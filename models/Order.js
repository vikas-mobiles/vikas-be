import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true },
  name: { type: String, required: true }, // Added
  phoneNumber: { type: String, required: true }, // Added
  address: { type: String, required: true }, // Added
  date: { type: Date, default: Date.now },
});

export default mongoose.model('Order', orderSchema);
