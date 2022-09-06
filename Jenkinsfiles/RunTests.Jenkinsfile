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
          env.CYPRESS_VERSION = sh(script: 'cat package.json | jq -r ".dependencies.cypress"', returnStdout: true).trim()
        }
      }
    }
    stage('Pull image') {
      steps {
        script {
          docker.withRegistry(
            'https://registry.hub.docker.com',
            'DOCKER_HUB') {
              def image = docker.image("stanislawrosada/cypressdemo:$CYPRESS_VERSION")
              image.pull()
            }
          sh 'docker tag registry.hub.docker.com/stanislawrosada/cypressdemo:$CYPRESS_VERSION stanislawrosada/cypressdemo:$CYPRESS_VERSION'
        }
      }
    }
    stage('Run parallel') {
      steps {
        script {
          sh './runParallel.sh parallel 2 $CYPRESS_VERSION'
        }
      }
    }
  }
}