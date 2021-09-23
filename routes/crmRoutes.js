import {
    addNewContact,
    getContact,
    getContactById,
    updateContact,
    deleteContactById
} from "../controllers/crmController"

const routes = (app) => {

    app.route('/contact')

    .get(getContact)
        // to add new contact
        .post(addNewContact)


    app.route('/contact/:contactID')
        // get a specific contact
        .get(getContactById)

    // update a specific contact
    .put(updateContact)

    // delete a specific contact
    .delete(deleteContactById)
}

export default routes;