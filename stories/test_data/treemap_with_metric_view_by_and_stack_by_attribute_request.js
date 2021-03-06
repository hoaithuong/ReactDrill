// (C) 2020 GoodData Corporation
module.exports = projectId => {
    return {
        execution: {
            afm: {
                measures: [
                    {
                        definition: {
                            measure: {
                                item: {
                                    uri: "/gdc/md/" + projectId + "/obj/1279",
                                },
                            },
                        },
                        localIdentifier: "amountMetric",
                        format: "#,##0.00",
                        alias: "Amount",
                    },
                ],
                attributes: [
                    {
                        displayForm: {
                            uri: "/gdc/md/" + projectId + "/obj/1027",
                        },
                        localIdentifier: "departmentAttribute",
                    },
                    {
                        displayForm: {
                            uri: "/gdc/md/" + projectId + "/obj/1024",
                        },
                        localIdentifier: "regionAttribute",
                    },
                ],
            },
            resultSpec: {
                dimensions: [
                    {
                        itemIdentifiers: ["departmentAttribute", "regionAttribute"],
                    },
                    {
                        itemIdentifiers: ["measureGroup"],
                    },
                ],
            },
        },
    };
};
