<template>
  <q-drawer
    v-model="isOpen"
    side="left"
    bordered
    :width="400"
  >
    <q-scroll-area class="fit">
      <q-list padding>
        <!-- Adventure Moves -->
        <q-expansion-item
          group="moves"
          icon="casino"
          label="Adventure Moves"
          default-closed
          elevated
          header-class="text-primary"
        >
          <!-- Face Danger -->
          <q-card flat bordered class="q-mb-md">
            <q-card-section>
              <div class="text-h6">Face Danger</div>
              <p>When you attempt something risky or react to an imminent threat, envision your action and roll. If you act...</p>
              
              <div class="q-gutter-y-sm">
                <div>With stealth, speed, or coordination: <StatRoll statName="dexterity" moveName="Face Danger" :outcomes="faceDangerOutcomes" /></div>
                <div>With courage, willpower, or empathy: <StatRoll statName="heart" moveName="Face Danger" :outcomes="faceDangerOutcomes" /></div>
                <div>With aggression, strength, or toughness: <StatRoll statName="force" moveName="Face Danger" :outcomes="faceDangerOutcomes" /></div>
                <div>With charm, composure, or manipulation: <StatRoll statName="glamour" moveName="Face Danger" :outcomes="faceDangerOutcomes" /></div>
                <div>With expertise, focus, or observation: <StatRoll statName="intellect" moveName="Face Danger" :outcomes="faceDangerOutcomes" /></div>
              </div>

              <p class="q-mt-sm">On a <strong>strong hit</strong>, {{ faceDangerOutcomes.strongHit.text }}</p>
              <p>On a <strong>weak hit</strong>, {{ faceDangerOutcomes.weakHit.text }}</p>
              <p>On a <strong>miss</strong>, {{ faceDangerOutcomes.miss.text }}</p>
            </q-card-section>
          </q-card>

          <!-- Secure an Advantage -->
          <q-card flat bordered class="q-mb-md">
            <q-card-section>
              <div class="text-h6">Secure An Advantage</div>
              <p>When you assess a situation, make preparations, or attempt to gain leverage, envision your action and roll. If you act...</p>
              
              <div class="q-gutter-y-sm">
                <div>With stealth, speed, or coordination: <StatRoll statName="dexterity" moveName="Secure An Advantage" :outcomes="secureAdvantageOutcomes" /></div>
                <div>With courage, willpower, or empathy: <StatRoll statName="heart" moveName="Secure An Advantage" :outcomes="secureAdvantageOutcomes" /></div>
                <div>With aggression, strength, or toughness: <StatRoll statName="force" moveName="Secure An Advantage" :outcomes="secureAdvantageOutcomes" /></div>
                <div>With charm, composure, or manipulation: <StatRoll statName="glamour" moveName="Secure An Advantage" :outcomes="secureAdvantageOutcomes" /></div>
                <div>With expertise, focus, or observation: <StatRoll statName="intellect" moveName="Secure An Advantage" :outcomes="secureAdvantageOutcomes" /></div>
              </div>

              <p class="q-mt-sm">On a <strong>strong hit</strong>, {{ secureAdvantageOutcomes.strongHit.text }}</p>
              <p>On a <strong>weak hit</strong>, {{ secureAdvantageOutcomes.weakHit.text }}</p>
              <p>On a <strong>miss</strong>, {{ secureAdvantageOutcomes.miss.text }}</p>
            </q-card-section>
          </q-card>

          <!-- Gather Information -->
          <q-card flat bordered class="q-mb-md">
            <q-card-section>
              <div class="text-h6">Gather Information</div>
              <p>When you search for clues, conduct an investigation, analyze evidence, or do research, <StatRoll statName="intellect" moveName="Gather Information" :outcomes="gatherInformationOutcomes" /></p>
              
              <p>On a <strong>strong hit</strong>, {{ gatherInformationOutcomes.strongHit.text }}</p>
              <p>On a <strong>weak hit</strong>, {{ gatherInformationOutcomes.weakHit.text }}</p>
              <p>On a <strong>miss</strong>, {{ gatherInformationOutcomes.miss.text }}</p>
            </q-card-section>
          </q-card>

          <!-- Aid Your Ally -->
          <q-card flat bordered class="q-mb-md">
            <q-card-section>
              <div class="text-h6">Aid Your Ally</div>
              <p>When you Secure an Advantage in direct support of an ally and score a hit, they (instead of you) can take the benefits of the move. If you are in combat and score a strong hit, you and your ally have initiative.</p>
            </q-card-section>
          </q-card>

          <!-- Compel -->
          <q-card flat bordered class="q-mb-md">
            <q-card-section>
              <div class="text-h6">Compel</div>
              <p>When you try to persuade someone or make them an offer, envision your approach. If you...</p>
              
              <div class="q-gutter-y-sm">
                <div>Charm or lie: <StatRoll statName="glamour" moveName="Compel" :outcomes="compelOutcomes" /></div>
                <div>Threaten or incite: <StatRoll statName="force" moveName="Compel" :outcomes="compelOutcomes" /></div>
                <div>Pacify or encourage: <StatRoll statName="heart" moveName="Compel" :outcomes="compelOutcomes" /></div>
              </div>

              <p class="q-mt-sm">On a <strong>strong hit</strong>, {{ compelOutcomes.strongHit.text }}</p>
              <p>On a <strong>weak hit</strong>, {{ compelOutcomes.weakHit.text }}</p>
              <p>On a <strong>miss</strong>, {{ compelOutcomes.miss.text }}</p>
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <!-- Power Moves -->
        <q-expansion-item
          group="moves"
          icon="auto_fix_high"
          label="Power Moves"
          default-closed
          header-class="text-primary"
        >
          <!-- Use Power -->
          <q-card flat bordered class="q-mb-md">
            <q-card-section>
              <div class="text-h6">Use Power</div>
              <p>When you use your supernatural abilities to activate a power, visualize the effects you want to manifest and roll the stat indicated in its asset card; if you use them to appear human for a scene (blushing, being able to have sex or consume food), <StatRoll statName="glamour" moveName="Use Power" :outcomes="usePowerOutcomes" /></p>
              
              <p class="q-mt-sm">On a <strong>strong hit</strong>, {{ usePowerOutcomes.strongHit.text }}</p>
              <p>On a <strong>weak hit</strong>, {{ usePowerOutcomes.weakHit.text }}</p>
              <p>On a <strong>miss</strong>, {{ usePowerOutcomes.miss.text }}</p>
            </q-card-section>
          </q-card>

          <!-- Perform Ritual -->
          <q-card flat bordered class="q-mb-md">
            <q-card-section>
              <div class="text-h6">Perform Ritual</div>
              <p>When you perform a ritual of blood magic, envision what to want to achieve and how you perform it. Then, <StatRoll statName="intellect" moveName="Perform Ritual" :outcomes="performRitualOutcomes" /></p>
              
              <p class="q-mt-sm">On a <strong>strong hit</strong>, {{ performRitualOutcomes.strongHit.text }}</p>
              <p>On a <strong>weak hit</strong>, {{ performRitualOutcomes.weakHit.text }}</p>
              <p>On a <strong>miss</strong>, {{ performRitualOutcomes.miss.text }}</p>
              <ul>
                <li>1-20: The ritual has the opposite effect</li>
                <li>21-40: It attracts mortal attention</li>
                <li>41-60: It affects a different target</li>
                <li>61-80: It has no effect, and you waste or lose resource needed to perform it again</li>
                <li>81-00: It has no effect, and it consumes you: lose 2 point of blood, health or spirit (pick 1)</li>
              </ul>
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <!-- Downtime Moves -->
        <q-expansion-item
          group="moves"
          icon="nightlight"
          label="Downtime Moves"
          default-closed
          header-class="text-primary"
        >
          <!-- Rest -->
          <q-card flat bordered class="q-mb-md">
            <q-card-section>
              <div class="text-h6">Rest</div>
              <p>When you spend the whole daytime in deep sleep in a dark place, 
                <StatRoll 
                  statName="heart" 
                  moveName="Rest" 
                  :outcomes="restOutcomes"
                /> 
                or 
                <StatRoll 
                  statName="intellect" 
                  moveName="Rest" 
                  :outcomes="restOutcomes"
                />, whichever is higher.
              </p>
              
              <p>By default, you need the Lair asset to have access to a secure place to sleep you can call yours. If you don't have it, you must sleep in abandoned places.</p>
              
              <p>On a <strong>strong hit</strong>, you rest well, and get both bonuses below:</p>
              <ul>
                <li>Restore 1 health</li>
                <li>Gain +2 focus</li>
              </ul>
              
              <p>On a <strong>weak hit</strong>, you have a regular day of sleep. Pick one of the bonuses above.</p>
              
              <p>On a <strong>miss</strong>, pick one of the options below. On a match, pick both:</p>
              <ul>
                <li>You get hungrier: lose 1 blood</li>
                <li>You don't sleep well: lose 1 focus</li>
              </ul>
            </q-card-section>
          </q-card>

          <!-- Advance -->
          <q-card flat bordered class="q-mb-md">
            <q-card-section>
              <div class="text-h6">Advance</div>
              <p>When you focus on your skills, receive training, find inspiration or earn a reward, you may spend 3 xp to add a new asset, or 2 xp to upgrade one. The chosen asset must be framed within fiction and make sense in the context.</p>
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <!-- Combat Moves -->
        <q-expansion-item
          group="moves"
          icon="sports_kabaddi"
          label="Combat Moves"
          default-closed
          header-class="text-primary"
        >
          <!-- Enter The Fray -->
          <q-card flat bordered class="q-mb-md">
            <q-card-section>
              <div class="text-h6">Enter The Fray</div>
              <p>When you initiate combat or are forced into a fight, envision your objective and give it a rank. If the combat includes discrete challenges or phases, set an objective with a rank for each. Then, roll to see if you are in control. If you are...</p>
              
              <div class="q-gutter-y-sm">
                <div>Facing off against your foe: <StatRoll 
                  statName="heart"
                  moveName="Enter The Fray"
                  :outcomes="enterTheFrayOutcomes"
                /></div>
                <div>In the thick of it at close quarters: <StatRoll 
                  statName="force"
                  moveName="Enter The Fray"
                  :outcomes="enterTheFrayOutcomes"
                /></div>
                <div>On the move or preparing to act against an unaware foe: <StatRoll 
                  statName="dexterity"
                  moveName="Enter The Fray"
                  :outcomes="enterTheFrayOutcomes"
                /></div>
                <div>Caught in a trap or sizing up the situation: <StatRoll 
                  statName="intellect"
                  moveName="Enter The Fray"
                  :outcomes="enterTheFrayOutcomes"
                /></div>
              </div>

              <p>On a <strong>strong hit</strong>, take 2 focus.</p>
              <p>On a <strong>weak hit</strong>, take 1 focus.</p>
              <p>On a <strong>miss</strong>, the fight begins with you in disadvantage. Lose 1 focus.</p>
            </q-card-section>
          </q-card>

          <!-- Clash -->
          <q-card flat bordered class="q-mb-md">
            <q-card-section>
              <div class="text-h6">Clash</div>
              <p>When you fight against a foe at close quarters, 
                <StatRoll 
                  statName="force" 
                  moveName="Clash"
                  :outcomes="clashOutcomes"
                />; when you exchange fire at a distance, 
                <StatRoll 
                  statName="dexterity"
                  moveName="Clash"
                  :outcomes="clashOutcomes"
                />.
              </p>
              
              <p>On a <strong>strong hit</strong>, mark progress twice. You overwhelm your foe.</p>
              <p>On a <strong>weak hit</strong>, mark progress, but you are dealt a counterblow or setback. Pay the Price.</p>
              <p>On a <strong>miss</strong>, your foe dominates this exchange. Pay the Price.</p>
            </q-card-section>
          </q-card>

          <!-- End The Fight -->
          <q-card flat bordered class="q-mb-md">
            <q-card-section>
              <div class="text-h6">End The Fight</div>
              <p>When you make a move to take decisive action, roll the challenge dice and compare to your progress. Focus is ignored on this roll.</p>
              <StatRoll 
                statName="force" 
                moveName="End The Fight"
                :outcomes="endTheFightOutcomes"
              />
            </q-card-section>
          </q-card>

          <!-- Battle -->
          <q-card flat bordered class="q-mb-md">
            <q-card-section>
              <div class="text-h6">Battle</div>
              <p>When you fight a battle, and it happens in a blur, envision your objective and roll. If you primarily...</p>
              
              <div class="q-gutter-y-sm">
                <div>Fight at range or using your speed or trickery to your advantage: 
                  <StatRoll 
                    statName="dexterity" 
                    moveName="Battle"
                    :outcomes="battleOutcomes"
                  />
                </div>
                <div>Fight depending on your courage, leadership, or companions: 
                  <StatRoll 
                    statName="heart"
                    moveName="Battle"
                    :outcomes="battleOutcomes"
                  />
                </div>
                <div>Fight in close to overpower your foe: 
                  <StatRoll 
                    statName="force"
                    moveName="Battle"
                    :outcomes="battleOutcomes"
                  />
                </div>
                <div>Fight using careful tactics to outsmart your foe: 
                  <StatRoll 
                    statName="intellect"
                    moveName="Battle"
                    :outcomes="battleOutcomes"
                  />
                </div>
              </div>

              <p>On a <strong>strong hit</strong>, you achieve your objective unconditionally. You and any allies who joined the battle may take +2 focus.</p>
              <p>On a <strong>weak hit</strong>, you achieve your objective, but not without cost. Pay the Price.</p>
              <p>On a <strong>miss</strong>, you are defeated or the objective is lost. Pay the Price.</p>
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <!-- Connection Moves -->
        <q-expansion-item
          group="moves"
          icon="people"
          label="Connection Moves"
          default-closed
          header-class="text-primary"
        >
          <!-- Make A Connection -->
          <q-card flat bordered class="q-mb-md">
            <q-card-section>
              <div class="text-h6">Make A Connection</div>
              <p>When you search out a new relationship or give focus to an existing relationship (not an ally or companion), <StatRoll 
                statName="heart" 
                moveName="Make A Connection"
                :outcomes="makeConnectionOutcomes"
              /></p>
              
              <p>On a <strong>strong hit</strong>, {{ makeConnectionOutcomes.strongHit.text }}</p>
              <p>On a <strong>weak hit</strong>, {{ makeConnectionOutcomes.weakHit.text }}</p>
              <p>On a <strong>miss</strong>, {{ makeConnectionOutcomes.miss.text }}</p>
            </q-card-section>
          </q-card>

          <!-- Develop A Relationship -->
          <q-card flat bordered class="q-mb-md">
            <q-card-section>
              <div class="text-h6">Develop A Relationship</div>
              <p>When a relationship with a connection is reinforced by...</p>
              <ul>
                <li>accomplishing a mission that benefits them</li>
                <li>seeking their assistance during dire situations</li>
                <li>presenting them with a valuable gift</li>
                <li>sharing a significant moment</li>
                <li>standing by them in times of hardship</li>
                <li>successfully navigating a test of your relationship</li>
              </ul>
              <p>...mark progress according to the rank of the connection.</p>
            </q-card-section>
          </q-card>

          <!-- Test Your Relationship -->
          <q-card flat bordered class="q-mb-md">
            <q-card-section>
              <div class="text-h6">Test Your Relationship</div>
              <p>When your relationship with a connection is tested through conflict, betrayal, or circumstance, <StatRoll 
                statName="heart" 
                moveName="Test Your Relationship"
                :outcomes="testRelationshipOutcomes"
              />. If you share a bond, add +1.</p>
              
              <p>On a <strong>strong hit</strong>, {{ testRelationshipOutcomes.strongHit.text }}</p>
              <p>On a <strong>weak hit</strong>, {{ testRelationshipOutcomes.weakHit.text }}</p>
              <p>On a <strong>miss</strong>, {{ testRelationshipOutcomes.miss.text }}</p>
            </q-card-section>
          </q-card>

          <!-- Form A Bond -->
          <q-card flat bordered class="q-mb-md">
            <q-card-section>
              <div class="text-h6">Form A Bond</div>
              <p>When your connection with someone is ready to evolve, <StatRoll 
                statName="heart" 
                moveName="Form A Bond"
                :outcomes="formBondOutcomes"
              /></p>
              
              <p>On a <strong>strong hit</strong>, {{ formBondOutcomes.strongHit.text }}</p>
              <p>On a <strong>weak hit</strong>, {{ formBondOutcomes.weakHit.text }}</p>
              <p>On a <strong>miss</strong>, {{ formBondOutcomes.miss.text }}</p>
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <!-- Suffer Moves -->
        <q-expansion-item
          group="moves"
          icon="warning"
          label="Suffer Moves"
          default-closed
          header-class="text-primary"
        >
          <!-- Pay The Price -->
          <q-card flat bordered class="q-mb-md">
            <q-card-section>
              <div class="text-h6">Pay The Price</div>
              <p>When you suffer the outcome of an action, choose one:</p>
              <ul>
                <li>Make the most obvious negative outcome happen</li>
                <li>Ask the oracle for inspiration</li>
                <li>Roll on the list below. If the result doesn't fit the situation, roll again:</li>
              </ul>
              
              <div class="text-caption q-gutter-y-sm">
                <p>1–2: A trusted individual or community acts against you</p>
                <p>3–4: An individual or community you care about is exposed to danger</p>
                <p>5–7: You encounter signs of a looming threat</p>
                <p>8–10: You create an opportunity for an enemy</p>
                <p>11–14: You face a tough choice</p>
                <p>15–18: You face the consequences of an earlier choice</p>
                <p>19–22: A surprising development complicates your quest</p>
                <p>23–26: You are separated from something or someone</p>
                <p>27–32: Your action causes collateral damage or has an unintended effect</p>
                <p>33–38: Something of value is lost or destroyed</p>
                <p>39–44: The ambient introduces a new hazard</p>
                <p>45–50: A new enemy is revealed</p>
                <p>51–56: A friend or ally is in harm's way (or you are, if alone)</p>
                <p>57–62: Your supernatural abilities malfunction</p>
                <p>63–68: An asset is compromised</p>
                <p>69–74: You waste blood</p>
                <p>75–81: You are harmed</p>
                <p>82–88: You are stressed</p>
                <p>89–95: You are delayed or put at a disadvantage</p>
                <p>96–100: Roll twice</p>
              </div>

              <div class="q-mt-md">
                <q-btn
                  color="primary"
                  label="Roll on the table"
                  @click="payThePrice"
                />
              </div>
            </q-card-section>
          </q-card>

          <!-- Face A Setback -->
          <q-card flat bordered class="q-mb-md">
            <q-card-section>
              <div class="text-h6">Face A Setback</div>
              <p>When your focus is at its minimum (-6), and you suffer additional -focus, choose one:</p>
              <ul>
                <li>Exchange each additional -focus for any combination of -health, -spirit, or -blood as appropriate to the circumstances.</li>
                <li>Envision an event or discovery which undermines your progress in a current quest, journey, or fight. Then, for each additional -focus, clear 1 unit of progress on that track per its rank (troublesome=clear 3 progress; dangerous=clear 2 progress; formidable=clear 1 progress; extreme=clear 2 ticks; epic=clear 1 tick).</li>
              </ul>
            </q-card-section>
          </q-card>

          <!-- Endure Harm -->
          <q-card flat bordered class="q-mb-md">
            <q-card-section>
              <div class="text-h6">Endure Harm</div>
              <p>When you face physical damage, suffer -health equal to your foe's rank or as appropriate to the situation. If your health is 0, suffer -focus equal to any remaining -health. Then, <StatRoll statName="force" moveName="Endure Harm" :outcomes="endureHarmOutcomes" /></p>
              
              <p class="q-mt-sm">On a <strong>strong hit</strong>, {{ endureHarmOutcomes.strongHit.text }}</p>
              <p>On a <strong>weak hit</strong>, {{ endureHarmOutcomes.weakHit.text }}</p>
              <p>On a <strong>miss</strong>, {{ endureHarmOutcomes.miss.text }}</p>
            </q-card-section>
          </q-card>

          <!-- Face Last Death -->
          <q-card flat bordered class="q-mb-md">
            <q-card-section>
              <div class="text-h6">Face Last Death</div>
              <p>When you are brought to the brink of your annihilation, and glimpse the world beyond, <StatRoll statName="heart" moveName="Face Last Death" :outcomes="faceLastDeathOutcomes" /></p>
              
              <p class="q-mt-sm">On a <strong>strong hit</strong>, {{ faceLastDeathOutcomes.strongHit.text }}</p>
              <p>On a <strong>weak hit</strong>, {{ faceLastDeathOutcomes.weakHit.text }}</p>
              <p>On a <strong>miss</strong>, {{ faceLastDeathOutcomes.miss.text }}</p>
            </q-card-section>
          </q-card>

          <!-- Endure Hunger -->
          <q-card flat bordered class="q-mb-md">
            <q-card-section>
              <div class="text-h6">Endure Hunger</div>
              <p>When you use supernatural powers or spend blood as a result of the Pay the Price move, suffer -blood as appropriate to the situation. If your blood is 0, suffer -focus equal to any remaining -focus. Then, <StatRoll 
                statName="intellect" 
                moveName="Endure Hunger"
                :outcomes="endureHungerOutcomes"
              /></p>
              
              <p>On a <strong>strong hit</strong>, choose one:</p>
              <ul>
                <li>Shake it off: If your blood is greater than 0, suffer -1 focus in exchange for +1 blood</li>
                <li>Embrace the monster within: Take +1 focus</li>
              </ul>
              
              <p>On a <strong>weak hit</strong>, you press on.</p>
              <p>On a <strong>miss</strong>, also suffer -1 focus. If you are at 0 blood, you must mark starving or sinner (if currently unmarked) or roll on the following table:</p>
              
              <div class="text-caption q-gutter-y-sm">
                <p>1-10: Your hunger consumes you. Face Starvation.</p>
                <p>11-25: You are on the brink of starvation. You need to Feed within an hour or two, or Face Last Death.</p>
                <p>26-50: You are unconscious and out of action. If left alone, you come back to your senses in an hour or two. If you are vulnerable to a foe not inclined to show mercy, Face Last Death.</p>
                <p>51-00: You persevere.</p>
              </div>
            </q-card-section>
          </q-card>

          <!-- Face Starvation -->
          <q-card flat bordered class="q-mb-md">
            <q-card-section>
              <div class="text-h6">Face Starvation</div>
              <p>When you are brought to the brink of starvation, <StatRoll 
                statName="intellect"
                moveName="Face Starvation"
                :outcomes="faceStarvationOutcomes"
              /></p>
              
              <p>On a <strong>strong hit</strong>, you resist and press on.</p>
              <p>On a <strong>weak hit</strong>, pick one:</p>
              <ul>
                <li>Your humanity is devoured, but not before remembering a moment of your mortal life. Envision what flashes behind your eyes.</li>
                <li>You get so frenzied, you commit something that angers your ruler. Envision what it is. She'll ask something in return of letting you live. When she does, envision the frightening encounter and Sing an Elegy to her (formidable or extreme).</li>
              </ul>
              <p>On a <strong>miss</strong>, your hunger destroys your humanity and you are forever a mindless beast.</p>
            </q-card-section>
          </q-card>

          <!-- Endure Stress -->
          <q-card flat bordered class="q-mb-md">
            <q-card-section>
              <div class="text-h6">Endure Stress</div>
              <p>When you face mental shock or despair, suffer -spirit equal to your foe's rank or as appropriate to the situation. If your spirit is 0, suffer -focus equal to any remaining -spirit. Then, <StatRoll 
                statName="heart"
                moveName="Endure Stress"
                :outcomes="endureStressOutcomes"
              /></p>
              
              <p>On a <strong>strong hit</strong>, choose one:</p>
              <ul>
                <li>Shake it off: If your spirit is greater than 0, suffer -1 focus in exchange for +1 spirit</li>
                <li>Embrace the darkness: Take +1 focus</li>
              </ul>
              
              <p>On a <strong>weak hit</strong>, you press on.</p>
              <p>On a <strong>miss</strong>, also suffer -1 focus. If you are at 0 spirit, you must mark shaken or corrupted (if currently unmarked) or roll on the following table:</p>
              
              <div class="text-caption q-gutter-y-sm">
                <p>1-10: You are overwhelmed. Face Desolation.</p>
                <p>11-25: You give up. Forsake Your Elegy (if possible, one relevant to your current crisis).</p>
                <p>26-50: You are unconscious and out of action. If left alone, you come back to your senses in an hour or two. If you are vulnerable to a foe not inclined to show mercy, Face Last Death.</p>
                <p>51-00: You persevere.</p>
              </div>
            </q-card-section>
          </q-card>

          <!-- Face Desolation -->
          <q-card flat bordered class="q-mb-md">
            <q-card-section>
              <div class="text-h6">Face Desolation</div>
              <p>When you are brought to the brink of desolation, <StatRoll 
                statName="heart"
                moveName="Face Desolation"
                :outcomes="faceDesolationOutcomes"
              /></p>
              
              <p>On a <strong>strong hit</strong>, you resist and press on.</p>
              <p>On a <strong>weak hit</strong>, choose one:</p>
              <ul>
                <li>Your spirit or sanity breaks, but not before you make a noble sacrifice. Envision your final moments.</li>
                <li>You see a vision of a dreaded event coming to pass. Envision that dark future, and Sing an Elegy (formidable or extreme) to prevent it. If you fail to score a hit when you Sing an Elegy, or refuse the quest, you are lost. Otherwise, you return to your senses and are now tormented. You may only clear the tormented debility by completing the quest.</li>
              </ul>
              <p>On a <strong>miss</strong>, you succumb to despair or horror and are lost.</p>
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import StatRoll from './StatRoll.vue'
import type { MoveOutcomes } from '@/types/moves'
import type { Character } from '@/types/character'
import { usePayThePrice } from '@/composables/usePayThePrice'

