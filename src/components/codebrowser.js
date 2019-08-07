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
            packages: [],
            selectedPackage: null,
            classes: [],
            selectedClass: null,
            methodCategories: [],
            selectedMethodCategory: null,
            methods: [],
            selectedMethod: null
        };
        this.handleSelectedPackageChange = this.handleSelectedPackageChange.bind(this);
        this.handleSelectedClassChange = this.handleSelectedClassChange.bind(this);

        if (this.props.selectedCommitSha != null) {
            this.getCommitPackages(this.props.selectedCommitSha);
        }
    }

    handleSelectedPackageChange(pack) {
        let classList;
        if (pack === null) {
            classList = [];
        } else {
            classList = this.getDemoClasses();
        }
        this.setState({selectedPackage: pack, classes: classList});
    }

    handleSelectedClassChange(clazz) {
        this.setState({selecteClass: clazz});
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
                <PackageList
                    packages={this.state.packages}
                    onSelectionChange={this.handleSelectedPackageChange}
                />
                <ClassList
                    classes={this.state.classes}
                    onSelectionChange={this.handleSelectedClassChange}
                />
            </div>
        );
    }

    getCommitPackages(commitId) {
        fetch("https://www.cloudctrl.com/git/commit/" + commitId, {
            crossDomain: true,
            method: "GET",
            rest_headers
        })
            .then(res => res.json())
            .then(data => {
                this.setState({packages: data.packages});
            });
    }

}

export default CodeBrowser;
