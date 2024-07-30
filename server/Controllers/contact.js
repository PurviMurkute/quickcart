import Contact from "../models/Contact.js";

const postContact = async (req, res) => {
    const {
        name,
        email,
        phone,
        message
    } = req.body

    const newContact = new Contact({
        name: name,
        email: email,
        phone: phone,
        message: message
    })

    try{

        const savedContact = await newContact.save();

        res.json({
            success: true,
            data: savedContact,
            message: "SignUp successful"
        })
    }
    catch (err) {
        res.json({
            success: false,
            message: err.message,
            data: null
        })
    }
};

const getContact = async (req, res) => {

    const contacts = await Contact.find().sort({ updatedAt: -1 });

    res.json({
        success: true,
        message: "Contact Requests fetched successfully",
        data: contacts
    });

};

export {
    postContact,
    getContact
}