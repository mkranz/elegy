import type { Move } from '@/types/moves'
import type { Character, ProgressTrack } from '@/types/character'
import { usePayThePrice } from './usePayThePrice'
import { useProgressTrack } from './useProgressTrack'

const { payThePrice } = usePayThePrice()
const { increaseProgress, decreaseProgress } = useProgressTrack()

export function useMoves() {
  const moves: Record<string, Move> = {
    enterTheFray: {
      name: 'Enter The Fray',
      description: 'When you initiate combat or are forced into a fight, envision your objective and give it a rank. If the combat includes discrete challenges or phases, set an objective with a rank for each. Then, roll to see if you are in control.',
      outcomes: {
        strongHit: {
          text: 'Take 2 focus.',
          actions: [{
            label: 'Take +2 Focus',
            execute: (character: Character, progressTrack?: ProgressTrack) => {
              character.focus = Math.min(10, character.focus + 2)
              if (progressTrack) {
                progressTrack.isInitialized = true
              }
            }
          }]
        },
        weakHit: {
          text: 'Take 1 focus.',
          actions: [{
            label: 'Take +1 Focus',
            execute: (character: Character, progressTrack?: ProgressTrack) => {
              character.focus = Math.min(10, character.focus + 1)
              if (progressTrack) {
                progressTrack.isInitialized = true
              }
            }
          }]
        },
        miss: {
          text: 'The fight begins with you in disadvantage. Lose 1 focus.',
          actions: [{
            label: 'Lose 1 Focus',
            execute: (character: Character, progressTrack?: ProgressTrack) => {
              character.focus = Math.max(-6, character.focus - 1)
              if (progressTrack) {
                progressTrack.isInitialized = true
              }
            }
          }]
        }
      }
    },

    faceDanger: {
      name: 'Face Danger',
      description: 'When you attempt something risky or react to an imminent threat, envision your action and roll.',
      outcomes: {
        strongHit: {
          text: 'You are successful. Take +1 focus.',
          actions: [{
            label: 'Take +1 Focus',
            execute: (character: Character) => character.focus = Math.min(10, character.focus + 1)
          }]
        },
        weakHit: {
          text: 'You succeed, but not without a cost. Pay the Price.',
          actions: [{
            label: 'Pay the Price',
            execute: () => payThePrice()
          }]
        },
        miss: {
          text: 'You fail, or a momentary success is undermined by a dire turn of events. Pay the Price.',
          actions: [{
            label: 'Pay the Price',
            execute: () => payThePrice()
          }]
        }
      }
    },

    secureAdvantage: {
      name: 'Secure An Advantage',
      description: 'When you assess a situation, make preparations, or attempt to gain leverage, envision your action and roll.',
      outcomes: {
        strongHit: {
          text: 'You succeed. Take both: Take +2 focus, and add +1 on your next roll (not a Conclusion Roll)',
          actions: [{
            label: 'Take +2 Focus',
            execute: (character: Character) => character.focus = Math.min(10, character.focus + 2)
          }]
          // Note: +1 on next roll needs to be tracked separately
        },
        weakHit: {
          text: 'You succeed. Choose one: Take +2 focus, or add +1 on your next roll (not a Conclusion Roll)',
          actions: [{
            label: 'Take +2 Focus',
            execute: (character: Character) => character.focus = Math.min(10, character.focus + 2)
          }]
          // Note: Alternative option needs to be tracked separately
        },
        miss: {
          text: 'You fail or your assumptions betray you. Pay the Price.',
          actions: [{
            label: 'Pay the Price',
            execute: () => payThePrice()
          }]
        }
      }
    },

    gatherInformation: {
      name: 'Gather Information',
      description: 'When you search for clues, conduct an investigation, analyze evidence, or do research',
      outcomes: {
        strongHit: {
          text: 'You discover something helpful and specific. The path you must follow or action you must take to make progress is made clear. Envision what you learn. Then, take +2 focus.',
          actions: [{
            label: 'Take +2 Focus',
            execute: (character: Character) => character.focus = Math.min(10, character.focus + 2)
          }]
        },
        weakHit: {
          text: 'The information provides new insight, but also complicates your quest. Envision what you discover. Then, take +1 focus.',
          actions: [{
            label: 'Take +1 Focus',
            execute: (character: Character) => character.focus = Math.min(10, character.focus + 1)
          }]
        },
        miss: {
          text: 'Your investigation unearths a dire threat or reveals an unwelcome truth that undermines your quest. Pay the Price.',
          actions: [{
            label: 'Pay the Price',
            execute: () => payThePrice()
          }]
        }
      }
    },

    aidYourAlly: {
      name: 'Aid Your Ally',
      description: 'When you Secure an Advantage in direct support of an ally and score a hit, they (instead of you) can take the benefits of the move. If you are in combat and score a strong hit, you and your ally have initiative.',
      outcomes: {
        strongHit: { text: '', actions: [] }, // This move doesn't have its own outcomes - it modifies Secure an Advantage
        weakHit: { text: '', actions: [] },
        miss: { text: '', actions: [] }
      }
    },

    compel: {
      name: 'Compel',
      description: 'When you try to persuade someone or make them an offer, envision your approach.',
      outcomes: {
        strongHit: {
          text: "They'll do what you want or agree to your conditions. Take +1 focus.",
          actions: [{
            label: 'Take +1 Focus',
            execute: (character: Character) => character.focus = Math.min(10, character.focus + 1)
          }]
        },
        weakHit: {
          text: "As above, but their agreement comes with a demand or complication. Envision their counteroffer.",
          actions: []
        },
        miss: {
          text: "They refuse or make a demand that costs you greatly. Pay the Price.",
          actions: [{
            label: 'Pay the Price',
            execute: () => payThePrice()
          }]
        }
      }
    },

    usePower: {
      name: 'Use Power',
      description: 'When you use your supernatural abilities to activate a power, visualize the effects you want to manifest and roll the stat indicated in its asset card; if you use them to appear human for a scene (blushing, being able to have sex or consume food)',
      outcomes: {
        strongHit: {
          text: "The power is activated successfully. Take 1 focus.",
          actions: [{
            label: 'Take +1 Focus',
            execute: (character: Character) => character.focus = Math.min(10, character.focus + 1)
          }]
        },
        weakHit: {
          text: "The power is activated successfully, but you get hungrier. Spend 1 blood.",
          actions: [{
            label: 'Spend 1 Blood',
            execute: (character: Character) => character.meters.blood = Math.max(0, character.meters.blood - 1)
          }]
        },
        miss: {
          text: "You get hungrier and the power is activated, but not without consequences. Spend 1 blood and Pay the Price.",
          actions: [
            {
              label: 'Spend 1 Blood',
              execute: (character: Character) => character.meters.blood = Math.max(0, character.meters.blood - 1)
            },
            {
              label: 'Pay the Price',
              execute: () => payThePrice()
            }
          ]
        }
      }
    },

    performRitual: {
      name: 'Perform Ritual',
      description: 'When you perform a ritual of blood magic, envision what to want to achieve and how you perform it.',
      outcomes: {
        strongHit: {
          text: "The ritual is performed successfully. Take 1 focus.",
          actions: [{
            label: 'Take +1 Focus',
            execute: (character: Character) => character.focus = Math.min(10, character.focus + 1)
          }]
        },
        weakHit: {
          text: "The ritual is performed successfully, but it consumes the blood within you. Spend 1 blood.",
          actions: [{
            label: 'Spend 1 Blood',
            execute: (character: Character) => character.meters.blood = Math.max(0, character.meters.blood - 1)
          }]
        },
        miss: {
          text: "The ritual consumes your blood and has undesired consequences. Spend 1 blood and roll on the list below.",
          actions: [{
            label: 'Spend 1 Blood',
            execute: (character: Character) => character.meters.blood = Math.max(0, character.meters.blood - 1)
          }]
        }
      }
    },

    rest: {
      name: 'Rest',
      description: 'When you spend the whole daytime in deep sleep in a dark place',
      outcomes: {
        strongHit: {
          text: "You rest well, and get both bonuses: Restore 1 health and gain +2 focus.",
          actions: [
            {
              label: 'Restore 1 Health',
              execute: (character: Character) => character.meters.health = Math.min(5, character.meters.health + 1)
            },
            {
              label: 'Take +2 Focus',
              execute: (character: Character) => character.focus = Math.min(10, character.focus + 2)
            }
          ]
        },
        weakHit: {
          text: "You have a regular day of sleep. Pick one: Restore 1 health or gain +2 focus.",
          actions: [
            {
              label: 'Restore 1 Health',
              execute: (character: Character) => character.meters.health = Math.min(5, character.meters.health + 1)
            },
            {
              label: 'Take +2 Focus',
              execute: (character: Character) => character.focus = Math.min(10, character.focus + 2)
            }
          ]
        },
        miss: {
          text: "Pick one (on a match, pick both): You get hungrier (lose 1 blood) or you don't sleep well (lose 1 focus).",
          actions: [
            {
              label: 'Lose 1 Blood',
              execute: (character: Character) => character.meters.blood = Math.max(0, character.meters.blood - 1)
            },
            {
              label: 'Lose 1 Focus',
              execute: (character: Character) => character.focus = Math.max(-6, character.focus - 1)
            }
          ]
        }
      }
    },

    clash: {
      name: 'Clash',
      description: 'When you fight against a foe at close quarters, or exchange fire at a distance',
      outcomes: {
        strongHit: {
          text: 'Mark progress twice. You overwhelm your foe.',
          actions: [{
            label: 'Mark Progress (×2)',
            execute: (character: Character, progressTrack?: ProgressTrack) => {
              if (progressTrack) {
                increaseProgress(progressTrack)
                increaseProgress(progressTrack)
              }
            }
          }]
        },
        weakHit: {
          text: 'Mark progress, but you are dealt a counterblow or setback. Pay the Price.',
          actions: [
            {
              label: 'Mark Progress',
              execute: (character: Character, progressTrack?: ProgressTrack) => {
                if (progressTrack) {
                  increaseProgress(progressTrack)
                }
              }
            },
            {
              label: 'Pay the Price',
              execute: () => payThePrice()
            }
          ]
        },
        miss: {
          text: 'Your foe dominates this exchange. Pay the Price.',
          actions: [{
            label: 'Pay the Price',
            execute: () => payThePrice()
          }]
        }
      }
    },

    battle: {
      name: 'Battle',
      description: 'When you fight a battle, and it happens in a blur, envision your objective and roll.',
      outcomes: {
        strongHit: {
          text: 'You achieve your objective unconditionally. You and any allies who joined the battle may take +2 focus.',
          actions: [{
            label: 'Take +2 Focus',
            execute: (character: Character) => character.focus = Math.min(10, character.focus + 2)
          }]
        },
        weakHit: {
          text: 'You achieve your objective, but not without cost. Pay the Price.',
          actions: [{
            label: 'Pay the Price',
            execute: () => payThePrice()
          }]
        },
        miss: {
          text: 'You are defeated or the objective is lost. Pay the Price.',
          actions: [{
            label: 'Pay the Price',
            execute: () => payThePrice()
          }]
        }
      }
    },

    endTheFight: {
      name: 'End The Fight',
      description: 'When you make a move to take decisive action, roll the challenge dice and compare to your progress. Focus is ignored on this roll.',
      outcomes: {
        strongHit: {
          text: 'This foe is no longer in the fight. They are killed, out of action, flee, or surrender as appropriate to the situation and your intent.',
          actions: []  // No automatic actions - narrative outcome
        },
        weakHit: {
          text: 'As above, but you must also choose one consequence from the list.',
          actions: []  // Requires player choice from list
        },
        miss: {
          text: 'You have lost this fight. Pay the Price.',
          actions: [{
            label: 'Pay the Price',
            execute: () => payThePrice()
          }]
        }
      }
    },

    makeConnection: {
      name: 'Make A Connection',
      description: 'When you search out a new relationship or give focus to an existing relationship (not an ally or companion)',
      outcomes: {
        strongHit: {
          text: 'You create a connection. Give them a role and rank. Whenever your connection aids you on a move closely associated with their role, add +1 and take +1 focus on a hit.',
          actions: [{
            label: 'Take +1 Focus',
            execute: (character: Character, progressTrack?: ProgressTrack) => {
              character.focus = Math.min(10, character.focus + 1)
              if (progressTrack) {
                progressTrack.isInitialized = true
              }
            }
          }]
        },
        weakHit: {
          text: 'As above, but this connection comes with a complication or cost. Envision what they reveal or demand.',
          actions: [{
            label: 'Take +1 Focus',
            execute: (character: Character, progressTrack?: ProgressTrack) => {
              character.focus = Math.min(10, character.focus + 1)
              if (progressTrack) {
                progressTrack.isInitialized = true
              }
            }
          }]
        },
        miss: {
          text: "You don't make a connection and the situation worsens. Pay the Price.",
          actions: [{
            label: 'Pay the Price',
            execute: (character: Character, progressTrack?: ProgressTrack) => {
              payThePrice()
              if (progressTrack) {
                progressTrack.isInitialized = true
              }
            }
          }]
        }
      }
    },

    testRelationship: {
      name: 'Test Your Relationship',
      description: 'When your relationship with a connection is tested through conflict, betrayal, or circumstance',
      outcomes: {
        strongHit: {
          text: 'Mark progress.',
          actions: [{
            label: 'Mark Progress',
            execute: (character: Character, progressTrack?: ProgressTrack) => {
              if (progressTrack) {
                increaseProgress(progressTrack)
              }
            }
          }]
        },
        weakHit: {
          text: 'Mark progress, but also envision a demand or complication as a fallout of this test.',
          actions: [{
            label: 'Mark Progress',
            execute: (character: Character, progressTrack?: ProgressTrack) => {
              if (progressTrack) {
                decreaseProgress(progressTrack)
              }
            }
          }]
        },
        miss: {
          text: 'Choose one: Lose the connection (envision how this impacts you and Pay the Price) or prove your loyalty (envision what you offer or what they demand, and Sing an Elegy to see it done).',
          actions: []  // Requires player choice
        }
      }
    },

    formBond: {
      name: 'Form A Bond',
      description: 'When your connection with someone is ready to evolve',
      outcomes: {
        strongHit: {
          text: "A bond is established. Earn XP based on the connection's rank and pick one: Reinforce their influence or expand their influence.",
          actions: [{
            label: 'Add Experience',
            execute: (character: Character) => {
              // TODO: Implement XP gain based on connection rank
              character.experience.total += 1
            }
          }]
        },
        weakHit: {
          text: 'As above, but your connection seeks something more first. Envision the request and fulfill it to form the bond and earn the XP reward.',
          actions: []  // Requires fulfilling request first
        },
        miss: {
          text: 'They reveal a motivation or background that introduces tension. If you maintain this relationship, roll both challenge dice, take the lower value, and clear that number of progress boxes.',
          actions: []  // Complex outcome requiring dice roll
        }
      }
    },

    endureHarm: {
      name: 'Endure Harm',
      description: 'When you face physical damage, suffer -health equal to your foe rank or as appropriate to the situation. If your health is 0, suffer -focus equal to any remaining -health.',
      outcomes: {
        strongHit: {
          text: "Choose one: Shake it off (if health > 0, suffer -1 focus for +1 health) or embrace the pain (take +1 focus).",
          actions: [
            {
              label: 'Shake it off (+1 Health, -1 Focus)',
              execute: (character: Character) => {
                if (character.meters.health > 0) {
                  character.meters.health = Math.min(5, character.meters.health + 1)
                  character.focus = Math.max(-6, character.focus - 1)
                }
              }
            },
            {
              label: 'Embrace the pain (+1 Focus)',
              execute: (character: Character) => character.focus = Math.min(10, character.focus + 1)
            }
          ]
        },
        weakHit: {
          text: "You press on.",
          actions: []
        },
        miss: {
          text: "Also suffer -1 focus. If you are at 0 health, you must mark wounded or permanently harmed (if currently unmarked) or roll on the table.",
          actions: [{
            label: 'Lose 1 Focus',
            execute: (character: Character) => character.focus = Math.max(-6, character.focus - 1)
          }]
        }
      }
    },

    faceLastDeath: {
      name: 'Face Last Death',
      description: 'When you are brought to the brink of your annihilation, and glimpse the world beyond',
      outcomes: {
        strongHit: {
          text: "You are cast back into the mortal world.",
          actions: []
        },
        weakHit: {
          text: "Choose one: Die with a noble sacrifice, or accept Death's quest.",
          actions: []  // Narrative choice
        },
        miss: {
          text: "You are destroyed.",
          actions: []  // Game over
        }
      }
    },

    endureHunger: {
      name: 'Endure Hunger',
      description: 'When you use supernatural powers or spend blood as a result of the Pay the Price move, suffer -blood as appropriate to the situation. If your blood is 0, suffer -focus equal to any remaining -focus.',
      outcomes: {
        strongHit: {
          text: "Choose one: Shake it off (if blood > 0, suffer -1 focus for +1 blood) or embrace the monster within (take +1 focus).",
          actions: [
            {
              label: 'Shake it off (+1 Blood, -1 Focus)',
              execute: (character: Character) => {
                if (character.meters.blood > 0) {
                  character.meters.blood = Math.min(5, character.meters.blood + 1)
                  character.focus = Math.max(-6, character.focus - 1)
                }
              }
            },
            {
              label: 'Embrace the monster (+1 Focus)',
              execute: (character: Character) => character.focus = Math.min(10, character.focus + 1)
            }
          ]
        },
        weakHit: {
          text: "You press on.",
          actions: []
        },
        miss: {
          text: "Also suffer -1 focus. If you are at 0 blood, you must mark starving or sinner (if currently unmarked) or roll on the table.",
          actions: [
            {
              label: 'Lose 1 Focus',
              execute: (character: Character) => character.focus = Math.max(-6, character.focus - 1)
            },
            {
              label: 'Mark Starving',
              execute: (character: Character) => {
                if (!character.impacts.starving && !character.impacts.sinner) {
                  character.impacts.starving = true
                }
              }
            }
          ]
        }
      }
    },

    faceStarvation: {
      name: 'Face Starvation',
      description: 'When you are brought to the brink of starvation',
      outcomes: {
        strongHit: {
          text: "You resist and press on.",
          actions: []
        },
        weakHit: {
          text: "Pick one: Your humanity is devoured, but not before remembering a moment of your mortal life. Envision what flashes behind your eyes. Or you get so frenzied, you commit something that angers your ruler. Envision what it is. She'll ask something in return of letting you live.",
          actions: []  // Narrative choice
        },
        miss: {
          text: "Your hunger destroys your humanity and you are forever a mindless beast.",
          actions: []  // Game over
        }
      }
    },

    endureStress: {
      name: 'Endure Stress',
      description: 'When you face mental shock or despair, suffer -spirit equal to your foe rank or as appropriate to the situation. If your spirit is 0, suffer -focus equal to any remaining -spirit.',
      outcomes: {
        strongHit: {
          text: "Choose one: Shake it off (if spirit > 0, suffer -1 focus for +1 spirit) or embrace the darkness (take +1 focus).",
          actions: [
            {
              label: 'Shake it off (+1 Spirit, -1 Focus)',
              execute: (character: Character) => {
                if (character.meters.spirit > 0) {
                  character.meters.spirit = Math.min(5, character.meters.spirit + 1)
                  character.focus = Math.max(-6, character.focus - 1)
                }
              }
            },
            {
              label: 'Embrace the darkness (+1 Focus)',
              execute: (character: Character) => character.focus = Math.min(10, character.focus + 1)
            }
          ]
        },
        weakHit: {
          text: "You press on.",
          actions: []
        },
        miss: {
          text: "Also suffer -1 focus. If you are at 0 spirit, you must mark shaken or corrupted (if currently unmarked) or roll on the table.",
          actions: [
            {
              label: 'Lose 1 Focus',
              execute: (character: Character) => character.focus = Math.max(-6, character.focus - 1)
            },
            {
              label: 'Mark Shaken',
              execute: (character: Character) => {
                if (!character.impacts.shaken && !character.impacts.traumatized) {
                  character.impacts.shaken = true
                }
              }
            }
          ]
        }
      }
    },

    faceDesolation: {
      name: 'Face Desolation',
      description: 'When you are brought to the brink of desolation',
      outcomes: {
        strongHit: {
          text: "You resist and press on.",
          actions: []
        },
        weakHit: {
          text: "Choose one: Your spirit breaks with a noble sacrifice, or accept a vision quest.",
          actions: []  // Narrative choice
        },
        miss: {
          text: "You succumb to despair or horror and are lost.",
          actions: []  // Game over
        }
      }
    },

    advance: {
      name: 'Advance',
      description: 'When you focus on your skills, receive training, find inspiration or earn a reward, you may spend 3 xp to add a new asset, or 2 xp to upgrade one. The chosen asset must be framed within fiction and make sense in the context.',
      outcomes: {
        strongHit: { text: '', actions: [] },  // This move doesn't use the standard outcome structure
        weakHit: { text: '', actions: [] },
        miss: { text: '', actions: [] }
      }
    },

    developRelationship: {
      name: 'Develop A Relationship',
      description: 'When a relationship with a connection is reinforced by: accomplishing a mission that benefits them, seeking their assistance during dire situations, presenting them with a valuable gift, sharing a significant moment, standing by them in times of hardship, or successfully navigating a test of your relationship, mark progress according to the rank of the connection.',
      outcomes: {
        strongHit: { text: '', actions: [] },  // This move uses progress marking instead of standard outcomes
        weakHit: { text: '', actions: [] },
        miss: { text: '', actions: [] }
      }
    },

    faceSetback: {
      name: 'Face A Setback',
      description: 'When your focus is at its minimum (-6), and you suffer additional -focus, choose one: Exchange each additional -focus for any combination of -health, -spirit, or -blood as appropriate to the circumstances, or envision an event or discovery which undermines your progress in a current quest, journey, or fight. Then, for each additional -focus, clear 1 unit of progress on that track per its rank (troublesome=clear 3 progress; dangerous=clear 2 progress; formidable=clear 1 progress; extreme=clear 2 ticks; epic=clear 1 tick).',
      outcomes: {
        strongHit: { text: '', actions: [] },  // This move doesn't use the standard outcome structure
        weakHit: { text: '', actions: [] },
        miss: { text: '', actions: [] }
      }
    },

    singElegy: {
      name: 'Sing An Elegy',
      description: 'When you swear to complete a quest, write your elegy and give it a rank.',
      outcomes: {
        strongHit: {
          text: 'You are emboldened, and it is clear what you must do next. Take +2 focus.',
          actions: [{
            label: 'Take +2 Focus',
            execute: (character: Character) => character.focus = Math.min(10, character.focus + 2)
          }]
        },
        weakHit: {
          text: 'You are determined but begin your quest with more questions than answers. Take +1 focus, and envision what you do to find a path forward.',
          actions: [{
            label: 'Take +1 Focus',
            execute: (character: Character) => character.focus = Math.min(10, character.focus + 1)
          }]
        },
        miss: {
          text: 'You must overcome a significant obstacle before you begin your quest. Envision what stands in your way.',
          actions: []
        }
      }
    },

    reachMilestone: {
      name: 'Reach A Milestone',
      description: 'When you make significant progress in your quest...',
      outcomes: {
        strongHit: { text: '', actions: [] },
        weakHit: { text: '', actions: [] },
        miss: { text: '', actions: [] }
      }
    },

    fulfillElegy: {
      name: 'Fulfill Your Elegy',
      description: 'When you achieve what you believe to be the fulfillment of your promise, roll the challenge dice and compare to your progress. Focus is ignored on this roll.',
      outcomes: {
        strongHit: {
          text: 'Your quest is complete. Mark experience based on rank.',
          actions: [{
            label: 'Mark Experience',
            execute: (character: Character) => {
              // TODO: Implement experience marking based on rank
              character.experience.total += 1
            }
          }]
        },
        weakHit: {
          text: 'There is more to be done, or you realize the truth of your quest. Envision what you discover. Mark reduced experience.',
          actions: [{
            label: 'Mark Reduced Experience',
            execute: (character: Character) => {
              // TODO: Implement reduced experience marking
              character.experience.total += 1
            }
          }]
        },
        miss: {
          text: 'Your quest is undone. Choose to recommit (clear progress and raise rank) or give up (Forsake Your Elegy).',
          actions: []  // Complex choice requiring player input
        }
      }
    },

    forsakeElegy: {
      name: 'Forsake Your Elegy',
      description: 'When you renounce your quest, betray your promise, or the goal is lost to you...',
      outcomes: {
        strongHit: { text: '', actions: [] },
        weakHit: { text: '', actions: [] },
        miss: { text: '', actions: [] }
      }
    }
  }

  return {
    moves
  }
} 