// Dystopian & Sci-Fi
const contentTxt = ["After getting home from a long day at school, you decide to take a nap. You begin to doze off, but suddenly, you recieve an alert on your phone. It reads, 'ALERT: Extraterrestrial beings have arrived on Earth. Do not open your door for any reason as the authorities investigate.' Despite your fear, you're intrigued. This is a once in a lifetime opportunity to interact with beings that are (literally) out of this world. What will you do?", 
    [
        ["You decide to stay safe at home. As you get ready to baricade your front door, you here a LOUD knock on the door. The alert told you to keep your door closed, but this could be someone you know looking for shelter. It could also be a ruthless alien out for blood. You peek through your window to help you decide and see a giant, gray monster! What will you do?",
            [
                ["After seeing the alien, you shout 'GET AWAY FROM HERE'. You wait a couple of moments, but the alien doesn't budge. You take a look outside again and here that same, loud, obnoxious knock. You begin to shake with fear, yet, you muster the confidence to say one more thing. What do you say?",
                    [
                        "You scream at the alien, 'I SAID SCRAM YOU UGLY MONSTER'. After hearing this, the alien tilts his head to the side before breaking down your door. It stares and you can almost feel its anger. You begin to sweat and back away, but the alien begins to close the gap. There's no way out, you're stuck. It pulls out a ray gun and you begin to plead with the alien to no avail. You see a flash of light, and then, nothing. Maybe you would've survived if you were kinder","You try to talk to the alien once more. You say, 'Look dude, I don't know why you're here, but I've done nothing wrong. Can you move on and leave me in peace?' The alien peers at you through the window. Although he lacks any kind of expression, he nods at you and walks away from your house after placing a sticker on your window. Congratulations, you're safe and you surrvived!"
                    ]
                ],

                ["You open the door and the alien looks at you funny, almost as if its pitying you. Then, it begins to laugh. A loud, booming laugh. You hear laughter echo throughout your house. Ridiculing, belitling laughter. Then before you know it, you're staring down the barrel of a ray gun. You plead with the alien as tears roll down your cheek. 'Please, spare me, I'll do anything!!' Alas, the alien doesn't care. You see a flash of light, and then, nothing. That was really stupid of you, you were literally told not to open the door and now you're dead."]
            ]
        ], 
    
        ["You decide to go outside and search for your friends. As you venture outside, your home town looks surprisingly like it always has. Nothing is out of place, it's just quiet. The only sign of aliens are the UFOs that you see in the sky. You think to yourself, 'if this is what an alien invasion is like, it's not too bad!' You decide to go to your local 7-11 to see if your friends are there.", 
            [
                ["After entering the 7-11, you decide to go directly to the aisle you think your friend would be in: Aisle 13, where they store the twinkies. Instead of finding your friend, however, you find a large alien sitting on the floor eating some twinkies. 'That's weird,' you think to yourself before saying 'do you guys eat twinkies too?' The alien looks at you and nods and you bond over your mutual love for twinkies. The alien seems to invite you to hang out with it. What do you do?",
                    [
                        ["The alien takes you to his base of operations where you see your Computer Programming instructor, Mr. Gardner. For some reason, he's ordering the aliens around. Your alien friend brings you to Mr. Gardner who says, 'The aliens are looking for a monarch, but the only way you can become Alien Leader is if you kill your new friend. You don't have a choice.' Mr. Gardner stares at you, waiting for you to take action.",
                            ["You feel the soul of your alien friend lingering behind you, however, everyone now looks to you for instruction. You are in charge of the aliens. What will you do with all the power? Was it worth the cost of a new friend and innocent life?"]
                        ],
                        ["You abandon your new alien friend and instead look for your old friends in aisle 2. You find Maxwell using the somehow still running slushie machine. You guys discuss the alien invasion and think about ways to find your other friends. You finall decide to leave, but first, do you leave cash as compenstion for the slushies you drank?",
                            [
                                "You decide to just leave the 7-11 without paying. Suddently, there is an alien behind you pointing a ray gun at you. You begin to plead for mercy, even offering to leave money now, but the alien simply looks at you dissapointedly. You knew better, and now you must pay the price","You and Maxwell decide to go out to explore. Not much is different, but you hope to meet more aliens. Until you do, it's fun to hang out when no one else is outside."
                            ]
                        ]
                    ]
                ]
            ]
        ]
    ]
]

const contentImg = ["arrival.jpg", 
    [
        ["knock.jpg",
            [
                ["shout.jpg",
                    [
                        "raygun.jpg","eyecontact.jpg"
                    ]
                ],

                ["raygun.jpg"]
            ]
        ], 
    
        ["711.jpg", 
            [
                ["twinkies.jpg",
                    [
                        ["base.jpg",
                            ["betray.jpg"]
                        ],
                        ["slushie.jpeg",
                            [
                                "raygun.jpg","cash.jpg"
                            ]
                        ]
                    ]
                ]
            ]
        ]
    ]
]

const btnOpts = [["Explore? No thanks! I'll stay safe at home.", "Staying at home is for losers! I'll take my chances and go find my friends."], 
    [
        [["I'll scream for the alien to go away","I'll open the door. What's the worst he can do?"],
            [
                [["I'll insult the alien, hoping he'll go away","I'll ask the alien to leave kindly."],
                    [
                        [null]
                    ]
                ],

                [null]
            ]
        ], 
    
        [["I need to look for my friends at the 7-11, that's where they'll probably be!"], 
            [
                [["I'll stick with my alien friend!", "I politely decline; I need to find my old friends."],
                    [
                        [["I follow Mr. Gardner's instructions, I must become Alien Leader."],
                            [null]
                        ],
                        [["Why should we leave cash? That's stupid","It's only fair that we pay, I leave some money"],
                            [
                                [null]
                            ]
                        ]
                    ]
                ]
            ]
        ]
    ]
]

function code(txtLst, imgLst, optLst, opt){
    document.getElementById("content").textContent = txtLst[0]
    document.getElementById("pic").src = imgLst[0]
    document.getElementById("btn1").textContent = optLst[opt][0]
    document.getElementById("btn2").textContent = optLst[opt][1]
    
    document.getElementById("btn1").addEventListener("click", function(){
        code(txtLst[1][0], imgLst[1][0],optLst[1][0], 0)
    })
    document.getElementById("btn2").addEventListener("click", function(){
        code(txtLst[1][1], imgLst[1][1],optLst[1][0], 1)
    })
}

code(contentTxt, contentImg, btnOpts, 0)