<template>
  <div class="portfolio">
    <v-container align-content-center class="my-5">
      <h1 class="display-2">Portfolio</h1>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="project in projects" :key="project.name">
          <v-card flat class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-img :src="project.icon" :alt="project.name" height=145 width=225></v-img>
            </v-responsive>

            <v-card-title primary-title>
              <div>
                <div class="headline">{{ project.name }}</div>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-btn :href = "project.repo" target = "_blank" flat>Repo</v-btn>
              <v-btn :href = "project.deployed" target = "_blank" flat color="purple">Deployed</v-btn>
            </v-card-actions>

          </v-card>

          <!-- <v-card flat class="text-xs-center ma-3">
                    <v-responsive class="pt-4">
                        
                            <img :src="project.icon">
                        
                    </v-responsive>
                    <v-card-text>
                        <div class="subheading">{{ project.name }}</div>
                        
                    </v-card-text>
                    <v-card-actions>
                        <v-btn flat color="grey">
                            
                        </v-btn>
                    </v-card-actions>
          </v-card>-->
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
      projects: [
        {
          name: "The Psychic Game",
          repo: "https://github.com/bcoggins78/Psychic-Game",
          deployed: "https://bcoggins78.github.io/Psychic-Game/",
          icon: "images/psychic.jpg"
        },
        {
          name: "Crystal Collector",
          repo: "https://github.com/bcoggins78/Crystal-Collector",
          deployed: "/https://bcoggins78.github.io/Crystal-Collector/",
          icon: "images/crystal.jpg"
        },
        {
          name: "Final Fantasy Trivia",
          repo: "https://github.com/bcoggins78/TriviaGame",
          deployed: "https://bcoggins78.github.io/TriviaGame/",
          icon: "images/triviagame.jpg"
        },
        {
          name: "GifTastic TV",
          repo: "https://github.com/bcoggins78/GifTastic",
          deployed: "https://bcoggins78.github.io/GifTastic/",
          icon: "images/giphy.jpg"
        },
        {
          name: "Train Scheduler",
          repo: "https://github.com/bcoggins78/Train-Scheduler",
          deployed: "https://bcoggins78.github.io/Train-Scheduler/",
          icon: "images/trainsched.jpg"
        },
        {
          name: "LIRI Bot",
          repo: "https://github.com/bcoggins78/liri-node-app",
          deployed: "https://github.com/bcoggins78/liri-node-app",
          icon: "images/liri.jpg"
        },
        {
          name: "Bamazon Store",
          repo: "https://github.com/bcoggins78/bamazon",
          deployed: "https://github.com/bcoggins78/bamazon",
          icon: "images/bamazon.jpg"
        },
        {
          name: "Friend Finder",
          repo: "https://github.com/bcoggins78/Friend-Finder",
          deployed: "https://secure-headland-80910.herokuapp.com/",
          icon: "images/friendfinder.jpg"
        },
        {
          name: "Eat-Da-Burger!",
          repo: "https://github.com/bcoggins78/sequelizedBurger",
          deployed: "https://safe-shelf-43250.herokuapp.com/",
          icon: "images/burger.jpg"
        },
        {
          name: "Date Night",
          repo: "https://github.com/bcoggins78/group-project-1",
          deployed: "https://bcoggins78.github.io/group-project-1/",
          icon: "images/datenight.jpg"
        },
        {
          name: "PlayDate",
          repo: "https://github.com/bcoggins78/project-2",
          deployed: "https://gentle-forest-99048.herokuapp.com/",
          icon: "images/playdate.jpg"
        }
      ]
    };
  }
};
</script>

