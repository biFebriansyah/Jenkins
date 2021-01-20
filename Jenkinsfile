pipeline {

    agent any

    parameters {
        string(name: 'DOCKERHUB', defaultValue: 'hallo params', description: 'blablabla')
        booleanParam(name: 'RUNTEST', defaultValue: 'false', description: 'blablabla')
        choice(name: 'DEPLOY', choices: ["Yes", "No"], description: 'blablabla')
    }

    stages {

        stage("Build") {
            steps {
                echo "hallo"
            }
        }

        stage("Testing") {
            when {
                expression {
                    params.RUNTEST
                }
            }
            steps {
                echo "hallo"
            }
        }

        stage("Deploy") {
            when {
                expression {
                    params.DEPLOY == "Yes"
                }
            }
            steps {
                echo "hallo"
            }
        }
    }
}