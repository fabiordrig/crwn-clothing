import React, { Component } from "react";
import MenuItem from "../menu-item/menu-item.component";
import { sections } from "./mock";

import "./directory.styles.scss";

class Directory extends Component {
  constructor() {
    super();
    this.state = {
      sections: sections,
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionsProps }) => (
          <MenuItem key={id} {...otherSectionsProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
