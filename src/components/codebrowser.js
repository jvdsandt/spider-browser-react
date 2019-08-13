import React from "react";
import PackageList from "./packagelist";
import ClassList from "./classlist";
import ClassInstSwitch from "./classinstswitch.js";
import MethodCategoryList from "./methodcategorylist";
import MethodList from "./methodlist";
import MethodSource from "./methodsource";

const rest_headers = new Headers({
  "Content-Type": "application/json"
});

class CodeBrowser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPackage: null,
      selectedClass: null,
      instanceSide: true,
      selectedMethodCategory: null,
      selectedMethod: null
    };
    this.handleSelectedPackageChange = this.handleSelectedPackageChange.bind(
      this
    );
    this.handleSelectedClassChange = this.handleSelectedClassChange.bind(this);
    this.handleClassInstSwitch = this.handleClassInstSwitch.bind(this);
    this.handleSelectedMethodChange = this.handleSelectedMethodChange.bind(
      this
    );
    this.handleSelectedMethodCategoryChange = this.handleSelectedMethodCategoryChange.bind(
      this
    );

    if (this.props.selectedCommitSha != null) {
      this.getCommitPackages(this.props.selectedCommitSha);
    }
  }

  handleSelectedPackageChange(pack) {
    this.handleSelectedClassChange(null);
    if (pack === null) {
      this.setState({ selectedPackage: null });
    } else {
      this.getPackageDetails(pack.id);
    }
  }

  handleSelectedClassChange(clazz) {
    this.handleSelectedMethodCategoryChange(null);
    this.handleSelectedMethodChange(null);
    if (clazz === null) {
      this.setState({ selectedClass: null });
    } else {
      this.getClassDetails(clazz.id);
    }
  }

  handleClassInstSwitch() {
    this.setState({ instanceSide: !this.state.instanceSide });
  }

  handleSelectedMethodCategoryChange(name) {
    this.setState({ selectedMethodCategory: name });
  }

  handleSelectedMethodChange(method) {
    if (method === null) {
      this.setState({ selectedMethod: null });
    } else {
      this.getMethodDetails(method.id);
    }
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
        <div className="spider-codebrowser">
          <div>
            <PackageList
              packages={this.props.packages}
              onSelectionChange={this.handleSelectedPackageChange}
            />
          </div>
          <div>
            <ClassList
              package={this.state.selectedPackage}
              onSelectionChange={this.handleSelectedClassChange}
            />
          </div>
          <MethodCategoryList
            clazz={this.state.selectedClass}
            instanceSide={this.state.instanceSide}
            onSelectionChange={this.handleSelectedMethodCategoryChange}
          />
          <div>
            <MethodList
              clazz={this.state.selectedClass}
              instanceSide={this.state.instanceSide}
              category={this.state.selectedMethodCategory}
              onSelectionChange={this.handleSelectedMethodChange}
            />
          </div>
          <div className="controls">
            <ClassInstSwitch
              instanceSide={this.state.instanceSide}
              onSwitch={this.handleClassInstSwitch}
            />
          </div>
          <div className="source">
            <MethodSource method={this.state.selectedMethod} />
          </div>
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

  getClassDetails(classId) {
    fetch("https://www.cloudctrl.com/core/classes/" + classId, {
      crossDomain: true,
      method: "GET",
      rest_headers
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ selectedClass: data });
      });
  }

  getMethodDetails(methodId) {
    fetch("https://www.cloudctrl.com/core/methods/" + methodId, {
      crossDomain: true,
      method: "GET",
      rest_headers
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ selectedMethod: data });
      });
  }
}

export default CodeBrowser;
