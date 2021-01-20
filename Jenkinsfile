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


        stage("Deploy") {
            steps {
                script {
                    sshPublisher(
                        publishers: [
                            sshPublisherDesc(
                                configName: 'devserver',
                                verbose: false,
                                transfers: [
                                    sshTransfer(
                                        execCommand : "docker pull ${image_name}; docker kill vuevue; docker run -d --rm --name vuevue -p 8080:80 ${image_name}",
                                        execTimeout: 1200000
                                    )
                                ]
                            )
                        ]
                    )
                }
            }
        }
    }
}