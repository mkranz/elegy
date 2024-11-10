export interface Asset {
  name: string
  group: 'Power' | 'Nature' | 'Ritual' | 'General'
  description: string
  icon: string // Material Design Icons name
  abilities: {
    1: string
    2: string
    3: string
  }
}

export const ASSETS_LIST: Asset[] = [
  {
    name: 'Acute Senses',
    group: 'Power',
    description: 'Supernatural boost to senses.',
    icon: 'visibility',
    abilities: {
      1: 'Power, intellect. When you try to notice or find something with your senses, you may sacrifice blood (1-5) to gain an equal amount of bonus on your roll.',
      2: 'When you do it, you may lose 1 more blood to re-roll any dice.',
      3: 'Take +2 focus on a hit.'
    }
  },
  {
    name: 'Agility',
    group: 'Power',
    description: 'Supernatural boost to agility.',
    icon: 'directions_run',
    abilities: {
      1: 'Power, dexterity. When you perform a feat of supernatural agility, coordination or speed, you may sacrifice blood (1-5) to gain an equal bonus on your roll. The blood you spend to activate this power counts to the bonus.',
      2: 'When you do it, you may lose 1 more blood to re-roll any dice.',
      3: 'Take +2 focus on a hit.'
    }
  },
  {
    name: 'Animal Drinker',
    group: 'Nature',
    description: 'Ability to drink from animals.',
    icon: 'pets',
    abilities: {
      1: 'Nature. Unlike most vampires, you are able to feed on the blood of animals. Big animals (large dog, cow) don\'t need to be killed to feed you, but small ones (bat, rat) do, and these restore only 1 blood.',
      2: 'You instinctively know how beasts behave. When you act based on your knowledge of animals, add +1 and take +1 focus on a hit.',
      3: 'If the body of an animal has blood in it, you can feed on its flesh instead of only drinking blood. When you do it, restore +1 blood.'
    }
  },
  {
    name: 'Articulate',
    group: 'General',
    description: 'Ability to use your intellect to persuade others.',
    icon: 'record_voice_over',
    abilities: {
      1: 'You have a witty and charming way with words. When you roll to persuade or socialize in a situation that requires +glamour, you may instead roll +intellect.',
      2: 'When you do it, add +1 and take +1 focus on a hit.',
      3: 'Your words are profound and reach deep within people. When you roll to persuade or socialize in a situation that requires +heart, you may instead roll +intellect.'
    }
  },
  {
    name: 'Artist',
    group: 'General',
    description: 'Talent and affinity for performance and art.',
    icon: 'palette',
    abilities: {
      1: 'When you present a work of art you\'ve created or perform for an audience, roll the adequate stat, add +1 and take +2 focus on a hit. On a strong hit, also add +2 (one time only) if you interact with someone in the audience.',
      2: 'If you drink blood from someone you performed to or who has seen your art, restore full blood.',
      3: 'You can find deep meaning within art. When you analyze a work of art, choose your approach: Look for insight (Roll +intellect and add +1) or Look for comfort (Roll +heart and add +1). On a hit, envision what it revealed to you, and take +2 focus.'
    }
  },
  {
    name: 'Awe',
    group: 'Power',
    description: 'Radiate an aura of majesty.',
    icon: 'auto_awesome',
    abilities: {
      1: 'Power. You are capable of radiating a supernatural aura of coolness, power and majesty that draws undivided attention to you. You gain +1 forward when you act to make an impression on your audience.',
      2: 'You can project this aura to anything, not just yourself.',
      3: 'The attention of a crowd is very meaningful and important to you. When you Awe, you always gain +2 spirit on a strong hit.'
    }
  },
  {
    name: 'Bagger',
    group: 'General',
    description: 'Access to and storage of blood bags.',
    icon: 'medical_services',
    abilities: {
      1: 'Thanks to contacts in hospitals, you can get 2 blood bags per week. When you drink from one, roll +force. On a strong hit, restore 2 blood. On a weak hit or a miss, restore only 1.',
      2: 'You have the equipment and skills needed to collect blood. When you take blood from a victim (that could be hypnotized, dying or willing), gain 1 extra blood bag.',
      3: 'When you resupply your blood bag stock from your hospital contacts, roll a die. On an even number, you get 3 blood bags. On an odd, you get 4.'
    }
  },
  {
    name: 'Blood Alchemy',
    group: 'Power',
    description: 'Turn blood into dangerous substances.',
    icon: 'science',
    abilities: {
      1: 'Power, force. You can turn your blood into acid and shed it through shallow cuts in your veins. It will corrode most surfaces and destroy small items.',
      2: 'You can turn your blood into a paralyzing poison, which can be injected or drunk, that will affect both mortals and vampires. The victim stays immobilized for one scene.',
      3: 'You can heat a mortal\'s blood. When you face a foe, you may spend blood and deal equal harm to the blood spent.'
    }
  },
  {
    name: 'Buff',
    group: 'Power',
    description: 'Supernatural boost to strength and stamina.',
    icon: 'fitness_center',
    abilities: {
      1: 'Power, force. When you perform a feat of supernatural strength, stamina or toughness, you may sacrifice blood (1-5) to gain an equal amount of bonus on your roll. The blood you spend to activate this power counts to the bonus.',
      2: 'When you do it, you may lose 1 more blood to re-roll any dice.',
      3: 'Take +2 focus on a hit.'
    }
  },
  {
    name: 'Cutthroat',
    group: 'General',
    description: 'Skill with bladed weapons.',
    icon: 'content_cut',
    abilities: {
      1: 'When you are in position to attack an unsuspecting foe with a bladed weapon, choose one before rolling: Add +2 and take +1 focus on a hit, or Inflict +2 harm on a hit. When you intimidate someone at the point of your blade, or when you rely on your blade outside of battle, add +1.',
      2: 'Once per fight, when you perform a feint or misdirection, re-roll any dice and take +1 focus on a hit.',
      3: 'When you intimidate or persuade someone while armed, add +1 and take +1 focus on a hit.'
    }
  },
  {
    name: 'Decay',
    group: 'Power',
    description: 'Weaken and destroy bodies.',
    icon: 'dangerous',
    abilities: {
      1: 'Power, force. With the power of your mind, you can engulf a corpse in flames and turn it into a pile of dust in a few moments.',
      2: 'You can cripple a foe\'s body part, weakening it as if it was 100 old, for one scene. In combat, roll +intellect and deal x2 harm.',
      3: 'You can make living people look dead for one scene. You need one minute of concentration to perform this.'
    }
  },
  {
    name: 'Driver',
    group: 'General',
    description: 'Driving skills.',
    icon: 'drive_eta',
    abilities: {
      1: 'You have a vehicle. When you drive fast or dangerously, add +1 and take +1 focus on a hit. On a strong hit with a match, take +1 focus.',
      2: 'When you roll to maneuver your vehicle and burn focus to improve your result, roll a die. On a 9, 1, or 0, you don\'t have to reset your focus.',
      3: 'When you attempt something dangerous by taking a hit or crashing through an obstacle, you may reroll any dice. If you do, take +1 focus on a hit.'
    }
  },
  {
    name: 'Empath',
    group: 'General',
    description: 'Empathy and peoplereading skills.',
    icon: 'psychology',
    abilities: {
      1: 'When you look into the eyes of someone and try to read their intent or emotions, add +1 and take +1 focus on a hit.',
      2: 'As above, and if you score a hit as you read them, you may subtly influence their attitude or actions, such as making a hostile being hesitate. Take another +1 focus. If in a fight, mark progress.',
      3: 'When you attempt to soothe a being\'s distress through empathy, roll +heart and take +1 focus on a hit.'
    }
  },
  {
    name: 'Fame',
    group: 'General',
    description: 'A cult celebrity status.',
    icon: 'star',
    abilities: {
      1: 'People from a specific subculture know and praise you. When dealing with someone who\'s already impressed by you, add +1 to all glamour rolls. Take -1 whenever you need to remain anonymous or hide your presence in public settings.',
      2: 'When you spend time talking to a fan or reflecting on your fame to boost your self-confidence, take another +2 spirit on a strong hit (+4 instead of +2), or +1 on a weak hit (+3 instead of +2).',
      3: 'When you make a Conclusion Roll to create a bond with someone who\'s impressed by you, take +2 focus and reroll any dice.'
    }
  },
  {
    name: 'Familiar',
    group: 'Power',
    description: 'Turn dead animals into familiars.',
    icon: 'cruelty_free',
    abilities: {
      1: 'Power, intellect. When you drain a small animal (cat, owl, raven, dog…) of its blood and feed him yours, its corpse comes back to life as a familiar for one week and efficiently obeys simple, single word commands.',
      2: 'When you use your familiar\'s keen senses to track something or investigate a place, add +1 and take +1 focus on a hit.',
      3: 'When you fight alongside your familiar and score a hit, inflict +1 harm or take +1 focus.'
    }
  },
  {
    name: 'Fierce',
    group: 'General',
    description: 'Bare-handed fighting skills.',
    icon: 'sports_martial_arts',
    abilities: {
      1: 'When you attack using your sharp teeth and claws as a weapon, you may add +2. If you do (decide before rolling), inflict +1 harm on a strong hit and count a weak hit as a miss.',
      2: 'When you do it and score a hit against a mortal, you also gain +1 blood. On a match, gain +3.',
      3: 'When you attempt to feed on someone by assaulting them with brute force, or when you try to disarm, trip, shove, grapple, or stun your foe, add +1 and take +1 focus on a hit.'
    }
  },
  {
    name: 'Gunslinger',
    group: 'General',
    description: 'Shooting skills.',
    icon: 'gps_fixed',
    abilities: {
      1: 'When take a moment to aim before shooting, choose your approach and add +1. Trust your instincts (Roll +intellect, and take +2 focus on a strong hit) or Line up your shot (Roll +dexterity, and take +1 focus on a hit).',
      2: 'Once per fight, you may take extra shots and suffer -2 focus (decide before rolling). When you do, re-roll any dice. On a hit, inflict +2 harm and take +1 focus.',
      3: 'When you intimidate or persuade someone while armed, add +1 and take +1 focus on a hit.'
    }
  },
  {
    name: 'Ghost Whisperer',
    group: 'General',
    description: 'Communicate with ghosts.',
    icon: 'person_outline',
    abilities: {
      1: 'You are able to communicate with the dead. When you approach a corpse, you may talk to their spirit for up to one scene as if it was a living person. They may share information or insight, but spirits often speak in cryptic ways.',
      2: 'You may command a ghost to do as you say. Roll +force. On a strong hit, they will obey three orders. On a weak hit, they obey one. On a miss, they don\'t. Ghosts can move objects, manipulate electronic devices, and speak to people.',
      3: 'You don\'t need the corpse of someone to talk to their ghost. Once per session, you may call one ghost from the underworld and speak with them just as if their body was lying in front of you.'
    }
  },
  {
    name: 'Heart Breaker',
    group: 'General',
    description: 'Seduction and glamour skills.',
    icon: 'favorite',
    abilities: {
      1: 'When you act by being seductive, add +2. On a strong hit with a match, your charm creates an unexpected opportunity; take the value of your glamour as +focus.',
      2: 'When you charm your way out of a situation and burn focus to gain a strong hit, take +1 focus after you reset. If you envision how this momentary success leaves you fated for future trouble, gain 1 xp.',
      3: 'When you feed from someone you seduced, you gain other +2 blood (restoring +4 in total).'
    }
  },
  {
    name: 'Home Invader',
    group: 'General',
    description: 'Larceny and security skills.',
    icon: 'lock_open',
    abilities: {
      1: 'When you break into a protected area or hack a secure system, add +1 and take +1 focus on a hit. On a strong hit with a match, access is easier than expected; take another +1 focus.',
      2: 'When hunting or feeding inside the place you are invading, reroll any dice.',
      3: 'When you search a secure area after any kind of useful information with observation, you may re-roll any dice.'
    }
  },
  {
    name: 'Horrendous',
    group: 'Nature',
    description: 'A monstrous, atrocious appearance.',
    icon: 'face',
    abilities: {
      1: 'Nature. Vampirism turned your body into an atrocious version of what it was in life. Your glamour is reduced by 1, but you gain +1 and take +1 focus on a hit when you intimidate, scare, hide or sneak.',
      2: 'You relish the repulse you inspire in others. When you scare or intimidate based on your looks, take +1 spirit on a hit, and +3 on a match.',
      3: 'Your lonely existence gave you deep insight into the human soul. When you attempt to read someone\'s true intentions or feelings, re-roll any dice.'
    }
  },
  {
    name: 'Hunting Field',
    group: 'General',
    description: 'A favorite place to hunt.',
    icon: 'location_on',
    abilities: {
      1: 'You have a favorite place to hunt (a building, a square, a small park, a shop). When you attempt to feed within it, add +1 and take +1 focus on a hit.',
      2: 'When you attempt to hide, sneak or observe someone or something within your hunting field, add +1 and take +1 focus on a hit.',
      3: 'When you spend time and relax in your hunting field to recover spirit, gain +2 spirit (+4 total).'
    }
  },
  {
    name: 'Hypnosis',
    group: 'Power',
    description: 'Subdue others\' will and manipulate them with words.',
    icon: 'remove_red_eye',
    abilities: {
      1: 'Power, glamour. When you meet a victim in the eyes, you may give it a simple command that will be obeyed instantly ("leave", "follow", "grab") unless it\'s harmful or impossible ("die", "fly"). The victim goes into a trance until right after the action, and won\'t recall the incident.',
      2: 'Your command can be complex ("take this car and drive to this address at this time this day of the month") and have an activation trigger ("...when you hear the word Genesis").',
      3: 'You may give a suggestion that reshapes the memories of the victims ("You couldn\'t be in the crime scene because last Saturday morning at 8am you went to the grocery store to buy milk and eggs to bake a cake"). The more detailed the suggestion is, the more effective.'
    }
  },
  {
    name: 'Illusion',
    group: 'Power',
    description: 'Project things that aren\'t there.',
    icon: 'blur_on',
    abilities: {
      1: 'Power, glamour. For one scene, you can conjure a static illusion that has no actual solid presence and confuses one sense (a stench, a sound, a tattoo, etc.).',
      2: 'Your illusions may appeal to all senses (you can make a cup of hot water feel like a glass of cool champagne).',
      3: 'You can create illusions with motion (person, running water, living being, fire).'
    }
  },
  {
    name: 'Lair',
    group: 'General',
    description: 'A comfortable place to hide and sleep.',
    icon: 'home',
    abilities: {
      1: 'You have your own place to sleep. It\'s not much, but it beats abandoned buildings. Whenever you awaken after spending a day resting in your lair, roll +heart. On a hit, gain +1 spirit. On a match, also gain +1 health.',
      2: 'Your lair is very presentable. When you attempt to bring a victim to it, add +1 and take +1 focus on a hit.',
      3: 'Your lair is full of useful stuff. When you search for an useful object or tool inside it, add +1 and take +1 focus on a hit.'
    }
  },
  {
    name: 'Lore Keeper',
    group: 'General',
    description: 'Research skills and affinity for knowledge.',
    icon: 'menu_book',
    abilities: {
      1: 'When you make a Conclusion Roll to finish a quest to recover valuable knowledge or an extraordinary relic, take +2 focus. You may re-roll any dice.',
      2: 'When you conduct extended research or study, re-roll any dice. On a match, you piece together an extraordinary or harrowing new theory; envision the nature of this revelation and take +1 forward if you act on it.',
      3: 'When you recall esoteric knowledge to your advantage, add +1. On a hit, envision the obscure but helpful fact, theory, or technique you put to use, and take +1 focus.'
    }
  },
  {
    name: 'Lunacy',
    group: 'Power',
    description: 'Make people lose touch with reality.',
    icon: 'psychology_alt',
    abilities: {
      1: 'Power, glamour. You are able to heighten or dull someone\'s current emotions (turn mild irritation into violent rage, or obsession into disinterest).',
      2: 'You can disturb someone\'s senses with flashes of content of their unconscious that will make them lose touch with reality for one minute.',
      3: 'You can make your victim mistake theirs or others\' identity. For example, you can make someone think they\'re Napoleon, or think her wife is secretly an alien in disguise. This effect lasts for one scene.'
    }
  },
  {
    name: 'Magnetism',
    group: 'Power',
    description: 'Supernatural boost to charisma.',
    icon: 'person_add',
    abilities: {
      1: 'Power, glamour. When you impress or attract someone, you may sacrifice blood (1-5) to gain an equal amount of bonus on your roll. The blood you spend to activate this power counts to the bonus.',
      2: 'When you do it, you may lose 1 more blood to re-roll any dice.',
      3: 'Take +2 focus on a hit.'
    }
  },
  {
    name: 'Mannequin',
    group: 'General',
    description: 'A mortal devoted to giving blood to you.',
    icon: 'person',
    abilities: {
      1: 'You have a reliable source of blood in a mortal fascinated by you. They swore to keep your secret and be readily available whenever you are hungry. If they die and you want another mannequin, you have to pick this asset again from the start, but you may buy it for 1 xp.',
      2: 'Your mannequin trusts you way more than they should. When you gather info about the mortal world by speaking to your mannequin, you may re-roll any dice.',
      3: 'Having a steady source of blood brings you peace of mind. When you feed from your mannequin, take +1 spirit on a hit, and +2 spirit on a match.'
    }
  },
  {
    name: 'Marked',
    group: 'General',
    description: 'You are hunted by a power or authority.',
    icon: 'gps_fixed',
    abilities: {
      1: 'You are hunted by a power or authority. When you score a weak hit, you may improve the result to a strong hit. If you do, fill one segment of a four-segment progress track to represent hunters closing in. When the track is filled, a notable foe or force has tracked you down. If you overcome them or escape, reset the track and gain 1xp.',
      2: 'When you act by hiding, concealing your identity, or fleeing from a pursuer, add +1 and take +1 focus on a hit.',
      3: 'When you finish a quest by clearing your name or defeating the power or authority who marked you as a fugitive, gain this ability at no cost. You may then exchange this asset for another with the same number of marked abilities.'
    }
  },
  {
    name: 'Mutation',
    group: 'Power',
    description: 'Transform the substance of your body.',
    icon: 'transform',
    abilities: {
      1: 'Power, force. You can merge with the earth below you for one scene. You can still feed if blood falls into the ground where you are. You can also climb walls without difficulty.',
      2: 'In this scene, you can turn into an animal (a bat, a wolf, a crow, a snake, etc.) for as long, and as many times, as you want.',
      3: 'For one scene, you are able to turn your skin into a scaly hide that grants you +1 in rolls to defend against damage.'
    }
  },
  {
    name: 'Path of the Demon',
    group: 'Ritual',
    description: 'Rites of cruelty.',
    icon: 'whatshot',
    abilities: {
      1: 'Ritual. When you mix your blood with dirt and allow it to sit for a few hours, you create a poison lethal to mortals. Those who consume it will die in their sleep, peacefully, seemingly from natural causes.',
      2: 'When you pour a few drops of your blood into a vial of water and utter magical words, you transform the liquid into a drug capable of incapacitating a vampire for an entire night. The drug can be injected or ingested.',
      3: 'You can extract the soul of a victim from her body and transfer it permanently into one of her possessions, transforming it into a haunted and cursed object. When you unite her fresh corpse with a cherished possession of hers and sing magic words around it, the effect is activated. The object will interfere negatively on any action performed in its vicinity, except for you.'
    }
  },
  {
    name: 'Path of the Eye',
    group: 'Ritual',
    description: 'Rites of insight.',
    icon: 'visibility',
    abilities: {
      1: 'Ritual. When you place crossed bones and skulls at every entrance of a room (including windows and other openings) and seal them with a glyph drawn in your own blood, you ensure that every question asked within the room receives a truthful and immediate answer.',
      2: 'When you draw a circle in blood and walk around it, you are able to witness events from up to five years ago in that area.',
      3: 'When you mix a drop of your blood in a small pool of other and utter magic words while holding the possession of a target, you are able to hear and see the surroundings of the observed through the water until you leave.'
    }
  },
  {
    name: 'Path of the Guardian',
    group: 'Ritual',
    description: 'Rites of protection.',
    icon: 'shield',
    abilities: {
      1: 'Ritual. When you draw a circle in blood and chant magic words, the area will magically repel mortals and animals.',
      2: 'When you draw a circle in blood and chant magic words, the area will magically repel supernatural living creatures.',
      3: 'When you draw a circle in blood and chant magic words, the area will magically repel vampires and the undead.'
    }
  },
  {
    name: 'Path of the Pursuer',
    group: 'Ritual',
    description: 'Rites of hunting.',
    icon: 'track_changes',
    abilities: {
      1: 'Ritual. When you let blood flow from the palms of your hands, you can fashion a whip. When employed in combat, treat it as a heavy impact weapon.',
      2: 'When you touch the center of your chest with red-hot metal, it renders your heart impervious to a stake for one night. Endure 2 harm.',
      3: 'When you submerge a pebble in blood and recite magical words, you transform the stone into a tracking device that always reveals in which direction it is. The effect persists until the pebble is destroyed.'
    }
  },
  {
    name: 'Path of Radiance',
    group: 'Ritual',
    description: 'Rites of sunlight adaptability.',
    icon: 'light_mode',
    abilities: {
      1: 'Ritual. When you extinguish a candle with blood, you are granted the ability to withstand fatigue induced by daylight. You can remain awake for an entire day, needing rest only in the subsequent sunlight.',
      2: 'When you sleep in a brightly lit location, you can reverse your sleep cycle. Now, you awaken at dawn and rest at dusk. The effects endure until you sleep in a dark place.',
      3: 'When you awaken the powers of your blood to appear human while reflecting on a potent memory of your mortal past, you extend the effects to 24 hours instead of just one scene.'
    }
  },
  {
    name: 'Path of the Spider',
    group: 'Ritual',
    description: 'Rites of curses and fatality.',
    icon: 'pest_control',
    abilities: {
      1: 'Ritual. When you wash your face in blood and speak the name of a victim, she will experience intense hunger. A vampire will be induced to starvation, and will act out of instinct, impulse and hunger.',
      2: 'When you burn a piece of paper marked with your bloody hand print and say the name of a vampire within a one-kilometer radius, the victim will lose the reanimating power of blood and turn into a corpse for a whole night.',
      3: 'This ceremony is only potent against living entities. By burning a strand of hair, a nail clipping, or any other refuse from the subject\'s body, and uttering mystical incantations, a curse is placed that can be activated at will. Upon activation, the victim\'s throat splits, and their bowels forcefully expel from their body, leading to almost certain death, even with immediate medical intervention.'
    }
  },
  {
    name: 'Path of the Tongue',
    group: 'Ritual',
    description: 'Rites of communication.',
    icon: 'translate',
    abilities: {
      1: 'Ritual. When you inscribe a message in blood on a piece of paper and utter the recipient\'s name, the message manifests before her. It may appear on any solid surface within their sight (a desk, a mirror, another piece of paper) and vanishes upon being read.',
      2: 'When you meditate silently for 30 minutes while repeating the name of someone with whom you share a blood link (or your progenitor) you can communicate telepathically with her for one scene.',
      3: 'When you set fire to the tongue of a victim, you gain the ability to comprehend all languages she knows. This effect is permanent.'
    }
  },
  {
    name: 'Picky Taste',
    group: 'Nature',
    description: 'Craving for a specific kind of blood.',
    icon: 'restaurant',
    abilities: {
      1: 'Nature. You always crave for the same specific type of blood (A-, blondes, doctors, leninists, etc.). Whenever you feed from this type, always restore full blood. Whenever you feed from other mortals, always gain -1 blood.',
      2: 'Experience made your stomach stronger. When feeding from mortals that are not your favorite type, you may suffer -1 spirit instead of gaining -1 blood.',
      3: 'You know your victims\' habits like the back of your hand. When you roll to look for a mortal of your type to feed from, reroll any dice.'
    }
  },
  {
    name: 'Reanimation',
    group: 'Power',
    description: 'Reanimate dead bodies.',
    icon: 'person_add',
    abilities: {
      1: 'Power, intellect. For one scene, you are able to reanimate a dead body and make it perform a simple function (dig a hole, lift heavy objects, walk there).',
      2: 'You can command the corpse to attack someone or something. When you fight alongside it, deal +1 harm and gain +1 focus on a hit.',
      3: 'You can make the corpse talk and behave as a very weird human being for one scene.'
    }
  },
  {
    name: 'Resilient',
    group: 'General',
    description: 'Self wound healing skills.',
    icon: 'healing',
    abilities: {
      1: 'When you spend blood to heal yourself, choose one: Add +1 and take +1 focus on a hit, or Gain +1 health on a hit (+3 in total).',
      2: 'You have enough patience and stamina to take care of whatever wound you suffer, as long as you have at least a few hours and a comfortable place. When you burn focus to heal yourself, you don\'t need to reset it.',
      3: 'You have a high recovery rate. When you feed, you may exchange your gained points of blood for health.'
    }
  },
  {
    name: 'Seer',
    group: 'Nature',
    description: 'Insight and intuition.',
    icon: 'remove_red_eye',
    abilities: {
      1: 'Nature. Once per day, you may envision experiencing a prophetic dream (ask the oracle for details). If you record the answer, and later face a situation which gives truth to the vision, take an automatic strong hit (one time only) when making acting on your foresight. Then, clear the prophecy. Only one prophecy can be active at a time.',
      2: 'When you focus or meditate to gain insight about a place, being, or situation, add +1 and take +1 focus on a hit.',
      3: 'When you score a strong hit as you socialize with a community or search a place, you may envision gaining sudden and unbidden insight about the location. If you do, take +2 focus.'
    }
  },
  {
    name: 'Shadow Touch',
    group: 'Power',
    description: 'Control and manipulate shadows.',
    icon: 'contrast',
    abilities: {
      1: 'Power, dexterity. You can reshape, stretch or overlap shadows, or even separate them from their casting bodies. Your manipulation grants them a mystical density that can smother mortals.',
      2: 'You can create a cloud of pitchblack darkness that obscures all light and sound. The cloud is just large enough for you to hide in it.',
      3: 'The shadows are able to grab and restrain foes.'
    }
  },
  {
    name: 'Sixth Sense',
    group: 'Power',
    description: 'Pick up psychic impressions from your surroundings.',
    icon: 'psychology',
    abilities: {
      1: 'Power, intellect. You can sense the intentions of people around you. When you are next to other individuals, you can awaken your powers to ask two questions to the oracle about who\'s the weakest, most likely to harm you, or most likely to give you what you want. Then, add +1 and take +1 focus on the next move related to the answer.',
      2: 'You can read people\'s thoughts and memories. Once per night, you may psychically inspect the mind of someone next to you as if it were a book.',
      3: 'When you hold an object in your hands, you are able to pick up psychic impressions from it and learn who held it last and when it was last held.'
    }
  },
  {
    name: 'Stalker',
    group: 'General',
    description: 'Stealth and stalking skills.',
    icon: 'visibility_off',
    abilities: {
      1: 'When you attempt to follow someone in a crowd without being noticed, add +1 and take +1 focus on a hit.',
      2: 'The bonus now applies to any situation, not only crowds.',
      3: 'When you attempt to eavesdrop or watch someone, add +1 and take +1 focus on a hit.'
    }
  },
  {
    name: 'Technomancy',
    group: 'Power',
    description: 'Magically interact with electronic devices.',
    icon: 'computer',
    abilities: {
      1: 'Power, intellect. You can cause an electronic device to malfunction for 1 minute.',
      2: 'You can mystically encrypt or decrypt a device\'s controls, making it inaccessible for everyone else. This also works on media (CD, flash drive).',
      3: 'Using only words, you can manipulate an electronic device remotely. The device will obey you even if you don\'t understand how it works. Of course, it won\'t do something it can\'t (a 3d printer will "print a stake", but will not "make coffee").'
    }
  },
  {
    name: 'Terror',
    group: 'Power',
    description: 'Exude a disturbing aura.',
    icon: 'mood_bad',
    abilities: {
      1: 'Power, force. You are able to exude a deeply unsettling aura that disturbs those who make eye contact with you. When you make a roll to intimidate someone, you may release this aura and reroll any dice.',
      2: 'Your aura twists the victim\'s mind and cause frightening hallucinations. Take +2 focus on a hit.',
      3: 'You can project this aura to anything, not only yourself.'
    }
  },
  {
    name: 'Veil',
    group: 'Power',
    description: 'Turn invisible or magically disguise yourself.',
    icon: 'visibility_off',
    abilities: {
      1: 'Power, dexterity. You can become invisible for one scene. While invisible, when you hide, sneak or ambush someone add +1 and take +1 focus on a hit.',
      2: 'When you intentionally drop your veil to reveal yourself for dramatic or surprising effect, foregoing its further use in this situation, take +2 focus.',
      3: 'Instead of disappearing, you alter other people\'s perception of you and how they see you. You can appear as someone specific ("Uncle Joe") or as a reflection of subjective concepts that could mean one thing for each person ("Caring Old Lady", "The Woman of Your Dreams").'
    }
  },
  {
    name: 'Weak Blood',
    group: 'Nature',
    description: 'You look human and daylight doesn\'t harm you, but you have no fangs.',
    icon: 'person',
    abilities: {
      1: 'Nature. Your body reacts differently to vampirism. You can eat, drink water, have sex and appear human in other ways without spending blood. Daylight does not harm you, but you still feel tired during the day and must spend 1 blood for each day (not night) scene you play. You have no fangs and must rely on sharp objects to draw blood from your victims. When you feed from someone, you always lose 1 focus no matter the result of your roll.',
      2: 'In some ways, time brought you even closer to your late humanity and to the mortals around you. Whenever you communicate with or read the emotions of humans, add +1 and take +1 focus on a hit.',
      3: 'Your experience with your distinct nature shaped your presence differently than other vampires. Whenever you hide your vampiric nature from other vampires or even mortals, re-roll any dice.'
    }
  },
  {
    name: 'Weather Command',
    group: 'Power',
    description: 'Control weather.',
    icon: 'cloud',
    abilities: {
      1: 'Power, force. You can conjure fog. When you hide or sneak within it, add +1 and take +1 focus on a hit.',
      2: 'You can make it rain. When it\'s raining and you roll to hide or sneak, you may reroll any dice. Take +1 focus on a hit.',
      3: 'You can make winds blow. When it\'s windy and you roll to protect against gunshots, you may reroll any dice. Take +1 focus on a hit.'
    }
  },
  {
    name: 'Wilderness',
    group: 'Power',
    description: 'Supernatural affinity with beasts.',
    icon: 'forest',
    abilities: {
      1: 'Power, heart. You understand beasts and communicate with them for one scene. You also see clearly in pitch black.',
      2: 'Being close to beasts strengthens your instincts. When you react or search by using your senses, you may roll +force instead of +intellect.',
      3: 'You can make your blood attract dangerous predators. When you do it and pour a few drops somewhere, beasts will immediately follow the smell and try to devour the blood.'
    }
  }
] 