const { payThePrice } = usePayThePrice()

const isOpen = ref(false)

// Move Outcomes
const enterTheFrayOutcomes: MoveOutcomes = {
  strongHit: {
    text: 'Take 2 focus.',
    actions: [{
      label: 'Take +2 Focus',
      execute: (character: Character) => character.focus = Math.min(10, character.focus + 2)
    }]
  },
  weakHit: {
    text: 'Take 1 focus.',
    actions: [{
      label: 'Take +1 Focus',
      execute: (character: Character) => character.focus = Math.min(10, character.focus + 1)
    }]
  },
  miss: {
    text: 'The fight begins with you in disadvantage. Lose 1 focus.',
    actions: [{
      label: 'Lose 1 Focus',
      execute: (character: Character) => character.focus = Math.max(-6, character.focus - 1)
    }]
  }
}

const clashOutcomes: MoveOutcomes = {
  strongHit: {
    text: 'Mark progress twice. You overwhelm your foe.',
    actions: [{
      label: 'Mark Progress (×2)',
      execute: (character: Character) => {
        // TODO: Implement progress marking
        console.log('Mark progress twice')
      }
    }]
  },
  weakHit: {
    text: 'Mark progress, but you are dealt a counterblow or setback. Pay the Price.',
    actions: [
      {
        label: 'Mark Progress',
        execute: (character: Character) => {
          // TODO: Implement progress marking
          console.log('Mark progress once')
        }
      },
      {
        label: 'Pay the Price',
        execute: (character: Character) => payThePrice()
      }
    ]
  },
  miss: {
    text: 'Your foe dominates this exchange. Pay the Price.',
    actions: [{
      label: 'Pay the Price',
      execute: (character: Character) => payThePrice()
    }]
  }
}

