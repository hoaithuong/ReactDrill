// (C) 2007-2020 GoodData Corporation
import React from "react";
import ExampleWithSource from "../components/utils/ExampleWithSource";
import PivotTableDrillExample from "../components/PivotTableDrillExample";
import PivotTableDrillExampleSRC from "!raw-loader!../components/PivotTableDrillExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import TableDrillExample from "../components/TableDrillExample";
import TableDrillExampleSRC from "!raw-loader!../components/TableDrillExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import BarChartDrillExample from "../components/BarchartDrillExample";
import BarChartDrillExampleSRC from "!raw-loader!../components/BarchartDrillExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first

export const PivotTableDrillingDemo = () => (
    <div>
        <h1>Pivot Table Drilling</h1>
        <ExampleWithSource for={() => <PivotTableDrillExample />} source={PivotTableDrillExampleSRC} />
        <h1>Table Drilling</h1>
        <ExampleWithSource for={() => <TableDrillExample />} source={TableDrillExampleSRC} />
        <h1>BarChart Drilling</h1>
        <ExampleWithSource for={() => <BarChartDrillExample />} source={BarChartDrillExampleSRC} />
    </div>
);

export default PivotTableDrillingDemo;
