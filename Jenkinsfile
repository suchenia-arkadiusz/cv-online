pipeline {
  agent { label 'with-nvm'}

  stages {
    stage('Install dependencies') {
      steps {
         sh '''
          nvm install
          echo "npm install..."
          npm ci
         '''
      }
    }
    stage('Build application') {
      steps {
        sh '''
          nvm install
          echo "build app..."
          npm run build
        '''
      }
    }
    stage('Test application') {
      steps {
        sh 'echo tests'
      }
    }

  }
}
