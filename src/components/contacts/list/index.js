import { useState } from "react";

function List({ contacts }) {
      const [filterText, setFilterText] = useState("");

      const filtered = contacts.filter((item) => {
            return Object.keys(item).some((key) => item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase()));
      });

      return (
            <div>
                  <br />
                  <input placeholder="--rehberde ara--" value={filterText} onChange={(e) => setFilterText(e.target.value)} />
                  <ul className="list">
                        {filtered.map((x, i) => (
                              <li key={i}>
                                    <span>{x.full_name}</span>
                                    <span>{x.phone_number}</span>
                              </li>
                        ))}
                  </ul>
                  <div className="length">toplam({filtered.length})</div>
            </div>
      );
}

export default List;
