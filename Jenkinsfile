def dockerhub = "bukanebi/jenkins"
def image_name = "${dockerhub}:${BRANCH_NAME}"
def builder

pipeline {

    agent any

    stages {

        stage("Install depdencies") {
            steps {
                nodejs("node14") {
                    sh 'yarn install'
                }
            }
        }

        stage("build docker") {
            steps {
                script {
                    builder = docker.build("${dockerhub}:${BRANCH_NAME}")
                }
            }
        }


        stage("Testing Image") {
            steps {
                script {
                    builder.inside {
                        sh 'echo passed'
                    }
                }
            }
        }

        stage("Push Iamge") {
            steps {
                script {
                    builder.push()
                }
            }
        }
    }
}