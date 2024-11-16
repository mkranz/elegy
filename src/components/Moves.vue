<template>

  <div class="q-mb-md">
    <div class="text-h6">Moves</div>
  </div>
  <q-list padding>
    <!-- Adventure Moves -->
    <q-expansion-item group="moves" icon="casino" label="Adventure Moves" default-closed elevated
      header-class="text-primary">
      <!-- Face Danger -->
      <q-card flat bordered class="q-mb-md">
        <q-card-section>
          <div class="text-h6">{{ moves.faceDanger.name }}</div>
          <p>{{ moves.faceDanger.description }}</p>

          <div class="q-gutter-y-sm">
            <div>With stealth, speed, or coordination:
              <StatRoll statName="dexterity" :move="moves.faceDanger" />
            </div>
            <div>With courage, willpower, or empathy:
              <StatRoll statName="heart" :move="moves.faceDanger" />
            </div>
            <div>With aggression, strength, or toughness:
              <StatRoll statName="force" :move="moves.faceDanger" />
            </div>
            <div>With charm, composure, or manipulation:
              <StatRoll statName="glamour" :move="moves.faceDanger" />
            </div>
            <div>With expertise, focus, or observation:
              <StatRoll statName="intellect" :move="moves.faceDanger" />
            </div>
          </div>

          <p class="q-mt-sm">On a <strong>strong hit</strong>, {{ moves.faceDanger.outcomes.strongHit.text }}</p>
          <p>On a <strong>weak hit</strong>, {{ moves.faceDanger.outcomes.weakHit.text }}</p>
          <p>On a <strong>miss</strong>, {{ moves.faceDanger.outcomes.miss.text }}</p>
        </q-card-section>
      </q-card>

      <!-- Secure an Advantage -->
      <q-card flat bordered class="q-mb-md">
        <q-card-section>
          <div class="text-h6">{{ moves.secureAdvantage.name }}</div>
          <p>{{ moves.secureAdvantage.description }}</p>

          <div class="q-gutter-y-sm">
            <div>With stealth, speed, or coordination:
              <StatRoll statName="dexterity" :move="moves.secureAdvantage" />
            </div>
            <div>With courage, willpower, or empathy:
              <StatRoll statName="heart" :move="moves.secureAdvantage" />
            </div>
            <div>With aggression, strength, or toughness:
              <StatRoll statName="force" :move="moves.secureAdvantage" />
            </div>
            <div>With charm, composure, or manipulation:
              <StatRoll statName="glamour" :move="moves.secureAdvantage" />
            </div>
            <div>With expertise, focus, or observation:
              <StatRoll statName="intellect" :move="moves.secureAdvantage" />
            </div>
          </div>

          <p class="q-mt-sm">On a <strong>strong hit</strong>, {{ moves.secureAdvantage.outcomes.strongHit.text }}</p>
          <p>On a <strong>weak hit</strong>, {{ moves.secureAdvantage.outcomes.weakHit.text }}</p>
          <p>On a <strong>miss</strong>, {{ moves.secureAdvantage.outcomes.miss.text }}</p>
        </q-card-section>
      </q-card>

      <!-- Gather Information -->
      <q-card flat bordered class="q-mb-md">
        <q-card-section>
          <div class="text-h6">{{ moves.gatherInformation.name }}</div>
          <p>{{ moves.gatherInformation.description }},
            <StatRoll statName="intellect" :move="moves.gatherInformation" />
          </p>

          <p>On a <strong>strong hit</strong>, {{ moves.gatherInformation.outcomes.strongHit.text }}</p>
          <p>On a <strong>weak hit</strong>, {{ moves.gatherInformation.outcomes.weakHit.text }}</p>
          <p>On a <strong>miss</strong>, {{ moves.gatherInformation.outcomes.miss.text }}</p>
        </q-card-section>
      </q-card>

      <!-- Aid Your Ally -->
      <q-card flat bordered class="q-mb-md">
        <q-card-section>
          <div class="text-h6">{{ moves.aidYourAlly.name }}</div>
          <p>{{ moves.aidYourAlly.description }}</p>
        </q-card-section>
      </q-card>

      <!-- Compel -->
      <q-card flat bordered class="q-mb-md">
        <q-card-section>
          <div class="text-h6">{{ moves.compel.name }}</div>
          <p>{{ moves.compel.description }}</p>

          <div class="q-gutter-y-sm">
            <div>Charm or lie:
              <StatRoll statName="glamour" :move="moves.compel" />
            </div>
            <div>Threaten or incite:
              <StatRoll statName="force" :move="moves.compel" />
            </div>
            <div>Pacify or encourage:
              <StatRoll statName="heart" :move="moves.compel" />
            </div>
          </div>

          <p class="q-mt-sm">On a <strong>strong hit</strong>, {{ moves.compel.outcomes.strongHit.text }}</p>
          <p>On a <strong>weak hit</strong>, {{ moves.compel.outcomes.weakHit.text }}</p>
          <p>On a <strong>miss</strong>, {{ moves.compel.outcomes.miss.text }}</p>
        </q-card-section>
      </q-card>
    </q-expansion-item>

    <!-- Power Moves -->
    <q-expansion-item group="moves" icon="auto_fix_high" label="Power Moves" default-closed header-class="text-primary">
      <!-- Use Power -->
      <q-card flat bordered class="q-mb-md">
        <q-card-section>
          <div class="text-h6">{{ moves.usePower.name }}</div>
          <p>{{ moves.usePower.description }},
            <StatRoll statName="glamour" :move="moves.usePower" />
          </p>

          <p class="q-mt-sm">On a <strong>strong hit</strong>, {{ moves.usePower.outcomes.strongHit.text }}</p>
          <p>On a <strong>weak hit</strong>, {{ moves.usePower.outcomes.weakHit.text }}</p>
          <p>On a <strong>miss</strong>, {{ moves.usePower.outcomes.miss.text }}</p>
        </q-card-section>
      </q-card>

      <!-- Perform Ritual -->
      <q-card flat bordered class="q-mb-md">
        <q-card-section>
          <div class="text-h6">{{ moves.performRitual.name }}</div>
          <p>{{ moves.performRitual.description }},
            <StatRoll statName="intellect" :move="moves.performRitual" />
          </p>

          <p class="q-mt-sm">On a <strong>strong hit</strong>, {{ moves.performRitual.outcomes.strongHit.text }}</p>
          <p>On a <strong>weak hit</strong>, {{ moves.performRitual.outcomes.weakHit.text }}</p>
          <p>On a <strong>miss</strong>, {{ moves.performRitual.outcomes.miss.text }}</p>
        </q-card-section>
      </q-card>
    </q-expansion-item>

    <!-- Downtime Moves -->
    <q-expansion-item group="moves" icon="nightlight" label="Downtime Moves" default-closed header-class="text-primary">
      <!-- Rest -->
      <q-card flat bordered class="q-mb-md">
        <q-card-section>
          <div class="text-h6">{{ moves.rest.name }}</div>
          <p>{{ moves.rest.description }},
            <StatRoll statName="heart" :move="moves.rest" />
            or
            <StatRoll statName="intellect" :move="moves.rest" />, whichever is higher.
          </p>

          <p>By default, you need the Lair asset to have access to a secure place to sleep you can call yours. If you
            don't have it, you must sleep in abandoned places.</p>

          <p>On a <strong>strong hit</strong>, {{ moves.rest.outcomes.strongHit.text }}</p>
          <p>On a <strong>weak hit</strong>, {{ moves.rest.outcomes.weakHit.text }}</p>
          <p>On a <strong>miss</strong>, {{ moves.rest.outcomes.miss.text }}</p>
        </q-card-section>
      </q-card>

      <!-- Advance -->
      <q-card flat bordered class="q-mb-md">
        <q-card-section>
          <div class="text-h6">Advance</div>
          <p>When you focus on your skills, receive training, find inspiration or earn a reward, you may spend 3 xp to
            add a new asset, or 2 xp to upgrade one. The chosen asset must be framed within fiction and make sense in
            the context.</p>
        </q-card-section>
      </q-card>
    </q-expansion-item>

    <!-- Combat Moves -->
    <q-expansion-item group="moves" icon="sports_kabaddi" label="Combat Moves" default-closed
      header-class="text-primary">
      <!-- Enter The Fray -->
      <q-card flat bordered class="q-mb-md">
        <q-card-section>
          <div class="text-h6">Enter The Fray</div>
          <p>When you initiate combat or are forced into a fight, envision your objective and give it a rank. If the
            combat includes discrete challenges or phases, set an objective with a rank for each. Then, roll to see if
            you are in control. If you are...</p>

          <div class="q-gutter-y-sm">
            <div>Facing off against your foe:
              <StatRoll statName="heart" :move="moves.enterTheFray" />
            </div>
            <div>In the thick of it at close quarters:
              <StatRoll statName="force" :move="moves.enterTheFray" />
            </div>
            <div>On the move or preparing to act against an unaware foe:
              <StatRoll statName="dexterity" :move="moves.enterTheFray" />
            </div>
            <div>Caught in a trap or sizing up the situation:
              <StatRoll statName="intellect" :move="moves.enterTheFray" />
            </div>
          </div>

          <p>On a <strong>strong hit</strong>, take 2 focus.</p>
          <p>On a <strong>weak hit</strong>, take 1 focus.</p>
          <p>On a <strong>miss</strong>, the fight begins with you in disadvantage. Lose 1 focus.</p>
        </q-card-section>
      </q-card>

      <!-- Clash -->
      <q-card flat bordered class="q-mb-md">
        <q-card-section>
          <div class="text-h6">{{ moves.clash.name }}</div>
          <p>{{ moves.clash.description }},
            <StatRoll statName="force" :move="moves.clash" />; when you exchange fire at a
            distance,
            <StatRoll statName="dexterity" :move="moves.clash" />.
          </p>

          <p class="q-mt-sm">On a <strong>strong hit</strong>, {{ moves.clash.outcomes.strongHit.text }}</p>
          <p>On a <strong>weak hit</strong>, {{ moves.clash.outcomes.weakHit.text }}</p>
          <p>On a <strong>miss</strong>, {{ moves.clash.outcomes.miss.text }}</p>
        </q-card-section>
      </q-card>

      <!-- Battle -->
      <q-card flat bordered class="q-mb-md">
        <q-card-section>
          <div class="text-h6">{{ moves.battle.name }}</div>
          <p>{{ moves.battle.description }}</p>

          <div class="q-gutter-y-sm">
            <div>Fight at range or using your speed or trickery to your advantage:
              <StatRoll statName="dexterity" :move="moves.battle" />
            </div>
            <div>Fight depending on your courage, leadership, or companions:
              <StatRoll statName="heart" :move="moves.battle" />
            </div>
            <div>Fight in close to overpower your foe:
              <StatRoll statName="force" :move="moves.battle" />
            </div>
            <div>Fight using careful tactics to outsmart your foe:
              <StatRoll statName="intellect" :move="moves.battle" />
            </div>
          </div>

          <p class="q-mt-sm">On a <strong>strong hit</strong>, {{ moves.battle.outcomes.strongHit.text }}</p>
          <p>On a <strong>weak hit</strong>, {{ moves.battle.outcomes.weakHit.text }}</p>
          <p>On a <strong>miss</strong>, {{ moves.battle.outcomes.miss.text }}</p>
        </q-card-section>
      </q-card>

      <!-- End The Fight -->
      <q-card flat bordered class="q-mb-md">
        <q-card-section>
          <div class="text-h6">{{ moves.endTheFight.name }}</div>
          <p>{{ moves.endTheFight.description }}</p>
          <StatRoll statName="force" :move="moves.endTheFight" />

          <p class="q-mt-sm">On a <strong>strong hit</strong>, {{ moves.endTheFight.outcomes.strongHit.text }}</p>
          <p>On a <strong>weak hit</strong>, {{ moves.endTheFight.outcomes.weakHit.text }}</p>
          <p>On a <strong>miss</strong>, {{ moves.endTheFight.outcomes.miss.text }}</p>
        </q-card-section>
      </q-card>

      <!-- Make A Connection -->
      <q-card flat bordered class="q-mb-md">
        <q-card-section>
          <div class="text-h6">{{ moves.makeConnection.name }}</div>
          <p>{{ moves.makeConnection.description }},
            <StatRoll statName="heart" :move="moves.makeConnection" />
          </p>

          <p class="q-mt-sm">On a <strong>strong hit</strong>, {{ moves.makeConnection.outcomes.strongHit.text }}</p>
          <p>On a <strong>weak hit</strong>, {{ moves.makeConnection.outcomes.weakHit.text }}</p>
          <p>On a <strong>miss</strong>, {{ moves.makeConnection.outcomes.miss.text }}</p>
        </q-card-section>
      </q-card>

      <!-- Test Your Relationship -->
      <q-card flat bordered class="q-mb-md">
        <q-card-section>
          <div class="text-h6">{{ moves.testRelationship.name }}</div>
          <p>{{ moves.testRelationship.description }},
            <StatRoll statName="heart" :move="moves.testRelationship" />
          </p>

          <p class="q-mt-sm">On a <strong>strong hit</strong>, {{ moves.testRelationship.outcomes.strongHit.text }}</p>
          <p>On a <strong>weak hit</strong>, {{ moves.testRelationship.outcomes.weakHit.text }}</p>
          <p>On a <strong>miss</strong>, {{ moves.testRelationship.outcomes.miss.text }}</p>
        </q-card-section>
      </q-card>
    </q-expansion-item>

    <!-- Quest Moves -->
    <q-expansion-item group="moves" icon="book" label="Quest Moves" default-closed header-class="text-primary">
      <!-- Sing An Elegy -->
      <q-card flat bordered class="q-mb-md">
        <q-card-section>
          <div class="text-h6">{{ moves.singElegy.name }}</div>
          <p>{{ moves.singElegy.description }},
            <StatRoll statName="heart" :move="moves.singElegy" />. If you make this promise to a connection, add +1; if you share a bond, add +2.
          </p>

          <p class="q-mt-sm">On a <strong>strong hit</strong>, {{ moves.singElegy.outcomes.strongHit.text }}</p>
          <p>On a <strong>weak hit</strong>, {{ moves.singElegy.outcomes.weakHit.text }}</p>
          <p>On a <strong>miss</strong>, {{ moves.singElegy.outcomes.miss.text }}</p>
        </q-card-section>
      </q-card>

      <!-- Reach A Milestone -->
      <q-card flat bordered class="q-mb-md">
        <q-card-section>
          <div class="text-h6">{{ moves.reachMilestone.name }}</div>
          <p>When you make significant progress in your quest by overcoming a critical obstacle, solving a complex mystery, defeating a powerful threat, gaining vital support, or acquiring a crucial item, you may mark progress:</p>
          <ul>
            <li>Troublesome quest: Mark 3 boxes</li>
            <li>Dangerous quest: Mark 2 boxes</li>
            <li>Formidable quest: Mark 1 box</li>
            <li>Extreme quest: Mark 2 ticks</li>
            <li>Epic quest: Mark 1 tick</li>
          </ul>
        </q-card-section>
      </q-card>

      <!-- Fulfill Your Elegy -->
      <q-card flat bordered class="q-mb-md">
        <q-card-section>
          <div class="text-h6">{{ moves.fulfillElegy.name }}</div>
          <p>{{ moves.fulfillElegy.description }}</p>

          <p class="q-mt-sm">On a <strong>strong hit</strong>, {{ moves.fulfillElegy.outcomes.strongHit.text }}</p>
          <p>On a <strong>weak hit</strong>, {{ moves.fulfillElegy.outcomes.weakHit.text }}</p>
          <p>On a <strong>miss</strong>, {{ moves.fulfillElegy.outcomes.miss.text }}</p>
        </q-card-section>
      </q-card>

      <!-- Forsake Your Elegy -->
      <q-card flat bordered class="q-mb-md">
        <q-card-section>
          <div class="text-h6">{{ moves.forsakeElegy.name }}</div>
          <p>When you renounce your quest, betray your promise, or the goal is lost to you, clear the elegy. Then, envision the impact of this failure and pick one or more as appropriate to the nature of the elegy:</p>
          <ul>
            <li>You are demoralized or dispirited: Lose spirit according to the situation</li>
            <li>A connection loses faith: Test Your Relationship when you next interact</li>
            <li>Your supernatural abilities weaken drastically: Discard a power asset</li>
            <li>You must abandon a path or resource: Discard an asset (not a power or nature one)</li>
            <li>Someone else pays a price: Envision how a person, being, or community bears the cost of the failure</li>
            <li>Someone else takes advantage: Envision how an enemy gains power</li>
            <li>Your reputation suffers: Envision how this failure marks you</li>
          </ul>
        </q-card-section>
      </q-card>
    </q-expansion-item>

    <!-- Connection Moves -->
    <q-expansion-item group="moves" icon="people" label="Connection Moves" default-closed header-class="text-primary">
      <!-- Make A Connection -->
      <q-card flat bordered class="q-mb-md">
        <q-card-section>
          <div class="text-h6">{{ moves.makeConnection.name }}</div>
          <p>{{ moves.makeConnection.description }},
            <StatRoll statName="heart" :move="moves.makeConnection" />
          </p>

          <p>On a <strong>strong hit</strong>, {{ moves.makeConnection.outcomes.strongHit.text }}</p>
          <p>On a <strong>weak hit</strong>, {{ moves.makeConnection.outcomes.weakHit.text }}</p>
          <p>On a <strong>miss</strong>, {{ moves.makeConnection.outcomes.miss.text }}</p>
        </q-card-section>
      </q-card>

      <!-- Develop A Relationship -->
      <q-card flat bordered class="q-mb-md">
        <q-card-section>
          <div class="text-h6">{{ moves.developRelationship.name }}</div>
          <p>{{ moves.developRelationship.description }}</p>
        </q-card-section>
      </q-card>

      <!-- Test Your Relationship -->
      <q-card flat bordered class="q-mb-md">
        <q-card-section>
          <div class="text-h6">{{ moves.testRelationship.name }}</div>
          <p>{{ moves.testRelationship.description }},
            <StatRoll statName="heart" :move="moves.testRelationship" />. If you
            share a bond, add +1.
          </p>

          <p>On a <strong>strong hit</strong>, {{ moves.testRelationship.outcomes.strongHit.text }}</p>
          <p>On a <strong>weak hit</strong>, {{ moves.testRelationship.outcomes.weakHit.text }}</p>
          <p>On a <strong>miss</strong>, {{ moves.testRelationship.outcomes.miss.text }}</p>
        </q-card-section>
      </q-card>

      <!-- Form A Bond -->
      <q-card flat bordered class="q-mb-md">
        <q-card-section>
          <div class="text-h6">{{ moves.formBond.name }}</div>
          <p>{{ moves.formBond.description }},
            <StatRoll statName="heart" :move="moves.formBond" />
          </p>

          <p class="q-mt-sm">On a <strong>strong hit</strong>, {{ moves.formBond.outcomes.strongHit.text }}</p>
          <p>On a <strong>weak hit</strong>, {{ moves.formBond.outcomes.weakHit.text }}</p>
          <p>On a <strong>miss</strong>, {{ moves.formBond.outcomes.miss.text }}</p>
        </q-card-section>
      </q-card>
    </q-expansion-item>

    <!-- Suffer Moves -->
    <q-expansion-item group="moves" icon="warning" label="Suffer Moves" default-closed header-class="text-primary">
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
            <q-btn color="primary" label="Roll on the table" @click="payThePrice" />
          </div>
        </q-card-section>
      </q-card>

      <!-- Face A Setback -->
      <q-card flat bordered class="q-mb-md">
        <q-card-section>
          <div class="text-h6">{{ moves.faceSetback.name }}</div>
          <p>{{ moves.faceSetback.description }}</p>
        </q-card-section>
      </q-card>

      <!-- Endure Harm -->
      <q-card flat bordered class="q-mb-md">
        <q-card-section>
          <div class="text-h6">{{ moves.endureHarm.name }}</div>
          <p>{{ moves.endureHarm.description }},
            <StatRoll statName="force" :move="moves.endureHarm" />
          </p>

          <p class="q-mt-sm">On a <strong>strong hit</strong>, {{ moves.endureHarm.outcomes.strongHit.text }}</p>
          <p>On a <strong>weak hit</strong>, {{ moves.endureHarm.outcomes.weakHit.text }}</p>
          <p>On a <strong>miss</strong>, {{ moves.endureHarm.outcomes.miss.text }}</p>
        </q-card-section>
      </q-card>

      <!-- Face Last Death -->
      <q-card flat bordered class="q-mb-md">
        <q-card-section>
          <div class="text-h6">{{ moves.faceLastDeath.name }}</div>
          <p>{{ moves.faceLastDeath.description }},
            <StatRoll statName="heart" :move="moves.faceLastDeath" />
          </p>

          <p class="q-mt-sm">On a <strong>strong hit</strong>, {{ moves.faceLastDeath.outcomes.strongHit.text }}</p>
          <p>On a <strong>weak hit</strong>, {{ moves.faceLastDeath.outcomes.weakHit.text }}</p>
          <p>On a <strong>miss</strong>, {{ moves.faceLastDeath.outcomes.miss.text }}</p>
        </q-card-section>
      </q-card>

      <!-- Endure Hunger -->
      <q-card flat bordered class="q-mb-md">
        <q-card-section>
          <div class="text-h6">{{ moves.endureHunger.name }}</div>
          <p>{{ moves.endureHunger.description }},
            <StatRoll statName="intellect" :move="moves.endureHunger" />
          </p>

          <p class="q-mt-sm">On a <strong>strong hit</strong>, {{ moves.endureHunger.outcomes.strongHit.text }}</p>
          <p>On a <strong>weak hit</strong>, {{ moves.endureHunger.outcomes.weakHit.text }}</p>
          <p>On a <strong>miss</strong>, {{ moves.endureHunger.outcomes.miss.text }}</p>
        </q-card-section>
      </q-card>

      <!-- Face Starvation -->
      <q-card flat bordered class="q-mb-md">
        <q-card-section>
          <div class="text-h6">{{ moves.faceStarvation.name }}</div>
          <p>{{ moves.faceStarvation.description }},
            <StatRoll statName="intellect" :move="moves.faceStarvation" />
          </p>

          <p class="q-mt-sm">On a <strong>strong hit</strong>, {{ moves.faceStarvation.outcomes.strongHit.text }}</p>
          <p>On a <strong>weak hit</strong>, {{ moves.faceStarvation.outcomes.weakHit.text }}</p>
          <p>On a <strong>miss</strong>, {{ moves.faceStarvation.outcomes.miss.text }}</p>
        </q-card-section>
      </q-card>

      <!-- Endure Stress -->
      <q-card flat bordered class="q-mb-md">
        <q-card-section>
          <div class="text-h6">{{ moves.endureStress.name }}</div>
          <p>{{ moves.endureStress.description }},
            <StatRoll statName="heart" :move="moves.endureStress" />
          </p>

          <p class="q-mt-sm">On a <strong>strong hit</strong>, {{ moves.endureStress.outcomes.strongHit.text }}</p>
          <p>On a <strong>weak hit</strong>, {{ moves.endureStress.outcomes.weakHit.text }}</p>
          <p>On a <strong>miss</strong>, {{ moves.endureStress.outcomes.miss.text }}</p>
        </q-card-section>
      </q-card>

      <!-- Face Desolation -->
      <q-card flat bordered class="q-mb-md">
        <q-card-section>
          <div class="text-h6">{{ moves.faceDesolation.name }}</div>
          <p>{{ moves.faceDesolation.description }},
            <StatRoll statName="heart" :move="moves.faceDesolation" />
          </p>

          <p class="q-mt-sm">On a <strong>strong hit</strong>, {{ moves.faceDesolation.outcomes.strongHit.text }}</p>
          <p>On a <strong>weak hit</strong>, {{ moves.faceDesolation.outcomes.weakHit.text }}</p>
          <p>On a <strong>miss</strong>, {{ moves.faceDesolation.outcomes.miss.text }}</p>
        </q-card-section>
      </q-card>

      <!-- Advance -->
      <q-card flat bordered class="q-mb-md">
        <q-card-section>
          <div class="text-h6">{{ moves.advance.name }}</div>
          <p>{{ moves.advance.description }}</p>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </q-list>
</template>

<script setup lang="ts">
import StatRoll from './StatRoll.vue'
import { useMoves } from '@/composables/useMoves'
import { usePayThePrice } from '@/composables/usePayThePrice'

const { moves } = useMoves()
const { payThePrice } = usePayThePrice()

</script>

<style lang="sass" scoped>
.q-expansion-item__content .q-card
  box-shadow: none
  border-radius: 0
</style>