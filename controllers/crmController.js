import mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModel';


const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = (req, res) => {
    let newContact = new Contact(req.body);

    newContact.save((err, contact) => {
        if (err) {
            res.send(err.message);
        }
        res.json(contact);
    });
}

export const getContact = (req, res) => {
    Contact.find({}, (err, contact) => {
        if (err) {
            res.send(err)
        }
        res.json(contact)
    });
};

export const getContactById = (req, res) => {
    const id = req.params.contactID;
    Contact.findById(id, (err, contact) => {
        if (err) {
            res.send(err)
        }
        res.json(contact)
    });
}

export const updateContact = (req, res) => {

    const query = req.params.contactID;
    const newValues = { $set: req.body };

    Contact.findByIdAndUpdate(query, newValues, { new: true }, (err, contact) => {
        if (err) {
            res.send(err.message)
        }
        res.json(contact)
    });
}

export const deleteContactById = (req, res) => {
    const id = req.params.contactID;
    Contact.findByIdAndDelete(id, (err, contact) => {
        if (err) {
            res.send(err)
        }
        res.json('Contact Deleted Successfully')
    });
}