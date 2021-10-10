import { useState } from "react";

import "./styles.css";

import List from "./list";
import Form from "./form";

function Contacts() {
      const [contacts, setContacts] = useState([
            {
                  full_name: "ali yılmaz",
                  phone_number: "0531211xx22",
            },
            {
                  full_name: "ayşe kaya",
                  phone_number: "0542121xx09",
            },
            {
                  full_name: "zeynep demir",
                  phone_number: "0532121xx67",
            },
            {
                  full_name: "selim arslan",
                  phone_number: "0507321xx10",
            },
      ]);

      return (
            <div id="container">
                  <h1>Rehber</h1>
                  <List contacts={contacts} />
                  <hr />
                  <Form addContact={setContacts} contacts={contacts} />
            </div>
      );
}

export default Contacts;
