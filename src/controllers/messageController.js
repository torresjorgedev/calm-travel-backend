import Message from "../models/Message.js";

export const createMessage = async (req, res) => {
  try {
    
    const { name, email, message } = req.body;

    const newMessage = new Message({ name, email, message });

    await newMessage.save();

  
    res.status(201).json({ message: "Mensaje guardado correctamente" });
  } catch (error) {
    console.error("Error de guardado:", error);
    res.status(500).json({ error: "Error del servidor" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ date: -1 }); // ordena por fecha
    res.status(200).json(messages);
  } catch (error) {
    console.error("Error recuperando los mensajes:", error);
    res.status(500).json({ error: "Error del servidor" });
  }
};
