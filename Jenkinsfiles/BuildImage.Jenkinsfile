pipeline {
  agent {
    label 'Cypress-Executor'
  }
  stages {
    stage('Checkout') {
      steps {
        script {
          git credentialsId: 'github', url: 'git@github.com:staszke/cypress-testwarez.git'
          sh 'git remote set-url origin https://github.com/staszke/cypress-testwarez.git'
        }
      }
    }
    stage('Build image') {
      steps {
        script {
          dir('parallelization') {
            env.CYPRESS_VERSION = sh(script: 'cat ../package.json | jq -r ".dependencies.cypress"', returnStdout: true).trim()
            sh './build.sh $DASHBOARD_ADDRESS $CYPRESS_VERSION'
          }
        }
      }
    }
    stage('Push image to Docker Hub') {
      steps {
        script {
          dir('parallelization') {
            docker.withRegistry('https://registry.hub.docker.com', 'DOCKER_HUB') {
              def cypressImage = docker.image("stanislawrosada/cypressdemo:$CYPRESS_VERSION")
              cypressImage.push("$CYPRESS_VERSION")
            }
          }
        }
      }
    }
    stage('Remove all images from executor') {
      steps {
        script {
          sh 'docker image prune --all --force'
        }
      }
    }
  }
}