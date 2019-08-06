import React from "react";
import PackageList from "./packagelist";
import ClassList from "./classlist";

class CodeBrowser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      packages: this.getDemoPackages(),
      selectedPackage: null,
      classes: [],
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
  }

  handleSelectedPackageChange(pack) {
    this.setState({ selectedPackage: pack });
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
        <PackageList
          packages={this.state.packages}
          onSelectionChange={this.handleSelectedPackageChange}
        />
        <ClassList
          packages={this.state.classes}
          onSelectionChange={this.handleSelectedClassChange}
        />
      </div>
    );
  }

  getDemoPackages() {
    return [
      {
        id: 52530,
        name: "BaselineOfTealight"
      },
      {
        id: 52531,
        name: "ConfigurationOfTealight"
      },
      {
        id: 52532,
        name: "Tealight-Tests-Web-Tools"
      },
      {
        id: 52533,
        name: "Tealight-Web-Tools"
      }
    ];
  }

  getDemoClasses() {
    return [
      {
        id: 21168,
        name: "GRPackage",
        type: "extension",
        category: null
      },
      {
        id: 115437,
        name: "WAAdmin",
        type: "extension",
        category: null
      },
      {
        id: 21151,
        name: "WAClassnameHaloPlugin",
        type: "class",
        superclass: "WAHaloPlugin",
        category: "Plugins"
      },
      {
        id: 20966,
        name: "WAConfigureToolPlugin",
        type: "class",
        superclass: "WAToolPlugin",
        category: "Plugins"
      },
      {
        id: 25694,
        name: "WADebugErrorHandler",
        type: "class",
        superclass: "WAErrorHandler",
        category: "Core"
      },
      {
        id: 25705,
        name: "WADeprecatedToolFilter",
        type: "class",
        superclass: "WARequestFilter",
        category: "Filter"
      },
      {
        id: 25702,
        name: "WADeprecation",
        type: "class",
        superclass: "WATool",
        category: "Core"
      },
      {
        id: 21152,
        name: "WADeprecationToolPlugin",
        type: "class",
        superclass: "WAToolPlugin",
        category: "Plugins"
      },
      {
        id: 27233,
        name: "WADevelopmentConfiguration",
        type: "class",
        superclass: "WASystemConfiguration",
        category: "Core"
      },
      {
        id: 115434,
        name: "WADevelopmentFiles",
        type: "class",
        superclass: "WAFileLibrary",
        category: "Core"
      },
      {
        id: 25706,
        name: "WAHalo",
        type: "class",
        superclass: "WAObject",
        category: "Core"
      },
      {
        id: 25697,
        name: "WAHaloPlugin",
        type: "class",
        superclass: "WAPlugin",
        category: "Plugins"
      },
      {
        id: 21064,
        name: "WAHaloVisitor",
        type: "class",
        superclass: "WAPainterVisitor",
        category: "Core"
      },
      {
        id: 114921,
        name: "WAInspector",
        type: "class",
        superclass: "WATool",
        category: "Core"
      },
      {
        id: 21154,
        name: "WAInspectorHaloPlugin",
        type: "class",
        superclass: "WAHaloPlugin",
        category: "Plugins"
      },
      {
        id: 21098,
        name: "WAModeHaloPlugin",
        type: "class",
        superclass: "WAHaloPlugin",
        category: "Plugins"
      },
      {
        id: 21205,
        name: "WANewSessionToolPlugin",
        type: "class",
        superclass: "WAToolPlugin",
        category: "Plugins"
      },
      {
        id: 21060,
        name: "WAPainter",
        type: "extension",
        category: null
      },
      {
        id: 21051,
        name: "WAPainterVisitor",
        type: "extension",
        category: null
      },
      {
        id: 25703,
        name: "WAPluggableTool",
        type: "class",
        superclass: "WATool",
        category: "Core"
      },
      {
        id: 21178,
        name: "WAPresenter",
        type: "extension",
        category: null
      },
      {
        id: 21053,
        name: "WAPresenterGuide",
        type: "extension",
        category: null
      },
      {
        id: 115310,
        name: "WAPrettyPrintedDocument",
        type: "class",
        superclass: "WAHtmlDocument",
        category: "Core"
      },
      {
        id: 21054,
        name: "WARenderContext",
        type: "extension",
        category: null
      },
      {
        id: 21155,
        name: "WAStylesHaloPlugin",
        type: "class",
        superclass: "WAHaloPlugin",
        category: "Plugins"
      },
      {
        id: 21165,
        name: "WATerminateToolPlugin",
        type: "class",
        superclass: "WAToolPlugin",
        category: "Plugins"
      },
      {
        id: 21026,
        name: "WATimingToolFilter",
        type: "class",
        superclass: "WARequestFilter",
        category: "Filter"
      },
      {
        id: 21156,
        name: "WATimingToolPlugin",
        type: "class",
        superclass: "WAToolPlugin",
        category: "Plugins"
      },
      {
        id: 21105,
        name: "WAToggleHalosToolPlugin",
        type: "class",
        superclass: "WAToolPlugin",
        category: "Plugins"
      },
      {
        id: 21133,
        name: "WATool",
        type: "class",
        superclass: "WAComponent",
        category: "Core"
      },
      {
        id: 25704,
        name: "WAToolDecoration",
        type: "class",
        superclass: "WADecoration",
        category: "Core"
      },
      {
        id: 21167,
        name: "WAToolPlugin",
        type: "class",
        superclass: "WAPlugin",
        category: "Plugins"
      },
      {
        id: 21207,
        name: "WAViewer",
        type: "class",
        superclass: "WALabelledFormDialog",
        category: "Core"
      },
      {
        id: 25695,
        name: "WAWalkback",
        type: "class",
        superclass: "WAComponent",
        category: "Core"
      },
      {
        id: 115303,
        name: "WAWalkbackErrorHandler",
        type: "class",
        superclass: "WADebugErrorHandler",
        category: "Core"
      }
    ];
  }
}

export default CodeBrowser;
