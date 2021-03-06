import React from "react";
import {spiderFetch, useFetch} from "../utils/useFetch";
import history from "../utils/history";
import PackageList from "./packagelist";
import ClassList from "./classlist";
import ClassInstSwitch from "./classinstswitch";
import ClassDefinition from "./classdefinition";
import MethodCategoryList from "./methodcategorylist";
import MethodList from "./methodlist";
import MethodSource from "./methodsource";
import CodeFooter from "./codefooter";

class CodeBrowser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPackage: null,
            selectedClass: null,
            instanceSide: true,
            selectedMethodCategory: null,
            selectedMethod: null,
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

    // currentPath() {
    //     let path = this.props.basePath;
    //     if (this.state.selectedPackage) {
    //         path = path + "/" + this.state.selectedPackage.name;
    //         if (this.state.selectedClass) {
    //             path = path + "/" + this.state.selectedClass.name;
    //             if (this.state.selectedMethod) {
    //                 path = path + "/" + (this.state.instanceSide ? "instance" : "class") + "/" + this.state.selectedMethod.selector;
    //             }
    //         }
    //     }
    //     return path;
    // }

    handleSelectedPackageChange(pack) {
        this.handleSelectedClassChange(null);
        if (pack === null) {
            this.setState({selectedPackage: null});
        } else {
            this.getPackageDetails(pack.id, this.props.gitRootId);
         }
    }

    handleSelectedClassChange(clazz) {
        this.handleSelectedMethodCategoryChange(null);
        this.handleSelectedMethodChange(null);
        if (clazz === null) {
            this.setState({selectedClass: null});
        } else {
            this.getClassDetails(clazz.id, this.state.selectedPackage.id, this.props.gitRootId);
        }
    }

    handleClassInstSwitch() {
        this.setState({instanceSide: !this.state.instanceSide});
    }

    handleSelectedMethodCategoryChange(name) {
        this.setState({selectedMethodCategory: name});
    }

    handleSelectedMethodChange(method) {
        if (method === null) {
            this.setState({selectedMethod: null});
        } else {
            this.getMethodDetails(method.id, this.state.selectedClass.name, !this.state.instanceSide, this.props.gitRootId);
        }
    }

    checkSelectedPackage() {
        if (!this.state.selectedPackage) {
            return;
        }
        // Clear the selected package if it is not part of the packages list
        if (!this.props.packages.some((p) => p.id === this.state.selectedPackage.id)) {
            this.handleSelectedPackageChange(null);
        }
    }

    render() {
        this.checkSelectedPackage();

        const source = this.state.selectedMethod === null ?
            <ClassDefinition clazz={this.state.selectedClass} instanceSide={this.state.instanceSide} /> :
            <MethodSource method={this.state.selectedMethod}/>;

        return (
            <React.Fragment>
                <div className="spider-codebrowser">
                    <div>
                        <PackageList
                            packages={this.props.packages}
                            selection={this.state.selectedPackage}
                            onSelectionChange={this.handleSelectedPackageChange}
                        />
                    </div>
                    <div>
                        <ClassList
                            pack={this.state.selectedPackage}
                            selection={this.state.selectedClass}
                            onSelectionChange={this.handleSelectedClassChange}
                        />
                    </div>
                    <div>
                        <MethodCategoryList
                            clazz={this.state.selectedClass}
                            instanceSide={this.state.instanceSide}
                            selection={this.state.selectedMethodCategory}
                            onSelectionChange={this.handleSelectedMethodCategoryChange}
                        />
                    </div>
                    <div>
                        <MethodList
                            clazz={this.state.selectedClass}
                            instanceSide={this.state.instanceSide}
                            category={this.state.selectedMethodCategory}
                            selection={this.state.selectedMethod}
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
                        {source}
                    </div>
                    <div className="footer">
                        <CodeFooter
                            selectedPackage={this.state.selectedPackage}
                            selectedClass={this.state.selectedClass}
                            selectedMethod={this.state.selectedMethod} />
                    </div>
                </div>
            </React.Fragment>
        );
    }

    getPackageDetails(packageId, gitRootId) {
        spiderFetch(`/core/packages/${packageId}?gitRootId=${gitRootId}`, data => {
            this.setState({selectedPackage: data});
        });
    }

    getClassDetails(classId, packageId, gitRootId) {
        spiderFetch(`/core/classes/${classId}?packageId=${packageId}&gitRootId=${gitRootId}`, data => {
            this.setState({selectedClass: data});
        });
    }

    getMethodDetails(methodId, className, isMeta, gitRootId) {
        spiderFetch(`/core/methods/${methodId}?className=${className}&isMeta=${isMeta}&gitRootId=${gitRootId}`, data => {
            this.setState({selectedMethod: data});
        });
    }
}

export default CodeBrowser;
