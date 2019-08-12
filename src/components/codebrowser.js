import React from "react";
import PackageList from "./packagelist";
import ClassList from "./classlist";

const rest_headers = new Headers({
  "Content-Type": "application/json"
});

class CodeBrowser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPackage: null,
      selectedClass: null,
      methodCategories: [],
      selectedMethodCategory: null,
      methods: [],
      selectedMethod: null
    };
    this.handleSelectedPackageChange = this.handleSelectedPackageChange.bind(
      this
    );
    this.handleSelectedClassChange = this.handleSelectedClassChange.bind(this);

    if (this.props.selectedCommitSha != null) {
      this.getCommitPackages(this.props.selectedCommitSha);
    }
  }

  handleSelectedPackageChange(pack) {
    if (pack === null) {
      this.setState({ selectedPackage: null });
    } else {
      this.getPackageDetails(pack.id);
    }
  }

  handleSelectedClassChange(clazz) {
    this.setState({ selecteClass: clazz });
  }

  render() {
    let header;

    if (this.state.selectedPackage) {
      header = <p>Selected package: {this.state.selectedPackage.name}</p>;
    } else {
      header = <p>No selection</p>;
    }

    return (
      <div>
        <h1>Code browser</h1>
        {header}
        <div style={{ display: "flex" }}>
          <PackageList
            packages={this.props.packages}
            onSelectionChange={this.handleSelectedPackageChange}
          />
          <ClassList
            package={this.state.selectedPackage}
            onSelectionChange={this.handleSelectedClassChange}
          />
        </div>
      </div>
    );
  }

  getPackageDetails(packageId) {
    fetch("https://www.cloudctrl.com/core/packages/" + packageId, {
      crossDomain: true,
      method: "GET",
      rest_headers
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ selectedPackage: data });
      });
  }
}

export default CodeBrowser;