const faceDangerOutcomes: MoveOutcomes = {
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
      execute: (character: Character) => payThePrice()
    }]
  },
  miss: {
    text: 'You fail, or a momentary success is undermined by a dire turn of events. Pay the Price.',
    actions: [{
      label: 'Pay the Price',
      execute: (character: Character) => payThePrice()
    }]
  }
}

const secureAdvantageOutcomes: MoveOutcomes = {
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
      execute: (character: Character) => payThePrice()
    }]
  }
}

const gatherInformationOutcomes: MoveOutcomes = {
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
      execute: (character: Character) => payThePrice()
    }]
  }
}

const compelOutcomes: MoveOutcomes = {
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
      execute: (character: Character) => payThePrice()
    }]
  }
}

const usePowerOutcomes: MoveOutcomes = {
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
        execute: (character: Character) => payThePrice()
      }
    ]
  }
}

const performRitualOutcomes: MoveOutcomes = {
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

const restOutcomes: MoveOutcomes = {
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

const battleOutcomes: MoveOutcomes = {
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
      execute: (character: Character) => payThePrice()
    }]
  },
  miss: {
    text: 'You are defeated or the objective is lost. Pay the Price.',
    actions: [{
      label: 'Pay the Price',
      execute: (character: Character) => payThePrice()
    }]
  }
}

