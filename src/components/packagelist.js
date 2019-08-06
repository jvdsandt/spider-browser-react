import React from "react";

class PackageList extends React.Component {
  constructor(props) {
    super(props);
    this.selectPackage = this.selectPackage.bind(this);
  }

  selectPackage(pack) {
    this.props.onSelectionChange(pack);
  }

  render() {
    return (
      <div>
        <h2>Packages</h2>
        <ul>
          {this.props.packages.map(each => (
            <li>
              <a href="#" onClick={e => this.selectPackage(each)}>
                {each.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PackageList;
