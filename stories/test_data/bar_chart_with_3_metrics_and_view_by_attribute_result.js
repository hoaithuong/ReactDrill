// (C) 2020 GoodData Corporation
module.exports = projectId => {
    return {
        executionResult: {
            data: [
                ["1980676.11", "4460045.43", "13799517.23", "18664637.35", "3565695.04"],
                ["466158.62", "2233241.26", "12395325.24", "18957045.27", "4258983.06"],
                ["125945.112", "651447.375", "961451.826", "4702254.505", "2570291.138"],
            ],
            paging: {
                count: [3, 5],
                offset: [0, 0],
                total: [3, 5],
            },
            headerItems: [
                [],
                [
                    [
                        {
                            attributeHeaderItem: {
                                name: "<button>2008</button>",
                                uri: "/gdc/md/" + projectId + "/obj/158/elements?id=2008",
                            },
                        },
                        {
                            attributeHeaderItem: {
                                name: "2009",
                                uri: "/gdc/md/" + projectId + "/obj/158/elements?id=2009",
                            },
                        },
                        {
                            attributeHeaderItem: {
                                name: "2010",
                                uri: "/gdc/md/" + projectId + "/obj/158/elements?id=2010",
                            },
                        },
                        {
                            attributeHeaderItem: {
                                name: "2011",
                                uri: "/gdc/md/" + projectId + "/obj/158/elements?id=2011",
                            },
                        },
                        {
                            attributeHeaderItem: {
                                name: "2012",
                                uri: "/gdc/md/" + projectId + "/obj/158/elements?id=2012",
                            },
                        },
                    ],
                ],
            ],
        },
    };
};
