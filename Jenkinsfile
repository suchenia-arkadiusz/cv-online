pipeline {
  agent { label 'with-nvm'}

  stages {
    stage('Install dependencies') {
      steps {
         sh '''
          source ~/.nvm/nvm.sh &>/dev/null
          nvm install
          echo "npm install..."
          npm ci
         '''
      }
    }
    stage('Build application') {
      steps {
        sh '''
          source ~/.nvm/nvm.sh &>/dev/null
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
