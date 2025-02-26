// Dystopian & Sci-Fi
const contentTxt = ["Aliens Arrive", 
    [
        ["Hide at home",
            [
                ["Tell aliens to go away",
                    [
                        "Respond disrespectfully and die","Respectfully and live"
                    ]
                ],

                ["Open door and die"]
            ]
        ], 
    
        ["Go outside", 
            [
                ["Meet friend",
                    [
                        ["Hang out with",
                            ["Kill derftg become King"]
                        ],
                        ["Abandon derftg",
                            [
                                "Steal and aliens kill","Leave cash and live"
                            ]
                        ]
                    ]
                ]
            ]
        ]
    ]
]

function sceneUpdate(lst){
    document.getElementById("content").textContent = lst[0]
}

sceneUpdate(contentTxt)