const endTheFightOutcomes: MoveOutcomes = {
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
      execute: (character: Character) => payThePrice()
    }]
  }
}

const makeConnectionOutcomes: MoveOutcomes = {
  strongHit: {
    text: 'You create a connection. Give them a role and rank. Whenever your connection aids you on a move closely associated with their role, add +1 and take +1 focus on a hit.',
    actions: [{
      label: 'Take +1 Focus',
      execute: (character: Character) => character.focus = Math.min(10, character.focus + 1)
    }]
  },
  weakHit: {
    text: 'As above, but this connection comes with a complication or cost. Envision what they reveal or demand.',
    actions: [{
      label: 'Take +1 Focus',
      execute: (character: Character) => character.focus = Math.min(10, character.focus + 1)
    }]
  },
  miss: {
    text: "You don't make a connection and the situation worsens. Pay the Price.",
    actions: [{
      label: 'Pay the Price',
      execute: (character: Character) => payThePrice()
    }]
  }
}

const testRelationshipOutcomes: MoveOutcomes = {
  strongHit: {
    text: 'Mark progress.',
    actions: [{
      label: 'Mark Progress',
      execute: (character: Character) => {
        // TODO: Implement progress marking
        console.log('Mark progress')
      }
    }]
  },
  weakHit: {
    text: 'Mark progress, but also envision a demand or complication as a fallout of this test.',
    actions: [{
      label: 'Mark Progress',
      execute: (character: Character) => {
        // TODO: Implement progress marking
        console.log('Mark progress')
      }
    }]
  },
  miss: {
    text: 'Choose one: Lose the connection (envision how this impacts you and Pay the Price) or prove your loyalty (envision what you offer or what they demand, and Sing an Elegy to see it done).',
    actions: []  // Requires player choice
  }
}

const formBondOutcomes: MoveOutcomes = {
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

const endureHarmOutcomes: MoveOutcomes = {
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

const faceLastDeathOutcomes: MoveOutcomes = {
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

const endureHungerOutcomes: MoveOutcomes = {
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

const faceStarvationOutcomes: MoveOutcomes = {
  strongHit: {
    text: "You resist and press on.",
    actions: []
  },
  weakHit: {
    text: "Pick one: Your humanity is devoured, or you commit something that angers your ruler.",
    actions: []  // Narrative choice
  },
  miss: {
    text: "Your hunger destroys your humanity and you are forever a mindless beast.",
    actions: []  // Game over
  }
}

const endureStressOutcomes: MoveOutcomes = {
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

const faceDesolationOutcomes: MoveOutcomes = {
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

defineExpose({
  open: () => isOpen.value = true,
  close: () => isOpen.value = false
})
</script>

<style lang="sass" scoped>
.q-expansion-item__content .q-card
  box-shadow: none
  border-radius: 0
</style> 