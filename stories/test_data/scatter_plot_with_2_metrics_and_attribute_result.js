// (C) 2020 GoodData Corporation
module.exports = projectId => {
    return {
        executionResult: {
            data: [
                ["1221828444.21", "246"],
                ["1240493764.75", "224"],
                ["1774159524.28", "214"],
                ["377541004.95", "70"],
                ["421044316.03", "72"],
                ["582846654.5", "92"],
            ],
            paging: {
                count: [6, 2],
                offset: [0, 0],
                total: [6, 2],
            },
            headerItems: [
                [
                    [
                        {
                            attributeHeaderItem: {
                                name: "CompuSci",
                                uri: "/gdc/md/" + projectId + "/obj/949/elements?id=168279",
                            },
                        },
                        {
                            attributeHeaderItem: {
                                name: "Educationly",
                                uri: "/gdc/md/" + projectId + "/obj/949/elements?id=168282",
                            },
                        },
                        {
                            attributeHeaderItem: {
                                name: "Explorer",
                                uri: "/gdc/md/" + projectId + "/obj/949/elements?id=169655",
                            },
                        },
                        {
                            attributeHeaderItem: {
                                name: "Grammar Plus",
                                uri: "/gdc/md/" + projectId + "/obj/949/elements?id=168284",
                            },
                        },
                        {
                            attributeHeaderItem: {
                                name: "PhoenixSoft",
                                uri: "/gdc/md/" + projectId + "/obj/949/elements?id=964771",
                            },
                        },
                        {
                            attributeHeaderItem: {
                                name: "WonderKid",
                                uri: "/gdc/md/" + projectId + "/obj/949/elements?id=965523",
                            },
                        },
                    ],
                ],
                [
                    [
                        {
                            measureHeaderItem: {
                                name: "Sum of Amount",
                                order: 0,
                            },
                        },
                        {
                            measureHeaderItem: {
                                name: "# of Open Opps.",
                                order: 1,
                            },
                        },
                    ],
                ],
            ],
        },
    };
};
